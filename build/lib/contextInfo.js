"use strict";
/*********************************************************************************************************************************/
// Context Information
// This class will return the _spPageContextInfo.
/*********************************************************************************************************************************/
var _ContextInfo = (function () {
    function _ContextInfo() {
        /**
         * Properties
         */
        // Alerts Enabled
        this.alertsEnabled = this._contextInfo.alertsEnabled;
        // Allow Silverlight Prompt
        this.allowSilverlightPrompt = this._contextInfo.allowSilverlightPrompt == "True" ? true : false;
        // Client Server Time Delta
        this.clientServerTimeDelta = this._contextInfo.clientServerTimeDelta;
        // Cross Domain Photos Enabled
        this.crossDomainPhotosEnabled = this._contextInfo.crossDomainPhotosEnabled;
        // Current Culture Name
        this.currentCultureName = this._contextInfo.currentCultureName;
        // Current Language
        this.currentLanguage = this._contextInfo.currentLanguage;
        // Current UI Culture Name
        this.currentUICultureName = this._contextInfo.currentUICultureName;
        // Environment
        this.env = this._contextInfo.env;
        // Exists Flag
        this.existsFl = this._contextInfo.existsFl == null;
        // Has Manage Web Permissions
        this.hasManageWebPermissions = this._contextInfo.hasManageWebPermissions;
        // Is Anonymous Guest User
        this.isAnonymousGuestUser = this._contextInfo.isAnonymousGuestUser;
        // Is App Web
        this.isAppWeb = this._contextInfo.isAppWeb;
        // Is Site Administrator
        this.isSiteAdmin = this._contextInfo.isSiteAdmin;
        // Layouts Url
        this.layoutsUrl = this._contextInfo.layoutsUrl;
        // Page Item Id
        this.pageItemId = this._contextInfo.pageItemId;
        // Page List Id
        this.pageListId = this._contextInfo.pageListId;
        // Page Personalization Scope
        this.pagePersonalizationScope = this._contextInfo.pagePersonalizationScope;
        // Profile Url
        this.profileUrl = this._contextInfo.profileUrl;
        // Server Request Path
        this.serverRequestPath = this._contextInfo.serverRequestPath;
        // Site Absolute Url
        this.siteAbsoluteUrl = this._contextInfo.siteAbsoluteUrl;
        // Site Client Tag
        this.siteClientTag = this._contextInfo.siteClientTag;
        // Site Server Relative Url
        this.siteServerRelativeUrl = this._contextInfo.siteServerRelativeUrl;
        // System User Key
        this.systemUserKey = this._contextInfo.systemUserKey;
        // Tenant App Version
        this.tenantAppVersion = this._contextInfo.tenantAppVersion;
        // Theme Cache Token
        this.themeCacheToken = this._contextInfo.themeCacheToken;
        // Update From Digest Page Loaded
        this.updateFromDigestPageLoaded = this._contextInfo.updateFromDigestPageLoaded;
        // User Id
        this.userId = this._contextInfo.userId;
        // User Login Name
        this.userLoginName = this._contextInfo.userLoginName;
        // Web Absolute Url
        this.webAbsoluteUrl = this._contextInfo.webAbsoluteUrl;
        // Web Language
        this.webLanguage = this._contextInfo.webLanguage;
        // Web Logo Url
        this.webLogoUrl = this._contextInfo.webLogoUrl;
        // Web Permissions Mask
        this.webPermMask = this._contextInfo.webPermMask;
        // Web Server Relative Url
        this.webServerRelativeUrl = this._contextInfo.webServerRelativeUrl;
        // Web Template
        this.webTemplate = this._contextInfo.webTemplate;
        // Web Title
        this.webTitle = this._contextInfo.webTitle;
        // Web UI Version
        this.webUIVersion = this._contextInfo.webUIVersion;
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
    return _ContextInfo;
}());
exports.ContextInfo = new _ContextInfo();
//# sourceMappingURL=contextInfo.js.map