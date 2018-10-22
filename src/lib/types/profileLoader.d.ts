import * as Types from "../../mapper/types";
import { ITargetInfo } from "../../utils/types";

/**
 * Profile Loader
 */
export interface IProfileLoader {
    /**
     * Creates an instance of the profile loader library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfo): Types.IProfileLoader;
}