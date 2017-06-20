import {
    IBase,
    IGroup,
    IResults,
    IUserMethods
} from "..";

/**
 * User Query Results
 */
export interface IUserQueryResults extends IUserMethods {
    /** Gets or sets the email address of the user. */
    Email: string;

    /** The groups of which the user is a member. */
    Groups: IResults<IGroup>;

    /** Gets a value that specifies the member identifier for the user or group. */
    Id: string;

    /** Gets a value that indicates whether this member should be hidden in the UI. */
    IsHiddenInUI: boolean;

    IsSharedByEmailGuestUser: boolean;

    /** Gets or sets a Boolean value that specifies whether the user is a site collection administrator. */
    IsSiteAdmin: boolean;

    /** Gets the login name of the user. */
    LoginName: string;

    /** Gets a value containing the type of the principal. Represents a bitwise SP.PrincipalType value: None = 0; User = 1; DistributionList = 2; SecurityGroup = 4; SharePointGroup = 8; All = 15. */
    PrincipalType: string;

    /** Gets or sets a value that specifies the name of the principal. */
    Title: string;

    /** Gets the information of the user that contains the user's name identifier and the issuer of the user's name identifier. */
    UserId: string;
}