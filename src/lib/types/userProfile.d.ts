import * as Types from "../../intellisense";
import { ITargetInfoProps } from "../../utils/types";

/**
 * User Profile
 */
export const UserProfile: IUserProfile;

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