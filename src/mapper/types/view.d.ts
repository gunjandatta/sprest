import { SP } from "gd-sprest-def";
import { IBaseExecution } from "../../utils/types/base";
import { IViewFields } from ".";

/**
 * View Methods
 */
export interface IViewMethods {
    /**
     * Deletes the view.
     */
    delete(): IBaseExecution;

    /**
     * Returns the list view as HTML.
     */
    renderAsHtml(): IBaseExecution;

    /**
     * Updates it's properties.
     * @param data - The list properties to update.
     */
    update(data): IBaseExecution;
}

/**
 * View Query Properties
 */
export interface IViewQueryProps {
    /** Gets a value that specifies the collection of fields in the list view. */
    ViewFields(): IViewFields;
}

/**
 * View Query Result
 */
export interface IViewQueryResult extends IViewMethods, SP.View {
    /** A value that specifies the collection of fields in the list view. */
    ViewFields: IViewFields;
}

/**
 * View Result
 */
export interface IViewResult extends IViewMethods, SP.View, IViewQueryProps, IBaseExecution<IView, IViewResult, IViewQueryResult> { }

/**
 * View
 */
export interface IView extends IViewMethods, IViewQueryProps, IBaseExecution<IView, IViewResult, IViewQueryResult> { }