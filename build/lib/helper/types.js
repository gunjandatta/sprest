"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SharePoint Configuration Field Types
 */
var SPCfgFieldType = {
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
};
/**
 * SharePoint Configuration Types
 * The value determines the order to install the object type.
 */
var SPCfgType = {
    Fields: 0,
    ContentTypes: 1,
    Lists: 2,
    SiteUserCustomActions: 3,
    WebParts: 5,
    WebUserCustomActions: 4
};
/**
 * Helper Types
 */
exports.HelperTypes = {
    SPCfgFieldType: SPCfgFieldType,
    SPCfgType: SPCfgType
};
//# sourceMappingURL=types.js.map