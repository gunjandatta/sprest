import { Base } from "../utils";
import { IApp } from "./app";
import { IDependencies } from "./dependencies";
import { IFieldSchemaXML } from "./fieldSchemaXML";
import { IJSLink } from "./jslink";
import { IListForm } from "./listForm";
import { IListFormField } from "./listFormField";
import { ILoader } from "./loader";
import { ISPConfig } from "./spCfg";
import { ITaxonomy } from "./taxonomy";
import { IWebPart } from "./webpart";
/**
 * Helper
 */
export interface IHelper {
    App: IApp;
    Dependencies: IDependencies;
    FieldSchemaXML: IFieldSchemaXML;
    JSLink: IJSLink;
    parse: (jsonString: string) => Base;
    Loader: ILoader;
    ListForm: IListForm;
    ListFormField: IListFormField;
    SPConfig: ISPConfig;
    Taxonomy: ITaxonomy;
    WebPart: IWebPart;
}
/**
 * Helper
 */
export declare const Helper: IHelper;
