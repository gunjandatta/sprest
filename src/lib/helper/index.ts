import { AppHelper, IHelperApp } from "./app";
import { Dependencies, IDependencies } from "./dependencies";
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
     * Dependencies
     */
    Dependencies: IDependencies,

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
    App: AppHelper as any,
    Dependencies: Dependencies as any,
    JSLink: JSLinkHelper,
    Loader: Loader,
    SPConfig: SPConfig as any
};