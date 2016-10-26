declare module $REST.Types {
    /**
     * Webs
     */
    interface IWebs extends IBase {
        /**
         * Properties
         */

        /** The web collection. */
        results: Array<IWeb>;

        /**
         * Methods
         */

        /**
         * Adds a site to the site collection.
         * @param parameters - The web creation information.
         */
        add(parameters:Settings.WebCreationInformation);

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(IWebs) => void): IWebs;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IWebs;
    }
}
