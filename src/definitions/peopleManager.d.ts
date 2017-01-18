declare module "gd-sprest" {
    export namespace Types {
        /**
         * People Manager
         */
        export interface IPeopleManager extends Types.IBase {
                /**
             * Constructor
             * @param targetInfo - (Optional) The target information.
             */
            new(targetInfo?:Types.ITargetInfo): IPeopleManager;

            /**
             * Properties
             */

            /**
             * The URL of the edit profile page for the current user.
             */
            EditProfileLink: string;

            /**
             * A Boolean value that indicates whether the current user's People I'm Following list is public.
             */
            IsMyPeopleListPublic: boolean;

            /**
             * Methods
             */

            /** Checks whether the specified user is following the current user.
             * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
            */
            amIFollowedBy(accountName:string) : Types.IBase;

            /**
             * Checks whether the current user is following the specified user.
             * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
             */
            amIFollowing(accountName:string) : Types.IBase;

            /**
             * Method to execute the request.
             * @param callback - The method to be executed after the request completes.
             */
            execute(callback?:(...args) => any): IPeopleManager;

            /**
             * Method to execute the request.
             * @param waitFl - Flag to execute the request, after the previous requests have completed.
             */
            execute(waitFl:boolean): IPeopleManager;

            /**
             * Method to execute the request.
             * @param callback - The method to be executed after the request completes.
             * @param waitFl - Flag to execute the request, after the previous requests have completed.
             */
            execute(callback:any, waitFl:boolean): IPeopleManager;

            /**
             * Adds the specified user to the current user's list of followed users.
             * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
             */
            follow(accountName:string) : Types.IBase;

            /**
             * Adds the specified tag to the current user's list of followed tags.
             * @param id - The ID of the tag to start following.
             */
            followTag(id:string) : Types.IBase;

            /**
             * Gets tags that the user is following.
             * @param maxCount - The maximum number of tags to get.
             */
            getFollowedTags(maxCount:number) : Types.IBase;

            /**
             * Gets the people who are following the specified user.
             * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
             */
            getFollowersFor(accountName:string) : IPersonProperties;

            /**
             * Gets the people who are following the current user.
             */
            getMyFollowers() : IPersonProperties;

            /**
             * Gets user properties for the current user.
             */
            getMyProperties() : IPersonProperties;

            /**
             * Gets suggestions for who the current user might want to follow.
             */
            getMySuggestions() : IPersonProperties;

            /**
             * Gets the people who the specified user is following.
             * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
             */
            getPeopleFollowedBy(accountName:string) : IPersonProperties;

            /**
             * Gets the people who the current user is following.
             */
            getPeopleFollowedByMe() : IPersonProperties;

            /**
             * Gets user properties for the specified user.
             * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
             */
            getPropertiesFor(accountName:string) : IPersonProperties;

            /**
             * Gets the most popular tags.
             */
            getTrendingTags() : Types.IBase;

            /**
             * Gets the specified user profile property for the specified user.
             * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
             * @param propertyName - The case-sensitive name of the property to get.
             */
            getUserProfilePropertyFor(accountName:string, propertyName:string) : IPersonProperties;

            /**
             * Removes the specified user from the user's list of suggested people to follow.
             * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
             */
            hideSuggestion(accountName:string) : Types.IBase;

            /**
             * Checks whether the first user is following the second user.
             * @param possibleFollowerAccountName - The account name of the user who might be following possiblefolloweeaccountname, encoded and passed as an alias in the query string.
             * @param possibleFolloweeAccountName - The account name of the user who might be followed, encoded and passed as an alias in the query string.
             */
            isFollowing(possibleFollowerAccountName:string, possibleFolloweeAccountName:string) : Types.IBase;

            /**
             * Uploads and sets the user profile picture. Users can upload a picture to their own profile only.
             * @param stream - The picture in BMP, JPEG, or PNG format of up to 4.76MB.
             */
            setMyProfilePicture(stream:any) : Types.IBase;

            /**
             * Remove the specified user from the current user's list of followed users.
             * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
             */
            stopFollowing(accountName:string) : Types.IBase;

            /**
             * Remove the specified tag from the current user's list of followed tags.
             * @param id - The ID of the tag to stop following.
             */
            stopFollowingTag(id:string) : Types.IBase;
        }
    }
}