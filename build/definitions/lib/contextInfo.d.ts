import { IBase, IBasePermissions, IContextWebInfo } from ".";
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
    webPermMask: IBasePermissions;
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
        setInterval: any;
        SP: any;
        SPClientTemplates: any;
    };
    /**
     * Methods
     */
    /**
     * Method to get the web context information.
     * @param url - The relative url of the web.
     */
    getWeb(url: string): IBase<IContextWebInfo>;
}
