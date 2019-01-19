import { IBaseExecution, IBaseCollection } from "../../utils/types/base";
import { IListItem, IListItemQueryResult, IListItemResult } from ".";

/**
 * Methods
 */
export interface IListItemsMethods {
    /**
     * Adds an item to the list item collection.
     * @param data - The item properties.
     */
    add(data): IBaseExecution<IListItem, IListItemResult>;

    /**
     * Gets an item by the specified id.
     * @param id - The item id.
     */
    getById(id): IListItem & IBaseExecution<IListItem, IListItemResult, IListItemQueryResult>;

    /**
     * Method to get the next set of results.
     */
    next(): IBaseExecution<IListItems, IListItemResults>;
}

/**
 * List Items
 */
export interface IListItems extends IListItemsMethods, IBaseCollection<IListItem, IListItemResult, IListItemQueryResult> { }

/**
 * List Item Results
 */
export interface IListItemResults extends IListItemsMethods, IBaseCollection<IListItemResult, IListItemResult, IListItemQueryResult> { }