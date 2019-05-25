import { Base, SP } from "gd-sprest-def";
import { IHelper } from "./helper/types";
import * as LibTypes from "./lib/types";

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
    AppContext: (siteUrl: string) => Base.IBaseExecution;

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
    ListByEntityName(props: LibTypes.IListEntityProps): SP.IList;

    /**
     * Use this api to get the list data.
     * @param listFullUrl - The absolute url of the list.
     * @param parameters - The optional list data parameters.
     */
    ListDataAsStream: (listFullUrl: string, parameters?: SP.RenderListDataParameters) => Base.IBaseExecution<LibTypes.IListDataStream>

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
    RemoteWeb: (requestUrl?: string) => Base.IBaseExecution<SP.RemoteWeb>;

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
    SiteExists: (url: string) => Base.IBaseExecution<LibTypes.ISiteExists>;

    /**
     * Use this api to get the url of a site, by its id.
     * @param id - The site id.
     */
    SiteUrl: (id: string) => Base.IBaseExecution<LibTypes.ISiteUrl>;

    /**
     * Use this api to interact with the current user's social profile.
     */
    SocialFeed: LibTypes.ISocialFeed;

    /**
     * The SharePoint enumerator types.
     */
    SPTypes;

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
}