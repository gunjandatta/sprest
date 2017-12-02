import { IBase, IBaseCollection } from "../../utils";
import { IListItem, IListItemQueryResult, IListItemResult } from ".";
/**
 * Methods
 */
export interface IListItemsMethods {
    /**
     * Adds an item to the list item collection.
     * @param data - The item properties.
     */
    add(data: any): IBase<IListItem, IListItemResult>;
    /**
     * Gets an item by the specified id.
     * @param id - The item id.
     */
    getById(id: any): IListItem & IBase<IListItem, IListItemResult, IListItemQueryResult>;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IListItems, IListItemResults>;
}
/**
 * List Items
 */
export interface IListItems extends IListItemsMethods, IBaseCollection<IListItem, IListItemResult, IListItemQueryResult> {
}
/**
 * List Item Results
 */
export interface IListItemResults extends IListItemsMethods, IBaseCollection<IListItemResult, IListItemResult, IListItemQueryResult> {
}
