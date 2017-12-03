import { IHelperApp } from "./app";
import { IDependencies } from "./dependencies";
import { IHelperJSLink } from "./jslink";
import { ILoader } from "./loader";
import { ISPConfig } from "./spCfg";
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
}
/**
 * Helper Methods
 */
export declare const Helper: IHelper;
