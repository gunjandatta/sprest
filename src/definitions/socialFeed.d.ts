declare module $REST.Types {

    /**
     * Social Feed
     */
    interface ISocialFeed {
        /**
         * Properties
         */

        /**
         * User Feed
         * @param accountName - The user account name;
         */
        Actor(accountName:string): ISocialRestActor;

        /**
         * My Feed
         */
        My(): ISocialRestActor;

        /**
         * Post
         * @param id - The post id.
         */
        Post(id:string): IBase;
    }
}