declare module $REST.Types {

    /**
     * Social Feed
     */
    interface ISocialFeed {
        /**
         * Methods
         */

        /**
         * @param accountName - The login name of the user.
         */
        actor(accountName:string): ISocialRestActor;

        /**
         * @param accountName - The login name of the user.
         */
        actorFeed(accountName:string): ISocialRestThread;

        /**
         * @param accountName - The login name of the user.
         */
        actorFeedPost(accountName:string, postInfo:ComplexTypes.SocialRestPostCreationData): ISocialRestThread;

        clearMyUnreadMentionCount(): IBase;

        my(): ISocialRestActor;

        myFeed(): ISocialRestFeed;

        myLikes(): ISocialRestFeed;

        myMentionFeed(): ISocialRestFeed;

        myNews(): ISocialRestFeed;

        myTimelineFeed(): ISocialRestFeed;

        myUnreadMentionCount(): ISocialRestFeed;

        /**
         * Method to post to the current user's feed.
         * @param creationData - The post creation data.
         */
        postToMyFeed(creationData:ComplexTypes.SocialPostCreationData): ISocialRestThread;
    }

    /**
     * Social Rest Actor
     */
    interface ISocialRestActor extends IBase {
        /**
         * Properties
         */

        FollowableItem?: string;

        FollwableItemActor: ComplexTypes.SocialActor;

        Me: ComplexTypes.SocialActor;

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
    interface ISocialRestFeed extends IBase {
        /**
         * Properties
         */

        SocialFeed: ComplexTypes.SocialFeed;

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
        post(postInfo: ComplexTypes.SocialRestPostCreationData): ISocialRestThread;
    }

    /**
     * Social Rest Thread
     */
    interface ISocialRestThread extends IBase {
        /**
         * Properties
         */

        ID?: string;

        SocialThread: ComplexTypes.SocialThread;

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
}