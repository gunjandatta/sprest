declare module GD.Types {
    /**
     * Users
     */
    interface IUsers extends IBase {
        /**
         * Properties
         */

        /** The user collection. */
        results: Array<IUser>;

        /**
         * Methods
         */

        /**
         * Adds a site to the site collection.
         * @param userInfo - The user creation information.
         */
        add(userInfo:ComplexTypes.UserCreationInformation): IUser;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IUsers;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IUsers;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IUsers;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IUsers;

        /**
         * Gets the user with the specified email address.
         * @param email - The email of the user to get.
         */
        getByEmail(email): IUser;

        /**
         * Gets the user with the specified member identifier (ID).
         * @param id - The ID of the user to get.
         */
        getById(id): IUser;

        /**
         * Gets the user with the specified login name.
         * @param loginName - The login name of the user to get, passed as an alias in the query string.
         */
        getByLoginName(loginName): IUser;

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

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ComplexTypes.ODataQuery): IUsers;
    }
}
