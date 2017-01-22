import {IHelper} from "../../definitions";
import {AppHelper} from "./app";
import {JSLinkHelper} from "./jslink";

/**
 * Helper Methods
 */
export const Helper:IHelper = {
    App: <any>AppHelper,
    JSLink: <any>JSLinkHelper
};