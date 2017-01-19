import {
    ComplexTypes,
    IBase,
    IList,
    ODataQuery
} from ".";
/**
 * Lists
 */
export interface ILists extends IBase {
    /**
     * Properties
     */

    /** The list collection. */
    results: Array<IList>;

    /**
     * Methods
     */

    /**
     * Adds a list to the list collection.
     * @param parameters - The list creation information.
     */
    add(parameters:ComplexTypes.ListCreationInformation): IList;

    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    ensureSiteAssetsLibrary(): IBase;

    /**
     * Gets a list that is the default location for wiki pages.
     */
    ensureSitePagesLibrary(): IBase;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?:(...args) => any): ILists;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl:boolean): ILists;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback:any, waitFl:boolean): ILists;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): ILists;

    /**
     * Returns the list with the specified list identifier.
     * @param id - The list id.
     */
    getById(id): IList;

    /**
     * Returns the list with the specified title from the collection.
     * @param title - The list title.
     */
    getByTitle(title): IList;

    /**
     * Method to get the next set of results.
     */
    next(): ILists;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query:ODataQuery): ILists;
}