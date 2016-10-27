declare module $REST.Types {
    /**
     * User
     */
    interface IUser extends IBase {
        /**
         * Properties
         */

        /** Gets or sets the email address of the user. */
        Email: string;

        /**
         * Gets the groups of which the user is a member.
         */
        Groups(): ISiteGroups;

        /**
         * Gets the group of which the user is a member.
         * @param id - The group id.
         */
        Groups(id:number): IGroup;

        /** Gets a value that specifies the member identifier for the user or group. */
        Id: string;

        /** Gets a value that indicates whether this member should be hidden in the UI. */
        IsHiddenInUI: string;

        /** Gets or sets a Boolean value that specifies whether the user is a site collection administrator. */
        IsSiteAdmin: string;

        /** Gets the login name of the user. */
        LoginName: string;

        /** Gets a value containing the type of the principal. Represents a bitwise SP.PrincipalType value: None = 0; User = 1; DistributionList = 2; SecurityGroup = 4; SharePointGroup = 8; All = 15. */
        PrincipalType: string;

        /** Gets or sets a value that specifies the name of the principal. */
        Title: string;

        /** Gets the information of the user that contains the user's name identifier and the issuer of the user's name identifier. */
        UserId: string;

        /**
         * Methods
         */

        /**
         * Deletes the user custom action.
         */
        delete(): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(IUser) => void): IUser;
    }
}
