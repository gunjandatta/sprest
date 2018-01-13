/**
 * JSLink Helper Methods
 */
export interface IHelperJSLink {
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
/**
 * JSLink Helper Methods
 */
export declare const JSLinkHelper: {
    hideEventFl: boolean;
    _fieldToMethodMapper: {
        'Attachments': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'Boolean': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'Currency': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'Calculated': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'Choice': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'Computed': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'DateTime': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'File': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'Integer': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'Lookup': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'LookupMulti': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'MultiChoice': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'Note': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'Number': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'Text': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'URL': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'User': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
        'UserMulti': {
            4: any;
            1: any;
            2: any;
            3: any;
        };
    };
    disableEdit: (ctx: any, field: any, requireValueFl?: boolean) => string;
    disableQuickEdit: (ctx: any, field: any) => any;
    getListView: (ctx: any) => Element;
    getListViewItems: (ctx: any) => any;
    getListViewSelectedItems: () => any;
    getWebPart: (ctx: any) => Element;
    hideField: (ctx: any, field: any) => void;
    removeField: (ctx: any, field: any) => string;
    renderField: (ctx: any, field: any, formType?: number) => any;
};
