import { ISPConfigProps } from "../../definitions";
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class SPConfig {
    /**
     * Global Properties
     */
    private _cfgType;
    private _configuration;
    private _targetName;
    private _webUrl;
    /**
     * Constructor
     */
    constructor(cfg: ISPConfigProps, webUrl?: string);
    /**
     * Public Methods
     */
    install(callback?: any, cfgType?: number, targetName?: string): void;
    installByType: (cfgType: number, callback?: any, targetName?: string) => void;
    installList(listName: string, callback?: any): void;
    installSiteCustomAction(caName: string, callback?: any): void;
    installWebCustomAction(caName: string, callback?: any): void;
    uninstall(callback?: any, cfgType?: number, targetName?: string): void;
    uninstallByType: (cfgType: number, callback?: any, targetName?: string) => void;
    uninstallList(listName: string, callback?: any): void;
    uninstallSiteCustomAction(caName: string, callback?: any): void;
    uninstallWebCustomAction(caName: string, callback?: any): void;
    /**
     * Methods
     */
    private createContentTypes;
    private createFields;
    private createLists;
    private createUserCustomActions;
    private createViews;
    private createWebParts;
    private installSite;
    private installWeb;
    private isInCollection;
    private removeContentTypes;
    private removeFields;
    private removeLists;
    private removeUserCustomActions;
    private removeWebParts;
    private updateFieldSchemaXml;
    private updateLists;
    private updateViews;
    private uninstallSite;
    private uninstallWeb;
}
