import * as Types from "../../mapper/types";
import { ITargetInfoProps } from "../../utils/types";

/**
 * INavigation
 */
export const Navigation: INavigation;

/**
 * Navigation
 */
export interface INavigation {
    /**
     * Creates an instance of the navigation library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): Types.INavigationServiceREST;
}