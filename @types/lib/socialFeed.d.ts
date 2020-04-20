import { IBaseExecution } from "../../lib/base";
import { SocialPostCreationData } from "../../lib/SP/Social/complextypes";
import { ISocialRestThread, SocialRestThread } from "../../lib/SP/Social/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/Social.Feed
 */
export const SocialFeed: ISocialFeed;

/**
 * Social Feed
 * @cateogry Social Feed
 */
export interface ISocialFeed {
    /**
     * Creates an instance of the social feed library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): ISocialRestThread;

    /**
     * Posts to a feed.
     * @param accountName - The account name to post to.
     * @param postInfo - The post information.
     */
    postToFeed(accountName: string, postInfo: SocialPostCreationData): IBaseExecution<SocialRestThread>;

    /**
     * Post to the current user's feed.
     * @param postInfo - The post information.
     */
    postToMyFeed(postInfo: SocialPostCreationData): IBaseExecution<SocialRestThread>;
}