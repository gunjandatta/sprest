import { IBase, IBaseCollection } from "../../utils/types";
import { IWeb, IWebCreationInformation, IWebQueryResult, IWebResult } from ".";
export interface IWebsMethods {
    add(parameters: IWebCreationInformation): IBase<IWeb, IWebResult>;
    next(): IWebs & IBase<IWebs, IWebResults>;
}
export interface IWebs extends IWebsMethods, IBaseCollection<IWeb, IWebResult, IWebQueryResult> {
}
export interface IWebResults extends IWebsMethods, IBaseCollection<IWebResult, IWebResult, IWebQueryResult> {
}
