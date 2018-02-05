export interface IJSLink {
    _fieldToMethodMapper: any;
    _hideEventFl: boolean;
    disableEdit(ctx: any, field: any, requireValueFl?: boolean): string;
    disableQuickEdit(ctx: any, field: any): any;
    getListView(ctx: any): any;
    getListViewItems(ctx: any): any;
    getListViewSelectedItems(): any;
    getWebPart(ctx: any): any;
    hideField(ctx: any, field: any): any;
    removeField(ctx: any, field: any): any;
    renderField(ctx: any, field: any, formType?: number): any;
}
