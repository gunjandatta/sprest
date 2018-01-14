import { IBase } from "../utils";
import { IHelperApp } from "./app";
import { IDependencies } from "./dependencies";
import { IFieldSchemaXML } from "./field";
import { IHelperJSLink } from "./jslink";
import { IListForm } from "./listForm";
import { IListFormField } from "./listFormField";
import { ILoader } from "./loader";
import { ISPConfig } from "./spCfg";
import { IHelperTypes } from "./types";
import { IWebPart } from "./webpart";
/**
 * Helper
 */
export interface IHelper {
    /**
     * App-Model helper methods
     */
    App: IHelperApp;
    /**
     * Dependencies
     */
    Dependencies: IDependencies;
    /**
     * Field Schema XML
     */
    FieldSchemaXML: IFieldSchemaXML;
    /**
     * JSLink helper methods
     */
    JSLink: IHelperJSLink;
    /**
     * List Form
     */
    ListForm: IListForm;
    /**
     * List Form Field
     */
    ListFormField: IListFormField;
    /**
     * Loader
     */
    Loader: ILoader;
    /**
     * Method to parse a json string and convert to a base object.
     */
    parse<T = IBase>(jsonString: string): T;
    /**
     * Web helper methods
     */
    SPConfig: ISPConfig;
    /**
     * Helper Types
     */
    Types: IHelperTypes;
    /**
     * WebPart
     */
    WebPart: IWebPart;
}
/**
 * Helper Methods
 */
export declare const Helper: IHelper;
