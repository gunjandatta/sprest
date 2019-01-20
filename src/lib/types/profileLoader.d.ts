import * as Types from "../../intellisense";
import { ITargetInfoProps } from "../../utils/types";

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
    (targetInfo?: ITargetInfoProps): Types.IProfileLoader;
}