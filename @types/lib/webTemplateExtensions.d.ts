import * as SP from "../intellisense/webTemplateExtensions";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/Microsoft.SharePoint.Utilities.WebTemplateExtensions
 */
export const WebTemplateExtensions: IWebTemplateExtensions;

/**
 * Web Template Extensions
 * @category WebTemplateExtensions
 */
export interface IWebTemplateExtensions {
    /**
     * Creates an instance of the utility library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): SP.IWebTemplateExtensions;
}