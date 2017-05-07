import { IBase, ODataQuery } from ".";
/**
 * Versions
 */
export interface IVersions extends IBase {
    /**
     * Properties
     */
    /**
     * Methods
     */
    /**
     * Deletes all versions in the collection.
     */
    deleteAll(): IBase;
    /**
     * Deletes a version, by the specified id.
     * @param id - The version id to delete.
     */
    deleteById(id: any): IBase;
    /**
     * Deletes a version, by the specified label.
     * @param label - The version label to delete.
     */
    deleteByLabel(label: any): IBase;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: IVersions, ...args) => any): IVersions;
    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): IVersions;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: IVersions, ...args) => any, waitFl: boolean): IVersions;
    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IVersions;
    /**
     * Gets the version with the specified ID.
     * @param id - The version id to get.
     */
    getById(id: any): IBase;
    /**
     * Method to get the next set of results.
     */
    next(): IVersions;
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): IVersions;
    /**
     * Restores a version, by the specified label.
     * @param label - The version label to restore.
     */
    restoreByLabel(label: any): IBase;
}
