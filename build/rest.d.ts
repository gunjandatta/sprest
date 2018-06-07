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
     * Use this api to interact with the Graph API. (Still In Development)
     */
    Graph: any;
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
            ModalDialog: Helper.Types.IModalDialog;
            /** Notify */
            Notify: Helper.Types.INotify;
            /** Status */
            Status: Helper.Types.IStatus;
        };
        /**
         * The field configuration types
         */
        SPCfgFieldType: Helper.Types.ISPCfgFieldType;
        /**
         * The configuration types
         */
        SPCfgType: Helper.Types.ISPCfgType;
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
     * Use this api to get the list name by its entity name.
     * @param entityTypeName - The entity type name of the list.
     * @param callback - The method to be executed after the request completes.
     */
    ListByEntityName(entityTypeName: string, callback: (IList) => void, targetInfo?: any): Util.Types.IBase<Mapper.Types.IList, Mapper.Types.IListResult, Mapper.Types.IListQueryResult>;
    /**
     * Use this api to get the list data.
     * @param listFullUrl - The absolute url of the list.
     * @param parameters - The optional list data parameters.
     */
    ListDataAsStream: (listFullUrl: string, parameters?: Mapper.Types.IListDataParameters) => Util.Types.IBase<Mapper.Types.IListDataStream>;
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
     * Use this api to get a remote web.
     * @param requestUrl - The absolute url of the remote web.
     */
    RemoteWeb: (requestUrl?: string) => Util.Types.IBase<Mapper.Types.IWebRemote>;
    /**
     * Use this api to interact with the SharePoint search service.
     * @param url - The optional url to execute the search against.
     * @param settings - The search settings.
     */
    Search: (url?: string, settings?: Util.Types.ITargetInfo) => Mapper.Types.ISearch;
    /**
     * Use this api to interact with a SharePoint site collection.
     * @param url - (Optional) The site url.
     * @param targetInfo - (Optional) The target information.
     */
    Site: (url?: string, targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.ISite;
    /**
     * Use this api to see if a site collection exists.
     * @param url - The absolute url of the site collection.
     */
    SiteExists: (url: string) => Util.Types.IBase<Mapper.Types.ISiteExists>;
    /**
     * Use this api to interact with the current user's social profile.
     */
    SocialFeed: Mapper.Types.ISocialFeed;
    /**
     * The SharePoint enumerator types.
     */
    SPTypes: any;
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
export declare const $REST: IREST;
