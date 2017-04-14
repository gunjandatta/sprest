import { IContentTypes, IFields, ISPCfgFieldInfo, ISPConfigProps, ISPCfgListInfo } from "../../definitions";
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
     * Methods
     */
    createContentTypes: (contentTypes: IContentTypes) => void;
    createFields: (fields: IFields, customFields: ISPCfgFieldInfo[], listInfo?: ISPCfgListInfo) => void;
    private createLists;
    private createListViews;
    private createUserCustomActions;
    execute(webUrl?: string, callback?: any, index?: number): void;
    private updateList;
    private updateListView;
}
