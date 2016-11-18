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
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IFileVersions;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IFileVersions;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IFileVersions;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IFileVersions;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IFileVersions;
    }
}
