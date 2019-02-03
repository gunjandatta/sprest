import { IBaseExecution, SP } from "gd-sprest-def";

/**
 * Context Information
 */
export const ContextInfo: IContextInformation;

/**
 * Context Information
 */
export interface IContextInformation {
    /**
     * Properties
     */

    /** AAD Instance Url */
    aadInstanceUrl: string;

    /** AAD Tenant Id */
    aadTenantId: string;

    /** Alerts Enabled */
    alertsEnabled: boolean;

    /** Allow Silverlight Prompt */
    allowSilverlightPrompt: boolean;

    /** Block Downloads Experience Enabled */
    blockDownloadsExperienceEnabled: boolean;

    /** Can User Create Microsoft Form */
    canUserCreateMicrosoftForm: boolean;

    /** Can User Create Visio Drawing */
    canUserCreateVisioDrawing: boolean;

    /** CDN Prefix */
    cdnPrefix: string;

    /** Client Server Time Delta */
    clientServerTimeDelta: number;

    /** Correlation ID */
    CorrelationId: string;

    /** Cross Domain Photos Enabled */
    crossDomainPhotosEnabled: boolean;

    /** Current Culture LCID */
    currentCultureLCID: string;

    /** Current Culture Name */
    currentCultureName: string;

    /** Current Language */
    currentLanguage: string;

    /** Current UI Culture Name */
    currentUICultureName: string;

    /** Department ID */
    departmentId: string;

    /** Design Package ID */
    DesignPackageId: string;

    /** Disable App Views */
    disableAppViews: boolean;

    /** Disable Flows */
    disableFlows: boolean;

    /** Document */
    document: HTMLDocument;

    /** Environment */
    env: string;

    /** True if the _spPageContextInfo object exists, flase otherwise. */
    existsFl: boolean;

    /** Farm Label */
    farmLabel: string;

    /** FID */
    fid: string;

    /** Form Digest Timeout Seconds */
    formDigestTimeoutSeconds: number;

    /** Form Digest Value */
    formDigestValue: string;

    /** Group Color */
    groupColor: string;

    /** Group Has Homepage */
    groupHasHomepage: boolean;

    /** Group ID */
    groupId: string;

    /** Group Type */
    groupType: string;

    /** Guests Enabled */
    guestsEnabled: boolean;

    /** Has Manage Web Permissions */
    hasManageWebPermissions: boolean;

    /** Has Pending Web Template Extension */
    hasPendingWebTemplateExtension: boolean;

    /** Hide Sync Button On ODB */
    hideSyncButtonOnODB: boolean;

    /** Hub Site ID */
    hubSiteId: boolean;

    /** IDLE Session Sign Out Enabled */
    idleSessionSignOutEnabled: boolean;

    /** Is Anonymous Guest User */
    isAnonymousGuestUser: boolean;

    /** Is App Web */
    isAppWeb: boolean;

    /** Is Email Authentication Guest User */
    isEmailAuthenticatinoGuesUser: boolean;

    /** Is External Guest User */
    isExternalGuestUser: boolean;

    /** Is Hub Site */
    isHubSite: boolean;

    /** Is Multi Geo Tenant */
    isMultiGeoTenant: boolean;

    /** Is No-Script Enabled */
    isNoScriptEnabled: boolean;

    /** Is Site Administrator */
    isSiteAdmin: boolean;

    /** Is SharePoint Online */
    isSPO: boolean;

    /** Is Tenant Development Site */
    isTenantDevSite: boolean;

    /** Is Web Welcome Page */
    isWebWelcomePage: boolean;

    /** Layouts Url */
    layoutsUrl: string;

    /** List Base Template */
    listBaseTemplate: number;

    /** List Id */
    listId: string;

    /** List Permissions Mask */
    listPermMask: SP.BasePermissions;

    /** List Title */
    listTitle: string;

    /** List Url */
    listUrl: string;

    /** Maximum File Size */
    maximumFileSize: number;

    /** NID */
    nid: string;

    /** Open in Client */
    openInClient: boolean;

    /** Page Item Id */
    pageItemId: number;

    /** Page List Id */
    pageListId: string;

    /** Page Permissions Mask */
    pagePermMask: SP.BasePermissions;

    /** Page Personalization Scope */
    pagePersonalizationScope: number;

    /** Prefer User Time Zone */
    preferUserTimeZone: boolean;

    /** Preview Features Enabled */
    PreviewFeaturesEnabled: boolean;

    /** Profile Url */
    profileUrl: string;

    /** Publishing Feature On */
    PublishingFeatureOn: boolean;

    /** Recycle Bin Item Count */
    RecycleBinItemCount: number;

    /** Server Redirected Url */
    serverRedirectedUrl: string;

    /** Server Request Path */
    serverRequestPath: string;

    /** Server Time */
    serverTime: string;

    /** Show NGSC Dialog for Sync on ODB */
    showNGSCDialogForSyncOnODB: boolean;

    /** Show NGSC Dialog for Sync on TS */
    showNGSCDialogForSyncOnTS: boolean;

    /** Site Absolute Url */
    siteAbsoluteUrl: string;

    /** Site Classification */
    siteClassification: string;

    /** Site Client Tag */
    siteClientTag: string;

    /** Site Color */
    siteColor: string;

    /** Site ID */
    siteId: string;

    /** Site Pages Enabled */
    sitePagesEnabled: boolean;

    /** Site Server Relative Url */
    siteServerRelativeUrl: string;

    /** Site Subscription ID */
    siteSubscriptionId: string;

    /** Support Percent Store Page */
    supportPercentStorePage: boolean;

    /** Support Pound Store Path */
    supportPoundStorePath: boolean;

    /** System User Key */
    systemUserKey: string;

    /** Tenant App Version */
    tenantAppVersion: string;

    /** Theme Cache Token */
    themeCacheToken: string;

    /** Theme CSS Folder Url */
    themeCssFolderUrl: string;

    /** Theme Image File Names */
    themeImageFileNames: any;

    /** Update From Digest Page Loaded */
    updateFromDigestPageLoaded: Date;

    /** User Display Name */
    userDisplayName: string;

    /** User EMail */
    userEmail: string;

    /** User First Day of Week */
    userFirstDayOfWeek: any;

    /** User Id */
    userId: number;

    /** User Login Name */
    userLoginName: string;

    /** User Time 24 */
    userTime24: boolean;

    /** User Time Zone Data */
    userTimeZoneData: any;

    /** View ID */
    viewId: string;

    /** View Only Experience Enabled */
    viewOnlyExperienceEnabled: boolean;

    /** Web Absolute Url */
    webAbsoluteUrl: string;

    /** Web Description */
    webDescription: string;

    /** Web First Day of Week */
    webFirstDayOfWeek: number;

    /** Web ID */
    webId: string;

    /** Web Language */
    webLanguage: number;

    /** Web Logo Url */
    webLogoUrl: string;

    /** Web Permissions Mask */
    webPermMask: SP.BasePermissions;

    /** Web Server Relative Url */
    webServerRelativeUrl: string;

    /** Web Template */
    webTemplate: string;

    /** Web Time 24 */
    webTime24: boolean;

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
    getWeb(url: string): IBaseExecution<{ GetContextWebInformation: SP.ContextWebInformation }>;

    /** The page context object from an SPFX project. */
    setPageContext(spfxPageContext: any);
}