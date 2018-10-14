import * as Helper from "./helper";
import * as Lib from "./lib";
import * as Mapper from "./mapper";
import * as Util from "./utils";
declare var SP;

/**
 * Helper
 */
export interface IHelper {
    /**
     * Helper classes for the app web
     */
    App: Helper.Types.IApp;

    /**
     * Helper class to load the required SP scripts
     */
    Dependencies: Helper.Types.IDependencies;

    /**
     * Method to create a document set item.
     */
    createDocSet: (name: string, listName: string, webUrl?: string) => PromiseLike<Mapper.Types.IListItemResult>;

    /**
     * Executor
     */
    Executor<T = any>(methodParams: Array<T>, method: (param: T) => PromiseLike<any> | void, onExecuted?: (...args) => PromiseLike<any> | void);

    /**
     * Helper class for generating a field schema xml
     */
    FieldSchemaXML: (fieldInfo: Helper.Types.IFieldInfo) => PromiseLike<string>;

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
    parse<T = Util.Types.IBase>(jsonString: string): T;

    /**
     * Helper method to execute an XMLHttpRequest
     */
    request(props: Helper.Types.IRequest): PromiseLike<any>;

    /**
     * Helper class for adding links to the top ribbon bar
     */
    RibbonLink: (props: Helper.Types.ILinkInfo) => HTMLAnchorElement;

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
    SPConfig: (cfg: Helper.Types.ISPConfigProps, webUrl?: string) => Helper.Types.ISPConfig;

    /**
     * Helper class for adding links to the suite bar
     */
    SuiteBarLink: (props: Helper.Types.ILinkInfo) => HTMLAnchorElement;

    /**
     * Helper class for getting information from the taxonomy term store
     */
    Taxonomy: Helper.Types.ITaxonomy;

    /**
     * Helper class for creating modern webparts in SharePoint 2013+ environments
     */
    WebPart: Helper.Types.IWebPart;
}

/**
 * SharePoint REST Library
 */
export interface IREST {
    /**
     * The version number of the library.
     */
    __ver: number;

    /**
     * Use this api to get the app context information of a site.
     */
    AppContext: (siteUrl: string) => Util.Types.IBase;

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
    Graph: Lib.Types.IGraph;

    /**
     * Helper methods.
     */
    Helper: IHelper;

    /**
     * Use this api to interact with SharePoint lists and libraries.
     */
    List: Lib.Types.IList;

    /**
     * Use this api to get the list name by its entity name.
     * @param entityTypeName - The entity type name of the list.
     * @param callback - The method to be executed after the request completes.
     */
    ListByEntityName(entityTypeName: string, callback: (IList) => void, targetInfo?): Util.Types.IBase<Mapper.Types.IList, Mapper.Types.IListResult, Mapper.Types.IListQueryResult>;

    /**
     * Use this api to get the list data.
     * @param listFullUrl - The absolute url of the list.
     * @param parameters - The optional list data parameters.
     */
    ListDataAsStream: (listFullUrl: string, parameters?: Mapper.Types.IListDataParameters) => Util.Types.IBase<Mapper.Types.IListDataStream>

    /**
     * Use this api to interact with SharePoint navigation.
     */
    Navigation: Lib.Types.INavigation;

    /**
     * Use this api to interact with SharePoint user profiles.
     * @param targetInfo - (Optional) The target information.
     */
    PeopleManager: Lib.Types.IPeopleManager;

    /**
     * Use this api to search for users.
     * @param settings - The search settings.
     */
    PeoplePicker: Lib.Types.IPeoplePicker;

    /**
     * Use this api to interact with the user profile loader.
     * @param targetInfo - (Optional) The target information.
     */
    ProfileLoader: Lib.Types.IProfileLoader;

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
    Search: Lib.Types.ISearch;

    /**
     * Use this api to interact with a SharePoint site collection.
     */
    Site: Lib.Types.ISite;

    /**
     * Use this api to see if a site collection exists.
     * @param url - The absolute url of the site collection.
     */
    SiteExists: (url: string) => Util.Types.IBase<Mapper.Types.ISiteExists>;

    /**
     * Use this api to get the url of a site, by its id.
     * @param id - The site id.
     */
    SiteUrl: (id: string) => Util.Types.IBase<Mapper.Types.ISiteUrl>;

    /**
     * Use this api to interact with the current user's social profile.
     */
    SocialFeed: Lib.Types.ISocialFeed;

    /**
     * The SharePoint enumerator types.
     */
    SPTypes;

    /**
     * Use this api to interact with the current user's profile.
     */
    UserProfile: Lib.Types.IUserProfile;

    /**
     * Use this api to interact with the available utility methods.
     */
    Utility: Lib.Types.IUtility;

    /**
     * Use this api to interact with a SharePoint web.
     */
    Web: Lib.Types.IWeb;
}

/**
 * SharePoint REST Library
 */
export const $REST: IREST = {
    __ver: 4.31,
    AppContext: (siteUrl: string) => { return Lib.Site.getAppContext(siteUrl); },
    ContextInfo: Lib.ContextInfo,
    DefaultRequestToHostFl: false,
    Graph: Lib.Graph,
    Helper: {
        App: Helper.App,
        Dependencies: Helper.Dependencies,
        createDocSet: Helper.createDocSet,
        Executor: Helper.Executor,
        FieldSchemaXML: Helper.FieldSchemaXML,
        JSLink: Helper.JSLink,
        ListForm: Helper.ListForm,
        ListFormField: Helper.ListFormField,
        Loader: Helper.Loader,
        parse: Helper.parse,
        request: Helper.request,
        RibbonLink: Helper.RibbonLink,
        SP: Helper.SP,
        SPCfgFieldType: Helper.SPCfgFieldType,
        SPCfgType: Helper.SPCfgType,
        SPConfig: Helper.SPConfig,
        SuiteBarLink: Helper.SuiteBarLink,
        Taxonomy: Helper.Taxonomy,
        WebPart: Helper.WebPart
    },
    List: Lib.List,
    ListByEntityName: Lib.List.getByEntityName,
    ListDataAsStream: Lib.List.getDataAsStream,
    Navigation: Lib.Navigation,
    PeopleManager: Lib.PeopleManager,
    PeoplePicker: Lib.PeoplePicker,
    ProfileLoader: Lib.ProfileLoader,
    RemoteWeb: (requestUrl) => { return Lib.Web.getRemoteWeb(requestUrl); },
    Search: Lib.Search,
    Site: Lib.Site,
    SiteExists: (url) => { return Lib.Site.exists(url); },
    SiteUrl: (id: string) => { return Lib.Site.getUrlById(id); },
    SPTypes: Mapper.SPTypes,
    SocialFeed: Lib.SocialFeed,
    UserProfile: Lib.UserProfile,
    Utility: Lib.Utility,
    Web: Lib.Web
};

// See if the library doesn't exist, or is an older version
let global = Lib.ContextInfo.window.$REST;
if (global == null || global.__ver == null || global.__ver < $REST.__ver) {
    // Set the global variable
    Lib.ContextInfo.window.$REST = $REST;

    // Ensure the SP lib exists
    if (Lib.ContextInfo.window.SP) {
        // Alert other scripts this library is loaded
        Lib.ContextInfo.window.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest.js");
    }
}