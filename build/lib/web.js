"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("../utils");
/*********************************************************************************************************************************/
// Web
/*********************************************************************************************************************************/
var _Web = (function (_super) {
    __extends(_Web, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Web(url, targetInfo) {
        // Call the base constructor
        _super.call(this, targetInfo);
        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "web";
        // See if the web url exists
        if (url) {
            // Set the settings
            this.targetInfo.url = url;
        }
        // Add the methods
        this.addMethods(this, { __metadata: { type: "web" } });
    }
    // Method to determine if the current user has access, based on the permissions.
    _Web.prototype.hasAccess = function (permissions) {
        // TO DO
        return true;
    };
    ;
    return _Web;
}(utils_1.Base));
exports.Web = _Web;
//# sourceMappingURL=web.js.map