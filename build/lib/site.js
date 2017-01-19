"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("../utils");
var _1 = require(".");
/*********************************************************************************************************************************/
// Site
// The SPSite object.
/*********************************************************************************************************************************/
var _Site = (function (_super) {
    __extends(_Site, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Site(url, targetInfo) {
        // Call the base constructor
        _super.call(this, targetInfo);
        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "site";
        // See if the web url exists
        if (url) {
            // Set the settings
            this.targetInfo.url = url;
        }
        // Add the methods
        this.addMethods(this, { __metadata: { type: "site" } });
    }
    // Method to get the root web
    _Site.prototype.getRootWeb = function () { return new _1.Web(null, this.targetInfo); };
    // Method to determine if the current user has access, based on the permissions.
    _Site.prototype.hasAccess = function (permissions) {
        // TO DO
        return true;
    };
    ;
    return _Site;
}(utils_1.Base));
exports.Site = _Site;
//# sourceMappingURL=site.js.map