import { SP } from "@dattabase/sprest-def";
import { IHelper } from "./helper/types/helper";
import * as LibTypes from "./lib/types";
import * as MapperTypes from "./mapper/types";
import * as UtilTypes from "./utils/types";

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
     * @param props - The list entity request properties.
     */
    ListByEntityName(props: LibTypes.IListEntityProps): UtilTypes.IBase<MapperTypes.IList, MapperTypes.IListResult, MapperTypes.IListQueryResult>;

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