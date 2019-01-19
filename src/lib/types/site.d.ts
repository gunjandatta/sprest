import * as Types from "../../mapper/types";
import { IBaseLib } from "../../utils/types/base";
import { ITargetInfoProps } from "../../utils/types";

/**
 * Site
 */
export const Site: ISite;

/**
 * Site
 */
export interface ISite {
    /**
     * Creates an instance of the site library.
     * @param url - (Optional) The site url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): Types.ISite;

    /**
     * Method to check if a site collection exists.
     * @param url - The absolute url of the site collection.
     */
    exists(url: string): IBaseLib<Types.ISiteExists>;

    /**
     * Method to get the app context information.
     * @param siteUrl - The absolute url of the site.
     */
    getAppContext(siteUrl: string): IBaseLib;

    /**
     * Method to get the url of a site, by its id.
     * @param id - The site id.
     */
    getUrlById(id: string): IBaseLib<Types.ISiteUrl>;
}