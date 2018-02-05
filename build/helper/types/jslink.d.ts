/**
 * JSLink Methods
 */
export interface IJSLink {
    /**
     * Internal field to method mapper
     */
    _fieldToMethodMapper: any;
    /**
     * Internal field used by the hideField method.
     */
    _hideEventFl: boolean;
    /**
     * Disables edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     * @param requireValueFl - Flag to only disable the field, if a value exists.
     */
    disableEdit(ctx: any, field: any, requireValueFl?: boolean): string;
    /**
     * Disable quick edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     */
    disableQuickEdit(ctx: any, field: any): any;
    /**
     * Returns the list view.
     * @param ctx - The client context.
     */
    getListView(ctx: any): any;
    /**
     * Returns the list view items.
     * @param ctx - The client context.
     */
    getListViewItems(ctx: any): any;
    /**
     * Returns the selected list view items
     */
    getListViewSelectedItems(): any;
    /**
     * Returns the webpart containing the JSLink field/form/view.
     * @param ctx - The client context.
     */
    getWebPart(ctx: any): any;
    /**
     * Hides the specified field.
     * @param ctx - The client context.
     * @param field - The field to hide.
     */
    hideField(ctx: any, field: any): any;
    /**
     * Removes the field and html from the page.
     * @param ctx - The client context.
     * @param field - The field to remove.
     */
    removeField(ctx: any, field: any): any;
    /**
     * Method to render the default html for a field.
     * @param ctx - The client context.
     * @param field - The form field.
     * @param formType - The form type. (Display, Edit, New or View)
     */
    renderField(ctx: any, field: any, formType?: number): any;
}
