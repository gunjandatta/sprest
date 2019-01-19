import { SP } from "gd-sprest-def";
import { IBaseExecution } from "../../utils/types/base";
import { IResults } from "./results";

/**
 * Person Properties
 */
export interface IPersonProperties extends IBaseExecution<IPersonProperties> {
    /**
     * The user's account name.
     */
    AccountName: string;

    /**
     * The account names of the user's direct reports.
     */
    DirectReports: string

    /**
     * The user's display name.
     */
    DisplayName: string;

    /**
     * The user's email address.
     */
    Email: string;

    /**
     * The account names of the user's manager hierarchy.
     */
    ExtendedManagers: IResults<string>;

    /**
     * The account names of the user's extended reports.
     */
    ExtendedReports: IResults<string>;

    /**
     * A Boolean value that indicates whether the user is being followed by the current user.
     */
    IsFollowed: boolean;

    /**
     * The user's latest microblog post.
     */
    LatestPost: string;

    /**
     * The account names of the user's peers.
     */
    Peers: IResults<string>;

    /**
     * The absolute URL of the user's personal site.
     */
    PersonalUrl: string;

    /**
     * The URL of the user's profile picture.
     */
    PictureUrl: string;

    /**
     * The user's title.
     */
    Title: string;

    /**
     * The user profile properties for the user.
     */
    UserProfileProperties: IResults<SP.KeyValue>;

    /**
     * The URL of the user's profile page.
     */
    UserUrl: string;
}

/**
 * People Manager
 */
export interface IPeopleManager extends IBaseExecution<IPeopleManager> {
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
    amIFollowedBy(accountName: string): IBaseExecution;

    /**
     * Checks whether the current user is following the specified user.
     * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
     */
    amIFollowing(accountName: string): IBaseExecution;

    /**
     * Adds the specified user to the current user's list of followed users.
     * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
     */
    follow(accountName: string): IBaseExecution;

    /**
     * Adds the specified tag to the current user's list of followed tags.
     * @param id - The ID of the tag to start following.
     */
    followTag(id: string): IBaseExecution;

    /**
     * Gets tags that the user is following.
     * @param maxCount - The maximum number of tags to get.
     */
    getFollowedTags(maxCount: number): IBaseExecution;

    /**
     * Gets the people who are following the specified user.
     * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
     */
    getFollowersFor(accountName: string): IBaseExecution<IPersonProperties>;

    /**
     * Gets the people who are following the current user.
     */
    getMyFollowers(): IBaseExecution<IPersonProperties>;

    /**
     * Gets user properties for the current user.
     */
    getMyProperties(): IBaseExecution<IPersonProperties>;

    /**
     * Gets suggestions for who the current user might want to follow.
     */
    getMySuggestions(): IBaseExecution<IPersonProperties>;

    /**
     * Gets the people who the specified user is following.
     * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
     */
    getPeopleFollowedBy(accountName: string): IBaseExecution<IPersonProperties>;

    /**
     * Gets the people who the current user is following.
     */
    getPeopleFollowedByMe(): IBaseExecution<IPersonProperties>;

    /**
     * Gets user properties for the specified user.
     * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
     */
    getPropertiesFor(accountName: string): IBaseExecution<IPersonProperties>;

    /**
     * Gets the most popular tags.
     */
    getTrendingTags(): IBaseExecution;

    /**
     * Gets the specified user profile property for the specified user.
     * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
     * @param propertyName - The case-sensitive name of the property to get.
     */
    getUserProfilePropertyFor(accountName: string, propertyName: string): IBaseExecution<IPersonProperties>;

    /**
     * Removes the specified user from the user's list of suggested people to follow.
     * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
     */
    hideSuggestion(accountName: string): IBaseExecution;

    /**
     * Checks whether the first user is following the second user.
     * @param possibleFollowerAccountName - The account name of the user who might be following possiblefolloweeaccountname, encoded and passed as an alias in the query string.
     * @param possibleFolloweeAccountName - The account name of the user who might be followed, encoded and passed as an alias in the query string.
     */
    isFollowing(possibleFollowerAccountName: string, possibleFolloweeAccountName: string): IBaseExecution;

    /**
     * Uploads and sets the user profile picture. Users can upload a picture to their own profile only.
     * @param stream - The picture in BMP, JPEG, or PNG format of up to 4.76MB.
     */
    setMyProfilePicture(stream: any): IBaseExecution;

    /**
     * Remove the specified user from the current user's list of followed users.
     * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
     */
    stopFollowing(accountName: string): IBaseExecution;

    /**
     * Remove the specified tag from the current user's list of followed tags.
     * @param id - The ID of the tag to stop following.
     */
    stopFollowingTag(id: string): IBaseExecution;
}