import * as Types from "../../intellisense";
import { ITargetInfoProps } from "../../utils/types";

/**
 * Social Feed
 */
export const SocialFeed: ISocialFeed;

/**
 * Social Feed
 */
export interface ISocialFeed {
    /**
     * Creates an instance of the social feed library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): Types.ISocialFeed;
}