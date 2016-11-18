declare module $REST.Types {
    /**
     * Versions
     */
    interface IVersions extends IBase {
        /**
         * Properties
         */

        /**
         * Methods
         */

        /**
         * Deletes all versions in the collection.
         */
        deleteAll(): any;

        /**
         * Deletes a version, by the specified id.
         * @param id - The version id to delete.
         */
        deleteById(id): any;

        /**
         * Deletes a version, by the specified label.
         * @param label - The version label to delete.
         */
        deleteByLabel(label): any;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IVersions;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IVersions;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IVersions;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IVersions;

        /**
         * Gets the version with the specified ID.
         * @param id - The version id to get.
         */
        getById(id): any;

        /**
         * Restores a version, by the specified label.
         * @param label - The version label to restore.
         */
        restoreByLabel(label): any;
    }
}
