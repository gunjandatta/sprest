import { Types } from "..";
import { IContextInformation } from "../lib";
import { Base } from "../utils";
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
    ContextInfo: IContextInformation;
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
        App: Types.Helper.IApp;
        /**
         * Helper class to load the required SP scripts
         */
        Dependencies: Types.Helper.IDependencies;
        /**
         * Helper class for generating a field schema xml
         */
        FieldSchemaXML: Types.Helper.IFieldSchemaXML;
        /**
         * Helper class for implementing JSLink solutions
         */
        JSLink: Types.Helper.IJSLink;
        /**
         * Helper class for implementing custom list forms
         */
        ListForm: Types.Helper.IListForm;
        /**
         * Helper class for implementing custom list forms
         */
        ListFormField: Types.Helper.IListFormField;
        /**
         * Helper class for waiting until the core SP scripts are loaded
         */
        Loader: Types.Helper.ILoader;
        /**
         * Helper method to convert a json string to a base object
         * This will require you to use the stringify method of the base object.
         */
        parse: (jsonString: string) => Base;
        /**
         * Helper class for automating SharePoint assets
         */
        SPConfig: Types.Helper.ISPConfig;
        /**
         * Helper class for getting information from the taxonomy term store
         */
        Taxonomy: Types.Helper.ITaxonomy;
        /**
         * Helper class for creating modern webparts in SharePoint 2013+ environments
         */
        WebPart: Types.Helper.IWebPart;
    };
    /**
     * Use this api to interact with SharePoint lists and libraries.
     * @param listName - The name of the list.
     * @param targetInfo - (Optional) The target information.
     */
    List: (listName: string, targetInfo?: Types.Util.ITargetInfo) => Types.SP.IList;
    /**
     * Use this api to interact with SharePoint navigation.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Navigation: (url?: string, targetInfo?: Types.Util.ITargetInfo) => Types.SP.INavigationServiceREST;
    /**
     * Use this api to interact with SharePoint user profiles.
     * @param targetInfo - (Optional) The target information.
     */
    PeopleManager: (targetInfo?: Types.Util.ITargetInfo) => Types.SP.IPeopleManager;
    /**
     * Use this api to search for users.
     * @param settings - The search settings.
     */
    PeoplePicker: (settings?: Types.Util.ITargetInfo) => Types.SP.IPeoplePicker;
    /**
     * Use this api to interact with the user profile loader.
     * @param targetInfo - (Optional) The target information.
     */
    ProfileLoader: (targetInfo?: Types.Util.ITargetInfo) => Types.SP.IProfileLoader;
    /**
     * Use this api to interact with the SharePoint search service.
     * @param url - The optional url to execute the search against.
     * @param settings - The search settings.
     */
    Search: (url?: string, settings?: Types.Util.ITargetInfo) => Types.SP.ISearch;
    /**
     * The SharePoint enumerator Types.SP.
     */
    SPTypes: any;
    /**
     * Use this api to interact with a SharePoint site collection.
     * @param url - (Optional) The site url.
     * @param targetInfo - (Optional) The target information.
     */
    Site: (url?: string, targetInfo?: Types.Util.ITargetInfo) => Types.SP.ISite;
    /**
     * Use this api to interact with the current user's social profile.
     */
    SocialFeed: Types.SP.ISocialFeed;
    /**
     * Use this api to interact with the current user's profile.
     * @param targetInfo - (Optional) The target information.
     */
    UserProfile: (targetInfo?: Types.Util.ITargetInfo) => Types.SP.IUserProfile;
    /**
     * The utility api
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Utility: (url?: string, targetInfo?: Types.Util.ITargetInfo) => Types.SP.IUtility;
    /**
     * Use this api to interact with a SharePoint web.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Web: (url?: string, targetInfo?: Types.Util.ITargetInfo) => Types.SP.IWeb;
}
