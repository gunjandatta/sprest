"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var _1 = require(".");
/*********************************************************************************************************************************/
// Site
// The SPSite object.
/*********************************************************************************************************************************/
var _Site = /** @class */ (function (_super) {
    __extends(_Site, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Site(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "site";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "site" } });
        return _this;
    }
    // Method to see if a site exists
    _Site.exists = function (url) {
        // Return the base object
        return new utils_1.Base({
            data: { url: url },
            defaultToWebFl: true,
            endpoint: "SP.Site.Exists",
            method: "POST"
        });
    };
    // Method to get the app context
    _Site.getAppContext = function (siteUrl) {
        // Return the base object
        return new utils_1.Base({
            data: { siteUrl: siteUrl },
            defaultToWebFl: true,
            endpoint: "SP.AppContextSite",
            method: "POST"
        });
    };
    // Method to get the root web
    _Site.prototype.getRootWeb = function () { return new _1.Web(null, this.targetInfo); };
    // Method to get the url by id
    _Site.getUrlById = function (id) {
        // Return the base object
        return new utils_1.Base({
            data: { id: id },
            defaultToWebFl: true,
            endpoint: "SP.Site.GetUrlById",
            method: "POST"
        });
    };
    // Method to determine if the current user has access, based on the permissions.
    _Site.prototype.hasAccess = function (permissions) {
        // TO DO
        return true;
    };
    ;
    return _Site;
}(utils_1.Base));
exports.Site = _Site;
