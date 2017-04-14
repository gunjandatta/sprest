import { IContentTypes, IFields, ILists, ISPConfigProps, IUserCustomActions } from "../../definitions";
/**
 * Next Code Update:
 * Update code to use web and lists object that are passed to each method.
 * Use the "done" to wait for all requests to complete, instead of using promises.
 * Test then release to npm.
 */
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class SPConfig {
    /**
     * Global Properties
     */
    private _configuration;
    /**
     * Constructor
     */
    constructor(cfg: ISPConfigProps);
    /**
     * Public Methods
     */
    install(webUrl?: string, callback?: any, cfgType?: number): void;
    installByType: (cfgType: number, webUrl?: string) => IFields | IContentTypes | IUserCustomActions | ILists;
    uninstall(webUrl?: string, callback?: any, cfgType?: number): void;
    uninstallByType: (cfgType: number, webUrl?: string) => IFields | IContentTypes | IUserCustomActions | ILists;
    /**
     * Methods
     */
    private createContentTypes;
    private createFields;
    private createLists;
    private createListViews;
    private createUserCustomActions;
    private isCustomField;
    private removeContentTypes;
    private removeFields(fields, customFields, listInfo?);
    private removeLists(lists, cfg);
    private removeUserCustomActions;
    private updateList;
    private updateListView;
}
