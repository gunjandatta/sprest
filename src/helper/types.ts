import { Types } from "../mapper";

/**
 * SharePoint Configuration Field Types
 */
const SPCfgFieldType = {
    Boolean: 0,
    Calculated: 1,
    Choice: 2,
    Date: 3,
    Lookup: 4,
    MMS: 5,
    Note: 6,
    Number: 7,
    Text: 8,
    Url: 9,
    User: 10
}

/**
 * SharePoint Configuration Types
 * The value determines the order to install the object type.
 */
const SPCfgType = {
    Fields: 0,
    ContentTypes: 1,
    Lists: 2,
    SiteUserCustomActions: 3,
    WebParts: 5,
    WebUserCustomActions: 4
}

/**
 * Helper Types
 */
export const HelperTypes: Types.Helper.IHelperTypes = {
    SPCfgFieldType,
    SPCfgType
}