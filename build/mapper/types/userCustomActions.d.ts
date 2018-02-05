import { IBase, IBaseCollection } from "../../utils/types";
import { IUserCustomAction, IUserCustomActionCreationInformation, IUserCustomActionQueryResult, IUserCustomActionResult } from ".";
export interface IUserCustomActionsMethods {
    add(parameters: IUserCustomActionCreationInformation): IBase<IUserCustomAction, IUserCustomActionResult>;
    clear(): IBase;
    getById(id: any): IUserCustomAction & IBase<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult>;
    next(): IBase<IUserCustomActions, IUserCustomActionResults>;
}
export interface IUserCustomActions extends IUserCustomActionsMethods, IBaseCollection<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> {
}
export interface IUserCustomActionResults extends IUserCustomActionsMethods, IBaseCollection<IUserCustomActionResult, IUserCustomActionResult, IUserCustomActionQueryResult> {
}
