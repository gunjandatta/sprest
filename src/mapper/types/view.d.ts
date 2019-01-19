import { SP } from "gd-sprest-def";
import { IBaseLib } from "../../utils/types/base";
import { IViewFields } from ".";

/**
 * View Methods
 */
export interface IViewMethods {
    /**
     * Deletes the view.
     */
    delete(): IBaseLib;

    /**
     * Returns the list view as HTML.
     */
    renderAsHtml(): IBaseLib;

    /**
     * Updates it's properties.
     * @param data - The list properties to update.
     */
    update(data): IBaseLib;
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
export interface IViewResult extends IViewMethods, SP.View, IViewQueryProps, IBaseLib<IView, IViewResult, IViewQueryResult> { }

/**
 * View
 */
export interface IView extends IViewMethods, IViewQueryProps, IBaseLib<IView, IViewResult, IViewQueryResult> { }