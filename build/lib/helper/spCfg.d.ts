import { IContentTypes, IFields, ILists, ISPConfigProps, IUserCustomActions } from "../../definitions";
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class SPConfig {
    /**
     * Global Properties
     */
    private _configuration;
    private _webUrl;
    /**
     * Constructor
     */
    constructor(cfg: ISPConfigProps, webUrl?: string);
    /**
     * Public Methods
     */
    install(callback?: any, cfgType?: number): void;
    installByType: (cfgType: number, callback?: any, targetName?: string) => IFields | IContentTypes | IUserCustomActions | ILists;
    installContentType(ctName: string, callback?: any): void;
    installList(listName: string, callback?: any): void;
    installSiteCustomAction(caName: string, callback?: any): void;
    installWebCustomAction(caName: string, callback?: any): void;
    uninstall(callback?: any, cfgType?: number): void;
    uninstallByType: (cfgType: number, callback?: any, targetName?: string) => IFields | IContentTypes | IUserCustomActions | ILists;
    uninstallContentType(ctName: string, callback?: any): void;
    uninstallList(listName: string, callback?: any): void;
    uninstallSiteCustomAction(caName: string, callback?: any): void;
    uninstallWebCustomAction(caName: string, callback?: any): void;
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
    private removeLists(lists, cfg, targetList?);
    private removeUserCustomActions;
    private updateList;
    private updateListView;
}
