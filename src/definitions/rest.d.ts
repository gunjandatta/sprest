declare module "gd-sprest" {
    /**
     * SharePoint REST Library
     */
    interface IREST {
        /**
         * A reference to the _spPageContextInfo global variable.
         */
        ContextInfo:Types.IContextInfo;

        /**
         * False by default.
         */
        DefaultRequestToHostFl:boolean;

        /**
         * Use this api to send emails.
         */
        Email:Types.IEmail;

        /**
         * Helper methods for copying files between the app web and host web.
         */
        Helper:Types.IHelper;

        /**
         * Use this api to interact with SharePoint lists and libraries.
         */
        List:Types.IList;

        /**
         * Use this api to interact with SharePoint user profiles.
         */
        PeopleManager:Types.IPeopleManager;

        /**
         * Use this api to search for users.
         */
        PeoplePicker:Types.IPeoplePicker;

        /**
         * Use this api to interact with the user profile loader.
         */
        ProfileLoader:Types.IProfileLoader;

        /**
         * Use this api to interact with the SharePoint search service.
         */
        Search:Types.ISearch;

        /**
         * Use this api to interact with a SharePoint site collection.
         */
        Site:Types.ISite;

        /**
         * Use this api to interact with the current user's social profile.
         */
        SocialFeed:Types.ISocialFeed;

        /**
         * Use this api to interact with the current user's profile.
         */
        UserProfile:Types.IUserProfile;

        /**
         * Use this api to interact with a SharePoint web.
         */
        Web:Types.IWeb;
    }
    export var $REST:IREST;
}