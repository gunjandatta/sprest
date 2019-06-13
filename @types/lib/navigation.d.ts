import { Microsoft } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

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
    (url?: string, targetInfo?: ITargetInfoProps): Microsoft.SharePoint.Navigation.REST.INavigationServiceRest;
}