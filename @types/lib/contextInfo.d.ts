import { IBaseExecution } from "gd-sprest-def/lib/base";
import { BasePermissions, ContextWebInformation } from "gd-sprest-def/lib/SP/complextypes";

/**
 * A reference to the _spPageContextInfo global variable.
 * 
 * ### How to get the context information of another web
 * This is required for making POST requests on webs in different site collections.
 * ```ts
 * // Get the context information of the root web
 * ContextInfo.getWeb("/").execute((contextInfo) => {
 *     // Get the root web
 *     Web("/", { requestDigest: contextInfo.GetContextWebInformation.FormDigestValue })
 *         // Get the 'Site Assets' library
 *         .Lists("Site Assets")
 *         // Query for the items
 *         .getItemsByQuery("<Query><OrderBy><FieldRef Name='ID' /></OrderBy></Query>")
 *         // Execute the request
 *         .execute(items => {
 *             // Parse the items
 *             for(let i=0; i<items.results.length; i++) {
 *                 let item = items.results[i];
 *             }
 *         });
 * });
 */
export const ContextInfo: IContextInformation;

/**
 * Context Information
 * @category Context Information
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

    /** Is Archived */
    isArchived: boolean;

    /** Is Email Authentication Guest User */
    isEmailAuthenticationGuestUser: boolean;

    /** Is External Guest User */
    isExternalGuestUser: boolean;

    /** Is Group Related Site */
    isGroupRelatedSite: boolean;

    /** Is Groupify Disabled */
    isGroupifyDisabled: boolean;

    /** Is Groupify Menu Button Feature Off */
    isGroupifyMenuButtonFeatureOff: boolean;

    /** Is Hub Site */
    isHubSite: boolean;

    /** Is Location Service Available */
    isLocationserviceAvailable: boolean;

    /** Is Multi Geo ODB Mode */
    isMultiGeoODBMode: boolean;

    /** Is Multi Geo Tenant */
    isMultiGeoTenant: boolean;

    /** Is No-Script Enabled */
    isNoScriptEnabled: boolean;

    /** Is Site Administrator */
    isSiteAdmin: boolean;

    /** Is Site Owner */
    isSiteOwner: boolean;

    /** Is SharePoint Online */
    isSPO: boolean;

    /** Is Shared By Link Enabled */
    isShareByLinkEnabled: boolean;

    /** Is Teams Channel Site */
    isTeamsChannelSite: boolean;

    /** Is Teams Connected Site */
    isTeamsConnectedSite: boolean;

    /** Is Tenant Development Site */
    isTenantDevSite: boolean;

    /** Is Unauthorized Tenant */
    isUnauthorizedTenant: boolean;

    /** Is Web Welcome Page */
    isWebWelcomePage: boolean;

    /** Layouts Url */
    layoutsUrl: string;

    /** List Base Template */
    listBaseTemplate: number;

    /** List Base Type */
    listBaseType: number;

    /** List Id */
    listId: string;

    /** List Item Count */
    listItemCount: number;

    /** List Permissions Mask */
    listPermsMask: BasePermissions;

    /** List Title */
    listTitle: string;

    /** List Url */
    listUrl: string;

    /** Maximum File Size */
    maximumFileSize: number;

    /** Modern Theming Enabled */
    modernThemingEnabled: boolean;

    /** MS Graph Endpoint Url */
    msGraphEndpointUrl: string;

    /** MS Mru Endpoint Url */
    msMruEndpointUrl: string;

    /** Multi Geo Info */
    multiGeoInfo: Array<any>;

    /** Navigation Information */
    navigationInfo: any;

    /** NID */
    nid: number;

    /** Open in Client */
    openInClient: boolean;

    /** Page Item Id */
    pageItemId: number;

    /** Page List Id */
    pageListId: string;

    /** Page Permissions Mask */
    pagePermsMask: BasePermissions;

    /** Page Personalization Scope */
    pagePersonalizationScope: number;

    /** Portal URL */
    portalUrl: string;

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

    /** Site Pages Feature Version */
    sitePagesFeatureVersion: number;

    /** Site Server Relative Url */
    siteServerRelativeUrl: string;

    /** Site Subscription ID */
    siteSubscriptionId: string;

    /** Social Bar Enabled */
    socialBarEnabled: boolean;

    /** Support Percent Store Page */
    supportPercentStorePage: boolean;

    /** Support Pound Store Path */
    supportPoundStorePath: boolean;

    /** System User Key */
    systemUserKey: string;

    /** Teams Channel Type */
    teamsChannelType: number;

    /** Tenant App Version */
    tenantAppVersion: string;

    /** Tenant Display Name */
    tenantDisplayName: string;

    /** Theme Cache Token */
    themeCacheToken: string;

    /** Theme CSS Folder Url */
    themedCssFolderUrl: string;

    /** Theme Image File Names */
    themedImageFileNames: any;

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

    /** User Photo Cdn Base Url */
    userPhotoCdnBaseUrl: string;

    /** User Principal Name */
    userPrincipalName: string;

    /** User Time 24 */
    userTime24: boolean;

    /** User Time Zone Data */
    userTimeZoneData: any;

    /** User Voice for Feedback Enabled */
    userVoiceForFeedbackEnabled: boolean;

    /** View ID */
    viewId: string;

    /** View Only Experience Enabled */
    viewOnlyExperienceEnabled: boolean;

    /** Web Absolute Url */
    webAbsoluteUrl: string;

    /** Web Description */
    webDescription: string;

    /** Web Domain */
    webDomain: string;

    /** Web First Day of Week */
    webFirstDayOfWeek: number;

    /** Web ID */
    webId: string;

    /** Web Language */
    webLanguage: number;

    /** Web Language Name */
    webLanguageName: string;

    /** Web Logo Url */
    webLogoUrl: string;

    /** Web Permissions Mask */
    webPermMasks: BasePermissions;

    /** Web Server Relative Url */
    webServerRelativeUrl: string;

    /** Web Template */
    webTemplate: string;

    /** Web Template Configuration */
    webTemplateConfiguration: string;

    /** Web Time 24 */
    webTime24: boolean;

    /** Web Time Zone Data */
    webTimeZoneData: object;

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
     * Generates a guid.
     * @returns A GUID as a string value.
     */
    generateGUID: () => string;

    /**
     * Gets the context information of another web.
     * This is required for making POST requests on other site collections.
     * @param url The relative url of the web.
     * @return The context information of the web.
     */
    getWeb(url: string): IBaseExecution<{ GetContextWebInformation: ContextWebInformation }>;

    /**
     * Sets the page context information for modern pages.
     * @param spfxPageContext - The page context information variable from a SPFx project.
     */
    setPageContext(spfxPageContext: any);
}