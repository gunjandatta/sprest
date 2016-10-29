declare module $REST.Types {
    /**
     * Content Types
     */
    interface IContentTypes extends IBase {
        /**
         * Properties
         */

        /** The content type collection. */
        results: Array<IContentType>;

        /**
         * Methods
         */

        /**
         * Adds a content type to the collection.
         * @param parameters - The content type creation information.
         */
        add(parameters:Settings.ContentTypeCreationInformation): IContentType;

        /**
         * Adds an existing content type to this collection.
         * @param contentTypeId - The content type id to add.
         */
        addAvailableContentType(contentTypeId): IContentType;


        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(IContentTypes) => void): IContentTypes;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IContentTypes;

        /**
         * Gets a content type by id.
         * @param id - The content type id.
         */
        getById(id): IContentType;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IContentTypes;
    }
}
