import {
    ComplexTypes,
    IBase
} from ".";

/**
 * Social Feed
 */
export interface ISocialFeed {
    /**
     * Methods
     */

    /**
     * Gets information about the specified user and the current user.
     * @param accountName - The login name of the user.
     */
    actor(accountName:string): ISocialRestActor;

    /**
     * Gets the feed of activity by the specified user (Personal feed type) or gets the specified site feed.
     * @param accountName - The login name of the user.
     */
    actorFeed(accountName:string): ISocialRestThread;

    /**
     * Gets the feed of microblog posts that mention the current user, represented by MentionReference thread types, and sets the user's unread mention count to 0.
     */
    clearMyUnreadMentionCount(): IBase;

    /**
     * Gets information about the current user.
     */
    my(): ISocialRestActor;

    /**
     * Gets the feed of activity by the current user (Personal feed type).
     */
    myFeed(): ISocialRestFeed;

    /**
     * Gets the feed of microblog posts that the current user likes, represented by LikeReference thread types. See Reference threads and digest threads in SharePoint Server 2013 social feeds.
     */
    myLikes(): ISocialRestFeed;

    /**
     * Gets the feed of microblog posts that mention the current user, represented by MentionReference thread types.
     */
    myMentionFeed(): ISocialRestFeed;

    /**
     * Gets the feed of activity by the current user and by people and content the user is following, sorted by last modified date (News feed type).
     */
    myNews(): ISocialRestFeed;

    /**
     * Gets the feed of activity by the current user and by people and content the user is following, sorted by created date (Timeline feed type).
     */
    myTimelineFeed(): ISocialRestFeed;

    /**
     * Gets the count of unread mentions for the current user.
     */
    myUnreadMentionCount(): ISocialRestFeed;

    /**
     * Creates a root post in the specified site feed.
     * @param accountName - The login name of the user.
     */
    postToFeed(accountName:string, postInfo:ComplexTypes.SocialPostCreationData): ISocialRestThread;

    /**
     * Creates a root post in the current user's feed.
     * @param creationData - The post creation data.
     */
    postToMyFeed(creationData:ComplexTypes.SocialPostCreationData): ISocialRestThread;
}

/**
 * Social Rest Actor
 */
export interface ISocialRestActor extends IBase {
    /**
     * Properties
     */

    FollowableItem?:string;

    FollwableItemActor:ComplexTypes.SocialActor;

    Me:ComplexTypes.SocialActor;

    /**
     * Methods
     */

    clearUnreadMentionCount(): ISocialRestFeed;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?:(...args) => any): ISocialRestActor;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl:boolean): ISocialRestActor;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback:any, waitFl:boolean): ISocialRestActor;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): ISocialRestActor;
}

/**
 * Social Rest Feed
 */
export interface ISocialRestFeed extends IBase {
    /**
     * Properties
     */

    SocialFeed:ComplexTypes.SocialFeed;

    /**
     * Methods
     */

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?:(...args) => any): ISocialRestActor;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl:boolean): ISocialRestActor;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback:any, waitFl:boolean): ISocialRestActor;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): ISocialRestActor;

    /**
     * Creates a root post in the user's feed.
     */
    post(postInfo:ComplexTypes.SocialRestPostCreationData): ISocialRestThread;
}

/**
 * Social Rest Thread
 */
export interface ISocialRestThread extends IBase {
    /**
     * Properties
     */

    ID?: string;

    SocialThread:ComplexTypes.SocialThread;

    /**
     * Methods
     */

    delete(): ISocialRestThread;

    reply(restCreationData:ComplexTypes.SocialPostCreationData): ISocialRestThread;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?:(...args) => any): ISocialRestThread;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl:boolean): ISocialRestThread;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback:any, waitFl:boolean): ISocialRestThread;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): ISocialRestThread;
}