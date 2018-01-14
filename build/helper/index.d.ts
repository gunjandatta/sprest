import { Types } from "../mapper";
import { IBase } from "../utils";
import { IDependencies } from "./dependencies";
import { IHelperJSLink } from "./jslink";
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
    App: Types.Helper.App.IApp;
    /**
     * Dependencies
     */
    Dependencies: IDependencies;
    /**
     * Field Schema XML
     */
    FieldSchemaXML: Types.Helper.Field.IFieldSchemaXML;
    /**
     * JSLink helper methods
     */
    JSLink: IHelperJSLink;
    /**
     * List Form
     */
    ListForm: Types.Helper.ListForm.IListForm;
    /**
     * List Form Field
     */
    ListFormField: Types.Helper.ListForm.IListFormField;
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
