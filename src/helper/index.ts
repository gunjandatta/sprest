import { Types } from "../mapper";
import { IBase } from "../utils";
import { AppHelper, IHelperApp } from "./app";
import { Dependencies, IDependencies } from "./dependencies";
import { FieldSchemaXML, IFieldSchemaXML } from "./field";
import { JSLinkHelper, IHelperJSLink } from "./jslink";
import { ListForm } from "./listForm";
import { ListFormField } from "./listFormField";
import { Loader, ILoader } from "./loader";
import { parse } from "./parse";
import { SPConfig, ISPConfig } from "./spCfg";
import { HelperTypes, IHelperTypes } from "./types";
import { WebPart, IWebPart } from "./webpart";

/**
 * Helper
 */
export interface IHelper {
    /**
     * App-Model helper methods
     */
    App: IHelperApp,

    /**
     * Dependencies
     */
    Dependencies: IDependencies,

    /**
     * Field Schema XML
     */
    FieldSchemaXML: IFieldSchemaXML,

    /**
     * JSLink helper methods
     */
    JSLink: IHelperJSLink,

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
    Loader: ILoader,

    /**
     * Method to parse a json string and convert to a base object.
     */
    parse<T=IBase>(jsonString: string): T;

    /**
     * Web helper methods
     */
    SPConfig: ISPConfig,

    /**
     * Helper Types
     */
    Types: IHelperTypes

    /**
     * WebPart
     */
    WebPart: IWebPart;
};

/**
 * Helper Methods
 */
export const Helper: IHelper = {
    App: AppHelper as any,
    Dependencies: Dependencies as any,
    FieldSchemaXML,
    JSLink: JSLinkHelper,
    ListForm,
    ListFormField,
    Loader: Loader,
    parse: parse as any,
    SPConfig: SPConfig as any,
    Types: HelperTypes,
    WebPart
};