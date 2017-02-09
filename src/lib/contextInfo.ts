import {IContextInfo} from "../definitions";
/*********************************************************************************************************************************/
// Context Information
// This class will return the _spPageContextInfo.
/*********************************************************************************************************************************/
class _ContextInfo {
    // The current context information
    private get _contextInfo():any { return window["_spPageContextInfo"] ||
        {
            existsFl: false,
            isAppWeb: false,
            siteAbsoluteUrl: "",
            siteServerRelativeUrl: "",
            userId: 0,
            webAbsoluteUrl: "",
            webServerRelativeUrl: ""
        }
    };

    /**
     * Properties
     */

    // Alerts Enabled
    get alertsEnabled() { return this._contextInfo.alertsEnabled; }

    // Allow Silverlight Prompt
    get allowSilverlightPrompt() { return this._contextInfo.allowSilverlightPrompt == "True" ? true : false; }

    // Client Server Time Delta
    get clientServerTimeDelta() { return this._contextInfo.clientServerTimeDelta; }

    // Cross Domain Photos Enabled
    get crossDomainPhotosEnabled() { return this._contextInfo.crossDomainPhotosEnabled; }

    // Current Culture Name
    get currentCultureName() { return this._contextInfo.currentCultureName; }

    // Current Language
    get currentLanguage() { return this._contextInfo.currentLanguage; }

    // Current UI Culture Name
    get currentUICultureName() { return this._contextInfo.currentUICultureName; }

    // Environment
    get env() { return this._contextInfo.env; }

    // Exists Flag
    get existsFl() { return this._contextInfo.existsFl == null; }

    // Has Manage Web Permissions
    get hasManageWebPermissions() { return this._contextInfo.hasManageWebPermissions; }

    // Is Anonymous Guest User
    get isAnonymousGuestUser() { return this._contextInfo.isAnonymousGuestUser; }

    // Is App Web
    get isAppWeb() { return this._contextInfo.isAppWeb; }

    // Is Site Administrator
    get isSiteAdmin() { return this._contextInfo.isSiteAdmin; }

    // Layouts Url
    get layoutsUrl() { return this._contextInfo.layoutsUrl; }

    // Page Item Id
    get pageItemId() { return this._contextInfo.pageItemId; }

    // Page List Id
    get pageListId() { return this._contextInfo.pageListId; }

    // Page Personalization Scope
    get pagePersonalizationScope() { return this._contextInfo.pagePersonalizationScope; }

    // Profile Url
    get profileUrl() { return this._contextInfo.profileUrl; }

    // Server Request Path
    get serverRequestPath() { return this._contextInfo.serverRequestPath; }

    // Site Absolute Url
    get siteAbsoluteUrl() { return this._contextInfo.siteAbsoluteUrl; }

    // Site Client Tag
    get siteClientTag() { return this._contextInfo.siteClientTag; }

    // Site Server Relative Url
    get siteServerRelativeUrl() { return this._contextInfo.siteServerRelativeUrl; }

    // System User Key
    get systemUserKey() { return this._contextInfo.systemUserKey; }

    // Tenant App Version
    get tenantAppVersion() { return this._contextInfo.tenantAppVersion; }

    // Theme Cache Token
    get themeCacheToken() { return this._contextInfo.themeCacheToken; }

    // Update From Digest Page Loaded
    get updateFromDigestPageLoaded() { return this._contextInfo.updateFromDigestPageLoaded; }

    // User Id
    get userId() { return this._contextInfo.userId; }

    // User Login Name
    get userLoginName() { return this._contextInfo.userLoginName; }

    // Web Absolute Url
    get webAbsoluteUrl() { return this._contextInfo.webAbsoluteUrl; }

    // Web Language
    get webLanguage() { return this._contextInfo.webLanguage; }

    // Web Logo Url
    get webLogoUrl() { return this._contextInfo.webLogoUrl; }

    // Web Permissions Mask
    get webPermMask() { return this._contextInfo.webPermMask; }

    // Web Server Relative Url
    get webServerRelativeUrl() { return this._contextInfo.webServerRelativeUrl; }

    // Web Template
    get webTemplate() { return this._contextInfo.webTemplate; }

    // Web Title
    get webTitle() { return this._contextInfo.webTitle; }

    // Web UI Version
    get webUIVersion() { return this._contextInfo.webUIVersion; }
}
export const ContextInfo:IContextInfo = new _ContextInfo();