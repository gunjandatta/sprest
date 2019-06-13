import { SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

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
    (targetInfo?: ITargetInfoProps): SP.UserProfiles.IProfileLoader;
}