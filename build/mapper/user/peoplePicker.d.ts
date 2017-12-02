import { IBase, ITargetInfo } from "../../utils";
import { Types } from "..";
/**
 * People Picker Query
 */
export interface IPeoplePickerQuery {
    /** True to allow the email address. */
    AllowEmailAddresses?: boolean;
    /** True to allow multiple entities.  */
    AllowMultipleEntities?: boolean;
    /** True to allow all url zones. */
    AllUrlZones?: boolean;
    /** True to enable claim providers. */
    EnabledClaimProviders?: boolean;
    /** True to force claims. */
    ForceClaims?: boolean;
    /** Maximum entity suggestions. */
    MaximumEntitySuggestions: number;
    /** The principal source. */
    PrincipalSource?: number;
    /** The principal type. */
    PrincipalType?: number;
    /** The query string. This value must be >= 3 characters. */
    QueryString?: string;
    /** Required flag. */
    Required?: boolean;
    /** The SharePoint group id. */
    SharePointGroupID?: number;
    /** The url zone. */
    UrlZone?: number;
    /** Url zone specified flag. */
    UrlZoneSpecified?: boolean;
    /** The web. */
    Web?: any;
    /** The web application id. */
    WebApplicationID?: any;
}
/**
 * People Picker Resolve User
 */
export interface IPeoplePickerResolveUser {
    ClientPeoplePickerResolveUser: Array<IPeoplePickerUser>;
}
/**
 * People Picker Search User
 */
export interface IPeoplePickerSearchUser {
    ClientPeoplePickerSearchUser: Array<IPeoplePickerUser>;
}
/**
 * People Picker User
 */
export interface IPeoplePickerUser {
    /** Description */
    Description: string;
    /** Display Text */
    DisplayText: string;
    /** The user entity data. */
    EntityData: Types.IEntityData;
    /** Entity Type */
    EntityType: string;
    /** Flag to determine if the search user is resolved. */
    IsResolved: boolean;
    /** The search value. */
    Key: string;
    /** An array of un-resolved user entities. */
    MultipleMatches: Array<Types.IEntityData>;
    /** Provider Display Name */
    ProviderDisplayName: string;
    /** Provider Name */
    ProviderName: string;
}
/**
 * People Picker
 */
export interface IPeoplePicker extends IBase {
    /**
     * Constructor
     * @param settings - The search settings.
     */
    new (settings?: ITargetInfo): IPeoplePicker;
    /**
     * Methods
     */
    /** Method to resolve users.
     * @param query - The people picker query.
    */
    clientPeoplePickerResolveUser(query: IPeoplePickerQuery): IBase<IPeoplePickerResolveUser>;
    /** Method to search for users.
     * @param query - The people picker query.
    */
    clientPeoplePickerSearchUser(query: IPeoplePickerQuery): IBase<IPeoplePickerSearchUser>;
}
