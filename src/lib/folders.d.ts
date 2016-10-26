declare module $REST.Types {
    /**
     * Folders
     */
    interface IFolders extends IBase {
        /**
         * Properties
         */

        /** The folder collection. */
        results: Array<IFolder>;

        /**
         * Methods
         */

        /**
         * Adds the folder that is located at the specified URL to the collection.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        add(url): IFolder;

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(IFolders) => void): IFolders;

        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The server-relative URL of the folder.
         */
        getbyurl(serverRelativeUrl);

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IFolders;
    }
}
