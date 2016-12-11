declare module $REST.Types {
    /**
     * List Items
     */
    interface IListItems extends IBase {
        /**
         * Properties
         */

        /** The list item collection. */
        results: Array<IListItem>;

        /**
         * Methods
         */

        /**
         * Adds an item to the list item collection.
         * @param data - The item properties.
         */
        add(data): IListItem;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IListItems;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IListItems;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IListItems;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IListItems;

        /**
         * Gets an item by the specified id.
         * @param id - The item id.
         */
        getById(id): IListItem;

        /**
         * Method to get the next set of results.
         */
        next(): IListItems;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ComplexTypes.ODataQuery): IListItems;
    }
}
