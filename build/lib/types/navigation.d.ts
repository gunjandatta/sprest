import * as Types from "../../mapper/types";
import { ITargetInfo } from "../../utils/types";
/**
 * Navigation
 */
export interface INavigation {
    /**
     * Creates an instance of the navigation library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfo): Types.INavigationServiceREST;
}
