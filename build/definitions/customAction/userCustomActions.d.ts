import { IBase, IResults, IUserCustomAction, IUserCustomActionCreationInformation, IUserCustomActionMethods } from "..";
/**
 * User Custom Actions
 */
export interface IUserCustomActions extends IResults<IUserCustomAction>, IBase<IResults<IUserCustomAction>, IResults<IUserCustomAction>> {
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
    getById(id: any): IUserCustomActionMethods;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IUserCustomActions>;
}
