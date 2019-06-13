import { SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * Profile Loader
 */
export const ProfileLoader: IProfileLoader;

/**
 * Profile Loader
 */
export interface IProfileLoader {
    /**
     * Creates an instance of the profile loader library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): SP.UserProfiles.IProfileLoader;
}