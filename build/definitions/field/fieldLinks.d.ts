import { IBase, IFieldLink, ODataQuery } from "..";
/**
 * Field Links
 */
export interface IFieldLinks extends IBase {
    /**
     * Properties
     */
    /** The field link collection. */
    results: Array<IFieldLink>;
    /**
     * Methods
     */
    /**
     * Adds a content type to the collection.
     * @param data - The field link properties.
     */
    add(data: any): IBase;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: IFieldLinks, ...args) => any): IFieldLinks;
    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): IFieldLinks;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: IFieldLinks, ...args) => any, waitFl: boolean): IFieldLinks;
    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IFieldLinks;
    /**
     * Gets the field link by its id.
     * @param id - The id of the field.
     */
    getById(id: any): any;
    /**
     * Method to get the next set of results.
     */
    next(): IFieldLinks;
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): IFieldLinks;
}
