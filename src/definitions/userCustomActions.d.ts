declare module $REST.Types {
    /**
     * User Custom Actions
     */
    interface IUserCustomActions extends IBase {
        /**
         * Properties
         */

        /** The user custom action collection. */
        results: Array<IUserCustomAction>;

        /**
         * Methods
         */

        /**
         * Adds a custom actino to the user custom action collection. 
         * @param parameters - The user custom action information.
         */
        add(parameters:Settings.UserCustomActionCreationInformation): IUserCustomAction;

        /**
         * Deletes all custom actions in the collection.
         */
        clear(): any;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IUserCustomActions;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IUserCustomActions;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IUserCustomActions;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IUserCustomActions;

        /**
         * Returns the custom action with the specified identifier.
         * @param id - The ID of the user custom action to get.
         */
        getById(id): IUserCustomAction;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IUserCustomActions;
    }
}
