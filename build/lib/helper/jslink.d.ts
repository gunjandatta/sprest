/**
 * JSLink Helper Methods
 */
export declare const JSLinkHelper: {
    hideEventFl: boolean;
    _fieldToMethodMapper: {
        'Attachments': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'Boolean': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'Currency': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'Calculated': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'Choice': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'Computed': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'DateTime': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'File': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'Integer': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'Lookup': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'LookupMulti': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'MultiChoice': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'Note': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'Number': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'Text': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'URL': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'User': {
            1: any;
            2: any;
            3: any;
            4: any;
        };
        'UserMulti': {
            1: any;
            2: any;
            3: any;
            4: any;
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
