/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { MedicinalProduct } from './MedicinalProduct';
import { MedicinalProductPackaged } from './MedicinalProductPackaged';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Period } from './Period';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * The regulatory authorization of a medicinal product.
 */
export interface MedicinalProductAuthorization {

  /**
   * This is a MedicinalProductAuthorization resource
   */
  readonly resourceType: 'MedicinalProductAuthorization';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Business identifier for the marketing authorization, as assigned by a
   * regulator.
   */
  identifier?: Identifier[];

  /**
   * The medicinal product that is being authorized.
   */
  subject?: Reference<MedicinalProduct | MedicinalProductPackaged>;

  /**
   * The country in which the marketing authorization has been granted.
   */
  country?: CodeableConcept[];

  /**
   * Jurisdiction within a country.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * The status of the marketing authorization.
   */
  status?: CodeableConcept;

  /**
   * The date at which the given status has become applicable.
   */
  statusDate?: string;

  /**
   * The date when a suspended the marketing or the marketing authorization
   * of the product is anticipated to be restored.
   */
  restoreDate?: string;

  /**
   * The beginning of the time period in which the marketing authorization
   * is in the specific status shall be specified A complete date
   * consisting of day, month and year shall be specified using the ISO
   * 8601 date format.
   */
  validityPeriod?: Period;

  /**
   * A period of time after authorization before generic product
   * applicatiosn can be submitted.
   */
  dataExclusivityPeriod?: Period;

  /**
   * The date when the first authorization was granted by a Medicines
   * Regulatory Agency.
   */
  dateOfFirstAuthorization?: string;

  /**
   * Date of first marketing authorization for a company's new medicinal
   * product in any country in the World.
   */
  internationalBirthDate?: string;

  /**
   * The legal framework against which this authorization is granted.
   */
  legalBasis?: CodeableConcept;

  /**
   * Authorization in areas within a country.
   */
  jurisdictionalAuthorization?: MedicinalProductAuthorizationJurisdictionalAuthorization[];

  /**
   * Marketing Authorization Holder.
   */
  holder?: Reference<Organization>;

  /**
   * Medicines Regulatory Agency.
   */
  regulator?: Reference<Organization>;

  /**
   * The regulatory procedure for granting or amending a marketing
   * authorization.
   */
  procedure?: MedicinalProductAuthorizationProcedure;
}

/**
 * Authorization in areas within a country.
 */
export interface MedicinalProductAuthorizationJurisdictionalAuthorization {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The assigned number for the marketing authorization.
   */
  identifier?: Identifier[];

  /**
   * Country of authorization.
   */
  country?: CodeableConcept;

  /**
   * Jurisdiction within a country.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * The legal status of supply in a jurisdiction or region.
   */
  legalStatusOfSupply?: CodeableConcept;

  /**
   * The start and expected end date of the authorization.
   */
  validityPeriod?: Period;
}

/**
 * The regulatory procedure for granting or amending a marketing
 * authorization.
 */
export interface MedicinalProductAuthorizationProcedure {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Identifier for this procedure.
   */
  identifier?: Identifier;

  /**
   * Type of procedure.
   */
  type: CodeableConcept;

  /**
   * Date of procedure.
   */
  datePeriod?: Period;

  /**
   * Date of procedure.
   */
  dateDateTime?: string;

  /**
   * Applcations submitted to obtain a marketing authorization.
   */
  application?: MedicinalProductAuthorizationProcedure[];
}

/**
 * Date of procedure.
 */
export type MedicinalProductAuthorizationProcedureDate = Period | string;
