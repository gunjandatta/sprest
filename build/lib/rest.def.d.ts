import { IContextInformation } from "../lib";
import { Base } from "../utils";
import { Types } from "..";
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
        FieldSchemaXML: Types.Helper.FieldSchemaXML.IFieldSchemaXML;
        /**
         * Helper class for implementing JSLink solutions
         */
        JSLink: Types.Helper.JSLink.IJSLink;
        /**
         * Helper class for implementing custom list forms
         */
        ListForm: Types.Helper.ListForm.IListForm;
        /**
         * Helper class for implementing custom list forms
         */
        ListFormField: Types.Helper.ListFormField.IListFormField;
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
        Taxonomy: Types.Helper.Taxonomy.ITaxonomy;
        /**
         * Helper class for creating modern webparts in SharePoint 2013+ environments
         */
        WebPart: Types.Helper.WebPart.IWebPart;
    };
    /**
     * Use this api to interact with SharePoint lists and libraries.
     * @param listName - The name of the list.
     * @param targetInfo - (Optional) The target information.
     */
    List: (listName: string, targetInfo?: Types.Utils.ITargetInfo) => Types.IList;
    /**
     * Use this api to interact with SharePoint navigation.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Navigation: (url?: string, targetInfo?: Types.Utils.ITargetInfo) => Types.INavigationServiceREST;
    /**
     * Use this api to interact with SharePoint user profiles.
     * @param targetInfo - (Optional) The target information.
     */
    PeopleManager: (targetInfo?: Types.Utils.ITargetInfo) => Types.IPeopleManager;
    /**
     * Use this api to search for users.
     * @param settings - The search settings.
     */
    PeoplePicker: (settings?: Types.Utils.ITargetInfo) => Types.IPeoplePicker;
    /**
     * Use this api to interact with the user profile loader.
     * @param targetInfo - (Optional) The target information.
     */
    ProfileLoader: (targetInfo?: Types.Utils.ITargetInfo) => Types.IProfileLoader;
    /**
     * Use this api to interact with the SharePoint search service.
     * @param url - The optional url to execute the search against.
     * @param settings - The search settings.
     */
    Search: (url?: string, settings?: Types.Utils.ITargetInfo) => Types.ISearch;
    /**
     * The SharePoint enumerator types.
     */
    SPTypes: any;
    /**
     * Use this api to interact with a SharePoint site collection.
     * @param url - (Optional) The site url.
     * @param targetInfo - (Optional) The target information.
     */
    Site: (url?: string, targetInfo?: Types.Utils.ITargetInfo) => Types.ISite;
    /**
     * Use this api to interact with the current user's social profile.
     */
    SocialFeed: Types.ISocialFeed;
    /**
     * Use this api to interact with the current user's profile.
     * @param targetInfo - (Optional) The target information.
     */
    UserProfile: (targetInfo?: Types.Utils.ITargetInfo) => Types.IUserProfile;
    /**
     * The utility api
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Utility: (url?: string, targetInfo?: Types.Utils.ITargetInfo) => Types.IUtility;
    /**
     * Use this api to interact with a SharePoint web.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Web: (url?: string, targetInfo?: Types.Utils.ITargetInfo) => Types.IWeb;
}
