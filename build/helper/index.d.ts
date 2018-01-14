import { Types } from "../mapper";
import { IBase } from "../utils";
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
    Dependencies: Types.Helper.Dependencies.IDependencies;
    /**
     * Field Schema XML
     */
    FieldSchemaXML: Types.Helper.Field.IFieldSchemaXML;
    /**
     * JSLink helper methods
     */
    JSLink: Types.Helper.JSLink.IJSLink;
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
    Loader: Types.Helper.Loader.ILoader;
    /**
     * Method to parse a json string and convert to a base object.
     */
    parse<T = IBase>(jsonString: string): T;
    /**
     * Web helper methods
     */
    SPConfig: Types.Helper.SPConfig.ISPConfig;
    /**
     * Helper Types
     */
    Types: Types.Helper.IHelperTypes;
    /**
     * WebPart
     */
    WebPart: Types.Helper.WebPart.IWebPart;
}
/**
 * Helper Methods
 */
export declare const Helper: IHelper;
