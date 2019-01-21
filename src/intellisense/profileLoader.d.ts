import { IBaseExecution } from "../utils/types/base";
import { IUserProfile } from ".";

/**
 * Profile Loader
 */
export interface IProfileLoader extends IBaseExecution<IProfileLoader> {
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
     * @param emailIDs - The email addresses of the users to provision sites for. Maximum 200 characters.
     */
    createPersonalSiteEnqueueBulk(emailIDs: Array<string>): IBaseExecution;

    /**
     * Gets the user profile of the site owner.
     */
    getOwnerUserProfile(): IBaseExecution<IUserProfile>;

    /**
     * Gets the user profile that corresponds to the current user.
     */
    getUserProfile(): IBaseExecution<IUserProfile>;
}