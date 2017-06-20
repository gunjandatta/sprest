import {
    IBase, IBaseCollection,
    IUserCustomAction, IUserCustomActionCreationInformation, IUserCustomActionQueryResult, IUserCustomActionResult
} from "..";

/**
 * User Custom Actions
 */
export interface IUserCustomActions extends IBaseCollection<IUserCustomActionResult, IUserCustomActionQueryResult> {
    /**
     * Adds a custom actino to the user custom action collection. 
     * @param parameters - The user custom action information.
     */
    add(parameters: IUserCustomActionCreationInformation): IBase<IUserCustomAction>;

    /**
     * Deletes all custom actions in the collection.
     */
    clear(): IBase;

    /**
     * Returns the custom action with the specified identifier.
     * @param id - The ID of the user custom action to get.
     */
    getById(id): IUserCustomAction;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IUserCustomActions>;
}