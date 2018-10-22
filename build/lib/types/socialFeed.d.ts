import * as Types from "../../mapper/types";
import { ITargetInfo } from "../../utils/types";
/**
 * Social Feed
 */
export interface ISocialFeed {
    /**
     * Creates an instance of the social feed library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfo): Types.ISocialFeed;
}
