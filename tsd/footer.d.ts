/***********************************************************************************************
 * SharePoint REST Library
 **********************************************************************************************/
declare module $REST {
    /**
     * Flag to execute requests against the host web. This is relevent to the app web only, and defaults to the SPHostUrl querystring value.
     */
    let DefaultRequestToHostWebFl:boolean;

    /** Email */
    let Email: $REST.Types.IEmail;

    /** Helper Methods */
    let Helper: $REST.Types.IHelper;

    /** List */
    let List: $REST.Types.IList;

    /** People Manager */
    let PeopleManager: $REST.Types.IPeopleManager;

    /** Profile Loader */
    let ProfileLoader: $REST.Types.IProfileLoader;

    /** Search */
    let Search: $REST.Types.ISearch;
    
    /** Site */
    let Site: $REST.Types.ISite;

    /** Social */
    let SocialFeed: $REST.Types.ISocialFeed;

    /** User Profile */
    let UserProfile: $REST.Types.IBase;
    
    /** Web */
    let Web: $REST.Types.IWeb;
}
