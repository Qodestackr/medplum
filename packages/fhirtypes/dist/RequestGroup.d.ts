/*
 * This is a generated file
 * Do not edit manually.
 */

import { Age } from './Age';
import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { Condition } from './Condition';
import { Device } from './Device';
import { DiagnosticReport } from './DiagnosticReport';
import { DocumentReference } from './DocumentReference';
import { Duration } from './Duration';
import { Encounter } from './Encounter';
import { Expression } from './Expression';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Observation } from './Observation';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Range } from './Range';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';
import { Timing } from './Timing';

/**
 * A group of related requests that can be used to capture intended
 * activities that have inter-dependencies such as &quot;give this medication
 * after that one&quot;.
 */
export interface RequestGroup {

  /**
   * This is a RequestGroup resource
   */
  readonly resourceType: 'RequestGroup';

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
   * Allows a service to provide a unique, business identifier for the
   * request.
   */
  identifier?: Identifier[];

  /**
   * A canonical URL referencing a FHIR-defined protocol, guideline,
   * orderset or other definition that is adhered to in whole or in part by
   * this request.
   */
  instantiatesCanonical?: string[];

  /**
   * A URL referencing an externally defined protocol, guideline, orderset
   * or other definition that is adhered to in whole or in part by this
   * request.
   */
  instantiatesUri?: string[];

  /**
   * A plan, proposal or order that is fulfilled in whole or in part by
   * this request.
   */
  basedOn?: Reference<Resource>[];

  /**
   * Completed or terminated request(s) whose function is taken by this new
   * request.
   */
  replaces?: Reference<Resource>[];

  /**
   * A shared identifier common to all requests that were authorized more
   * or less simultaneously by a single author, representing the identifier
   * of the requisition, prescription or similar form.
   */
  groupIdentifier?: Identifier;

  /**
   * The current state of the request. For request groups, the status
   * reflects the status of all the requests in the group.
   */
  status: 'draft' | 'active' | 'on-hold' | 'revoked' | 'completed' | 'entered-in-error' | 'unknown';

  /**
   * Indicates the level of authority/intentionality associated with the
   * request and where the request fits into the workflow chain.
   */
  intent: 'proposal' | 'plan' | 'directive' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option';

  /**
   * Indicates how quickly the request should be addressed with respect to
   * other requests.
   */
  priority?: 'routine' | 'urgent' | 'asap' | 'stat';

  /**
   * A code that identifies what the overall request group is.
   */
  code?: CodeableConcept;

  /**
   * The subject for which the request group was created.
   */
  subject?: Reference<Patient | Group>;

  /**
   * Describes the context of the request group, if any.
   */
  encounter?: Reference<Encounter>;

  /**
   * Indicates when the request group was created.
   */
  authoredOn?: string;

  /**
   * Provides a reference to the author of the request group.
   */
  author?: Reference<Device | Practitioner | PractitionerRole>;

  /**
   * Describes the reason for the request group in coded or textual form.
   */
  reasonCode?: CodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this request
   * group.
   */
  reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[];

  /**
   * Provides a mechanism to communicate additional information about the
   * response.
   */
  note?: Annotation[];

  /**
   * The actions, if any, produced by the evaluation of the artifact.
   */
  action?: RequestGroupAction[];
}

/**
 * The actions, if any, produced by the evaluation of the artifact.
 */
export interface RequestGroupAction {

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
   * A short description of the action used to provide a summary to display
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
   * example, a section may have a LOINC code for a section of a
   * documentation template.
   */
  code?: CodeableConcept[];

  /**
   * Didactic or other informational resources associated with the action
   * that can be provided to the CDS recipient. Information resources can
   * include inline text commentary and links to web resources.
   */
  documentation?: RelatedArtifact[];

  /**
   * An expression that describes applicability criteria, or start/stop
   * conditions for the action.
   */
  condition?: RequestGroupActionCondition[];

  /**
   * A relationship to another action such as &quot;before&quot; or &quot;30-60 minutes
   * after start of&quot;.
   */
  relatedAction?: RequestGroupActionRelatedAction[];

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
   * The participant that should perform or be responsible for this action.
   */
  participant?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson | Device>[];

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
   * Defines expectations around whether an action is required.
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
   * The resource that is the target of the action (e.g.
   * CommunicationRequest).
   */
  resource?: Reference<Resource>;

  /**
   * Sub actions.
   */
  action?: RequestGroupAction[];
}

/**
 * An optional value describing when the action should be performed.
 */
export type RequestGroupActionTiming = Age | Duration | Period | Range | string | Timing;

/**
 * An expression that describes applicability criteria, or start/stop
 * conditions for the action.
 */
export interface RequestGroupActionCondition {

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
   * An expression that returns true or false, indicating whether or not
   * the condition is satisfied.
   */
  expression?: Expression;
}

/**
 * A relationship to another action such as &quot;before&quot; or &quot;30-60 minutes
 * after start of&quot;.
 */
export interface RequestGroupActionRelatedAction {

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
   * The element id of the action this is related to.
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
export type RequestGroupActionRelatedActionOffset = Duration | Range;
