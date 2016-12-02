/***********************************************************************************************
 * Main Interface
 **********************************************************************************************/
interface GD_SP_REST {
    /***********************************************************************************************
     * Global Variables
     **********************************************************************************************/

    /**
     * Flag to execute requests against the host web. This is relevent to the app web only, and defaults to the SPHostUrl querystring value.
     */
    DefaultRequestToHostWebFl:boolean;

    /** Email */
    Email:GD.Types.IEmail;

    /** Helper Methods */
    Helper:GD.Types.IHelper;

    /** List */
    List:GD.Types.IList;

    /** People Manager */
    PeopleManager:GD.Types.IPeopleManager;

    /** Profile Loader */
    ProfileLoader:GD.Types.IProfileLoader;

    /** Search */
    Search:GD.Types.ISearch;
    
    /** Site */
    Site:GD.Types.ISite;

    /** Social */
    SocialFeed:GD.Types.ISocialFeed;

    /** User Profile */
    UserProfile:GD.Types.IBase;
    
    /** Web */
    Web:GD.Types.IWeb;
}

/***********************************************************************************************
 * Export Variables
 **********************************************************************************************/
declare module "gd-sprest" {
    export = $REST;
}

/**
 * SharePoint REST Library
 */
declare var $REST: GD_SP_REST;