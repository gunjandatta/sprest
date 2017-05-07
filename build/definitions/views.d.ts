import { ComplexTypes, IBase, IView, ODataQuery } from ".";
/**
 * Views
 */
export interface IViews extends IBase {
    /**
     * Properties
     */
    /** The view collection. */
    results: Array<IView>;
    /**
     * Methods
     */
    /**
     * Adds a list view to the view collection.
     */
    add(parameters: ComplexTypes.ViewCreationInformation): IView;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: IViews, ...args) => any): IViews;
    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): IViews;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: IViews, ...args) => any, waitFl: boolean): IViews;
    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IViews;
    /**
     * Gets the list view with the specified ID.
     * @param id - The ID of the view.
     */
    getById(id: any): IView;
    /**
     * Gets the list view with the specified title.
     * @param title - The case-sensitive title of the view.
     */
    getByTitle(title: any): IView;
    /**
     * Method to get the next set of results.
     */
    next(): IViews;
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): IViews;
}
