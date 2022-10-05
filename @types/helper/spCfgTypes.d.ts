/**
 * SharePoint Configuration Field Types
 */
export const SPCfgFieldType: ISPCfgFieldType;

/**
 * SharePoint Configuration Types
 * The value determines the order to install the object type.
 */
export const SPCfgType: ISPCfgType;

/** The field types */
export type ISPCfgFieldType = {
    Boolean: number;
    Calculated: number;
    Choice: number;
    Currency: number;
    Date: number;
    Geolocation: number;
    Guid: number;
    Image: number;
    Lookup: number;
    MMS: number;
    Note: number;
    Number: number;
    Text: number;
    Url: number;
    User: number;
}

/** The configuration types */
export type ISPCfgType = {
    Fields: number;
    ContentTypes: number;
    Lists: number;
    SiteUserCustomActions: number;
    WebParts: number;
    WebUserCustomActions: number;
}