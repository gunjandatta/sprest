import { IBase, IBaseCollection } from "../../utils/types";
import { IView, IViewCreationInformation, IViewQueryResult, IViewResult } from ".";
export interface IViewsMethods {
    add(parameters: IViewCreationInformation): IBase<IView, IViewResult>;
    getById(id: any): IView & IBase<IView, IViewResult, IViewQueryResult>;
    getByTitle(title: any): IView & IBase<IView, IViewResult, IViewQueryResult>;
    next(): IBase<IViews>;
}
export interface IViews extends IViewsMethods, IBaseCollection<IView, IViewResult, IViewQueryResult> {
}
export interface IViewResults extends IViewsMethods, IBaseCollection<IViewResult, IViewResult, IViewQueryResult> {
}
