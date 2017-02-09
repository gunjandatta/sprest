"use strict";
/*********************************************************************************************************************************/
// Context Information
// This class will return the _spPageContextInfo.
/*********************************************************************************************************************************/
var _ContextInfo = (function () {
    function _ContextInfo() {
    }
    Object.defineProperty(_ContextInfo.prototype, "_contextInfo", {
        // The current context information
        get: function () {
            return window["_spPageContextInfo"] ||
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
    Object.defineProperty(_ContextInfo.prototype, "alertsEnabled", {
        /**
         * Properties
         */
        // Alerts Enabled
        get: function () { return this._contextInfo.alertsEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "allowSilverlightPrompt", {
        // Allow Silverlight Prompt
        get: function () { return this._contextInfo.allowSilverlightPrompt == "True" ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "clientServerTimeDelta", {
        // Client Server Time Delta
        get: function () { return this._contextInfo.clientServerTimeDelta; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "crossDomainPhotosEnabled", {
        // Cross Domain Photos Enabled
        get: function () { return this._contextInfo.crossDomainPhotosEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "currentCultureName", {
        // Current Culture Name
        get: function () { return this._contextInfo.currentCultureName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "currentLanguage", {
        // Current Language
        get: function () { return this._contextInfo.currentLanguage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "currentUICultureName", {
        // Current UI Culture Name
        get: function () { return this._contextInfo.currentUICultureName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "env", {
        // Environment
        get: function () { return this._contextInfo.env; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "existsFl", {
        // Exists Flag
        get: function () { return this._contextInfo.existsFl == null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "hasManageWebPermissions", {
        // Has Manage Web Permissions
        get: function () { return this._contextInfo.hasManageWebPermissions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "isAnonymousGuestUser", {
        // Is Anonymous Guest User
        get: function () { return this._contextInfo.isAnonymousGuestUser; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "isAppWeb", {
        // Is App Web
        get: function () { return this._contextInfo.isAppWeb; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "isSiteAdmin", {
        // Is Site Administrator
        get: function () { return this._contextInfo.isSiteAdmin; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "layoutsUrl", {
        // Layouts Url
        get: function () { return this._contextInfo.layoutsUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "pageItemId", {
        // Page Item Id
        get: function () { return this._contextInfo.pageItemId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "pageListId", {
        // Page List Id
        get: function () { return this._contextInfo.pageListId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "pagePersonalizationScope", {
        // Page Personalization Scope
        get: function () { return this._contextInfo.pagePersonalizationScope; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "profileUrl", {
        // Profile Url
        get: function () { return this._contextInfo.profileUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "serverRequestPath", {
        // Server Request Path
        get: function () { return this._contextInfo.serverRequestPath; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "siteAbsoluteUrl", {
        // Site Absolute Url
        get: function () { return this._contextInfo.siteAbsoluteUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "siteClientTag", {
        // Site Client Tag
        get: function () { return this._contextInfo.siteClientTag; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "siteServerRelativeUrl", {
        // Site Server Relative Url
        get: function () { return this._contextInfo.siteServerRelativeUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "systemUserKey", {
        // System User Key
        get: function () { return this._contextInfo.systemUserKey; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "tenantAppVersion", {
        // Tenant App Version
        get: function () { return this._contextInfo.tenantAppVersion; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "themeCacheToken", {
        // Theme Cache Token
        get: function () { return this._contextInfo.themeCacheToken; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "updateFromDigestPageLoaded", {
        // Update From Digest Page Loaded
        get: function () { return this._contextInfo.updateFromDigestPageLoaded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "userId", {
        // User Id
        get: function () { return this._contextInfo.userId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "userLoginName", {
        // User Login Name
        get: function () { return this._contextInfo.userLoginName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "webAbsoluteUrl", {
        // Web Absolute Url
        get: function () { return this._contextInfo.webAbsoluteUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "webLanguage", {
        // Web Language
        get: function () { return this._contextInfo.webLanguage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "webLogoUrl", {
        // Web Logo Url
        get: function () { return this._contextInfo.webLogoUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "webPermMask", {
        // Web Permissions Mask
        get: function () { return this._contextInfo.webPermMask; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "webServerRelativeUrl", {
        // Web Server Relative Url
        get: function () { return this._contextInfo.webServerRelativeUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "webTemplate", {
        // Web Template
        get: function () { return this._contextInfo.webTemplate; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "webTitle", {
        // Web Title
        get: function () { return this._contextInfo.webTitle; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo.prototype, "webUIVersion", {
        // Web UI Version
        get: function () { return this._contextInfo.webUIVersion; },
        enumerable: true,
        configurable: true
    });
    return _ContextInfo;
}());
exports.ContextInfo = new _ContextInfo();
//# sourceMappingURL=contextInfo.js.map