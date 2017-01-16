import {
    IBase,
    ISite,
    TargetInfoSettings
} from ".";
import {SPTypes} from "../lib";
/**
 * User Profile
 */
export interface IUserProfile extends IBase {
    /**
     * Constructor
     * @param targetInfo - (Optional) The target information.
     */
    new(targetInfo?:TargetInfoSettings): IUserProfile;

    /**
     * Properties
     */

    /**
     * An object containing the user's FollowedDocumentsUrl and FollowedSitesUrl.
     */
    FollowedContent(): any;

    /**
     * The account name of the user. (SharePoint Online only)
     */
    AccountName: string;

    /**
     * The display name of the user. (SharePoint Online only)
     */
    DisplayName: string;

    FollowPersonalSiteUrl: string;

    IsPeopleListPublic: boolean;

    IsPrivacySettingOn: boolean;

    IsSelf: boolean;

    JobTitle: string;

    MySiteFirstRunExperience: number;

    MySiteHostUrl: string;

    /**
     * The FirstRun flag of the user. (SharePoint Online only)
     */
    O15FirstRunExperience: number;

    /**
     * The personal site of the user.
     */
    PersonalSite(): ISite;

    /**
     * The capabilities of the user's personal site.
     */
    PersonalSiteCapabilities: SPTypes.PersonalSiteCapabilities;

    /**
     * The error thrown when the user's personal site was first created, if any. (SharePoint Online only)
     */
    PersonalSiteFirstCreationError: string;

    /**
     * The date and time when the user's personal site was first created. (SharePoint Online only)
     */
    PersonalSiteFirstCreationTime: string;

    /**
     * The status for the state of the personal site instantiation.
     * See PersonalSiteInstantiationState in the .NET client object model reference for a list of instantiation state values.
     */
    PersonalSiteInstantiationState: number;

    /**
     * The date and time when the user's personal site was last created. (SharePoint Online only)
     */
    PersonalSiteLastCreationTime: string;

    /**
     * The number of attempts made to create the user's personal site. (SharePoint Online only)
     */
    PersonalSiteNumberOfRetries: number;

    /**
     * A Boolean value that indicates whether the user's picture is imported from Exchange.
     */
    PictureImportEnabled: boolean;

    PictureUrl: string;

    /**
     * The public URL of the personal site of the current user. (SharePoint Online only)
     */
    PublicUrl: string;

    /**
     * The URL used to create the user's personal site.
     */
    UrlToCreatePersonalSite: string;

    /**
     * Methods
     */

    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
     * For SharePoint Online development, My Site Host administrators can also use the CreatePersonalSiteEnqueueBulk method to create personal sites for one or more users.
     * @param interactiveFl - True if this is an interactively (web) initiated request, or false if this is a non-interactively (client) initiated request.
     */
    createPersonalSiteEnque(interactiveFl:boolean): IBase;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?:(...args) => any): IUserProfile;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl:boolean): IUserProfile;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback:any, waitFl:boolean): IUserProfile;

    /**
     * Sets the privacy settings for this profile.
     * @param publicFl - true to make all social data public; false to make all social data private.
     */
    shareAllSocialData(publicFl:boolean): IBase;
}