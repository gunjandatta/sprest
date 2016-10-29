declare module $REST.Types {
    /**
     * Field Links
     */
    interface IFieldLinks extends IBase {
        /**
         * Properties
         */

        /** The field link collection. */
        results: Array<any>;

        /**
         * Methods
         */

        /**
         * Adds a content type to the collection.
         * @param data - The field link properties.
         */
        add(data): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(IFieldLinks) => void): IFieldLinks;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IFieldLinks;

        /**
         * Gets the field link by its id.
         * @param id - The id of the field.
         */
        getById(id);

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IFieldLinks;
    }
}
