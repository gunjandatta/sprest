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
    Image: 7,
    Lookup: 8,
    MMS: 9,
    Note: 10,
    Number: 11,
    Text: 12,
    Url: 13,
    User: 14
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
