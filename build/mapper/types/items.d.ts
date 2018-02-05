import { IBase, IBaseCollection } from "../../utils/types";
import { IListItem, IListItemQueryResult, IListItemResult } from ".";
export interface IListItemsMethods {
    add(data: any): IBase<IListItem, IListItemResult>;
    getById(id: any): IListItem & IBase<IListItem, IListItemResult, IListItemQueryResult>;
    next(): IBase<IListItems, IListItemResults>;
}
export interface IListItems extends IListItemsMethods, IBaseCollection<IListItem, IListItemResult, IListItemQueryResult> {
}
export interface IListItemResults extends IListItemsMethods, IBaseCollection<IListItemResult, IListItemResult, IListItemQueryResult> {
}
