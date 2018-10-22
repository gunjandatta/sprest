import { SP } from "gd-sprest-def";
import * as HelperTypes from "./helper/types";
import * as LibTypes from "./lib/types";
import * as MapperTypes from "./mapper/types";
import * as UtilTypes from "./utils/types";

export {
    HelperTypes as Helper,
    MapperTypes as SP,
    UtilTypes as Util
}
/**
 * Helper
 */
export interface IHelper {
    /**
     * Helper classes for the app web
     */
    App: HelperTypes.IApp;

    /**
     * Helper class to load the required SP scripts
     */
    Dependencies: HelperTypes.IDependencies;

    /**
     * Method to create a document set item.
     */
    createDocSet: (name: string, listName: string, webUrl?: string) => PromiseLike<MapperTypes.IListItemResult>;

    /**
     * Executor
     */
    Executor<T = any>(methodParams: Array<T>, method: (param: T) => PromiseLike<any> | void, onExecuted?: (...args) => PromiseLike<any> | void);

    /**
     * Helper class for generating a field schema xml
     */
    FieldSchemaXML: (fieldInfo: HelperTypes.IFieldInfo) => PromiseLike<string>;

    /**
     * Helper class for implementing JSLink solutions
     */
    JSLink: HelperTypes.IJSLink;

    /**
     * Helper class for implementing custom list forms
     */
    ListForm: HelperTypes.IListForm;

    /**
     * Helper class for implementing custom list forms
     */
    ListFormField: HelperTypes.IListFormField;

    /**
     * Helper class for waiting until the core SP scripts are loaded
     */
    Loader: HelperTypes.ILoader;

    /**
     * Helper method to convert a json string to a base object
     * This will require you to use the stringify method of the base object.
     */
    parse<T = UtilTypes.IBase>(jsonString: string): T;

    /**
     * Helper method to execute an XMLHttpRequest
     */
    request(props: HelperTypes.IRequest): PromiseLike<any>;

    /**
     * Helper class for adding links to the top ribbon bar
     */
    RibbonLink: (props: HelperTypes.ILinkInfo) => HTMLAnchorElement;

    /**
     * SharePoint Core Library Reference
     */
    SP: {
        /** Modal Dialog */
        ModalDialog: HelperTypes.IModalDialog,

        /** Notify */
        Notify: HelperTypes.INotify,

        /** Status */
        Status: HelperTypes.IStatus
    };

    /**
     * The field configuration types
     */
    SPCfgFieldType: HelperTypes.ISPCfgFieldType;

    /**
     * The configuration types
     */
    SPCfgType: HelperTypes.ISPCfgType;

    /**
     * Helper class for automating SharePoint assets
     */
    SPConfig: (cfg: HelperTypes.ISPConfigProps, webUrl?: string) => HelperTypes.ISPConfig;

    /**
     * Helper class for adding links to the suite bar
     */
    SuiteBarLink: (props: HelperTypes.ILinkInfo) => HTMLAnchorElement;

    /**
     * Helper class for getting information from the taxonomy term store
     */
    Taxonomy: HelperTypes.ITaxonomy;

    /**
     * Helper class for creating modern webparts in SharePoint 2013+ environments
     */
    WebPart: HelperTypes.IWebPart;
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
    AppContext: (siteUrl: string) => UtilTypes.IBase;

    /**
     * A reference to the _spPageContextInfo global variable.
     */
    ContextInfo: LibTypes.IContextInformation;

    /**
     * False by default.
     */
    DefaultRequestToHostFl: boolean;

    /**
     * Use this api to interact with the Graph API. (Still In Development)
     */
    Graph: LibTypes.IGraph;

    /**
     * Helper methods.
     */
    Helper: IHelper;

    /**
     * Use this api to interact with SharePoint lists and libraries.
     */
    List: LibTypes.IList;

    /**
     * Use this api to get the list name by its entity name.
     * @param entityTypeName - The entity type name of the list.
     * @param callback - The method to be executed after the request completes.
     */
    ListByEntityName(entityTypeName: string, callback: (IList) => void, targetInfo?): UtilTypes.IBase<MapperTypes.IList, MapperTypes.IListResult, MapperTypes.IListQueryResult>;

    /**
     * Use this api to get the list data.
     * @param listFullUrl - The absolute url of the list.
     * @param parameters - The optional list data parameters.
     */
    ListDataAsStream: (listFullUrl: string, parameters?: SP.RenderListDataParameters) => UtilTypes.IBase<MapperTypes.IListDataStream>

    /**
     * Use this api to interact with SharePoint navigation.
     */
    Navigation: LibTypes.INavigation;

    /**
     * Use this api to interact with SharePoint user profiles.
     * @param targetInfo - (Optional) The target information.
     */
    PeopleManager: LibTypes.IPeopleManager;

    /**
     * Use this api to search for users.
     * @param settings - The search settings.
     */
    PeoplePicker: LibTypes.IPeoplePicker;

    /**
     * Use this api to interact with the user profile loader.
     * @param targetInfo - (Optional) The target information.
     */
    ProfileLoader: LibTypes.IProfileLoader;

    /**
     * Use this api to get a remote web.
     * @param requestUrl - The absolute url of the remote web.
     */
    RemoteWeb: (requestUrl?: string) => UtilTypes.IBase<SP.RemoteWeb>;

    /**
     * Use this api to interact with the SharePoint search service.
     * @param url - The optional url to execute the search against.
     * @param settings - The search settings.
     */
    Search: LibTypes.ISearch;

    /**
     * Use this api to interact with a SharePoint site collection.
     */
    Site: LibTypes.ISite;

    /**
     * Use this api to see if a site collection exists.
     * @param url - The absolute url of the site collection.
     */
    SiteExists: (url: string) => UtilTypes.IBase<MapperTypes.ISiteExists>;

    /**
     * Use this api to get the url of a site, by its id.
     * @param id - The site id.
     */
    SiteUrl: (id: string) => UtilTypes.IBase<MapperTypes.ISiteUrl>;

    /**
     * Use this api to interact with the current user's social profile.
     */
    SocialFeed: LibTypes.ISocialFeed;

    /**
     * The SharePoint enumerator types.
     */
    SPTypes;

    /**
     * Use this api to interact with the current user's profile.
     */
    UserProfile: LibTypes.IUserProfile;

    /**
     * Use this api to interact with the available utility methods.
     */
    Utility: LibTypes.IUtility;

    /**
     * Use this api to interact with a SharePoint web.
     */
    Web: LibTypes.IWeb;
}