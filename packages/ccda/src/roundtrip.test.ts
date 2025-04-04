import { stringify } from '@medplum/core';
import { Bundle, Resource } from '@medplum/fhirtypes';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { convertCcdaToFhir } from './ccda-to-fhir';
import { convertFhirToCcda } from './fhir-to-ccda';
import { Ccda } from './types';
import { convertCcdaToXml, convertXmlToCcda } from './xml';

const testDataFolder = resolve(__dirname, '../testdata');
const testData = [
  'MinimalPassingValidator',
  'Patient',
  'AllergyToEgg',
  'MedicationAtBedtime',
  'ProblemPneumonia',
  'ImmunizationInfluenza',
  'VitalSignsGrowthCharts',
  'VitalSignsMetricUnits',
  'SmokingStatus',
  'PlanOfTreatmentCarePlan',
  'PlanOfTreatmentCarePlanGoals',
  // 'HealthConcerns',
  'ProcedureSectionActEntry',
  'ProcedureSectionObservationEntry',
  'ProcedureSectionProcedureEntry',
  // 'EncounterHospitalDischarge',
  // 'AliceNewman_USCDIv3_21Jan_2025',
];

describe('convertCcdaToFhir', () => {
  test.skip('generateCleanCcda', () => {
    const name = 'MinimalPassingValidator';
    const ccda = convertXmlToCcda(readFileSync(join(testDataFolder, `${name}.xml`), 'utf8'));
    writeFileSync(join(testDataFolder, `${name}.clean.xml`), convertCcdaToXml(ccda));
  });

  test.each(testData)('should convert %s CCDA to FHIR', (name) => {
    const ccda = convertXmlToCcda(readFileSync(join(testDataFolder, `${name}.xml`), 'utf8'));
    const bundle = normalizeFhir(convertCcdaToFhir(ccda));

    if (!existsSync(join(testDataFolder, `${name}.json`))) {
      writeFileSync(join(testDataFolder, `${name}.json`), stringify(bundle, true));
    }

    const expected = JSON.parse(readFileSync(join(testDataFolder, `${name}.json`), 'utf8'));
    expect(bundle).toEqual(expected);
  });
});

describe('convertFhirToCcda', () => {
  test.each(testData)('should convert %s FHIR to CCDA', (name) => {
    const bundle = JSON.parse(readFileSync(join(testDataFolder, `${name}.json`), 'utf8')) as Bundle;
    const result = normalizeCcda(convertFhirToCcda(bundle));
    const expected = convertXmlToCcda(readFileSync(join(testDataFolder, `${name}.xml`), 'utf8'));
    expect(result).toEqual(expected);
  });
});

function normalizeFhir<T extends Resource>(resource: T): T {
  // We need to remove all "empty" elements, such as empty strings and empty objects
  // This is because FHIR is very strict about what is allowed in the JSON
  return JSON.parse(stringify(resource)) as T;
}

function normalizeCcda(ccda: Ccda): Ccda {
  try {
    return convertXmlToCcda(convertCcdaToXml(ccda));
  } catch (err) {
    console.log(JSON.stringify(ccda, null, 2));
    throw err;
  }
}
