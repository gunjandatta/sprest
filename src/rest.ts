import * as Helper from "./helper";
import * as Lib from "./lib";
import * as LibV2 from "./v2";
import { GraphTypes, SPTypes } from "./sptypes";
import { IREST } from "../@types";

/**
 * SharePoint REST Library
 */
export const $REST: IREST = {
    __ver: 8.79,
    AppContext: (siteUrl: string) => { return Lib.Site.getAppContext(siteUrl); },
    Apps: Lib.Apps,
    ContextInfo: Lib.ContextInfo,
    DefaultRequestToHostFl: false,
    drive: LibV2.drive,
    drives: LibV2.drives,
    GetWebUrlFromPageUrl: Lib.Web.getWebUrlFromPageUrl,
    Graph: Lib.Graph,
    GraphTypes,
    GroupService: Lib.GroupService,
    GroupSiteManager: Lib.GroupSiteManager,
    Helper,
    HubSites: Lib.HubSites,
    HubSitesUtility: Lib.HubSitesUtility,
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
    SiteIconManager: Lib.SiteIconManager,
    SiteManager: Lib.SiteManager,
    SitePages: Lib.SitePages,
    SiteExists: (url) => { return Lib.Site.exists(url); },
    sites: LibV2.sites,
    SiteUrl: (id: string) => { return Lib.Site.getUrlById(id); },
    SPTypes: SPTypes as any,
    SocialFeed: Lib.SocialFeed,
    ThemeManager: Lib.ThemeManager,
    UserProfile: Lib.UserProfile,
    Utility: Lib.Utility,
    Web: Lib.Web,
    WebTemplateExtensions: Lib.WebTemplateExtensions,
    WorkflowInstanceService: Lib.WorkflowInstanceService,
    WorkflowSubscriptionService: Lib.WorkflowSubscriptionService
};

// See if the library doesn't exist, or is an older version
let global = Lib.ContextInfo.window.$REST;
if (global == null || global.__ver == null || global.__ver < $REST.__ver) {
    // Set the global variable
    Lib.ContextInfo.window.$REST = $REST;

    // Ensure the SP lib exists
    if (Lib.ContextInfo.window.SP) {
        // If MDS is turned on in a SP2013 environment, it may throw an error
        try {
            // Alert other scripts this library is loaded
            Lib.ContextInfo.window.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest");
            Lib.ContextInfo.window.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest.js");
        }
        catch {
            // Log
            console.error("[gd-sprest] Error notifying scripts using the SP SOD library.");
        }
    }
}