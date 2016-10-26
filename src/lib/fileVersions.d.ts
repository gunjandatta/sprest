declare module $REST.Types {
    /**
     * File Versions
     */
    interface IFileVersions extends IBase {
        /**
         * Properties
         */

        /** The file version collection. */
        results: Array<IFileVersion>;

        /**
         * Methods
         */

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(IFileVersions) => void): IFileVersions;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IFileVersions;
    }
}
