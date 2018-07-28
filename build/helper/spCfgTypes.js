"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SharePoint Configuration Field Types
 */
exports.SPCfgFieldType = {
    Boolean: 0,
    Calculated: 1,
    Choice: 2,
    Currency: 3,
    Date: 4,
    Lookup: 5,
    MMS: 6,
    Note: 7,
    Number: 8,
    Text: 9,
    Url: 10,
    User: 11
};
/**
 * SharePoint Configuration Types
 * The value determines the order to install the object type.
 */
exports.SPCfgType = {
    Fields: 0,
    ContentTypes: 1,
    Lists: 2,
    SiteUserCustomActions: 3,
    WebParts: 5,
    WebUserCustomActions: 4
};
