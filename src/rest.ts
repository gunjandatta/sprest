import * as Helper from "./helper";
import * as Lib from "./lib";
import * as Mapper from "./mapper";
import * as Util from "./utils";

/**
 * SharePoint REST Library
 */
export interface IREST {
    /**
     * The version number of the library.
     */
    __ver: number;

    /**
     * A reference to the _spPageContextInfo global variable.
     */
    ContextInfo: Lib.Types.IContextInformation;

    /**
     * False by default.
     */
    DefaultRequestToHostFl: boolean;

    /**
     * Helper methods.
     */
    Helper: {
        /**
         * Helper classes for the app web
         */
        App: Helper.Types.IApp;

        /**
         * Helper class to load the required SP scripts
         */
        Dependencies: Helper.Types.IDependencies;

        /**
         * Helper class for generating a field schema xml
         */
        FieldSchemaXML: Helper.Types.IFieldSchemaXML;

        /**
         * Helper class for implementing JSLink solutions
         */
        JSLink: Helper.Types.IJSLink;

        /**
         * Helper class for implementing custom list forms
         */
        ListForm: Helper.Types.IListForm;

        /**
         * Helper class for implementing custom list forms
         */
        ListFormField: Helper.Types.IListFormField;

        /**
         * Helper class for waiting until the core SP scripts are loaded
         */
        Loader: Helper.Types.ILoader;

        /**
         * Helper method to convert a json string to a base object
         * This will require you to use the stringify method of the base object.
         */
        parse: (jsonString: string) => Util.Base;

        /**
         * Helper class for adding links to the top ribbon bar
         */
        RibbonLink: Helper.Types.IRibbonLink;

        /**
         * SharePoint Core Library Reference
         */
        SP: {
            /** Modal Dialog */
            ModalDialog: Helper.Types.IModalDialog,

            /** Notify */
            Notify: Helper.Types.INotify,

            /** Status */
            Status: Helper.Types.IStatus
        };

        /**
         * Helper class for automating SharePoint assets
         */
        SPConfig: Helper.Types.ISPConfig;

        /**
         * Helper class for adding links to the suite bar
         */
        SuiteBarLink: Helper.Types.ISuiteBarLink;

        /**
         * Helper class for getting information from the taxonomy term store
         */
        Taxonomy: Helper.Types.ITaxonomy;

        /**
         * Helper class for creating modern webparts in SharePoint 2013+ environments
         */
        WebPart: Helper.Types.IWebPart;
    };

    /**
     * Use this api to interact with SharePoint lists and libraries.
     * @param listName - The name of the list.
     * @param targetInfo - (Optional) The target information.
     */
    List: (listName: string, targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.IList;

    /**
     * Use this api to interact with SharePoint navigation.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Navigation: (url?: string, targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.INavigationServiceREST;

    /**
     * Use this api to interact with SharePoint user profiles.
     * @param targetInfo - (Optional) The target information.
     */
    PeopleManager: (targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.IPeopleManager;

    /**
     * Use this api to search for users.
     * @param settings - The search settings.
     */
    PeoplePicker: (settings?: Util.Types.ITargetInfo) => Mapper.Types.IPeoplePicker;

    /**
     * Use this api to interact with the user profile loader.
     * @param targetInfo - (Optional) The target information.
     */
    ProfileLoader: (targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.IProfileLoader;

    /**
     * Use this api to interact with the SharePoint search service.
     * @param url - The optional url to execute the search against.
     * @param settings - The search settings.
     */
    Search: (url?: string, settings?: Util.Types.ITargetInfo) => Mapper.Types.ISearch;

    /**
     * The SharePoint enumerator Mapper.Types.
     */
    SPTypes;

    /**
     * Use this api to interact with a SharePoint site collection.
     * @param url - (Optional) The site url.
     * @param targetInfo - (Optional) The target information.
     */
    Site: (url?: string, targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.ISite;

    /**
     * Use this api to interact with the current user's social profile.
     */
    SocialFeed: Mapper.Types.ISocialFeed;

    /**
     * Use this api to interact with the current user's profile.
     * @param targetInfo - (Optional) The target information.
     */
    UserProfile: (targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.IUserProfile;

    /**
     * The utility api
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Utility: (url?: string, targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.IUtility;

    /**
     * Use this api to interact with a SharePoint web.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Web: (url?: string, targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.IWeb;
}

/**
 * SharePoint REST Library
 */
export const $REST: IREST = {
    __ver: 3.45,
    ContextInfo: Lib.ContextInfo,
    DefaultRequestToHostFl: false,
    Helper: {
        App: Helper.App,
        Dependencies: Helper.Dependencies,
        FieldSchemaXML: Helper.FieldSchemaXML,
        JSLink: Helper.JSLink,
        ListForm: Helper.ListForm,
        ListFormField: Helper.ListFormField,
        Loader: Helper.Loader,
        parse: Helper.parse,
        RibbonLink: Helper.RibbonLink,
        SP: Helper.SP,
        SPConfig: Helper.SPConfig,
        SuiteBarLink: Helper.SuiteBarLink,
        Taxonomy: Helper.Taxonomy,
        WebPart: Helper.WebPart
    } as any,
    List: (listName, targetInfo) => { return new Lib.List(listName, targetInfo); },
    Navigation: (url, targetInfo) => { return new Lib.Navigation(url, targetInfo); },
    PeopleManager: (targetInfo) => { return new Lib.PeopleManager(targetInfo); },
    PeoplePicker: (targetInfo) => { return new Lib.PeoplePicker(targetInfo); },
    ProfileLoader: (targetInfo) => { return new Lib.ProfileLoader(targetInfo); },
    Search: (url, targetInfo) => { return new Lib.Search(url, targetInfo); },
    Site: (url, targetInfo) => { return new Lib.Site(url, targetInfo); },
    SPTypes: Mapper.SPTypes,
    SocialFeed: Lib.SocialFeed,
    UserProfile: (targetInfo) => { return new Lib.UserProfile(targetInfo); },
    Utility: (url, targetInfo) => { return new Lib.Utility(url, targetInfo); },
    Web: (url, targetInfo) => { return new Lib.Web(url, targetInfo); }
};

// See if the library doesn't exist, or is an older version
let global = Lib.ContextInfo.window.$REST;
if (global == null || global.__ver == null || global.__ver < $REST.__ver) {
    // Set the global variable
    Lib.ContextInfo.window.$REST = $REST;
}