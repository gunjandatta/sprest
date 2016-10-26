declare module $REST.Types {
    /**
     * Views
     */
    interface IViews extends IBase {
        /**
         * Properties
         */

        /** The view collection. */
        results: Array<IView>;

        /**
         * Methods
         */

        /**
         * Adds a list view to the view collection.
         */
        add(parameters:Settings.ViewCreationInformation): IView;

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(IViews) => void): IViews;

        /**
         * Gets the list view with the specified ID.
         * @param id - The ID of the view.
         */
        getById(id): IView;

        /**
         * Gets the list view with the specified title.
         * @param title - The case-sensitive title of the view.
         */
        getByTitle(title): IView;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IViews;
    }
}
