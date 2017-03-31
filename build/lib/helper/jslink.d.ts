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
