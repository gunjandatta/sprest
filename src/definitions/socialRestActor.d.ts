declare module $REST.Types {
    /**
     * Social Rest Actor
     */
    interface ISocialRestActor extends IBase {
        /**
         * Constructor
         * @param accountName - The user account name.
         * @param targetInfo - The target information.
         */
        new(accountName?:string, targetInfo?:ComplexTypes.TargetInfoSettings): ISocialRestActor;

        /**
         * Properties
         */

        FollowableItem?: string;

        FollwableItemActor: ComplexTypes.SocialActor;

        Me: ComplexTypes.SocialActor;

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
    }
}