import { IBase, ITargetInfo } from "../../utils";
import { Types } from "..";

/**
 * Navigation Methods
 */
export interface INavigationServiceRESTMethods {
}

/**
 * Navigation Properties
 */
export interface INavigationServiceRESTProps {
}

/**
 * Navigation Queryable Properties
 */
export interface INavigationServiceRESTQueryProps {
    MenuState(): IBase<Types.IMenuState>;
    MenuState(key: number): IBase<Types.IMenuState>;
}

/**
 * Navigation
 */
export interface INavigationServiceREST extends INavigationServiceRESTMethods, INavigationServiceRESTQueryProps, IBase<INavigationServiceREST> {
    /**
     * Constructor
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    new(url?: string, targetInfo?: ITargetInfo): INavigationServiceREST;
}
