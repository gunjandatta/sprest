import {
    IBase,
    IUserCustomAction
} from "..";

/**
 * User Custom Action Methods
 */
export interface IUserCustomActionMethods extends IBase<IUserCustomAction, IUserCustomAction> {
    /**
     * Deletes the user custom action.
     */
    delete(): IBase;
}