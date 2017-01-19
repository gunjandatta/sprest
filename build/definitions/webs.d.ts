import { ComplexTypes, IBase, IWeb, ODataQuery } from ".";
/**
 * Webs
 */
export interface IWebs extends IBase {
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
    add(parameters: ComplexTypes.WebCreationInformation): IWeb;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (...args) => any): IWebs;
    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): IWebs;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: any, waitFl: boolean): IWebs;
    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IWebs;
    /**
     * Method to get the next set of results.
     */
    next(): IWebs;
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): IWebs;
}
