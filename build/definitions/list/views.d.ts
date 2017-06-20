import { IBase, IBaseCollection, IView, IViewCreationInformation, IViewQueryResult, IViewResult } from "..";
/**
 * Views
 */
export interface IViews extends IBaseCollection<IViewResult, IViewQueryResult> {
    /**
     * Adds a list view to the view collection.
     */
    add(parameters: IViewCreationInformation): IBase<IView>;
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
    next(): IBase<IViews>;
}
