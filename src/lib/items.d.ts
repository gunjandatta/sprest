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
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): IListItems;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IListItems;

        /**
         * Gets an item by the specified id.
         * @param id - The item id.
         */
        getById(id): IListItem;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IListItems;
    }
}
