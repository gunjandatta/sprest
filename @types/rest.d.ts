import { IBaseExecution } from "gd-sprest-def/lib/base";
import { RenderListDataParameters } from "gd-sprest-def/lib/SP/complextypes";
import { IList, RemoteWeb } from "gd-sprest-def/lib/SP/entitytypes";
import { IHelper } from "./helper";
import { ISPTypes } from "./sptypes";
import * as LibTypes from "./lib";
import * as LibV2Types from "./v2";

/**
 * SharePoint REST Library
 */
export const $REST: IREST;

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
    AppContext: (siteUrl: string) => IBaseExecution;

    /**
     * Use this api to interact with the SharePoint Apps
     */
    Apps: LibTypes.IApps;

    /**
     * A reference to the _spPageContextInfo global variable.
     */
    ContextInfo: LibTypes.IContextInformation;

    /**
     * False by default.
     */
    DefaultRequestToHostFl: boolean;

    /**
     * The default library for a site.
     */
    drive: LibV2Types.Idrive;

    /**
     * The libraries for a site.
     */
    drives: LibV2Types.Idrives;

    /**
     * Use this api to get the web url from a page url.
     */
    GetWebUrlFromPageUrl: (pageUrl: string) => IBaseExecution<{ GetWebUrlFromPageUrl: string }>

    /**
     * Use this api to interact with the Graph API. (Still In Development)
     */
    Graph: LibTypes.IGraph;

    /**
     * A reference to the _api/groupservice endpoint.
     */
    GroupService: LibTypes.IGroupService;

    /**
     * A reference to the _api/groupsitemanager endpoint.
     */
    GroupSiteManager: LibTypes.IGroupSiteManager;

    /**
     * Helper methods.
     */
    Helper: IHelper;

    /**
     * A reference to the _api/hubsites endpoint.
     */
    HubSites: LibTypes.IHubSites;

    /**
     * A reference to the _api/hubsitesutility endpoint.
     */
    HubSitesUtility: LibTypes.IHubSitesUtility;

    /**
     * Use this api to interact with SharePoint lists and libraries.
     */
    List: LibTypes.IList;

    /**
     * Use this api to get the list name by its entity name.
     * @param props - The list entity request properties.
     */
    ListByEntityName(props: LibTypes.IListEntityProps): IList;

    /**
     * Use this api to get the list data.
     * @param listFullUrl - The absolute url of the list.
     * @param parameters - The optional list data parameters.
     */
    ListDataAsStream: (listFullUrl: string, parameters?: RenderListDataParameters) => IBaseExecution<LibTypes.IListDataStream>

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
    RemoteWeb: (requestUrl?: string) => IBaseExecution<RemoteWeb>;

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
     * Use this api to get/set the icon for a site.
     */
    SiteIconManager: LibTypes.ISiteIconManager;

    /**
     * Use this api to create/delete site collections.
     */
    SiteManager: LibTypes.ISiteManager;

    /**
     * Use this api to create/edit modern pages.
     */
    SitePages: LibTypes.ISitePages;

    /**
     * Use this api to see if a site collection exists.
     * @param url - The absolute url of the site collection.
     */
    SiteExists: (url: string) => IBaseExecution<LibTypes.ISiteExists>;

    /**
     * The graph sites endpoint.
     */
    sites: LibV2Types.Isites;

    /**
     * Use this api to get the url of a site, by its id.
     * @param id - The site id.
     */
    SiteUrl: (id: string) => IBaseExecution<LibTypes.ISiteUrl>;

    /**
     * Use this api to interact with the current user's social profile.
     */
    SocialFeed: LibTypes.ISocialFeed;

    /**
     * The SharePoint enumerator types.
     */
    SPTypes: ISPTypes;

    /**
     * A reference to the _api/thememanager endpoint.
     */
    ThemeManager: LibTypes.IThemeManager;

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

    /**
     * Use this api to interact with a SharePoint web template extensions.
     */
    WebTemplateExtensions: LibTypes.IWebTemplateExtensions;

    /**
     * User this api to interact with the SharePoint 2013 workflow instance service.
     */
    WorkflowInstanceService: LibTypes.IWorkflowInstanceService;

    /**
     * User this api to interact with the SharePoint 2013 workflow subscription service.
     */
    WorkflowSubscriptionService: LibTypes.IWorkflowSubscriptionService;
}