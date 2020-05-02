import { IBaseExecution } from "gd-sprest-def/lib/base";
import * as SP from "gd-sprest-def/lib/SP/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/site
 *
 * #### Get list from the current site collection
 *
 * ```typescript
 * import { Site } from "gd-sprest";
 * 
 * Site().execute(site => {
 *   let hubSiteId = site.HubSiteId;
 * });
 * ```
 * 
 *
 * #### Query a list to include various collections
 *
 * ```typescript
 * import { Site } from "gd-sprest";
 * 
 * Site().query({
 *  Expand: ["UserCustomActions"]
 * }).execute(list => {
 *   let actions = site.UserCustomActions.results;
 * });
 * ```
 */
export const Site: ISite;

/**
 * Site
 * @category Site
 */
export interface ISite {
    /**
     * Creates an instance of the site library.
     * @param url - (Optional) The site url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): SP.ISite;

    /**
     * Method to check if a site collection exists.
     * @param url - The absolute url of the site collection.
     */
    exists(url: string): IBaseExecution<ISiteExists>;

    /**
     * Method to get the app context information.
     * @param siteUrl - The absolute url of the site.
     */
    getAppContext(siteUrl: string): IBaseExecution;

    /**
     * Method to get the url of a site, by its id.
     * @param id - The site id.
     */
    getUrlById(id: string): IBaseExecution<ISiteUrl>;
}

/**
 * Site Exists
 */
export interface ISiteExists {
    /** True if the site collection exists, false otherwise. */
    Exists: boolean;
}

/**
 * Site Url
 */
export interface ISiteUrl {
    /** The site url. */
    GetUrlById: string;
}
