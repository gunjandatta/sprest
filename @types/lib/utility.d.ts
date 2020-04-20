import * as SP from "../intellisense/utility";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/SP.Utilities.Utility
 */
export const Utility: IUtility;

/**
 * Utility
 * @category Utility
 */
export interface IUtility {
    /**
     * Creates an instance of the utility library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): SP.IUtility;
}