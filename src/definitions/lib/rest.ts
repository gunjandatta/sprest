import {
    IContextInformation,
    IEmail,
    IHelper,
    IList,
    IPeopleManager,
    IPeoplePicker,
    IProfileLoader,
    ISearch,
    ISite,
    ISocialFeed,
    ITargetInfo,
    IUserProfile,
    IWeb
} from "..";

/**
 * SharePoint REST Library
 */
export interface IREST {
    /**
     * A reference to the _spPageContextInfo global variable.
     */
    ContextInfo: IContextInformation;

    /**
     * False by default.
     */
    DefaultRequestToHostFl: boolean;

    /**
     * Use this api to send emails.
     */
    Email: IEmail;

    /**
     * Helper methods.
     */
    Helper: IHelper;

    /**
     * Use this api to interact with SharePoint lists and libraries.
     * @param listName - The name of the list.
     * @param targetInfo - (Optional) The target information.
     */
    List: (listName: string, targetInfo?: ITargetInfo) => IList;

    /**
     * Use this api to interact with SharePoint user profiles.
     * @param targetInfo - (Optional) The target information.
     */
    PeopleManager: (targetInfo?: ITargetInfo) => IPeopleManager;

    /**
     * Use this api to search for users.
     * @param settings - The search settings.
     */
    PeoplePicker: (settings?: ITargetInfo) => IPeoplePicker;

    /**
     * Use this api to interact with the user profile loader.
     * @param targetInfo - (Optional) The target information.
     */
    ProfileLoader: (targetInfo?: ITargetInfo) => IProfileLoader;

    /**
     * Use this api to interact with the SharePoint search service.
     * @param url - The optional url to execute the search against.
     * @param settings - The search settings.
     */
    Search: (url?: string, settings?: ITargetInfo) => ISearch;

    /**
     * Use this api to interact with a SharePoint site collection.
     * @param url - (Optional) The site url.
     * @param targetInfo - (Optional) The target information.
     */
    Site: (url?: string, targetInfo?: ITargetInfo) => ISite;

    /**
     * Use this api to interact with the current user's social profile.
     */
    SocialFeed: ISocialFeed;

    /**
     * Use this api to interact with the current user's profile.
     * @param targetInfo - (Optional) The target information.
     */
    UserProfile: (targetInfo?: ITargetInfo) => IUserProfile;

    /**
     * Use this api to interact with a SharePoint web.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Web: (url?: string, targetInfo?: ITargetInfo) => IWeb;
}