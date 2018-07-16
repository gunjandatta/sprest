import { IBase } from "../../utils/types";
/**
 * Graph Collection
 */
export interface IGraphCollection<T> {
    value: Array<T>;
}
/**
 * Graph Methods
 */
export interface IGraphMethods {
}
/**
 * Graph Query Properties
 */
export interface IGraphQueryProps {
    /**
     * Represents a collection of OneDrives and Document Libraries.
     */
    drives(): IBase<IGraphCollection<IGraphDrive>>;
    /**
     * Represents a OneDrive or Document Library.
     * @param id - The drive id.
     */
    drives(id: string): IBase<IGraphDrive>;
    /**
     * Represents a collection of Azure Active Directory (Azure AD) groups.
     * Types: Office 365 Group, Dynamic Group or Security Group
     */
    groups(): IBase<IGraphCollection<IGraphGroup>>;
    /**
     * Represents an Azure Active Directory (Azure AD) group.
     * Types: Office 365 Group, Dynamic Group or Security Group
     * @param id - The group id.
     */
    groups(id: string): IBase<IGraphGroup>;
    /**
     * Represents a collection of Azure AD user accounts.
     */
    users(): IBase<IGraphCollection<IGraphUser>>;
    /**
     * Represents a collection of Azure AD user accounts.
     * @param id - The user id.
     */
    users(id: string): IBase<IGraphUser>;
}
/**
 * Graph Result
 */
export interface IGraphResult {
}
/**
 * Graph Query Result
 */
export interface IGraphQueryResult {
}
/**
 * Graph Drive
 */
export interface IGraphDrive {
    createdBy?: {
        user: IGraphUser;
    };
    createdDateTime?: string;
    description?: string;
    driveType?: string;
    id?: string;
    items?: () => IBase<IGraphCollection<IGraphDriveItem>>;
    lastModifiedBy?: {
        user: IGraphUser;
    };
    lastModifiedDateTime?: string;
    name?: string;
    owner?: {
        user: IGraphUser;
    };
    quota?: IGraphDriveQuota;
    root?: () => IBase<IGraphDriveItem>;
    specials?: () => IBase<IGraphCollection<IGraphDriveItem>>;
    sharepointIds?: IGraphSharePointIds;
    systemFacet?: any;
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
export interface IGraph extends IGraphMethods, IGraphQueryProps, IBase<IGraph, IGraphResult, IGraphQueryResult> {
}
/**
 * Graph Group
 */
export interface IGraphGroup {
    allowExternalSenders?: boolean;
    autoSubscribeNewMembers?: boolean;
    classification?: string;
    createdDateTime?: string;
    description?: string;
    displayName?: string;
    groupTypes?: Array<string>;
    id?: string;
    isSubscribedByMail?: boolean;
    mail?: string;
    mailEnabled?: boolean;
    mailNickname?: string;
    onPremisesLastSyncDateTime?: string;
    onPremisesSecurityIdentifier?: string;
    onPremisesSyncEnabled?: boolean;
    proxyAddresses?: Array<string>;
    renewedDateTime?: string;
    securityEnabled?: boolean;
    unseenCount?: number;
    visibility?: string;
}
/**
 * Graph SharePoint IDs
 */
export interface IGraphSharePointIds {
    listId?: string;
    listItemId?: string;
    listItemUniqueId?: string;
    siteId?: string;
    siteUrl?: string;
    webId?: string;
}
/**
 * Graph User
 */
export interface IGraphUser {
    aboutMe?: string;
    accountEnabled?: boolean;
    assignedLicenses?: Array<string>;
    assignedPlans?: Array<string>;
    birthday?: string;
    businessPhones?: Array<string>;
    city?: string;
    companyName?: string;
    country?: string;
    department?: string;
    displayName?: string;
    givenName?: string;
    hireDate?: string;
    id?: string;
    imAddresses?: Array<string>;
    interests?: Array<string>;
    jobTitle?: string;
    mail?: string;
    mailNickname?: string;
    mobilePhone?: string;
    mySite?: string;
    officeLocation?: string;
    postalCode?: string;
    preferredLanguage?: string;
    preferredName?: string;
    responsibilities?: Array<string>;
    schools?: Array<string>;
    skills?: Array<string>;
    state?: string;
    streetAddress?: string;
    surname?: string;
    usageLocation?: string;
    userPrincipalName?: string;
    userType?: string;
}
