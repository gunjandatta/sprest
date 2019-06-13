import { Base, SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

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
    (url?: string, targetInfo?: ITargetInfoProps): SP.ISite;

    /**
     * Method to check if a site collection exists.
     * @param url - The absolute url of the site collection.
     */
    exists(url: string): Base.IBaseExecution<ISiteExists>;

    /**
     * Method to get the app context information.
     * @param siteUrl - The absolute url of the site.
     */
    getAppContext(siteUrl: string): Base.IBaseExecution;

    /**
     * Method to get the url of a site, by its id.
     * @param id - The site id.
     */
    getUrlById(id: string): Base.IBaseExecution<ISiteUrl>;
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
