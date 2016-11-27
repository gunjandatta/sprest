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

        postToMyFeed(postInfo:ComplexTypes.SocialRestPostCreationData): ISocialRestThread;
    }
}