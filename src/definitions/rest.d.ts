import {
    IContextInfo,
    IEmail,
    IHelper,
    IList,
    IPeopleManager,
    IPeoplePicker,
    ISearch,
    ISite,
    ISocialFeed,
    IUserProfile,
    IWeb
} from "gd-sprest";
/**
 * SharePoint REST Library
 */
export interface IREST {
    /**
     * Page Context Information
     * Reference to the _spPageContextInfo global variable.
     */
    ContextInfo:IContextInfo;

    /**
     * Flag to default the request to th host web.
     * False by default.
     */
    DefaultRequestToHostFl:boolean;

    /**
     * Email
     * Use this api to send emails.
     */
    Email:IEmail;

    /**
     * Helper Methods
     * Helper methods for copying files between the app web and host web.
     */
    Helper:IHelper;

    /**
     * List
     * Use this api to interact with SharePoint lists and libraries.
     */
    List:IList;

    /**
     * People Manager
     * Use this api to interact with SharePoint user profiles.
     */
    PeopleManager:IPeopleManager;

    /**
     * People Picker
     * Use this api to search for users.
     */
    PeoplePicker:IPeoplePicker;

    /**
     * Search
     * Use this api to interact with the SharePoint search service.
     */
    Search:ISearch;

    /**
     * Site
     * Use this api to interact with a SharePoint site collection.
     */
    Site:ISite;

    /**
     * Social Feed
     * Use this api to interact with the current user's social profile.
     */
    SocialFeed:ISocialFeed;

    /**
     * User Profile
     * Use this api to interact with the current user's profile.
     */
    UserProfile:IUserProfile;

    /**
     * Web
     * Use this api to interact with a SharePoint web.
     */
    Web:IWeb;
}

export declare var $REST:IREST;