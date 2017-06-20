import {
    IBase,
    IView, IViewQueryResults
} from "..";

/**
 * View Methods
 */
export interface IViewMethods extends IBase<IView, IViewQueryResults> {
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