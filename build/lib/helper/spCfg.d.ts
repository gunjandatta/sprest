import { IContentTypes, IFields, IFolder, ILists, ISPConfigProps, IUserCustomActions } from "../../definitions";
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
    installByType: (cfgType: number, callback?: any, targetName?: string) => IFields | IContentTypes | IUserCustomActions | IFolder | ILists;
    installList(listName: string, callback?: any): void;
    installSiteCustomAction(caName: string, callback?: any): void;
    installWebCustomAction(caName: string, callback?: any): void;
    uninstall(callback?: any, cfgType?: number): void;
    uninstallByType: (cfgType: number, callback?: any, targetName?: string) => IFields | IContentTypes | IUserCustomActions | IFolder | ILists;
    uninstallList(listName: string, callback?: any): void;
    uninstallSiteCustomAction(caName: string, callback?: any): void;
    uninstallWebCustomAction(caName: string, callback?: any): void;
    /**
     * Methods
     */
    private createContentType;
    private createContentTypes;
    private createFields;
    private createLists;
    private createListViews;
    private createUserCustomActions;
    private createWebParts;
    private isInConfiguration;
    private removeContentTypes;
    private removeFields(fields, cfg, listInfo?);
    private removeLists(lists, cfg, targetList?);
    private removeUserCustomActions;
    private removeWebParts(folder, cfg);
    private updateFieldSchemaXml;
    private updateList;
    private updateListView;
}
