import {
    IBase,
    IFileVersion,
    ODataQuery
} from "..";
/**
 * File Versions
 */
export interface IFileVersions extends IBase {
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
    execute(callback?:(value?:IFileVersions, ...args) => any): IFileVersions;

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
    execute(callback:(value?:IFileVersions, ...args) => any, waitFl:boolean): IFileVersions;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IFileVersions;

    /**
     * Method to get the next set of results.
     */
    next(): IFileVersions;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query:ODataQuery): IFileVersions;
}