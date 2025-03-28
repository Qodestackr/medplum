/*
 * This is a generated file
 * Do not edit manually.
 */

import { Annotation } from './Annotation';
import { Attachment } from './Attachment';
import { CareTeam } from './CareTeam';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { Composition } from './Composition';
import { Condition } from './Condition';
import { Device } from './Device';
import { DiagnosticReport } from './DiagnosticReport';
import { DocumentReference } from './DocumentReference';
import { Encounter } from './Encounter';
import { EpisodeOfCare } from './EpisodeOfCare';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Location } from './Location';
import { Meta } from './Meta';
import { Money } from './Money';
import { Narrative } from './Narrative';
import { Observation } from './Observation';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Provenance } from './Provenance';
import { Quantity } from './Quantity';
import { Questionnaire } from './Questionnaire';
import { QuestionnaireResponse } from './QuestionnaireResponse';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';
import { Signature } from './Signature';
import { Substance } from './Substance';
import { Timing } from './Timing';

/**
 * Legally enforceable, formally recorded unilateral or bilateral
 * directive i.e., a policy or agreement.
 */
export interface Contract {

  /**
   * This is a Contract resource
   */
  readonly resourceType: 'Contract';

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
   * Unique identifier for this Contract or a derivative that references a
   * Source Contract.
   */
  identifier?: Identifier[];

  /**
   * Canonical identifier for this contract, represented as a URI (globally
   * unique).
   */
  url?: string;

  /**
   * An edition identifier used for business purposes to label business
   * significant variants.
   */
  version?: string;

  /**
   * The status of the resource instance.
   */
  status?: 'amended' | 'appended' | 'cancelled' | 'disputed' | 'entered-in-error' | 'executable' | 'executed' |
      'negotiable' | 'offered' | 'policy' | 'rejected' | 'renewed' | 'revoked' | 'resolved' | 'terminated';

  /**
   * Legal states of the formation of a legal instrument, which is a
   * formally executed written document that can be formally attributed to
   * its author, records and formally expresses a legally enforceable act,
   * process, or contractual duty, obligation, or right, and therefore
   * evidences that act, process, or agreement.
   */
  legalState?: CodeableConcept;

  /**
   * The URL pointing to a FHIR-defined Contract Definition that is adhered
   * to in whole or part by this Contract.
   */
  instantiatesCanonical?: Reference<Contract>;

  /**
   * The URL pointing to an externally maintained definition that is
   * adhered to in whole or in part by this Contract.
   */
  instantiatesUri?: string;

  /**
   * The minimal content derived from the basal information source at a
   * specific stage in its lifecycle.
   */
  contentDerivative?: CodeableConcept;

  /**
   * When this  Contract was issued.
   */
  issued?: string;

  /**
   * Relevant time or time-period when this Contract is applicable.
   */
  applies?: Period;

  /**
   * Event resulting in discontinuation or termination of this Contract
   * instance by one or more parties to the contract.
   */
  expirationType?: CodeableConcept;

  /**
   * The target entity impacted by or of interest to parties to the
   * agreement.
   */
  subject?: Reference<Resource>[];

  /**
   * A formally or informally recognized grouping of people, principals,
   * organizations, or jurisdictions formed for the purpose of achieving
   * some form of collective action such as the promulgation,
   * administration and enforcement of contracts and policies.
   */
  authority?: Reference<Organization>[];

  /**
   * Recognized governance framework or system operating with a
   * circumscribed scope in accordance with specified principles, policies,
   * processes or procedures for managing rights, actions, or behaviors of
   * parties or principals relative to resources.
   */
  domain?: Reference<Location>[];

  /**
   * Sites in which the contract is complied with,  exercised, or in force.
   */
  site?: Reference<Location>[];

  /**
   * A natural language name identifying this Contract definition,
   * derivative, or instance in any legal state. Provides additional
   * information about its content. This name should be usable as an
   * identifier for the module by machine processing applications such as
   * code generation.
   */
  name?: string;

  /**
   * A short, descriptive, user-friendly title for this Contract
   * definition, derivative, or instance in any legal state.t giving
   * additional information about its content.
   */
  title?: string;

  /**
   * An explanatory or alternate user-friendly title for this Contract
   * definition, derivative, or instance in any legal state.t giving
   * additional information about its content.
   */
  subtitle?: string;

  /**
   * Alternative representation of the title for this Contract definition,
   * derivative, or instance in any legal state., e.g., a domain specific
   * contract number related to legislation.
   */
  alias?: string[];

  /**
   * The individual or organization that authored the Contract definition,
   * derivative, or instance in any legal state.
   */
  author?: Reference<Patient | Practitioner | PractitionerRole | Organization>;

  /**
   * A selector of legal concerns for this Contract definition, derivative,
   * or instance in any legal state.
   */
  scope?: CodeableConcept;

  /**
   * Narrows the range of legal concerns to focus on the achievement of
   * specific contractual objectives.
   */
  topicCodeableConcept?: CodeableConcept;

  /**
   * Narrows the range of legal concerns to focus on the achievement of
   * specific contractual objectives.
   */
  topicReference?: Reference<Resource>;

  /**
   * A high-level category for the legal instrument, whether constructed as
   * a Contract definition, derivative, or instance in any legal state.
   * Provides additional information about its content within the context
   * of the Contract's scope to distinguish the kinds of systems that would
   * be interested in the contract.
   */
  type?: CodeableConcept;

  /**
   * Sub-category for the Contract that distinguishes the kinds of systems
   * that would be interested in the Contract within the context of the
   * Contract's scope.
   */
  subType?: CodeableConcept[];

  /**
   * Precusory content developed with a focus and intent of supporting the
   * formation a Contract instance, which may be associated with and
   * transformable into a Contract.
   */
  contentDefinition?: ContractContentDefinition;

  /**
   * One or more Contract Provisions, which may be related and conveyed as
   * a group, and may contain nested groups.
   */
  term?: ContractTerm[];

  /**
   * Information that may be needed by/relevant to the performer in their
   * execution of this term action.
   */
  supportingInfo?: Reference<Resource>[];

  /**
   * Links to Provenance records for past versions of this Contract
   * definition, derivative, or instance, which identify key state
   * transitions or updates that are likely to be relevant to a user
   * looking at the current version of the Contract.  The Provence.entity
   * indicates the target that was changed in the update.
   * http://build.fhir.org/provenance-definitions.html#Provenance.entity.
   */
  relevantHistory?: Reference<Provenance>[];

  /**
   * Parties with legal standing in the Contract, including the principal
   * parties, the grantor(s) and grantee(s), which are any person or
   * organization bound by the contract, and any ancillary parties, which
   * facilitate the execution of the contract such as a notary or witness.
   */
  signer?: ContractSigner[];

  /**
   * The &quot;patient friendly language&quot; versionof the Contract in whole or in
   * parts. &quot;Patient friendly language&quot; means the representation of the
   * Contract and Contract Provisions in a manner that is readily
   * accessible and understandable by a layperson in accordance with best
   * practices for communication styles that ensure that those agreeing to
   * or signing the Contract understand the roles, actions, obligations,
   * responsibilities, and implication of the agreement.
   */
  friendly?: ContractFriendly[];

  /**
   * List of Legal expressions or representations of this Contract.
   */
  legal?: ContractLegal[];

  /**
   * List of Computable Policy Rule Language Representations of this
   * Contract.
   */
  rule?: ContractRule[];

  /**
   * Legally binding Contract: This is the signed and legally recognized
   * representation of the Contract, which is considered the &quot;source of
   * truth&quot; and which would be the basis for legal action related to
   * enforcement of this Contract.
   */
  legallyBindingAttachment?: Attachment;

  /**
   * Legally binding Contract: This is the signed and legally recognized
   * representation of the Contract, which is considered the &quot;source of
   * truth&quot; and which would be the basis for legal action related to
   * enforcement of this Contract.
   */
  legallyBindingReference?: Reference<Composition | DocumentReference | QuestionnaireResponse | Contract>;
}

/**
 * Narrows the range of legal concerns to focus on the achievement of
 * specific contractual objectives.
 */
export type ContractTopic = CodeableConcept | Reference<Resource>;

/**
 * Legally binding Contract: This is the signed and legally recognized
 * representation of the Contract, which is considered the &quot;source of
 * truth&quot; and which would be the basis for legal action related to
 * enforcement of this Contract.
 */
export type ContractLegallyBinding = Attachment | Reference<Composition | DocumentReference | QuestionnaireResponse | Contract>;

/**
 * Precusory content developed with a focus and intent of supporting the
 * formation a Contract instance, which may be associated with and
 * transformable into a Contract.
 */
export interface ContractContentDefinition {

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
   * Precusory content structure and use, i.e., a boilerplate, template,
   * application for a contract such as an insurance policy or benefits
   * under a program, e.g., workers compensation.
   */
  type: CodeableConcept;

  /**
   * Detailed Precusory content type.
   */
  subType?: CodeableConcept;

  /**
   * The  individual or organization that published the Contract precursor
   * content.
   */
  publisher?: Reference<Practitioner | PractitionerRole | Organization>;

  /**
   * The date (and optionally time) when the contract was published. The
   * date must change when the business version changes and it must change
   * if the status code changes. In addition, it should change when the
   * substantive content of the contract changes.
   */
  publicationDate?: string;

  /**
   * amended | appended | cancelled | disputed | entered-in-error |
   * executable | executed | negotiable | offered | policy | rejected |
   * renewed | revoked | resolved | terminated.
   */
  publicationStatus: 'amended' | 'appended' | 'cancelled' | 'disputed' | 'entered-in-error' | 'executable' |
      'executed' | 'negotiable' | 'offered' | 'policy' | 'rejected' | 'renewed' | 'revoked' | 'resolved' | 'terminated';

  /**
   * A copyright statement relating to Contract precursor content.
   * Copyright statements are generally legal restrictions on the use and
   * publishing of the Contract precursor content.
   */
  copyright?: string;
}

/**
 * The &quot;patient friendly language&quot; versionof the Contract in whole or in
 * parts. &quot;Patient friendly language&quot; means the representation of the
 * Contract and Contract Provisions in a manner that is readily
 * accessible and understandable by a layperson in accordance with best
 * practices for communication styles that ensure that those agreeing to
 * or signing the Contract understand the roles, actions, obligations,
 * responsibilities, and implication of the agreement.
 */
export interface ContractFriendly {

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
   * Human readable rendering of this Contract in a format and
   * representation intended to enhance comprehension and ensure
   * understandability.
   */
  contentAttachment?: Attachment;

  /**
   * Human readable rendering of this Contract in a format and
   * representation intended to enhance comprehension and ensure
   * understandability.
   */
  contentReference?: Reference<Composition | DocumentReference | QuestionnaireResponse>;
}

/**
 * Human readable rendering of this Contract in a format and
 * representation intended to enhance comprehension and ensure
 * understandability.
 */
export type ContractFriendlyContent = Attachment | Reference<Composition | DocumentReference | QuestionnaireResponse>;

/**
 * List of Legal expressions or representations of this Contract.
 */
export interface ContractLegal {

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
   * Contract legal text in human renderable form.
   */
  contentAttachment?: Attachment;

  /**
   * Contract legal text in human renderable form.
   */
  contentReference?: Reference<Composition | DocumentReference | QuestionnaireResponse>;
}

/**
 * Contract legal text in human renderable form.
 */
export type ContractLegalContent = Attachment | Reference<Composition | DocumentReference | QuestionnaireResponse>;

/**
 * List of Computable Policy Rule Language Representations of this
 * Contract.
 */
export interface ContractRule {

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
   * Computable Contract conveyed using a policy rule language (e.g. XACML,
   * DKAL, SecPal).
   */
  contentAttachment?: Attachment;

  /**
   * Computable Contract conveyed using a policy rule language (e.g. XACML,
   * DKAL, SecPal).
   */
  contentReference?: Reference<DocumentReference>;
}

/**
 * Computable Contract conveyed using a policy rule language (e.g. XACML,
 * DKAL, SecPal).
 */
export type ContractRuleContent = Attachment | Reference<DocumentReference>;

/**
 * Parties with legal standing in the Contract, including the principal
 * parties, the grantor(s) and grantee(s), which are any person or
 * organization bound by the contract, and any ancillary parties, which
 * facilitate the execution of the contract such as a notary or witness.
 */
export interface ContractSigner {

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
   * Role of this Contract signer, e.g. notary, grantee.
   */
  type: Coding;

  /**
   * Party which is a signator to this Contract.
   */
  party: Reference<Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>;

  /**
   * Legally binding Contract DSIG signature contents in Base64.
   */
  signature: Signature[];
}

/**
 * One or more Contract Provisions, which may be related and conveyed as
 * a group, and may contain nested groups.
 */
export interface ContractTerm {

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
   * Unique identifier for this particular Contract Provision.
   */
  identifier?: Identifier;

  /**
   * When this Contract Provision was issued.
   */
  issued?: string;

  /**
   * Relevant time or time-period when this Contract Provision is
   * applicable.
   */
  applies?: Period;

  /**
   * The entity that the term applies to.
   */
  topicCodeableConcept?: CodeableConcept;

  /**
   * The entity that the term applies to.
   */
  topicReference?: Reference<Resource>;

  /**
   * A legal clause or condition contained within a contract that requires
   * one or both parties to perform a particular requirement by some
   * specified time or prevents one or both parties from performing a
   * particular requirement by some specified time.
   */
  type?: CodeableConcept;

  /**
   * A specialized legal clause or condition based on overarching contract
   * type.
   */
  subType?: CodeableConcept;

  /**
   * Statement of a provision in a policy or a contract.
   */
  text?: string;

  /**
   * Security labels that protect the handling of information about the
   * term and its elements, which may be specifically identified..
   */
  securityLabel?: ContractTermSecurityLabel[];

  /**
   * The matter of concern in the context of this provision of the
   * agrement.
   */
  offer: ContractTermOffer;

  /**
   * Contract Term Asset List.
   */
  asset?: ContractTermAsset[];

  /**
   * An actor taking a role in an activity for which it can be assigned
   * some degree of responsibility for the activity taking place.
   */
  action?: ContractTermAction[];

  /**
   * Nested group of Contract Provisions.
   */
  group?: ContractTerm[];
}

/**
 * The entity that the term applies to.
 */
export type ContractTermTopic = CodeableConcept | Reference<Resource>;

/**
 * An actor taking a role in an activity for which it can be assigned
 * some degree of responsibility for the activity taking place.
 */
export interface ContractTermAction {

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
   * True if the term prohibits the  action.
   */
  doNotPerform?: boolean;

  /**
   * Activity or service obligation to be done or not done, performed or
   * not performed, effectuated or not by this Contract term.
   */
  type: CodeableConcept;

  /**
   * Entity of the action.
   */
  subject?: ContractTermActionSubject[];

  /**
   * Reason or purpose for the action stipulated by this Contract
   * Provision.
   */
  intent: CodeableConcept;

  /**
   * Id [identifier??] of the clause or question text related to this
   * action in the referenced form or QuestionnaireResponse.
   */
  linkId?: string[];

  /**
   * Current state of the term action.
   */
  status: CodeableConcept;

  /**
   * Encounter or Episode with primary association to specified term
   * activity.
   */
  context?: Reference<Encounter | EpisodeOfCare>;

  /**
   * Id [identifier??] of the clause or question text related to the
   * requester of this action in the referenced form or
   * QuestionnaireResponse.
   */
  contextLinkId?: string[];

  /**
   * When action happens.
   */
  occurrenceDateTime?: string;

  /**
   * When action happens.
   */
  occurrencePeriod?: Period;

  /**
   * When action happens.
   */
  occurrenceTiming?: Timing;

  /**
   * Who or what initiated the action and has responsibility for its
   * activation.
   */
  requester?: Reference<Patient | RelatedPerson | Practitioner | PractitionerRole | Device | Group | Organization>[];

  /**
   * Id [identifier??] of the clause or question text related to the
   * requester of this action in the referenced form or
   * QuestionnaireResponse.
   */
  requesterLinkId?: string[];

  /**
   * The type of individual that is desired or required to perform or not
   * perform the action.
   */
  performerType?: CodeableConcept[];

  /**
   * The type of role or competency of an individual desired or required to
   * perform or not perform the action.
   */
  performerRole?: CodeableConcept;

  /**
   * Indicates who or what is being asked to perform (or not perform) the
   * ction.
   */
  performer?: Reference<RelatedPerson | Patient | Practitioner | PractitionerRole | CareTeam | Device | Substance | Organization | Location>;

  /**
   * Id [identifier??] of the clause or question text related to the reason
   * type or reference of this  action in the referenced form or
   * QuestionnaireResponse.
   */
  performerLinkId?: string[];

  /**
   * Rationale for the action to be performed or not performed. Describes
   * why the action is permitted or prohibited.
   */
  reasonCode?: CodeableConcept[];

  /**
   * Indicates another resource whose existence justifies permitting or not
   * permitting this action.
   */
  reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference | Questionnaire | QuestionnaireResponse>[];

  /**
   * Describes why the action is to be performed or not performed in
   * textual form.
   */
  reason?: string[];

  /**
   * Id [identifier??] of the clause or question text related to the reason
   * type or reference of this  action in the referenced form or
   * QuestionnaireResponse.
   */
  reasonLinkId?: string[];

  /**
   * Comments made about the term action made by the requester, performer,
   * subject or other participants.
   */
  note?: Annotation[];

  /**
   * Security labels that protects the action.
   */
  securityLabelNumber?: number[];
}

/**
 * When action happens.
 */
export type ContractTermActionOccurrence = Period | string | Timing;

/**
 * Entity of the action.
 */
export interface ContractTermActionSubject {

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
   * The entity the action is performed or not performed on or for.
   */
  reference: Reference<Patient | RelatedPerson | Practitioner | PractitionerRole | Device | Group | Organization>[];

  /**
   * Role type of agent assigned roles in this Contract.
   */
  role?: CodeableConcept;
}

/**
 * Contract Term Asset List.
 */
export interface ContractTermAsset {

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
   * Differentiates the kind of the asset .
   */
  scope?: CodeableConcept;

  /**
   * Target entity type about which the term may be concerned.
   */
  type?: CodeableConcept[];

  /**
   * Associated entities.
   */
  typeReference?: Reference<Resource>[];

  /**
   * May be a subtype or part of an offered asset.
   */
  subtype?: CodeableConcept[];

  /**
   * Specifies the applicability of the term to an asset resource instance,
   * and instances it refers to orinstances that refer to it, and/or are
   * owned by the offeree.
   */
  relationship?: Coding;

  /**
   * Circumstance of the asset.
   */
  context?: ContractTermAssetContext[];

  /**
   * Description of the quality and completeness of the asset that imay be
   * a factor in its valuation.
   */
  condition?: string;

  /**
   * Type of Asset availability for use or ownership.
   */
  periodType?: CodeableConcept[];

  /**
   * Asset relevant contractual time period.
   */
  period?: Period[];

  /**
   * Time period of asset use.
   */
  usePeriod?: Period[];

  /**
   * Clause or question text (Prose Object) concerning the asset in a
   * linked form, such as a QuestionnaireResponse used in the formation of
   * the contract.
   */
  text?: string;

  /**
   * Id [identifier??] of the clause or question text about the asset in
   * the referenced form or QuestionnaireResponse.
   */
  linkId?: string[];

  /**
   * Response to assets.
   */
  answer?: ContractTermOfferAnswer[];

  /**
   * Security labels that protects the asset.
   */
  securityLabelNumber?: number[];

  /**
   * Contract Valued Item List.
   */
  valuedItem?: ContractTermAssetValuedItem[];
}

/**
 * Circumstance of the asset.
 */
export interface ContractTermAssetContext {

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
   * Asset context reference may include the creator, custodian, or owning
   * Person or Organization (e.g., bank, repository),  location held, e.g.,
   * building,  jurisdiction.
   */
  reference?: Reference<Resource>;

  /**
   * Coded representation of the context generally or of the Referenced
   * entity, such as the asset holder type or location.
   */
  code?: CodeableConcept[];

  /**
   * Context description.
   */
  text?: string;
}

/**
 * Contract Valued Item List.
 */
export interface ContractTermAssetValuedItem {

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
   * Specific type of Contract Valued Item that may be priced.
   */
  entityCodeableConcept?: CodeableConcept;

  /**
   * Specific type of Contract Valued Item that may be priced.
   */
  entityReference?: Reference<Resource>;

  /**
   * Identifies a Contract Valued Item instance.
   */
  identifier?: Identifier;

  /**
   * Indicates the time during which this Contract ValuedItem information
   * is effective.
   */
  effectiveTime?: string;

  /**
   * Specifies the units by which the Contract Valued Item is measured or
   * counted, and quantifies the countable or measurable Contract Valued
   * Item instances.
   */
  quantity?: Quantity;

  /**
   * A Contract Valued Item unit valuation measure.
   */
  unitPrice?: Money;

  /**
   * A real number that represents a multiplier used in determining the
   * overall value of the Contract Valued Item delivered. The concept of a
   * Factor allows for a discount or surcharge multiplier to be applied to
   * a monetary amount.
   */
  factor?: number;

  /**
   * An amount that expresses the weighting (based on difficulty, cost
   * and/or resource intensiveness) associated with the Contract Valued
   * Item delivered. The concept of Points allows for assignment of point
   * values for a Contract Valued Item, such that a monetary amount can be
   * assigned to each point.
   */
  points?: number;

  /**
   * Expresses the product of the Contract Valued Item unitQuantity and the
   * unitPriceAmt. For example, the formula: unit Quantity * unit Price
   * (Cost per Point) * factor Number  * points = net Amount. Quantity,
   * factor and points are assumed to be 1 if not supplied.
   */
  net?: Money;

  /**
   * Terms of valuation.
   */
  payment?: string;

  /**
   * When payment is due.
   */
  paymentDate?: string;

  /**
   * Who will make payment.
   */
  responsible?: Reference<Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>;

  /**
   * Who will receive payment.
   */
  recipient?: Reference<Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>;

  /**
   * Id  of the clause or question text related to the context of this
   * valuedItem in the referenced form or QuestionnaireResponse.
   */
  linkId?: string[];

  /**
   * A set of security labels that define which terms are controlled by
   * this condition.
   */
  securityLabelNumber?: number[];
}

/**
 * Specific type of Contract Valued Item that may be priced.
 */
export type ContractTermAssetValuedItemEntity = CodeableConcept | Reference<Resource>;

/**
 * The matter of concern in the context of this provision of the
 * agrement.
 */
export interface ContractTermOffer {

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
   * Unique identifier for this particular Contract Provision.
   */
  identifier?: Identifier[];

  /**
   * Offer Recipient.
   */
  party?: ContractTermOfferParty[];

  /**
   * The owner of an asset has the residual control rights over the asset:
   * the right to decide all usages of the asset in any way not
   * inconsistent with a prior contract, custom, or law (Hart, 1995, p.
   * 30).
   */
  topic?: Reference<Resource>;

  /**
   * Type of Contract Provision such as specific requirements, purposes for
   * actions, obligations, prohibitions, e.g. life time maximum benefit.
   */
  type?: CodeableConcept;

  /**
   * Type of choice made by accepting party with respect to an offer made
   * by an offeror/ grantee.
   */
  decision?: CodeableConcept;

  /**
   * How the decision about a Contract was conveyed.
   */
  decisionMode?: CodeableConcept[];

  /**
   * Response to offer text.
   */
  answer?: ContractTermOfferAnswer[];

  /**
   * Human readable form of this Contract Offer.
   */
  text?: string;

  /**
   * The id of the clause or question text of the offer in the referenced
   * questionnaire/response.
   */
  linkId?: string[];

  /**
   * Security labels that protects the offer.
   */
  securityLabelNumber?: number[];
}

/**
 * Response to offer text.
 */
export interface ContractTermOfferAnswer {

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
   * Response to an offer clause or question text,  which enables selection
   * of values to be agreed to, e.g., the period of participation, the date
   * of occupancy of a rental, warrently duration, or whether biospecimen
   * may be used for further research.
   */
  valueBoolean?: boolean;

  /**
   * Response to an offer clause or question text,  which enables selection
   * of values to be agreed to, e.g., the period of participation, the date
   * of occupancy of a rental, warrently duration, or whether biospecimen
   * may be used for further research.
   */
  valueDecimal?: number;

  /**
   * Response to an offer clause or question text,  which enables selection
   * of values to be agreed to, e.g., the period of participation, the date
   * of occupancy of a rental, warrently duration, or whether biospecimen
   * may be used for further research.
   */
  valueInteger?: number;

  /**
   * Response to an offer clause or question text,  which enables selection
   * of values to be agreed to, e.g., the period of participation, the date
   * of occupancy of a rental, warrently duration, or whether biospecimen
   * may be used for further research.
   */
  valueDate?: string;

  /**
   * Response to an offer clause or question text,  which enables selection
   * of values to be agreed to, e.g., the period of participation, the date
   * of occupancy of a rental, warrently duration, or whether biospecimen
   * may be used for further research.
   */
  valueDateTime?: string;

  /**
   * Response to an offer clause or question text,  which enables selection
   * of values to be agreed to, e.g., the period of participation, the date
   * of occupancy of a rental, warrently duration, or whether biospecimen
   * may be used for further research.
   */
  valueTime?: string;

  /**
   * Response to an offer clause or question text,  which enables selection
   * of values to be agreed to, e.g., the period of participation, the date
   * of occupancy of a rental, warrently duration, or whether biospecimen
   * may be used for further research.
   */
  valueString?: string;

  /**
   * Response to an offer clause or question text,  which enables selection
   * of values to be agreed to, e.g., the period of participation, the date
   * of occupancy of a rental, warrently duration, or whether biospecimen
   * may be used for further research.
   */
  valueUri?: string;

  /**
   * Response to an offer clause or question text,  which enables selection
   * of values to be agreed to, e.g., the period of participation, the date
   * of occupancy of a rental, warrently duration, or whether biospecimen
   * may be used for further research.
   */
  valueAttachment?: Attachment;

  /**
   * Response to an offer clause or question text,  which enables selection
   * of values to be agreed to, e.g., the period of participation, the date
   * of occupancy of a rental, warrently duration, or whether biospecimen
   * may be used for further research.
   */
  valueCoding?: Coding;

  /**
   * Response to an offer clause or question text,  which enables selection
   * of values to be agreed to, e.g., the period of participation, the date
   * of occupancy of a rental, warrently duration, or whether biospecimen
   * may be used for further research.
   */
  valueQuantity?: Quantity;

  /**
   * Response to an offer clause or question text,  which enables selection
   * of values to be agreed to, e.g., the period of participation, the date
   * of occupancy of a rental, warrently duration, or whether biospecimen
   * may be used for further research.
   */
  valueReference?: Reference<Resource>;
}

/**
 * Response to an offer clause or question text,  which enables selection
 * of values to be agreed to, e.g., the period of participation, the date
 * of occupancy of a rental, warrently duration, or whether biospecimen
 * may be used for further research.
 */
export type ContractTermOfferAnswerValue = Attachment | boolean | Coding | number | Quantity | Reference<Resource> | string;

/**
 * Offer Recipient.
 */
export interface ContractTermOfferParty {

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
   * Participant in the offer.
   */
  reference: Reference<Patient | RelatedPerson | Practitioner | PractitionerRole | Device | Group | Organization>[];

  /**
   * How the party participates in the offer.
   */
  role: CodeableConcept;
}

/**
 * Security labels that protect the handling of information about the
 * term and its elements, which may be specifically identified..
 */
export interface ContractTermSecurityLabel {

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
   * Number used to link this term or term element to the applicable
   * Security Label.
   */
  number?: number[];

  /**
   * Security label privacy tag that species the level of confidentiality
   * protection required for this term and/or term elements.
   */
  classification: Coding;

  /**
   * Security label privacy tag that species the applicable privacy and
   * security policies governing this term and/or term elements.
   */
  category?: Coding[];

  /**
   * Security label privacy tag that species the manner in which term
   * and/or term elements are to be protected.
   */
  control?: Coding[];
}
