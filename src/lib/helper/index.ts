import { AppHelper, IHelperApp } from "./app";
import { Dependencies, IDependencies } from "./dependencies";
import { FieldSchemaXML, IFieldSchemaXML } from "./field";
import { JSLinkHelper, IHelperJSLink } from "./jslink";
import { Loader, ILoader } from "./loader";
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
    SPConfig: SPConfig as any,
    Types: HelperTypes
};