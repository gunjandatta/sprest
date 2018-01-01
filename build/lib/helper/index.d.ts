import { IHelperApp } from "./app";
import { IDependencies } from "./dependencies";
import { IFieldSchemaXML } from "./field";
import { IHelperJSLink } from "./jslink";
import { ILoader } from "./loader";
import { ISPConfig } from "./spCfg";
import { ITypes } from "./types";
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
     * Loader
     */
    Loader: ILoader;
    /**
     * Web helper methods
     */
    SPConfig: ISPConfig;
    /**
     * Helper Types
     */
    Types: ITypes;
}
/**
 * Helper Methods
 */
export declare const Helper: IHelper;
