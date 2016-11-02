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
        add(parameters:Settings.WebCreationInformation): IWeb;

        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): IWebs;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IWebs;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IWebs;
    }
}
