import { IBase } from "../../utils";
import { AppHelper, IHelperApp } from "./app";
import { Dependencies, IDependencies } from "./dependencies";
import { FieldSchemaXML, IFieldSchemaXML } from "./field";
import { JSLinkHelper, IHelperJSLink } from "./jslink";
import { Loader, ILoader } from "./loader";
import { parse } from "./parse";
import { SPConfig, ISPConfig } from "./spCfg";
import { HelperTypes, IHelperTypes } from "./types";

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
};

/**
 * Helper Methods
 */
export const Helper: IHelper = {
    App: AppHelper as any,
    Dependencies: Dependencies as any,
    FieldSchemaXML,
    JSLink: JSLinkHelper,
    Loader: Loader,
    parse: parse as any,
    SPConfig: SPConfig as any,
    Types: HelperTypes
};