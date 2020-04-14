import { Base, SP } from "gd-sprest-def";
import { IExecutor } from "./executor";
import { IFieldSchemaXML } from "./fieldSchemaXML";
import { IJSLink } from "./jslink";
import { IRibbonLink, ISuiteBarLink, ILinkInfo } from "./linkInfo";
import { IListForm } from "./listForm";
import { IListFormField } from "./listFormField";
import {
    IRequest, IaddContentEditorWebPart, IaddScriptEditorWebPart, IcreateContentType,
    IcreateDocSet, IhasPermissions, Iparse, Irequest, IsetContentTypeFields
} from "./methods";
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
 * Helper functions for SharePoint development.
 * @category Helper
 */
export interface IHelper {
    /** Methods */

    addContentEditorWebPart: IaddContentEditorWebPart,
    addScriptEditorWebPart: IaddScriptEditorWebPart,
    createContentType: IcreateContentType,
    createDocSet: IcreateDocSet,
    hasPermissions: IhasPermissions,
    parse: Iparse,
    request: Irequest,
    setContentTypeFields: IsetContentTypeFields,
    Executor: IExecutor;
    FieldSchemaXML: IFieldSchemaXML;

    /**
     * Helper classes
     */

    JSLink: IJSLink;
    ListForm: IListForm;
    ListFormField: IListFormField;
    RibbonLink: IRibbonLink;
    SP: ISPComponents;
    SPCfgFieldType: ISPCfgFieldType;
    SPCfgType: ISPCfgType;
    SPConfig: (cfg: ISPConfigProps, webUrl?: string) => ISPConfig;
    SuiteBarLink: ISuiteBarLink;
    Taxonomy: ITaxonomy;
    WebPart: IWebPart;
}