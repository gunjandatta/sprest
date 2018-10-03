import { ISPCfgFieldType, ISPCfgType } from "./types";

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
    Lookup: 6,
    MMS: 7,
    Note: 8,
    Number: 9,
    Text: 10,
    Url: 11,
    User: 12
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
