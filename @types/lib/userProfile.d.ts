import { SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/SP.UserProfiles.ProfileLoader.getProfileLoader/getUserProfile
 */
export const UserProfile: IUserProfile;

/**
 * User Profile
 * @category User Profile
 */
export interface IUserProfile {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): SP.UserProfiles.IProfileLoader;
}