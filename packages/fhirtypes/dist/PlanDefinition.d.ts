/*
 * This is a generated file
 * Do not edit manually.
 */

import { Age } from './Age';
import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DataRequirement } from './DataRequirement';
import { Duration } from './Duration';
import { Expression } from './Expression';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { Resource } from './Resource';
import { Timing } from './Timing';
import { TriggerDefinition } from './TriggerDefinition';
import { UsageContext } from './UsageContext';

/**
 * This resource allows for the definition of various types of plans as a
 * sharable, consumable, and executable artifact. The resource is general
 * enough to support the description of a broad range of clinical
 * artifacts such as clinical decision support rules, order sets and
 * protocols.
 */
export interface PlanDefinition {

  /**
   * This is a PlanDefinition resource
   */
  readonly resourceType: 'PlanDefinition';

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
   * An absolute URI that is used to identify this plan definition when it
   * is referenced in a specification, model, design or an instance; also
   * called its canonical identifier. This SHOULD be globally unique and
   * SHOULD be a literal address at which at which an authoritative
   * instance of this plan definition is (or will be) published. This URL
   * can be the target of a canonical reference. It SHALL remain the same
   * when the plan definition is stored on different servers.
   */
  url?: string;

  /**
   * A formal identifier that is used to identify this plan definition when
   * it is represented in other formats, or referenced in a specification,
   * model, design or an instance.
   */
  identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the plan
   * definition when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the plan definition
   * author and is not expected to be globally unique. For example, it
   * might be a timestamp (e.g. yyyymmdd) if a managed version is not
   * available. There is also no expectation that versions can be placed in
   * a lexicographical sequence. To provide a version consistent with the
   * Decision Support Service specification, use the format
   * Major.Minor.Revision (e.g. 1.0.0). For more information on versioning
   * knowledge assets, refer to the Decision Support Service specification.
   * Note that a version is required for non-experimental active artifacts.
   */
  version?: string;

  /**
   * A natural language name identifying the plan definition. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  name?: string;

  /**
   * A short, descriptive, user-friendly title for the plan definition.
   */
  title?: string;

  /**
   * An explanatory or alternate title for the plan definition giving
   * additional information about its content.
   */
  subtitle?: string;

  /**
   * A high-level category for the plan definition that distinguishes the
   * kinds of systems that would be interested in the plan definition.
   */
  type?: CodeableConcept;

  /**
   * The status of this plan definition. Enables tracking the life-cycle of
   * the content.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * A Boolean value to indicate that this plan definition is authored for
   * testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * A code or group definition that describes the intended subject of the
   * plan definition.
   */
  subjectCodeableConcept?: CodeableConcept;

  /**
   * A code or group definition that describes the intended subject of the
   * plan definition.
   */
  subjectReference?: Reference<Group>;

  /**
   * The date  (and optionally time) when the plan definition was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the plan definition changes.
   */
  date?: string;

  /**
   * The name of the organization or individual that published the plan
   * definition.
   */
  publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the plan definition from a
   * consumer's perspective.
   */
  description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate plan definition instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the plan definition is intended
   * to be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this plan definition is needed and why it has been
   * designed as it has.
   */
  purpose?: string;

  /**
   * A detailed description of how the plan definition is used from a
   * clinical perspective.
   */
  usage?: string;

  /**
   * A copyright statement relating to the plan definition and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the plan definition.
   */
  copyright?: string;

  /**
   * The date on which the resource content was approved by the publisher.
   * Approval happens once when the content is officially approved for
   * usage.
   */
  approvalDate?: string;

  /**
   * The date on which the resource content was last reviewed. Review
   * happens periodically after approval but does not change the original
   * approval date.
   */
  lastReviewDate?: string;

  /**
   * The period during which the plan definition content was or is planned
   * to be in active use.
   */
  effectivePeriod?: Period;

  /**
   * Descriptive topics related to the content of the plan definition.
   * Topics provide a high-level categorization of the definition that can
   * be useful for filtering and searching.
   */
  topic?: CodeableConcept[];

  /**
   * An individiual or organization primarily involved in the creation and
   * maintenance of the content.
   */
  author?: ContactDetail[];

  /**
   * An individual or organization primarily responsible for internal
   * coherence of the content.
   */
  editor?: ContactDetail[];

  /**
   * An individual or organization primarily responsible for review of some
   * aspect of the content.
   */
  reviewer?: ContactDetail[];

  /**
   * An individual or organization responsible for officially endorsing the
   * content for use in some setting.
   */
  endorser?: ContactDetail[];

  /**
   * Related artifacts such as additional documentation, justification, or
   * bibliographic references.
   */
  relatedArtifact?: RelatedArtifact[];

  /**
   * A reference to a Library resource containing any formal logic used by
   * the plan definition.
   */
  library?: string[];

  /**
   * Goals that describe what the activities within the plan are intended
   * to achieve. For example, weight loss, restoring an activity of daily
   * living, obtaining herd immunity via immunization, meeting a process
   * improvement objective, etc.
   */
  goal?: PlanDefinitionGoal[];

  /**
   * An action or group of actions to be taken as part of the plan.
   */
  action?: PlanDefinitionAction[];
}

/**
 * A code or group definition that describes the intended subject of the
 * plan definition.
 */
export type PlanDefinitionSubject = CodeableConcept | Reference<Group>;

/**
 * An action or group of actions to be taken as part of the plan.
 */
export interface PlanDefinitionAction {

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
   * A user-visible prefix for the action.
   */
  prefix?: string;

  /**
   * The title of the action displayed to a user.
   */
  title?: string;

  /**
   * A brief description of the action used to provide a summary to display
   * to the user.
   */
  description?: string;

  /**
   * A text equivalent of the action to be performed. This provides a
   * human-interpretable description of the action when the definition is
   * consumed by a system that might not be capable of interpreting it
   * dynamically.
   */
  textEquivalent?: string;

  /**
   * Indicates how quickly the action should be addressed with respect to
   * other actions.
   */
  priority?: 'routine' | 'urgent' | 'asap' | 'stat';

  /**
   * A code that provides meaning for the action or action group. For
   * example, a section may have a LOINC code for the section of a
   * documentation template.
   */
  code?: CodeableConcept[];

  /**
   * A description of why this action is necessary or appropriate.
   */
  reason?: CodeableConcept[];

  /**
   * Didactic or other informational resources associated with the action
   * that can be provided to the CDS recipient. Information resources can
   * include inline text commentary and links to web resources.
   */
  documentation?: RelatedArtifact[];

  /**
   * Identifies goals that this action supports. The reference must be to a
   * goal element defined within this plan definition.
   */
  goalId?: string[];

  /**
   * A code or group definition that describes the intended subject of the
   * action and its children, if any.
   */
  subjectCodeableConcept?: CodeableConcept;

  /**
   * A code or group definition that describes the intended subject of the
   * action and its children, if any.
   */
  subjectReference?: Reference<Group>;

  /**
   * A description of when the action should be triggered.
   */
  trigger?: TriggerDefinition[];

  /**
   * An expression that describes applicability criteria or start/stop
   * conditions for the action.
   */
  condition?: PlanDefinitionActionCondition[];

  /**
   * Defines input data requirements for the action.
   */
  input?: DataRequirement[];

  /**
   * Defines the outputs of the action, if any.
   */
  output?: DataRequirement[];

  /**
   * A relationship to another action such as &quot;before&quot; or &quot;30-60 minutes
   * after start of&quot;.
   */
  relatedAction?: PlanDefinitionActionRelatedAction[];

  /**
   * An optional value describing when the action should be performed.
   */
  timingDateTime?: string;

  /**
   * An optional value describing when the action should be performed.
   */
  timingAge?: Age;

  /**
   * An optional value describing when the action should be performed.
   */
  timingPeriod?: Period;

  /**
   * An optional value describing when the action should be performed.
   */
  timingDuration?: Duration;

  /**
   * An optional value describing when the action should be performed.
   */
  timingRange?: Range;

  /**
   * An optional value describing when the action should be performed.
   */
  timingTiming?: Timing;

  /**
   * Indicates who should participate in performing the action described.
   */
  participant?: PlanDefinitionActionParticipant[];

  /**
   * The type of action to perform (create, update, remove).
   */
  type?: CodeableConcept;

  /**
   * Defines the grouping behavior for the action and its children.
   */
  groupingBehavior?: 'visual-group' | 'logical-group' | 'sentence-group';

  /**
   * Defines the selection behavior for the action and its children.
   */
  selectionBehavior?: 'any' | 'all' | 'all-or-none' | 'exactly-one' | 'at-most-one' | 'one-or-more';

  /**
   * Defines the required behavior for the action.
   */
  requiredBehavior?: 'must' | 'could' | 'must-unless-documented';

  /**
   * Defines whether the action should usually be preselected.
   */
  precheckBehavior?: 'yes' | 'no';

  /**
   * Defines whether the action can be selected multiple times.
   */
  cardinalityBehavior?: 'single' | 'multiple';

  /**
   * A reference to an ActivityDefinition that describes the action to be
   * taken in detail, or a PlanDefinition that describes a series of
   * actions to be taken.
   */
  definitionCanonical?: string;

  /**
   * A reference to an ActivityDefinition that describes the action to be
   * taken in detail, or a PlanDefinition that describes a series of
   * actions to be taken.
   */
  definitionUri?: string;

  /**
   * A reference to a StructureMap resource that defines a transform that
   * can be executed to produce the intent resource using the
   * ActivityDefinition instance as the input.
   */
  transform?: string;

  /**
   * Customizations that should be applied to the statically defined
   * resource. For example, if the dosage of a medication must be computed
   * based on the patient's weight, a customization would be used to
   * specify an expression that calculated the weight, and the path on the
   * resource that would contain the result.
   */
  dynamicValue?: PlanDefinitionActionDynamicValue[];

  /**
   * Sub actions that are contained within the action. The behavior of this
   * action determines the functionality of the sub-actions. For example, a
   * selection behavior of at-most-one indicates that of the sub-actions,
   * at most one may be chosen as part of realizing the action definition.
   */
  action?: PlanDefinitionAction[];
}

/**
 * A code or group definition that describes the intended subject of the
 * action and its children, if any.
 */
export type PlanDefinitionActionSubject = CodeableConcept | Reference<Group>;

/**
 * An optional value describing when the action should be performed.
 */
export type PlanDefinitionActionTiming = Age | Duration | Period | Range | string | Timing;

/**
 * A reference to an ActivityDefinition that describes the action to be
 * taken in detail, or a PlanDefinition that describes a series of
 * actions to be taken.
 */
export type PlanDefinitionActionDefinition = string;

/**
 * An expression that describes applicability criteria or start/stop
 * conditions for the action.
 */
export interface PlanDefinitionActionCondition {

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
   * The kind of condition.
   */
  kind: 'applicability' | 'start' | 'stop';

  /**
   * An expression that returns true or false, indicating whether the
   * condition is satisfied.
   */
  expression?: Expression;
}

/**
 * Customizations that should be applied to the statically defined
 * resource. For example, if the dosage of a medication must be computed
 * based on the patient's weight, a customization would be used to
 * specify an expression that calculated the weight, and the path on the
 * resource that would contain the result.
 */
export interface PlanDefinitionActionDynamicValue {

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
   * The path to the element to be customized. This is the path on the
   * resource that will hold the result of the calculation defined by the
   * expression. The specified path SHALL be a FHIRPath resolveable on the
   * specified target type of the ActivityDefinition, and SHALL consist
   * only of identifiers, constant indexers, and a restricted subset of
   * functions. The path is allowed to contain qualifiers (.) to traverse
   * sub-elements, as well as indexers ([x]) to traverse
   * multiple-cardinality sub-elements (see the [Simple FHIRPath
   * Profile](fhirpath.html#simple) for full details).
   */
  path?: string;

  /**
   * An expression specifying the value of the customized element.
   */
  expression?: Expression;
}

/**
 * Indicates who should participate in performing the action described.
 */
export interface PlanDefinitionActionParticipant {

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
   * The type of participant in the action.
   */
  type: 'patient' | 'practitioner' | 'related-person' | 'device';

  /**
   * The role the participant should play in performing the described
   * action.
   */
  role?: CodeableConcept;
}

/**
 * A relationship to another action such as &quot;before&quot; or &quot;30-60 minutes
 * after start of&quot;.
 */
export interface PlanDefinitionActionRelatedAction {

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
   * The element id of the related action.
   */
  actionId: string;

  /**
   * The relationship of this action to the related action.
   */
  relationship: 'before-start' | 'before' | 'before-end' | 'concurrent-with-start' | 'concurrent' |
      'concurrent-with-end' | 'after-start' | 'after' | 'after-end';

  /**
   * A duration or range of durations to apply to the relationship. For
   * example, 30-60 minutes before.
   */
  offsetDuration?: Duration;

  /**
   * A duration or range of durations to apply to the relationship. For
   * example, 30-60 minutes before.
   */
  offsetRange?: Range;
}

/**
 * A duration or range of durations to apply to the relationship. For
 * example, 30-60 minutes before.
 */
export type PlanDefinitionActionRelatedActionOffset = Duration | Range;

/**
 * Goals that describe what the activities within the plan are intended
 * to achieve. For example, weight loss, restoring an activity of daily
 * living, obtaining herd immunity via immunization, meeting a process
 * improvement objective, etc.
 */
export interface PlanDefinitionGoal {

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
   * Indicates a category the goal falls within.
   */
  category?: CodeableConcept;

  /**
   * Human-readable and/or coded description of a specific desired
   * objective of care, such as &quot;control blood pressure&quot; or &quot;negotiate an
   * obstacle course&quot; or &quot;dance with child at wedding&quot;.
   */
  description: CodeableConcept;

  /**
   * Identifies the expected level of importance associated with
   * reaching/sustaining the defined goal.
   */
  priority?: CodeableConcept;

  /**
   * The event after which the goal should begin being pursued.
   */
  start?: CodeableConcept;

  /**
   * Identifies problems, conditions, issues, or concerns the goal is
   * intended to address.
   */
  addresses?: CodeableConcept[];

  /**
   * Didactic or other informational resources associated with the goal
   * that provide further supporting information about the goal.
   * Information resources can include inline text commentary and links to
   * web resources.
   */
  documentation?: RelatedArtifact[];

  /**
   * Indicates what should be done and within what timeframe.
   */
  target?: PlanDefinitionGoalTarget[];
}

/**
 * Indicates what should be done and within what timeframe.
 */
export interface PlanDefinitionGoalTarget {

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
   * The parameter whose value is to be tracked, e.g. body weight, blood
   * pressure, or hemoglobin A1c level.
   */
  measure?: CodeableConcept;

  /**
   * The target value of the measure to be achieved to signify fulfillment
   * of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both
   * values of the range can be specified. When a low value is missing, it
   * indicates that the goal is achieved at any value at or below the high
   * value. Similarly, if the high value is missing, it indicates that the
   * goal is achieved at any value at or above the low value.
   */
  detailQuantity?: Quantity;

  /**
   * The target value of the measure to be achieved to signify fulfillment
   * of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both
   * values of the range can be specified. When a low value is missing, it
   * indicates that the goal is achieved at any value at or below the high
   * value. Similarly, if the high value is missing, it indicates that the
   * goal is achieved at any value at or above the low value.
   */
  detailRange?: Range;

  /**
   * The target value of the measure to be achieved to signify fulfillment
   * of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both
   * values of the range can be specified. When a low value is missing, it
   * indicates that the goal is achieved at any value at or below the high
   * value. Similarly, if the high value is missing, it indicates that the
   * goal is achieved at any value at or above the low value.
   */
  detailCodeableConcept?: CodeableConcept;

  /**
   * Indicates the timeframe after the start of the goal in which the goal
   * should be met.
   */
  due?: Duration;
}

/**
 * The target value of the measure to be achieved to signify fulfillment
 * of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both
 * values of the range can be specified. When a low value is missing, it
 * indicates that the goal is achieved at any value at or below the high
 * value. Similarly, if the high value is missing, it indicates that the
 * goal is achieved at any value at or above the low value.
 */
export type PlanDefinitionGoalTargetDetail = CodeableConcept | Quantity | Range;
