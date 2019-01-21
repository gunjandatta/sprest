import * as Types from "../../intellisense";
import { ITargetInfoProps } from "../../utils/types";

/**
 * Utility
 */
export const Utility: IUtility;

/**
 * Utility
 */
export interface IUtility {
    /**
     * Creates an instance of the utility library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): Types.IUtility;
}