import { IBase, IBaseCollection, IUser, IUserCreationInformation, IUserQueryResult, IUserResult } from "..";
/**
 * Methods
 */
export interface IUsersMethods {
    /**
     * Adds a site to the site collection.
     * @param userInfo - The user creation information.
     */
    add(userInfo: IUserCreationInformation): IBase<IUserResult>;
    /**
     * Gets the user with the specified email address.
     * @param email - The email of the user to get.
     */
    getByEmail(email: any): IBase<IUserResult>;
    /**
     * Gets the user with the specified member identifier (ID).
     * @param id - The ID of the user to get.
     */
    getById(id: any): IBase<IUserResult>;
    /**
     * Gets the user with the specified login name.
     * @param loginName - The login name of the user to get, passed as an alias in the query string.
     */
    getByLoginName(loginName: any): IBase<IUserResult>;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IUsers>;
    /**
     * Removes the user with the specified ID.
     * @param id - The ID of the user to remove.
     */
    removeById(id: any): IBase;
    /**
     * Removes the user with the specified login name.
     * @param loginName - The login name of the user to remove.
     */
    removeByLoginName(loginName: any): IBase;
}
/**
 * Users
 */
export interface IUsers extends IUsersMethods, IBaseCollection<IUser, IUserResult, IUserQueryResult> {
}
/**
 * User Results
 */
export interface IUserResults extends IUsersMethods, IBaseCollection<IUserResult, IUserResult, IUserQueryResult> {
}
