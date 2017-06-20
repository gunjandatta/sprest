import { IUserQueryResults } from "./userResults";
import { IBase, IUser } from "..";
/**
 * User Methods
 */
export interface IUserMethods extends IBase<IUser, IUserQueryResults> {
    /**
     * Deletes the user custom action.
     */
    delete(): IBase;
}
