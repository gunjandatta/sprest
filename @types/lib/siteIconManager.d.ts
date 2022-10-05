import { SiteIconManager as SiteIconManagerCore } from "gd-sprest-def/lib/Microsoft/SharePoint/Portal/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/siteIconManager
 *
 */
export const SiteIconManager: ISiteIconManager;

/**
 * Site Icon Manager
 * @category Site Icon Manager
 */
export interface ISiteIconManager {
    /**
     * Creates an instance of the site library.
     * @param url - (Optional) The site url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): SiteIconManagerCore;
}