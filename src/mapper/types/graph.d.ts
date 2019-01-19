import { IBaseExecution } from "../../utils/types/base";

/**
 * Graph Collection
 */
export interface IGraphCollection<T> {
    value: Array<T>;
}

/**
 * Graph Methods
 */
export interface IGraphMethods { }

/**
 * Graph Query Properties
 */
export interface IGraphQueryProps {
    /**
     * Represents a collection of OneDrives and Document Libraries.
     */
    drives(): IBaseExecution<IGraphCollection<IGraphDrive>>;

    /**
     * Represents a OneDrive or Document Library.
     * @param id - The drive id.
     */
    drives(id: string): IBaseExecution<IGraphDrive>;

    /**
     * Represents a collection of Azure Active Directory (Azure AD) groups.
     * Types: Office 365 Group, Dynamic Group or Security Group
     */
    groups(): IBaseExecution<IGraphCollection<IGraphGroup>>;

    /**
     * Represents an Azure Active Directory (Azure AD) group.
     * Types: Office 365 Group, Dynamic Group or Security Group
     * @param id - The group id.
     */
    groups(id: string): IBaseExecution<IGraphGroup>;

    /**
     * Represents a collection of Azure AD user accounts.
     */
    users(): IBaseExecution<IGraphCollection<IGraphUser>>;

    /**
     * Represents a collection of Azure AD user accounts.
     * @param id - The user id.
     */
    users(id: string): IBaseExecution<IGraphUser>;
}

/**
 * Graph Result
 */
export interface IGraphResult { }

/**
 * Graph Query Result
 */
export interface IGraphQueryResult { }

/**
 * Graph Drive
 */
export interface IGraphDrive {
    // Identity of the user, device, or application which created the item.
    createdBy?: { user: IGraphUser };

    // Date and time of item creation.
    createdDateTime?: string;

    // Provide a user-visible description of the drive.
    description?: string;

    // Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary.
    driveType?: string;

    // The unique identifier of the drive.
    id?: string;

    // The drive items
    items?: () => IBaseExecution<IGraphCollection<IGraphDriveItem>>;

    // Identity of the user, device, and application which last modified the item.
    lastModifiedBy?: { user: IGraphUser };

    // Date and time the item was last modified.
    lastModifiedDateTime?: string;

    // The name of the item.
    name?: string;

    // The user account that owns the drive.
    owner?: { user: IGraphUser };

    // Information about the drive's storage space quota.
    quota?: IGraphDriveQuota;

    // Reference to the root folder.
    root?: () => IBaseExecution<IGraphDriveItem>;

    // Collection of common folders available in OneDrive.
    specials?: () => IBaseExecution<IGraphCollection<IGraphDriveItem>>;

    // Returns identifiers useful for SharePoint REST compatibility.
    sharepointIds?: IGraphSharePointIds;

    // If present, indicates that this is a system-managed drive.
    systemFacet?: any;

    // URL that displays the resource in the browser.
    webUrl?: string;
}

/**
 * Graph Drive Item
 */
export interface IGraphDriveItem {
}

/**
 * Graph Drive Quota
 */
export interface IGraphDriveQuota {
    deleted?: number;
    remaining?: number;
    state?: string;
    total?: number;
    used?: number;
}

/**
 * Graph Token
 */
export interface IGraphToken {
    access_token: string;
    expires_on: string;
    resource: string;
    scope: string;
    token_type: string;
}

/**
 * Graph
 */
export interface IGraph extends IGraphMethods, IGraphQueryProps, IBaseExecution<IGraph, IGraphResult, IGraphQueryResult> { }

/**
 * Graph Group
 */
export interface IGraphGroup {
    // Default is false. Indicates if people external to the organization can send messages to the group.
    allowExternalSenders?: boolean;

    // Default is false. Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group.
    autoSubscribeNewMembers?: boolean;

    // Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.
    classification?: string;

    // Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Read-only.
    createdDateTime?: string;

    // An optional description for the group.
    description?: string;

    // The display name for the group. This property is required when a group is created and it cannot be cleared during updates. Supports $filter and $orderby.
    displayName?: string;

    // Specifies the type of group to create. Possible values are Unified to create an Office 365 group, or DynamicMembership for dynamic groups.  For all other group types, like security-enabled groups and email-enabled security groups, do not set this property. Supports $filter.
    groupTypes?: Array<string>;

    // The unique identifier for the group. Inherited from directoryObject. Key. Not nullable. Read-only.
    id?: string;

    // Default value is true. Indicates whether the current user is subscribed to receive email conversations.
    isSubscribedByMail?: boolean;

    // The SMTP address for the group, for example, "serviceadmins@contoso.onmicrosoft.com". Read-only. Supports $filter.
    mail?: string;

    // Specifies whether the group is mail-enabled. If the securityEnabled property is also true, the group is a mail-enabled security group; otherwise, the group is a Microsoft Exchange distribution group.
    mailEnabled?: boolean;

    // The mail alias for the group, unique in the organization. This property must be specified when a group is created. Supports $filter.
    mailNickname?: string;

    // Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Read-only. Supports $filter.
    onPremisesLastSyncDateTime?: string;

    // Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Read-only.
    onPremisesSecurityIdentifier?: string;

    // true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter.
    onPremisesSyncEnabled?: boolean;

    // The any operator is required for filter expressions on multi-valued properties. Read-only. Not nullable. Supports $filter.
    proxyAddresses?: Array<string>;

    // Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Read-only.
    renewedDateTime?: string;

    // Specifies whether the group is a security group. If the mailEnabled property is also true, the group is a mail-enabled security group; otherwise it is a security group. Must be false for Office 365 groups. Supports $filter.
    securityEnabled?: boolean;

    // Count of posts that the current  user has not seen since his last visit.
    unseenCount?: number;

    // Specifies the visibility of an Office 365 group. Possible values are: Private, Public, or empty (which is interpreted as Public).
    visibility?: string;
}

/**
 * Graph SharePoint IDs
 */
export interface IGraphSharePointIds {
    // The unique identifier (guid) for the item's list in SharePoint.
    listId?: string;

    // An integer identifier for the item within the containing list.
    listItemId?: string;

    // The unique identifier (guid) for the item within OneDrive for Business or a SharePoint site.
    listItemUniqueId?: string;

    // The unique identifier (guid) for the item's site collection (SPSite).
    siteId?: string;

    // The SharePoint URL for the site that contains the item.
    siteUrl?: string;

    // The unique identifier (guid) for the item's site (SPWeb).
    webId?: string;
}

/**
 * Graph User
 */
export interface IGraphUser {
    // A freeform text entry field for the user to describe themselves.
    aboutMe?: string;

    // true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter.
    accountEnabled?: boolean;

    // The licenses that are assigned to the user.
    assignedLicenses?: Array<string>;

    // The plans that are assigned to the user.
    assignedPlans?: Array<string>;

    // The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1,
    birthday?: string;

    // The user's phone numbers.
    businessPhones?: Array<string>;

    // The city in which the user is located.
    city?: string;

    // The company name which the user is associated.
    companyName?: string;

    // The country/region in which the user is located; for example, “US” or “UK”.
    country?: string;

    // The name for the department in which the user works.
    department?: string;

    // The name displayed in the address book for the user.
    displayName?: string;

    // The first name of the user.
    givenName?: string;

    // The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time.
    hireDate?: string;

    // The unique identifier for the user.
    id?: string;

    // The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user.
    imAddresses?: Array<string>;

    // A list for the user to describe their interests.
    interests?: Array<string>;

    // The user's job title.
    jobTitle?: string;

    // The user's email address.
    mail?: string;

    // The mail alias for the user.
    mailNickname?: string;

    // The user's cellphone number.
    mobilePhone?: string;

    // The URL for the user's personal site.
    mySite?: string;

    // The user's physical office location.
    officeLocation?: string;

    // The postal code for the user's postal address. 
    postalCode?: string;

    // The user's language of preference.
    preferredLanguage?: string;

    // The preferred name for the user.
    preferredName?: string;

    // A list for the user to enumerate their responsibilities.
    responsibilities?: Array<string>;

    // A list for the user to enumerate the schools they have attended.
    schools?: Array<string>;

    // A list for the user to enumerate their skills.
    skills?: Array<string>;

    // The state or province in the user's address.
    state?: string;

    // The street address of the user's place of business.
    streetAddress?: string;

    // The last name of the user.
    surname?: string;

    // A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: "US", "JP", and "GB".
    usageLocation?: string;

    // The user's principal name.
    userPrincipalName?: string;

    // A string value that can be used to classify user types in your directory, such as “Member” and “Guest”.
    userType?: string;
}