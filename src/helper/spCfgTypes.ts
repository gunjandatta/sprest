import { ISPCfgFieldType, ISPCfgType } from "../../@types/helper";

/**
 * SharePoint Configuration Field Types
 */
export const SPCfgFieldType: ISPCfgFieldType = {
    Boolean: 0,
    Calculated: 1,
    Choice: 2,
    Currency: 3,
    Date: 4,
    Geolocation: 5,
    Guid: 6,
    Lookup: 7,
    MMS: 8,
    Note: 9,
    Number: 10,
    Text: 11,
    Url: 12,
    User: 13
}

/**
 * SharePoint Configuration Types
 * The value determines the order to install the object type.
 */
export const SPCfgType: ISPCfgType = {
    Fields: 0,
    ContentTypes: 1,
    Lists: 2,
    SiteUserCustomActions: 3,
    WebParts: 5,
    WebUserCustomActions: 4
}
