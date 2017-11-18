import {
    IBase,
    ITargetInfo,
    IUserProfile
} from "../index"
/**
 * Profile Loader
 */
export interface IProfileLoader extends IBase<IProfileLoader> {
    /**
     * Constructor
     * @param targetInfo - (Optional) The target information.
     */
    new(targetInfo?: ITargetInfo): IProfileLoader;

    /**
     * Methods
     */

    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
     * @param emailIDs - The email addresses of the users to provision sites for. Maximum 200 characters.
     */
    createPersonalSiteEnqueueBulk(emailIDs: Array<string>): IBase;

    /**
     * Gets the user profile of the site owner.
     */
    getOwnerUserProfile(): IBase<IUserProfile>;

    /**
     * Gets the user profile that corresponds to the current user.
     */
    getUserProfile(): IBase<IUserProfile>;
}