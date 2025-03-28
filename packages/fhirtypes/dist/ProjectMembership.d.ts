/*
 * This is a generated file
 * Do not edit manually.
 */

import { AccessPolicy } from './AccessPolicy';
import { Bot } from './Bot';
import { ClientApplication } from './ClientApplication';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Patient } from './Patient';
import { Practitioner } from './Practitioner';
import { Project } from './Project';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';
import { User } from './User';
import { UserConfiguration } from './UserConfiguration';

/**
 * Medplum project membership. A project membership grants a user access
 * to a project.
 */
export interface ProjectMembership {

  /**
   * This is a ProjectMembership resource
   */
  readonly resourceType: 'ProjectMembership';

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
   * An identifier for this ProjectMembership.
   */
  identifier?: Identifier[];

  /**
   * Whether this project membership record is in active use.
   */
  active?: boolean;

  /**
   * Project where the memberships are available.
   */
  project: Reference<Project>;

  /**
   * The project administrator who invited the user to the project.
   */
  invitedBy?: Reference<User>;

  /**
   * User that is granted access to the project.
   */
  user: Reference<Bot | ClientApplication | User>;

  /**
   * Reference to the resource that represents the user profile within the
   * project.
   */
  profile: Reference<Bot | ClientApplication | Patient | Practitioner | RelatedPerson>;

  /**
   * SCIM userName. A service provider's unique identifier for the user,
   * typically used by the user to directly authenticate to the service
   * provider. Often displayed to the user as their unique identifier
   * within the system (as opposed to &quot;id&quot; or &quot;externalId&quot;, which are
   * generally opaque and not user-friendly identifiers).  Each User MUST
   * include a non-empty userName value.  This identifier MUST be unique
   * across the service provider's entire set of Users.  This attribute is
   * REQUIRED and is case insensitive.
   */
  userName?: string;

  /**
   * SCIM externalId. A String that is an identifier for the resource as
   * defined by the provisioning client.  The &quot;externalId&quot; may simplify
   * identification of a resource between the provisioning client and the
   * service provider by allowing the client to use a filter to locate the
   * resource with an identifier from the provisioning domain, obviating
   * the need to store a local mapping between the provisioning domain's
   * identifier of the resource and the identifier used by the service
   * provider.  Each resource MAY include a non-empty &quot;externalId&quot; value.
   * The value of the &quot;externalId&quot; attribute is always issued by the
   * provisioning client and MUST NOT be specified by the service provider.
   * The service provider MUST always interpret the externalId as scoped
   * to the provisioning domain.
   */
  externalId?: string;

  /**
   * The access policy for the user within the project memebership.
   */
  accessPolicy?: Reference<AccessPolicy>;

  /**
   * Extended access configuration using parameterized access policies.
   */
  access?: ProjectMembershipAccess[];

  /**
   * The user configuration for the user within the project memebership
   * such as menu links, saved searches, and features.
   */
  userConfiguration?: Reference<UserConfiguration>;

  /**
   * Whether this user is a project administrator.
   */
  admin?: boolean;
}

/**
 * Extended access configuration using parameterized access policies.
 */
export interface ProjectMembershipAccess {

  /**
   * The base access policy used as a template.  Variables in the template
   * access policy are replaced by the values in the parameter.
   */
  policy: Reference<AccessPolicy>;

  /**
   * User options that control the display of the application.
   */
  parameter?: ProjectMembershipAccessParameter[];
}

/**
 * User options that control the display of the application.
 */
export interface ProjectMembershipAccessParameter {

  /**
   * The unique name of the parameter.
   */
  name: string;

  /**
   * Value of the parameter - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueString?: string;

  /**
   * Value of the parameter - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueReference?: Reference;
}

/**
 * Value of the parameter - must be one of a constrained set of the data
 * types (see [Extensibility](extensibility.html) for a list).
 */
export type ProjectMembershipAccessParameterValue = Reference | string;
