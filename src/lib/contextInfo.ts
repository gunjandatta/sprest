import { IContextInformation, IContextWebInfo } from "../definitions";
import { Base } from "../utils";
/*********************************************************************************************************************************/
// Context Information
// This class will return the _spPageContextInfo.
/*********************************************************************************************************************************/
class _ContextInfo {
    // The current context information
    private static get _contextInfo(): any {
        return this.window["_spPageContextInfo"] ||
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
    static get alertsEnabled() { return this._contextInfo.alertsEnabled; }

    // Allow Silverlight Prompt
    static get allowSilverlightPrompt() { return this._contextInfo.allowSilverlightPrompt == "True" ? true : false; }

    // Client Server Time Delta
    static get clientServerTimeDelta() { return this._contextInfo.clientServerTimeDelta; }

    // Cross Domain Photos Enabled
    static get crossDomainPhotosEnabled() { return this._contextInfo.crossDomainPhotosEnabled; }

    // Current Culture Name
    static get currentCultureName() { return this._contextInfo.currentCultureName; }

    // Current Language
    static get currentLanguage() { return this._contextInfo.currentLanguage; }

    // Current UI Culture Name
    static get currentUICultureName() { return this._contextInfo.currentUICultureName; }

    // Document
    static get document() { return this.window.document; }

    // Environment
    static get env() { return this._contextInfo.env; }

    // Exists Flag
    static get existsFl() { return this._contextInfo.existsFl == null; }

    // Has Manage Web Permissions
    static get hasManageWebPermissions() { return this._contextInfo.hasManageWebPermissions; }

    // Is Anonymous Guest User
    static get isAnonymousGuestUser() { return this._contextInfo.isAnonymousGuestUser; }

    // Is App Web
    static get isAppWeb() { return this._contextInfo.isAppWeb; }

    // Is Site Administrator
    static get isSiteAdmin() { return this._contextInfo.isSiteAdmin; }

    // Layouts Url
    static get layoutsUrl() { return this._contextInfo.layoutsUrl; }

    // Page Item Id
    static get pageItemId() { return this._contextInfo.pageItemId; }

    // Page List Id
    static get pageListId() { return this._contextInfo.pageListId; }

    // Page Personalization Scope
    static get pagePersonalizationScope() { return this._contextInfo.pagePersonalizationScope; }

    // Profile Url
    static get profileUrl() { return this._contextInfo.profileUrl; }

    // Server Request Path
    static get serverRequestPath() { return this._contextInfo.serverRequestPath; }

    // Site Absolute Url
    static get siteAbsoluteUrl() { return this._contextInfo.siteAbsoluteUrl; }

    // Site Client Tag
    static get siteClientTag() { return this._contextInfo.siteClientTag; }

    // Site Server Relative Url
    static get siteServerRelativeUrl() { return this._contextInfo.siteServerRelativeUrl; }

    // System User Key
    static get systemUserKey() { return this._contextInfo.systemUserKey; }

    // Tenant App Version
    static get tenantAppVersion() { return this._contextInfo.tenantAppVersion; }

    // Theme Cache Token
    static get themeCacheToken() { return this._contextInfo.themeCacheToken; }

    // Update From Digest Page Loaded
    static get updateFromDigestPageLoaded() { return this._contextInfo.updateFromDigestPageLoaded; }

    // User Id
    static get userId() { return this._contextInfo.userId; }

    // User Login Name
    static get userLoginName() { return this._contextInfo.userLoginName; }

    // Web Absolute Url
    static get webAbsoluteUrl() { return this._contextInfo.webAbsoluteUrl; }

    // Web Language
    static get webLanguage() { return this._contextInfo.webLanguage; }

    // Web Logo Url
    static get webLogoUrl() { return this._contextInfo.webLogoUrl; }

    // Web Permissions Mask
    static get webPermMask() { return this._contextInfo.webPermMask; }

    // Web Server Relative Url
    static get webServerRelativeUrl() { return this._contextInfo.webServerRelativeUrl; }

    // Web Template
    static get webTemplate() { return this._contextInfo.webTemplate; }

    // Web Title
    static get webTitle() { return this._contextInfo.webTitle; }

    // Web UI Version
    static get webUIVersion() { return this._contextInfo.webUIVersion; }

    // Window
    static get window() { return typeof (window) == "undefined" ? {} as any : window; }

    /**
     * Methods
     */

    // Method to get the context information for a web
    static getWeb = (url?: string) => {
        // Create a new base object
        return new Base({
            endpoint: "contextinfo",
            method: "POST",
            url
        });
    }
}
export const ContextInfo: IContextInformation = _ContextInfo as any;