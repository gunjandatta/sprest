import {IContextInfo} from "../definitions";
/*********************************************************************************************************************************/
// Context Information
// This class will return the _spPageContextInfo.
/*********************************************************************************************************************************/
class _ContextInfo {
    // The current context information
    _contextInfo = window["_spPageContextInfo"] || {
        existsFl: false,
        isAppWeb: false,
        siteAbsoluteUrl: "",
        siteServerRelativeUrl: "",
        userId: 0,
        webAbsoluteUrl: "",
        webServerRelativeUrl: ""
    };

    // Alerts Enabled
    alertsEnabled = this._contextInfo.alertsEnabled;

    // Allow Silverlight Prompt
    allowSilverlightPrompt = this._contextInfo.allowSilverlightPrompt == "True" ? true : false;

    // Client Server Time Delta
    clientServerTimeDelta = this._contextInfo.clientServerTimeDelta;

    // Cross Domain Photos Enabled
    crossDomainPhotosEnabled = this._contextInfo.crossDomainPhotosEnabled;

    // Current Culture Name
    currentCultureName = this._contextInfo.currentCultureName;

    // Current Language
    currentLanguage = this._contextInfo.currentLanguage;

    // Current UI Culture Name
    currentUICultureName = this._contextInfo.currentUICultureName;

    // Environment
    env = this._contextInfo.env;

    // Exists Flag
    existsFl = this._contextInfo.existsFl == null;

    // Has Manage Web Permissions
    hasManageWebPermissions = this._contextInfo.hasManageWebPermissions;

    // Is Anonymous Guest User
    isAnonymousGuestUser = this._contextInfo.isAnonymousGuestUser;

    // Is App Web
    isAppWeb = this._contextInfo.isAppWeb;

    // Is Site Administrator
    isSiteAdmin = this._contextInfo.isSiteAdmin;

    // Layouts Url
    layoutsUrl = this._contextInfo.layoutsUrl;

    // Page Item Id
    pageItemId = this._contextInfo.pageItemId;

    // Page List Id
    pageListId = this._contextInfo.pageListId;

    // Page Personalization Scope
    pagePersonalizationScope = this._contextInfo.pagePersonalizationScope;

    // Profile Url
    profileUrl = this._contextInfo.profileUrl;

    // Server Request Path
    serverRequestPath = this._contextInfo.serverRequestPath;

    // Site Absolute Url
    siteAbsoluteUrl = this._contextInfo.siteAbsoluteUrl;

    // Site Client Tag
    siteClientTag = this._contextInfo.siteClientTag;

    // Site Server Relative Url
    siteServerRelativeUrl = this._contextInfo.siteServerRelativeUrl;

    // System User Key
    systemUserKey = this._contextInfo.systemUserKey;

    // Tenant App Version
    tenantAppVersion = this._contextInfo.tenantAppVersion;

    // Theme Cache Token
    themeCacheToken = this._contextInfo.themeCacheToken;

    // Update From Digest Page Loaded
    updateFromDigestPageLoaded = this._contextInfo.updateFromDigestPageLoaded;

    // User Id
    userId = this._contextInfo.userId;

    // User Login Name
    userLoginName = this._contextInfo.userLoginName;

    // Web Absolute Url
    webAbsoluteUrl = this._contextInfo.webAbsoluteUrl;

    // Web Language
    webLanguage = this._contextInfo.webLanguage;

    // Web Logo Url
    webLogoUrl = this._contextInfo.webLogoUrl;

    // Web Permissions Mask
    webPermMask = this._contextInfo.webPermMask;

    // Web Server Relative Url
    webServerRelativeUrl = this._contextInfo.webServerRelativeUrl;

    // Web Template
    webTemplate = this._contextInfo.webTemplate;

    // Web Title
    webTitle = this._contextInfo.webTitle;

    // Web UI Version
    webUIVersion = this._contextInfo.webUIVersion;
}
export const ContextInfo:IContextInfo = new _ContextInfo();