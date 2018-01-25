import { Types } from "..";
import { Base } from "../utils";
import { IBase } from "../utils/index.def";

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
    listPermMask: Types.IBasePermissions;

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
    pagePermMask: Types.IBasePermissions;

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
    webPermMask: Types.IBasePermissions;

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
    getWeb(url: string): IBase<Types.IContextWebInfo>;
}

/**
 * Context Information
 */
class _ContextInfo {
    // The current context information
    private static get _contextInfo(): IContextInformation {
        return this.window["_spPageContextInfo"] ||
            {
                existsFl: false,
                isAppWeb: false,
                isHubSite: false,
                isSPO: false,
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

    static get aadInstanceUrl() { return this._contextInfo.aadInstanceUrl; }
    static get aadTenantId() { return this._contextInfo.aadTenantId; }
    static get alertsEnabled() { return this._contextInfo.alertsEnabled; }
    static get allowSilverlightPrompt() { return (this._contextInfo.allowSilverlightPrompt as any) == "True" ? true : false; }
    static get canUserCreateMicrosoftForm() { return this._contextInfo.canUserCreateMicrosoftForm; }
    static get canUserCreateVisioDrawing() { return this._contextInfo.canUserCreateVisioDrawing; }
    static get cdnPrefix() { return this._contextInfo.cdnPrefix; }
    static get clientServerTimeDelta() { return this._contextInfo.clientServerTimeDelta; }
    static get CorrelationId() { return this._contextInfo.CorrelationId; }
    static get crossDomainPhotosEnabled() { return this._contextInfo.crossDomainPhotosEnabled; }
    static get currentCultureName() { return this._contextInfo.currentCultureName; }
    static get currentLanguage() { return this._contextInfo.currentLanguage; }
    static get currentUICultureName() { return this._contextInfo.currentUICultureName; }
    static get departmentId() { return this._contextInfo.departmentId; }
    static get DesignPackageId() { return this._contextInfo.DesignPackageId; }
    static get disableAppViews() { return this._contextInfo.disableAppViews; }
    static get disableFlows() { return this._contextInfo.disableFlows; }
    static get document() { return this.window.document; }
    static get env() { return this._contextInfo.env; }
    static get existsFl() { return this._contextInfo.existsFl == null; }
    static get farmLabel() { return this._contextInfo.farmLabel; }
    static get fid() { return this._contextInfo.fid; }
    static get formDigestTimeoutSeconds() { return this._contextInfo.formDigestTimeoutSeconds; }
    static get formDigestValue() { return this._contextInfo.formDigestValue; }
    static get groupColor() { return this._contextInfo.groupColor; }
    static get groupHasHomepage() { return this._contextInfo.groupHasHomepage; }
    static get groupId() { return this._contextInfo.groupId; }
    static get groupType() { return this._contextInfo.groupType; }
    static get guestsEnabled() { return this._contextInfo.guestsEnabled; }
    static get hasManageWebPermissions() { return this._contextInfo.hasManageWebPermissions; }
    static get hasPendingWebTemplateExtension() { return this._contextInfo.hasPendingWebTemplateExtension; }
    static get hideSyncButtonOnODB() { return this._contextInfo.hideSyncButtonOnODB; }
    static get hubSiteId() { return this._contextInfo.hubSiteId; }
    static get idleSessionSignOutEnabled() { return this._contextInfo.idleSessionSignOutEnabled; }
    static get isAnonymousGuestUser() { return this._contextInfo.isAnonymousGuestUser; }
    static get isAppWeb() { return this._contextInfo.isAppWeb; }
    static get isEmailAuthenticatinoGuesUser() { return this._contextInfo.isEmailAuthenticatinoGuesUser; }
    static get isExternalGuestUser() { return this._contextInfo.isExternalGuestUser; }
    static get isHubSite() { return this._contextInfo.isHubSite; }
    static get isMultiGeoTenant() { return this._contextInfo.isMultiGeoTenant; }
    static get isNoScriptEnabled() { return this._contextInfo.isNoScriptEnabled; }
    static get isSiteAdmin() { return this._contextInfo.isSiteAdmin; }
    static get isSPO() { return this._contextInfo.isSPO; }
    static get isTenantDevSite() { return this._contextInfo.isTenantDevSite; }
    static get isWebWelcomePage() { return this._contextInfo.isWebWelcomePage; }
    static get layoutsUrl() { return this._contextInfo.layoutsUrl; }
    static get listBaseTemplate() { return this._contextInfo.listBaseTemplate; }
    static get listId() { return this._contextInfo.listId; }
    static get listTitle() { return this._contextInfo.listTitle; }
    static get listPermMask() { return this._contextInfo.listPermMask; }
    static get listUrl() { return this._contextInfo.listUrl; }
    static get maximumFileSize() { return this._contextInfo.maximumFileSize; }
    static get nid() { return this._contextInfo.nid; }
    static get openInClient() { return this._contextInfo.openInClient; }
    static get pageItemId() { return this._contextInfo.pageItemId; }
    static get pageListId() { return this._contextInfo.pageListId; }
    static get pagePermMask() { return this._contextInfo.pagePermMask; }
    static get pagePersonalizationScope() { return this._contextInfo.pagePersonalizationScope; }
    static get preferUserTimeZone() { return this._contextInfo.preferUserTimeZone; }
    static get PreviewFeaturesEnabled() { return this._contextInfo.PreviewFeaturesEnabled; }
    static get profileUrl() { return this._contextInfo.profileUrl; }
    static get PublishingFeatureOn() { return this._contextInfo.PublishingFeatureOn; }
    static get RecycleBinItemCount() { return this._contextInfo.RecycleBinItemCount; }
    static get serverRedirectedUrl() { return this._contextInfo.serverRedirectedUrl; }
    static get serverRequestPath() { return this._contextInfo.serverRequestPath; }
    static get serverTime() { return this._contextInfo.serverTime; }
    static get showNGSCDialogForSyncOnODB() { return this._contextInfo.showNGSCDialogForSyncOnODB; }
    static get showNGSCDialogForSyncOnTS() { return this._contextInfo.showNGSCDialogForSyncOnTS; }
    static get siteAbsoluteUrl() { return this._contextInfo.siteAbsoluteUrl; }
    static get siteClassification() { return this._contextInfo.siteClassification; }
    static get siteClientTag() { return this._contextInfo.siteClientTag; }
    static get siteColor() { return this._contextInfo.siteColor; }
    static get siteId() { return this._contextInfo.siteId; }
    static get sitePagesEnabled() { return this._contextInfo.sitePagesEnabled; }
    static get siteServerRelativeUrl() { return this._contextInfo.siteServerRelativeUrl; }
    static get siteSubscriptionId() { return this._contextInfo.siteSubscriptionId; }
    static get supportPercentStorePage() { return this._contextInfo.supportPercentStorePage; }
    static get supportPoundStorePath() { return this._contextInfo.supportPoundStorePath; }
    static get systemUserKey() { return this._contextInfo.systemUserKey; }
    static get tenantAppVersion() { return this._contextInfo.tenantAppVersion; }
    static get themeCacheToken() { return this._contextInfo.themeCacheToken; }
    static get themeCssFolderUrl() { return this._contextInfo.themeCssFolderUrl; }
    static get themeImageFileNames() { return this._contextInfo.themeImageFileNames; }
    static get updateFromDigestPageLoaded() { return this._contextInfo.updateFromDigestPageLoaded; }
    static get userDisplayName() { return this._contextInfo.userDisplayName; }
    static get userEmail() { return this._contextInfo.userEmail; }
    static get userFirstDayOfWeek() { return this._contextInfo.userFirstDayOfWeek; }
    static get userId() { return this._contextInfo.userId; }
    static get userLoginName() { return this._contextInfo.userLoginName; }
    static get userTime24() { return this._contextInfo.userTime24; }
    static get userTimeZoneData() { return this._contextInfo.userTimeZoneData; }
    static get viewId() { return this._contextInfo.viewId; }
    static get viewOnlyExperienceEnabled() { return this._contextInfo.viewOnlyExperienceEnabled; }
    static get webAbsoluteUrl() { return this._contextInfo.webAbsoluteUrl; }
    static get webDescription() { return this._contextInfo.webDescription; }
    static get webFirstDayOfWeek() { return this._contextInfo.webFirstDayOfWeek; }
    static get webId() { return this._contextInfo.webId; }
    static get webLanguage() { return this._contextInfo.webLanguage; }
    static get webLogoUrl() { return this._contextInfo.webLogoUrl; }
    static get webPermMask() { return this._contextInfo.webPermMask; }
    static get webServerRelativeUrl() { return this._contextInfo.webServerRelativeUrl; }
    static get webTemplate() { return this._contextInfo.webTemplate; }
    static get webTime24() { return this._contextInfo.webTime24; }
    static get webTitle() { return this._contextInfo.webTitle; }
    static get webUIVersion() { return this._contextInfo.webUIVersion; }
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