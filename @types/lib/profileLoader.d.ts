import { SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/SP.UserProfiles.ProfileLoader.getProfileLoader
 */
export const ProfileLoader: IProfileLoader;

/**
 * Profile Loader
 * @category Profile Loader
 */
export interface IProfileLoader {
    /**
     * Creates an instance of the profile loader library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): SP.UserProfiles.IProfileLoader;
}