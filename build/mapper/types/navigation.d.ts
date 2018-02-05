import { IBase, ITargetInfo } from "../../utils/types";
import { IMenuState } from ".";
export interface INavigationServiceRESTMethods {
    getMenuState(menuNodeKey?: number, depth?: number, customProperties?: string, mapProviderName?: string): IBase<IMenuState>;
}
export interface INavigationServiceRESTProps {
}
export interface INavigationServiceRESTQueryProps {
    MenuState(): IBase<IMenuState>;
    MenuState(key: number): IBase<IMenuState>;
}
export interface INavigationServiceREST extends INavigationServiceRESTMethods, INavigationServiceRESTQueryProps, IBase<INavigationServiceREST> {
    new (url?: string, targetInfo?: ITargetInfo): INavigationServiceREST;
}
