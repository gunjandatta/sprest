import { SP } from "gd-sprest-def";
import { IBaseExecution, IBaseCollection, IBaseCollectionResult } from "../utils/types/base";
import { IUser, IUserQueryResult, IUserResult } from ".";

/**
 * Methods
 */
export interface IUsersMethods {
    /**
     * Adds a site to the site collection.
     * @param userInfo - The user creation information.
     */
    add(userInfo: SP.UserCreationInformation): IBaseExecution<IUser, IUserResult>;

    /**
     * Gets the user with the specified email address.
     * @param email - The email of the user to get.
     */
    getByEmail(email): IUser & IBaseExecution<IUser, IUserResult, IUserQueryResult>;

    /**
     * Gets the user with the specified member identifier (ID).
     * @param id - The ID of the user to get.
     */
    getById(id): IUser & IBaseExecution<IUser, IUserResult, IUserQueryResult>;

    /**
     * Gets the user with the specified login name.
     * @param loginName - The login name of the user to get, passed as an alias in the query string.
     */
    getByLoginName(loginName): IUser & IBaseExecution<IUser, IUserResult, IUserQueryResult>;

    /**
     * Removes the user with the specified ID.
     * @param id - The ID of the user to remove.
     */
    removeById(id): IBaseExecution;

    /**
     * Removes the user with the specified login name.
     * @param loginName - The login name of the user to remove.
     */
    removeByLoginName(loginName): IBaseExecution;
}

/**
 * Users
 */
export interface IUsers extends IUsersMethods, IBaseCollection<IUser, IUserResult, IUserQueryResult> { }

/**
 * User Query Results
 */
export interface IUserQueryResults extends IUsersMethods, IBaseCollectionResult<IUserQueryResult> { }

/**
 * User Results
 */
export interface IUserResults extends IUsersMethods, IBaseCollection<IUserResult, IUserResult, IUserQueryResult> { }