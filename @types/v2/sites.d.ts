import { IBaseExecution, IBaseQuery } from "gd-sprest-def/lib/base";
import {
    drive, driveMethods, list, listMethods,
    listItem, listItemMethods, site, siteMethods
} from "gd-sprest-def/lib/Microsoft/Graph/entityTypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/v2.1/sites
 *
 * #### Get the current site
 *
 * ```typescript
 * import { Sites } from "gd-sprest";
 * 
 * Sites().execute(site => {
 *   let siteTitle = site.title;
 * });
 * ```
 */
export const sites: Isites;

export interface IsiteGetDriveProps {
    listName: string;
    siteId?: string;
    siteUrl?: string;
    webId?: string;
}

export interface IsiteProps {
    listName?: string;
    siteId?: string;
    siteUrl?: string;
    webId?: string;
}

export interface IsiteIdResult {
    digestValue: string;
    siteId: string;
    siteUrl: string;
    webId: string;
    webUrl: string;
}

/**
 * Sites
 * The v2.1 REST endpoint.
 * @category Sites
 */
export interface Isites {
    /**
     * Creates an instance of the site library.
     * @param siteId - (Optional) The site id to target, current by default.
     * @param webId - (Optional) The sub-site id to target.
     * @param targetInfo - (Optional) The target information.
     */
    (props?: { siteId?: string, webId?: string, targetInfo?: ITargetInfoProps }): IBaseQuery<site> & siteMethods;

    /** Returns the current web. */
    static getCurrentWeb(): IBaseQuery<site> & siteMethods;

    /** Returns a drive for a site. */
    static getDrive(props: IsiteGetDriveProps): PromiseLike<IBaseQuery<drive> & driveMethods>;

    /** Returns a drive for a site. */
    static getFile(props: IsiteProps & { fileUrl: string }): PromiseLike<IBaseQuery<driveItem> & driveItemMethods>;

    /** Returns a list for a site. */
    static getList(props: IsiteProps & { listId?: string }): PromiseLike<IBaseQuery<list> & listMethods>;

    /** Returns the url to the site, web, list or file. */
    static getIdByUrl(url: string): PromiseLike<IsiteIdResult>;
}