import { Base } from "../utils";
import { App, IApp } from "./app";
import { Dependencies, IDependencies } from "./dependencies";
import { FieldSchemaXML, IFieldSchemaXML } from "./fieldSchemaXML";
import { JSLink, IJSLink } from "./jslink";
import { parse } from "./parse";
import { ListForm, IListForm } from "./listForm";
import { ListFormField, IListFormField } from "./listFormField";
import { Loader, ILoader } from "./loader";
import { SPConfig, ISPConfig } from "./spCfg";
import { Taxonomy, ITaxonomy } from "./taxonomy";
import { WebPart, IWebPart } from "./webpart";

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
export const Helper: IHelper = {
    App,
    Dependencies,
    FieldSchemaXML,
    JSLink,
    parse,
    Loader,
    ListForm,
    ListFormField,
    SPConfig,
    Taxonomy,
    WebPart
};