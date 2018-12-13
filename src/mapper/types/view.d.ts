import { SP } from "gd-sprest-def";
import { IBase } from "../../utils/types/base";
import { IViewFields } from ".";

/**
 * View Methods
 */
export interface IViewMethods {
    /**
     * Deletes the view.
     */
    delete(): IBase;

    /**
     * Returns the list view as HTML.
     */
    renderAsHtml(): IBase;

    /**
     * Updates it's properties.
     * @param data - The list properties to update.
     */
    update(data): IBase;
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
export interface IViewResult extends IViewMethods, SP.View, IViewQueryProps, IBase<IView, IViewResult, IViewQueryResult> { }

/**
 * View
 */
export interface IView extends IViewMethods, IViewQueryProps, IBase<IView, IViewResult, IViewQueryResult> { }