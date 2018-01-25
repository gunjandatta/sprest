import { IBase, IBaseCollection } from "../../utils/index.def";
import { IUserCustomAction, IUserCustomActionCreationInformation, IUserCustomActionQueryResult, IUserCustomActionResult } from ".";
/**
 * Methods
 */
export interface IUserCustomActionsMethods {
    /**
     * Adds a custom actino to the user custom action collection.
     * @param parameters - The user custom action information.
     */
    add(parameters: IUserCustomActionCreationInformation): IBase<IUserCustomAction, IUserCustomActionResult>;
    /**
     * Deletes all custom actions in the collection.
     */
    clear(): IBase;
    /**
     * Returns the custom action with the specified identifier.
     * @param id - The ID of the user custom action to get.
     */
    getById(id: any): IUserCustomAction & IBase<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult>;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IUserCustomActions, IUserCustomActionResults>;
}
/**
 * User Custom Actions
 */
export interface IUserCustomActions extends IUserCustomActionsMethods, IBaseCollection<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> {
}
/**
 * User Custom Action Results
 */
export interface IUserCustomActionResults extends IUserCustomActionsMethods, IBaseCollection<IUserCustomActionResult, IUserCustomActionResult, IUserCustomActionQueryResult> {
}
