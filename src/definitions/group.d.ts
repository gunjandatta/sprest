declare module $REST.Types {
    /**
     * Group
     */
    interface IGroup extends IBase {
        /**
         * Properties
         */

        /** Gets or sets a value that indicates whether the group members can edit membership in the group. */
        AllowMembersEditMembership: string;

        /** Gets or sets a value that indicates whether to allow users to request membership in the group and request to leave the group. */
        AllowRequestToJoinLeave: string;

        /**
         * Gets or sets a value that indicates whether the request to join or leave the group can be accepted automatically.
         */
        AutoAcceptRequestToJoinLeave(): string;

        /**
         * Gets a value that indicates whether the current user can edit the membership of the group.
         */
        CanCurrentUserEditMembership(): string;

        /**
         * Gets a value that indicates whether the current user can manage the group.
         */
        CanCurrentUserManageGroup(): string;

        /**
         * Gets a value that indicates whether the current user can view the membership of the group.
         */
        CanCurrentUserViewMembership(): string;

        /** Gets or sets the description of the group. */
        Description: string;

        /** Gets a value that specifies the member identifier for the user or group. */
        Id: string;

        /** Gets a value that indicates whether this member should be hidden in the UI. */
        IsHiddenInUI: string;

        /** Gets the name of the group. */
        LoginName: string;

        /** Gets or sets a value that indicates whether only group members are allowed to view the membership of the group. */
        OnlyAllowMembersViewMembership: string;

        /**
         * Gets or sets the owner of the group which can be a user or another group assigned permissions to control security.
         */
        Owner(): IUser;

        /** Gets the name for the owner of this group. */
        OwnerTitle: string;

        /** Gets or sets the email address to which the requests of the membership are sent. */
        RequestToJoinLeaveEmailSetting: string;

        /** Gets a value containing the type of the principal. Represents a bitwise SP.PrincipalType value: None = 0; User = 1; DistributionList = 2; SecurityGroup = 4; SharePointGroup = 8; All = 15. */
        PrincipalType: string;

        /** Gets or sets a value that specifies the name of the principal. */
        Title: string;

        /**
         * Gets a collection of user objects that represents all of the users in the group.
         */
        Users(): IUsers;

        /**
         * Gets a collection of user objects that represents all of the users in the group.
         * @param id - The user id.
         */
        Users(id): IUser;

        /**
         * Methods
         */

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IGroup;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IGroup;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IGroup;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IGroup;
    }
}
