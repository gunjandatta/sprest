import { Base } from "../utils";
import { IContextInformation } from "./types";

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