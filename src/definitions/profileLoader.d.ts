declare module "gd-sprest" {
    /**
     * Profile Loader
     */
    export interface IProfileLoader extends IBase {
        /**
         * Constructor
         * @param targetInfo - (Optional) The target information.
         */
        new(targetInfo?:TargetInfoSettings): IProfileLoader;

        /**
         * Methods
         */

        /**
         * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
         * @param emailIDs - The email addresses of the users to provision sites for. Maximum 200 characters.
         */
        createPersonalSiteEnqueueBulk(emailIDs:Array<string>): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IProfileLoader;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IProfileLoader;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IProfileLoader;

        /**
         * Gets the user profile of the site owner.
         */
        getOwnerUserProfile(): IUserProfile;

        /**
         * Gets the user profile that corresponds to the current user.
         */
        getUserProfile(): IUserProfile;
    }
}