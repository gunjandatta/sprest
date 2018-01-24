/** The field types */
export interface ISPCfgFieldType {
    Boolean: number;
    Calculated: number;
    Choice: number;
    Date: number;
    Lookup: number;
    MMS: number;
    Note: number;
    Number: number;
    Text: number;
    Url: number;
    User: number;
}

/** The configuration types */
export interface ISPCfgType {
    Fields: number;
    ContentTypes: number;
    Lists: number;
    SiteUserCustomActions: number;
    WebParts: number;
    WebUserCustomActions: number;
}