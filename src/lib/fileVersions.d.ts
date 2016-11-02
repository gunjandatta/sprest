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
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): IFileVersions;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IFileVersions;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IFileVersions;
    }
}
