"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Context Information
 */
var _ContextInfo = /** @class */ (function () {
    function _ContextInfo() {
    }
    Object.defineProperty(_ContextInfo, "_contextInfo", {
        // The current context information
        get: function () {
            return this.window["_spPageContextInfo"] ||
                {
                    existsFl: false,
                    isAppWeb: false,
                    siteAbsoluteUrl: "",
                    siteServerRelativeUrl: "",
                    userId: 0,
                    webAbsoluteUrl: "",
                    webServerRelativeUrl: ""
                };
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(_ContextInfo, "alertsEnabled", {
        /**
         * Properties
         */
        // Alerts Enabled
        get: function () { return this._contextInfo.alertsEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "allowSilverlightPrompt", {
        // Allow Silverlight Prompt
        get: function () { return this._contextInfo.allowSilverlightPrompt == "True" ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "clientServerTimeDelta", {
        // Client Server Time Delta
        get: function () { return this._contextInfo.clientServerTimeDelta; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "crossDomainPhotosEnabled", {
        // Cross Domain Photos Enabled
        get: function () { return this._contextInfo.crossDomainPhotosEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "currentCultureName", {
        // Current Culture Name
        get: function () { return this._contextInfo.currentCultureName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "currentLanguage", {
        // Current Language
        get: function () { return this._contextInfo.currentLanguage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "currentUICultureName", {
        // Current UI Culture Name
        get: function () { return this._contextInfo.currentUICultureName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "document", {
        // Document
        get: function () { return this.window.document; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "env", {
        // Environment
        get: function () { return this._contextInfo.env; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "existsFl", {
        // Exists Flag
        get: function () { return this._contextInfo.existsFl == null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "hasManageWebPermissions", {
        // Has Manage Web Permissions
        get: function () { return this._contextInfo.hasManageWebPermissions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isAnonymousGuestUser", {
        // Is Anonymous Guest User
        get: function () { return this._contextInfo.isAnonymousGuestUser; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isAppWeb", {
        // Is App Web
        get: function () { return this._contextInfo.isAppWeb; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isSiteAdmin", {
        // Is Site Administrator
        get: function () { return this._contextInfo.isSiteAdmin; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "layoutsUrl", {
        // Layouts Url
        get: function () { return this._contextInfo.layoutsUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "pageItemId", {
        // Page Item Id
        get: function () { return this._contextInfo.pageItemId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "pageListId", {
        // Page List Id
        get: function () { return this._contextInfo.pageListId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "pagePersonalizationScope", {
        // Page Personalization Scope
        get: function () { return this._contextInfo.pagePersonalizationScope; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "profileUrl", {
        // Profile Url
        get: function () { return this._contextInfo.profileUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "serverRequestPath", {
        // Server Request Path
        get: function () { return this._contextInfo.serverRequestPath; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteAbsoluteUrl", {
        // Site Absolute Url
        get: function () { return this._contextInfo.siteAbsoluteUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteClientTag", {
        // Site Client Tag
        get: function () { return this._contextInfo.siteClientTag; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteServerRelativeUrl", {
        // Site Server Relative Url
        get: function () { return this._contextInfo.siteServerRelativeUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "systemUserKey", {
        // System User Key
        get: function () { return this._contextInfo.systemUserKey; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "tenantAppVersion", {
        // Tenant App Version
        get: function () { return this._contextInfo.tenantAppVersion; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "themeCacheToken", {
        // Theme Cache Token
        get: function () { return this._contextInfo.themeCacheToken; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "updateFromDigestPageLoaded", {
        // Update From Digest Page Loaded
        get: function () { return this._contextInfo.updateFromDigestPageLoaded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userId", {
        // User Id
        get: function () { return this._contextInfo.userId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userLoginName", {
        // User Login Name
        get: function () { return this._contextInfo.userLoginName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webAbsoluteUrl", {
        // Web Absolute Url
        get: function () { return this._contextInfo.webAbsoluteUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webLanguage", {
        // Web Language
        get: function () { return this._contextInfo.webLanguage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webLogoUrl", {
        // Web Logo Url
        get: function () { return this._contextInfo.webLogoUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webPermMask", {
        // Web Permissions Mask
        get: function () { return this._contextInfo.webPermMask; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webServerRelativeUrl", {
        // Web Server Relative Url
        get: function () { return this._contextInfo.webServerRelativeUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webTemplate", {
        // Web Template
        get: function () { return this._contextInfo.webTemplate; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webTitle", {
        // Web Title
        get: function () { return this._contextInfo.webTitle; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webUIVersion", {
        // Web UI Version
        get: function () { return this._contextInfo.webUIVersion; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "window", {
        // Window
        get: function () { return typeof (window) == "undefined" ? {} : window; },
        enumerable: true,
        configurable: true
    });
    /**
     * Methods
     */
    // Method to generate a guid
    _ContextInfo.generateGUID = function () {
        // Set the batch id
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    // Method to get the context information for a web
    _ContextInfo.getWeb = function (url) {
        // Create a new base object
        return new utils_1.Base({
            endpoint: "contextinfo",
            method: "POST",
            url: url
        });
    };
    return _ContextInfo;
}());
exports.ContextInfo = _ContextInfo;
//# sourceMappingURL=contextInfo.js.map