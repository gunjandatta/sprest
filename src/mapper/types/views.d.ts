import { SP } from "gd-sprest-def";
import { IBase, IBaseCollection } from "../../utils/types/base";
import { IView, IViewQueryResult, IViewResult } from ".";

/**
 * Methods
 */
export interface IViewsMethods {
    /**
     * Adds a list view to the view collection.
     */
    add(parameters: SP.ViewCreationInformation): IBase<IView, IViewResult>;

    /**
     * Gets the list view with the specified ID.
     * @param id - The ID of the view.
     */
    getById(id): IView & IBase<IView, IViewResult, IViewQueryResult>;

    /**
     * Gets the list view with the specified title.
     * @param title - The case-sensitive title of the view.
     */
    getByTitle(title): IView & IBase<IView, IViewResult, IViewQueryResult>;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IViews>;
}

/**
 * Views
 */
export interface IViews extends IViewsMethods, IBaseCollection<IView, IViewResult, IViewQueryResult> { }

/**
 * View Results
 */
export interface IViewResults extends IViewsMethods, IBaseCollection<IViewResult, IViewResult, IViewQueryResult> { }