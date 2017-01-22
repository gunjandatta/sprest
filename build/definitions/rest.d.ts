import { IContextInfo, IEmail, IHelper, IList, IPeopleManager, IPeoplePicker, IProfileLoader, ISearch, ISite, ISocialFeed, IUserProfile, IWeb } from ".";
/**
 * SharePoint REST Library
 */
export interface IREST {
    /**
     * A reference to the _spPageContextInfo global variable.
     */
    ContextInfo: IContextInfo;
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
     */
    List: IList;
    /**
     * Use this api to interact with SharePoint user profiles.
     */
    PeopleManager: IPeopleManager;
    /**
     * Use this api to search for users.
     */
    PeoplePicker: IPeoplePicker;
    /**
     * Use this api to interact with the user profile loader.
     */
    ProfileLoader: IProfileLoader;
    /**
     * Use this api to interact with the SharePoint search service.
     */
    Search: ISearch;
    /**
     * Use this api to interact with a SharePoint site collection.
     */
    Site: ISite;
    /**
     * Use this api to interact with the current user's social profile.
     */
    SocialFeed: ISocialFeed;
    /**
     * Use this api to interact with the current user's profile.
     */
    UserProfile: IUserProfile;
    /**
     * Use this api to interact with a SharePoint web.
     */
    Web: IWeb;
}
