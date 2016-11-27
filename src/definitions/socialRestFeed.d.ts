declare module $REST.Types {
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
}
