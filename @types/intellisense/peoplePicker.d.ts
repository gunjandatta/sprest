import { IBaseExecution } from "gd-sprest-def/lib/base";
import { ClientPeoplePickerQueryParameters } from "gd-sprest-def/lib/SP/UI/ApplicationPages/complextypes";

/**
 * Entity Data
 */
export interface IEntityData {
    /** Account Name */
    AccountName?: string;

    /** Department. */
    Department?: string;

    /** EMail */
    Email?: string;

    /** */
    IsAltSecIdPresent?: boolean;

    /** Mobile Phone */
    MobilePhone?: string;

    /** Object ID */
    ObjectId?: string;

    /** Principal Type */
    PrincipalType?: string;

    /** SharePoint Group ID */
    SPGroupID?: string;

    /** SharePoint User ID */
    SPUserID?: string;

    /** Title */
    Title?: string;
}

/**
 * People Picker Resolve User
 */
export interface IPeoplePickerResolveUser {
    // The client people picker resolve user results
    ClientPeoplePickerResolveUser: IPeoplePickerUser;
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
export interface IPeoplePicker extends IBaseExecution {
    /** Method to resolve users.
     * @param query - The people picker query.
    */
    clientPeoplePickerResolveUser(query: ClientPeoplePickerQueryParameters): IBaseExecution<IPeoplePickerResolveUser>;

    /** Method to search for users.
     * @param query - The people picker query.
    */
    clientPeoplePickerSearchUser(query: ClientPeoplePickerQueryParameters): IBaseExecution<IPeoplePickerSearchUser>;
}