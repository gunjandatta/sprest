import { ISiteQueryResults } from "./siteResults";
import { IBase, ISite, IWeb, ODataQuery } from "..";
/**
 * Site Methods
 */
export interface ISiteMethods extends IBase<ISite> {
    /**
     * Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
     * @param upgrade - If true, the evaluation site collection MUST be upgraded when it is created. If false, the evaluation site collection MUST NOT be upgraded when it is created.
     * @param sendEmail - If true, a notification email MUST be sent to the requestor and the site collection administrators at the completion of the creation of the evaluation site collection. If false, such notification MUST NOT be sent.
     */
    createPreviewSPSite(upgrade: any, sendEmail: any): IBase;
    /**
     * Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
     */
    extendUpgradeReminderDate(): IBase;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: ISite, ...args) => any): ISite;
    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): ISite;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: ISite, ...args) => any, waitFl: boolean): ISite;
    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): ISite;
    /**
     * Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
     * @param typeCatalog - Specifies the list template type for the gallery.
     */
    getCatalog(typeCatalog: any): IBase;
    /**
     * Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
     * @param query - The change query.
     */
    getChanges(query: any): IBase;
    /**
     * Specifies the collection of custom list templates for a given site.
     * @param web - Specifies the site that contains the custom list templates to be returned.
     */
    getCustomListTemplates(web: any): IBase;
    /**
     * Returns the collection of site definitions that are available for creating Web sites within the site collection.
     * @param LCID - A 32-bit unsigned integer that specifies the language of the site definitions that are returned from the site collection.
     * @param overrideCompatLevel - Specifies the compatibility level of the site to return from the site collection. If this value is 0, the compatibility level of the site is used.
     */
    getWebTemplates(LCID: any, overrideCompatLevel: any): IBase;
    /**
     * Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
     */
    invalidate(): IBase;
    /**
     * Returns true if the object needs to be upgraded; otherwise, false.
     * @param versionUpgrade - If true, version-to-version site collection upgrade is requested; otherwise false for build-to-build site collection upgrade.
     * @param recursive - If true, child upgradable objects will be inspected; otherwise false.
     */
    needsUpgradeByType(versionUpgrade: any, recursive: any): IBase;
    /**
     * Returns the site at the specified URL.
     * @param strUrl - The server-relative URL or site-relative URL of the site to return. If strUrl is empty, the top-level site is returned.
     */
    openWeb(strUrl: any): IWeb;
    /**
     * Returns the site with the specified GUID.
     * @param gWebId - A GUID that specifies which site to return.
     */
    openWebById(gWebId: any): IWeb;
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): ISiteQueryResults;
    /**
     * Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
     * @param ruleId - Specifies the rule or rules to be run. If the value is an empty GUID, all rules are run, otherwise only the specified rule is run.
     * @param bRepair - Specifies whether repairable rules are to be run in repair mode.
     * @param bRunAlays - Specifies whether the rules will be run as a result of this call or cached results from a previous run can be returned.
     */
    runHealthCheck(ruleId: any, bRepair: any, bRunAlways: any): IBase;
    /**
     * Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
     * @param versionUpgrade - If true, specifies that a version-to-version upgrade will be performed. If false, specifies that a build-to-build upgrade will be performed.
     * @param queueOnly - If true, specifies that the upgrade will not be run immediately; it will be queued for a later run.
     * @param sendEmail - If true, a notification email will be sent to the requestor and the site collection administrators at the completion of the site collection upgrade. If false, such notification will not be sent.
     */
    runUpgradeSiteSession(versionUpgrade: any, queueOnly: any, sendEmail: any): IBase;
    /**
     * Updates it's properties.
     * @param data - The list properties to update.
     */
    update(data: any): IBase;
    /**
     * Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
     * @param requireUseRemoteAPIs - Specifies whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
     */
    updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs: any): IBase;
}
