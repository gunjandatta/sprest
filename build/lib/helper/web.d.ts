import { Promise } from "../../utils";
import { ISPCfgFieldInfo, ISPConfigProps } from "../../definitions";
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
    createContentTypes: () => Promise;
    createFields: (customFields: ISPCfgFieldInfo[], listName?: string, titleFieldName?: string) => Promise;
    private createList;
    private createLists;
    private createUserCustomAction;
    private createUserCustomActions;
    execute(callback: any): void;
}
