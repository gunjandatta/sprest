import { Types } from "../mapper";
import { IBase } from "../utils";
import { App } from "./app";
import { Dependencies } from "./dependencies";
import { FieldSchemaXML } from "./field";
import { JSLink } from "./jslink";
import { ListForm } from "./listForm";
import { ListFormField } from "./listFormField";
import { Loader } from "./loader";
import { parse } from "./parse";
import { SPConfig } from "./spCfg";
import { Taxonomy } from "./taxonomy";
import { HelperTypes } from "./types";
import { WebPart } from "./webpart";

/**
 * Helper
 */
export interface IHelper {
    /**
     * App-Model helper methods
     */
    App: Types.Helper.App.IApp,

    /**
     * Dependencies
     */
    Dependencies: Types.Helper.Dependencies.IDependencies,

    /**
     * Field Schema XML
     */
    FieldSchemaXML: Types.Helper.Field.IFieldSchemaXML,

    /**
     * JSLink helper methods
     */
    JSLink: Types.Helper.JSLink.IJSLink,

    /**
     * List Form
     */
    ListForm: Types.Helper.ListForm.IListForm,

    /**
     * List Form Field
     */
    ListFormField: Types.Helper.ListForm.IListFormField,

    /**
     * Loader
     */
    Loader: Types.Helper.Loader.ILoader,

    /**
     * Method to parse a json string and convert to a base object.
     */
    parse<T=IBase>(jsonString: string): T;

    /**
     * Web helper methods
     */
    SPConfig: Types.Helper.SPConfig.ISPConfig,

    /**
     * Taxonomy
     */
    Taxonomy: Types.Helper.Taxonomy.ITaxonomy,

    /**
     * Helper Types
     */
    Types: Types.Helper.IHelperTypes;

    /**
     * WebPart
     */
    WebPart: Types.Helper.WebPart.IWebPart;
};

/**
 * Helper Methods
 */
export const Helper: IHelper = {
    App,
    Dependencies,
    FieldSchemaXML,
    JSLink,
    ListForm,
    ListFormField,
    Loader,
    parse: parse as any,
    SPConfig,
    Taxonomy,
    Types: HelperTypes,
    WebPart
};