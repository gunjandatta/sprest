import { Types } from "../../mapper";
import { ITargetInfo } from "../../utils/types";
/**
 * Utility
 */
export interface IUtility {
    /**
     * Creates an instance of the utility library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfo): Types.IUtility;
}
