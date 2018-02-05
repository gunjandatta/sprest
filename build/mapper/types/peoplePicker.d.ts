import { IBase, ITargetInfo } from "../../utils/types";
import { IEntityData } from ".";
export interface IPeoplePickerQuery {
    AllowEmailAddresses?: boolean;
    AllowMultipleEntities?: boolean;
    AllUrlZones?: boolean;
    EnabledClaimProviders?: boolean;
    ForceClaims?: boolean;
    MaximumEntitySuggestions: number;
    PrincipalSource?: number;
    PrincipalType?: number;
    QueryString?: string;
    Required?: boolean;
    SharePointGroupID?: number;
    UrlZone?: number;
    UrlZoneSpecified?: boolean;
    Web?: any;
    WebApplicationID?: any;
}
export interface IPeoplePickerResolveUser {
    ClientPeoplePickerResolveUser: Array<IPeoplePickerUser>;
}
export interface IPeoplePickerSearchUser {
    ClientPeoplePickerSearchUser: Array<IPeoplePickerUser>;
}
export interface IPeoplePickerUser {
    Description: string;
    DisplayText: string;
    EntityData: IEntityData;
    EntityType: string;
    IsResolved: boolean;
    Key: string;
    MultipleMatches: Array<IEntityData>;
    ProviderDisplayName: string;
    ProviderName: string;
}
export interface IPeoplePicker extends IBase {
    new (settings?: ITargetInfo): IPeoplePicker;
    clientPeoplePickerResolveUser(query: IPeoplePickerQuery): IBase<IPeoplePickerResolveUser>;
    clientPeoplePickerSearchUser(query: IPeoplePickerQuery): IBase<IPeoplePickerSearchUser>;
}
