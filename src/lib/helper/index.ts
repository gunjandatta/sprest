import {IHelper} from "../../definitions";
import {AppHelper} from "./app";
import {JSLinkHelper} from "./jslink";
import {Loader} from "./loader";
import {SPConfig} from "./spCfg";

/**
 * Helper Methods
 */
export const Helper:IHelper = {
    App: <any>AppHelper,
    JSLink: <any>JSLinkHelper,
    Loader: <any>Loader,
    SPConfig: <any>SPConfig
};