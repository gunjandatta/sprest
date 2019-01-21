import { SP } from "gd-sprest-def";
import { IBaseExecution } from "../utils/types/base";

/**
 * Social Feed
 */
export interface ISocialFeed extends IBaseExecution<ISocialFeed> {
    /**
     * Gets information about the specified user and the current user.
     * @param accountName - The login name of the user.
     */
    actor(accountName: string): IBaseExecution<ISocialRestActor>;

    /**
     * Gets the feed of activity by the specified user (Personal feed type) or gets the specified site feed.
     * @param accountName - The login name of the user.
     */
    actorFeed(accountName: string): IBaseExecution<ISocialRestThread>;

    /**
     * Gets the feed of microblog posts that mention the current user, represented by MentionReference thread types, and sets the user's unread mention count to 0.
     */
    clearMyUnreadMentionCount(): IBaseExecution;

    /**
     * Gets information about the current user.
     */
    my(): IBaseExecution<ISocialRestActor>;

    /**
     * Gets the feed of activity by the current user (Personal feed type).
     */
    myFeed(): IBaseExecution<ISocialRestFeed>;

    /**
     * Gets the feed of microblog posts that the current user likes, represented by LikeReference thread Types.SP. See Reference threads and digest threads in SharePoint Server 2013 social feeds.
     */
    myLikes(): IBaseExecution<ISocialRestFeed>;

    /**
     * Gets the feed of microblog posts that mention the current user.
     */
    myMentionFeed(): IBaseExecution<ISocialRestFeed>;

    /**
     * Gets the feed of activity by the current user and by people and content the user is following, sorted by last modified date (News feed type).
     */
    myNews(): IBaseExecution<ISocialRestFeed>;

    /**
     * Gets the feed of activity by the current user and by people and content the user is following, sorted by created date (Timeline feed type).
     */
    myTimelineFeed(): IBaseExecution<ISocialRestFeed>;

    /**
     * Gets the count of unread mentions for the current user.
     */
    myUnreadMentionCount(): IBaseExecution<ISocialRestFeed>;

    /**
     * Creates a root post in the specified site feed.
     * @param accountName - The login name of the user.
     */
    postToFeed(accountName: string, postInfo: SP.Social.SocialPostCreationData): IBaseExecution<ISocialRestThread>;

    /**
     * Creates a root post in the current user's feed.
     * @param creationData - The post creation data.
     */
    postToMyFeed(creationData: SP.Social.SocialPostCreationData): IBaseExecution<ISocialRestThread>;
}

/**
 * Social Rest Actor
 */
export interface ISocialRestActor extends IBaseExecution<ISocialRestActor> {
    /**
     * Properties
     */

    FollowableItem?: string;

    FollwableItemActor: SP.Social.SocialActor;

    Me: SP.Social.SocialActor;

    /**
     * Methods
     */

    clearUnreadMentionCount(): IBaseExecution<ISocialRestFeed>;
}

/**
 * Social Rest Feed
 */
export interface ISocialRestFeed extends IBaseExecution<ISocialRestFeed> {
    /**
     * Properties
     */

    SocialFeed: SP.Social.SocialFeed;

    /**
     * Methods
     */

    /**
     * Creates a root post in the user's feed.
     */
    post(postInfo: SP.Social.SocialRestPostCreationData): ISocialRestThread;
}

/**
 * Social Rest Thread
 */
export interface ISocialRestThread extends IBaseExecution<ISocialRestThread> {
    /**
     * Properties
     */

    ID?: string;

    SocialThread: SP.Social.SocialThread;

    /**
     * Methods
     */

    delete(): IBaseExecution<ISocialRestThread>;

    reply(restCreationData: SP.Social.SocialPostCreationData): IBaseExecution<ISocialRestThread>;
}