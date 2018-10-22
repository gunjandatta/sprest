import * as Types from "../../mapper/types";
import { ITargetInfoProps } from "../../utils/types";

/**
 * User Profile
 */
export interface IUserProfile {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): Types.IProfileLoader;
}