import {
    IBase,
    IUser, IUserQueryResults
} from "..";

/**
 * User Methods
 */
export interface IUserMethods extends IBase<IUser, IUserQueryResults> {
    /**
     * Deletes the user custom action.
     */
    delete(): IBase;
}