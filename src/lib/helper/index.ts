import { AppHelper, IHelperApp } from "./app";
import { JSLinkHelper, IHelperJSLink } from "./jslink";
import { Loader, ILoader } from "./loader";
import { SPConfig, ISPConfig } from "./spCfg";

/**
 * Helper
 */
export interface IHelper {
    /**
     * App-Model helper methods
     */
    App: IHelperApp,

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
    SPConfig: ISPConfig
};

/**
 * Helper Methods
 */
export const Helper: IHelper = {
    App: <any>AppHelper,
    JSLink: <any>JSLinkHelper,
    Loader: <any>Loader,
    SPConfig: <any>SPConfig
};