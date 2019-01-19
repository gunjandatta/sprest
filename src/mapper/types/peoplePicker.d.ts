import { IBaseLib } from "../../utils/types/base";
import { IEntityData } from "./entityData";

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
    // The client people picker resolve user results
    ClientPeoplePickerResolveUser: Array<IPeoplePickerUser>;
}

/**
 * People Picker Search User
 */
export interface IPeoplePickerSearchUser {
    // The client people picker search user results
    ClientPeoplePickerSearchUser: Array<IPeoplePickerUser>;
}

/**
 * People Picker User
 */
export interface IPeoplePickerUser {
    /** Description */
    Description?: string;

    /** Display Text */
    DisplayText: string;

    /** The user entity data. */
    EntityData?: IEntityData;

    /** Entity Type */
    EntityType?: string;

    /** Flag to determine if the search user is resolved. */
    IsResolved?: boolean;

    /** The search value. */
    Key: string;

    /** An array of un-resolved user entities. */
    MultipleMatches?: Array<IEntityData>;

    /** Provider Display Name */
    ProviderDisplayName?: string;

    /** Provider Name */
    ProviderName?: string;
}

/**
 * People Picker
 */
export interface IPeoplePicker extends IBaseLib {
    /** Method to resolve users.
     * @param query - The people picker query.
    */
    clientPeoplePickerResolveUser(query: IPeoplePickerQuery): IBaseLib<IPeoplePickerResolveUser>;

    /** Method to search for users.
     * @param query - The people picker query.
    */
    clientPeoplePickerSearchUser(query: IPeoplePickerQuery): IBaseLib<IPeoplePickerSearchUser>;
}