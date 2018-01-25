import { IHelper } from "./helper";
import { IContextInformation, IJSLink } from "./lib";
import { Types } from "./mapper";
import { ITargetInfo } from "./utils";
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
    Helper: IHelper;
    /**
     * Use this helper library for implementing JSLink solutions.
     */
    JSLink: IJSLink;
    /**
     * Use this api to interact with SharePoint lists and libraries.
     * @param listName - The name of the list.
     * @param targetInfo - (Optional) The target information.
     */
    List: (listName: string, targetInfo?: ITargetInfo) => Types.IList;
    /**
     * Use this api to interact with SharePoint navigation.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Navigation: (url?: string, targetInfo?: ITargetInfo) => Types.INavigationServiceREST;
    /**
     * Use this api to interact with SharePoint user profiles.
     * @param targetInfo - (Optional) The target information.
     */
    PeopleManager: (targetInfo?: ITargetInfo) => Types.IPeopleManager;
    /**
     * Use this api to search for users.
     * @param settings - The search settings.
     */
    PeoplePicker: (settings?: ITargetInfo) => Types.IPeoplePicker;
    /**
     * Use this api to interact with the user profile loader.
     * @param targetInfo - (Optional) The target information.
     */
    ProfileLoader: (targetInfo?: ITargetInfo) => Types.IProfileLoader;
    /**
     * Use this api to interact with the SharePoint search service.
     * @param url - The optional url to execute the search against.
     * @param settings - The search settings.
     */
    Search: (url?: string, settings?: ITargetInfo) => Types.ISearch;
    /**
     * The SharePoint enumerator types.
     */
    SPTypes: any;
    /**
     * Use this api to interact with a SharePoint site collection.
     * @param url - (Optional) The site url.
     * @param targetInfo - (Optional) The target information.
     */
    Site: (url?: string, targetInfo?: ITargetInfo) => Types.ISite;
    /**
     * Use this api to interact with the current user's social profile.
     */
    SocialFeed: Types.ISocialFeed;
    /**
     * Use this api to interact with the current user's profile.
     * @param targetInfo - (Optional) The target information.
     */
    UserProfile: (targetInfo?: ITargetInfo) => Types.IUserProfile;
    /**
     * The utility api
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Utility: (url?: string, targetInfo?: ITargetInfo) => Types.IUtility;
    /**
     * Use this api to interact with a SharePoint web.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    Web: (url?: string, targetInfo?: ITargetInfo) => Types.IWeb;
}
