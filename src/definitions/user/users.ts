import {
    IBase, IBaseCollection,
    IUser, IUserCreationInformation, IUserMethods, IUserQueryResults
} from "..";

/**
 * Users
 */
export interface IUsers extends IBaseCollection<IUser, IUserQueryResults> {
    /**
     * Adds a site to the site collection.
     * @param userInfo - The user creation information.
     */
    add(userInfo: IUserCreationInformation): IBase<IUser>;

    /**
     * Gets the user with the specified email address.
     * @param email - The email of the user to get.
     */
    getByEmail(email): IUserMethods;

    /**
     * Gets the user with the specified member identifier (ID).
     * @param id - The ID of the user to get.
     */
    getById(id): IUserMethods;

    /**
     * Gets the user with the specified login name.
     * @param loginName - The login name of the user to get, passed as an alias in the query string.
     */
    getByLoginName(loginName): IUserMethods;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IUsers>;

    /**
     * Removes the user with the specified ID.
     * @param id - The ID of the user to remove.
     */
    removeById(id): IBase;

    /**
     * Removes the user with the specified login name.
     * @param loginName - The login name of the user to remove.
     */
    removeByLoginName(loginName): IBase;
}