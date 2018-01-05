import { Types } from "../mapper";
import { Base, IBase } from "../utils";

/**
 * Context Information
 */
export interface IContextInformation {
    /**
     * Properties
     */

    /** Alerts Enabled */
    alertsEnabled: boolean;

    /** Allow Silverlight Prompt */
    allowSilverlightPrompt: boolean;

    /** Client Server Time Delta */
    clientServerTimeDelta: number;

    /** Cross Domain Photos Enabled */
    crossDomainPhotosEnabled: boolean;

    /** Current Culture Name */
    currentCultureName: string;

    /** Current Language */
    currentLanguage: string;

    /** Current UI Culture Name */
    currentUICultureName: string;

    /** Document */
    document: HTMLDocument;

    /** Environment */
    env: string;

    /** True if the _spPageContextInfo object exists, flase otherwise. */
    existsFl: boolean;

    /** Has Manage Web Permissions */
    hasManageWebPermissions: boolean;

    /** Is Anonymous Guest User */
    isAnonymousGuestUser: boolean;

    /** Is App Web */
    isAppWeb: boolean;

    /** Is Site Administrator */
    isSiteAdmin: boolean;

    /** Layouts Url */
    layoutsUrl: string;

    /** Page Item Id */
    pageItemId: number;

    /** Page List Id */
    pageListId: string;

    /** Page Personalization Scope */
    pagePersonalizationScope: number;

    /** Profile Url */
    profileUrl: string;

    /** Server Request Path */
    serverRequestPath: string;

    /** Site Absolute Url */
    siteAbsoluteUrl: string;

    /** Site Client Tag */
    siteClientTag: string;

    /** Site Server Relative Url */
    siteServerRelativeUrl: string;

    /** System User Key */
    systemUserKey: string;

    /** Tenant App Version */
    tenantAppVersion: string;

    /** Theme Cache Token */
    themeCacheToken: string;

    /** Update From Digest Page Loaded */
    updateFromDigestPageLoaded: Date;

    /** User Id */
    userId: number;

    /** User Login Name */
    userLoginName: string;

    /** Web Absolute Url */
    webAbsoluteUrl: string;

    /** Web Language */
    webLanguage: number;

    /** Web Logo Url */
    webLogoUrl: string;

    /** Web Permissions Mask */
    webPermMask: Types.IBasePermissions;

    /** Web Server Relative Url */
    webServerRelativeUrl: string;

    /** Web Template */
    webTemplate: string;

    /** Web Title */
    webTitle: string;

    /** Web UI Version */
    webUIVersion: number;

    /** Window */
    window: {
        $REST: any;
        addEventListener: any;
        clearInterval: any;
        document: HTMLDocument;
        setInterval: any;
        SP: any;
        SPClientTemplates: any;
    };

    /**
     * Methods
     */

    /**
     * Method to generate a guid.
     */
    generateGUID: () => string;

    /**
     * Method to get the web context information.
     * @param url - The relative url of the web.
     */
    getWeb(url: string): IBase<Types.IContextWebInfo>;
}

/**
 * Context Information
 */
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

    // Method to generate a guid
    static generateGUID(): string {
        // Set the batch id
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

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