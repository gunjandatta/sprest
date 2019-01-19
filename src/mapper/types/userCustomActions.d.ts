import { SP } from "gd-sprest-def";
import { IBaseExecution, IBaseCollection } from "../../utils/types/base";
import { IUserCustomAction, IUserCustomActionQueryResult, IUserCustomActionResult } from ".";

/**
 * Methods
 */
export interface IUserCustomActionsMethods {
    /**
     * Adds a custom actino to the user custom action collection. 
     * @param parameters - The user custom action information.
     */
    add(parameters: SP.UserCustomAction): IBaseExecution<IUserCustomAction, IUserCustomActionResult>;

    /**
     * Deletes all custom actions in the collection.
     */
    clear(): IBaseExecution;

    /**
     * Returns the custom action with the specified identifier.
     * @param id - The ID of the user custom action to get.
     */
    getById(id): IUserCustomAction & IBaseExecution<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult>;

    /**
     * Method to get the next set of results.
     */
    next(): IBaseExecution<IUserCustomActions, IUserCustomActionResults>;
}

/**
 * User Custom Actions
 */
export interface IUserCustomActions extends IUserCustomActionsMethods, IBaseCollection<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> {
}

/**
 * User Custom Action Results
 */
export interface IUserCustomActionResults extends IUserCustomActionsMethods, IBaseCollection<IUserCustomActionResult, IUserCustomActionResult, IUserCustomActionQueryResult> { }