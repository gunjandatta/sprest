"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SharePoint Field Configuration Types
 */
var FieldType = {
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
var ConfigType = {
    Fields: 0,
    ContentTypes: 1,
    Lists: 2,
    SiteUserCustomActions: 3,
    WebParts: 5,
    WebUserCustomActions: 4
};
exports.Types = {
    ConfigType: ConfigType,
    FieldType: FieldType
};
//# sourceMappingURL=types.js.map