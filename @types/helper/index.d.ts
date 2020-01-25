import { Base, SP } from "gd-sprest-def";
import { IFieldSchemaXML } from "./fieldSchemaXML";
import { IJSLink } from "./jslink";
import { IRibbonLink, ISuiteBarLink, ILinkInfo } from "./linkInfo";
import { IListForm } from "./listForm";
import { IListFormField } from "./listFormField";
import { IRequest } from "./methods";
import { ISPComponents } from "./sp";
import { ISPConfig, ISPConfigProps, IFieldInfo } from "./spCfg";
import { ISPCfgFieldType, ISPCfgType } from "./spCfgTypes";
import { ITaxonomy } from "./taxonomy";
import { IWebPart } from "./webpart";

/**
 * Helper Library
 */
export * from "./executor";
export * from "./fieldSchemaXML";
export * from "./jslink";
export * from "./linkInfo";
export * from "./listForm";
export * from "./listFormField";
export * from "./methods";
export * from "./sp";
export * from "./spCfg";
export * from "./spCfgTypes";
export * from "./taxonomy";
export * from "./webpart";

/**
 * Helper
 */
export interface IHelper {
    /**
     * Method to create a document set item.
     */
    createDocSet: (name: string, listName: string, webUrl?: string) => PromiseLike<SP.ListItem>;

    /**
     * Executor
     */
    Executor<T = any>(methodParams: Array<T>, method: (param: T) => PromiseLike<any> | void, onExecuted?: (...args) => PromiseLike<any> | void);

    /**
     * Helper class for generating a field schema xml
     */
    FieldSchemaXML: (fieldInfo: IFieldInfo) => PromiseLike<string>;

    /**
     * Determines if the user has permissions, based on the permission kind value
     */
    hasPermissions(permissionMask: SP.BasePermissions, permissions: Array<number> | number): boolean;

    /**
     * Helper class for implementing JSLink solutions
     */
    JSLink: IJSLink;

    /**
     * Helper class for implementing custom list forms
     */
    ListForm: IListForm;

    /**
     * Helper class for implementing custom list forms
     */
    ListFormField: IListFormField;

    /**
     * Helper method to convert a json string to a base object
     * This will require you to use the stringify method of the base object.
     */
    parse<T = Base.IBaseResult>(jsonString: string): T;

    /**
     * Helper method to execute an XMLHttpRequest
     */
    request(props: IRequest): PromiseLike<any>;

    /**
     * Helper class for adding links to the top ribbon bar
     */
    RibbonLink: (props: ILinkInfo) => PromiseLike<HTMLAnchorElement>;

    /**
     * SharePoint Core Library Components
     */
    SP: ISPComponents;

    /**
     * The field configuration types
     */
    SPCfgFieldType: ISPCfgFieldType;

    /**
     * The configuration types
     */
    SPCfgType: ISPCfgType;

    /**
     * Helper class for automating SharePoint assets
     */
    SPConfig: (cfg: ISPConfigProps, webUrl?: string) => ISPConfig;

    /**
     * Helper class for adding links to the suite bar
     */
    SuiteBarLink: (props: ILinkInfo) => PromiseLike<HTMLAnchorElement>;

    /**
     * Helper class for getting information from the taxonomy term store
     */
    Taxonomy: ITaxonomy;

    /**
     * Helper class for creating modern webparts in SharePoint 2013+ environments
     */
    WebPart: IWebPart;
}