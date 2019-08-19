"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Helper = require("./helper");
var Lib = require("./lib");
var Mapper = require("./mapper");
/**
 * SharePoint REST Library
 */
exports.$REST = {
    __ver: 4.88,
    AppContext: function (siteUrl) { return Lib.Site.getAppContext(siteUrl); },
    Apps: Lib.Apps,
    ContextInfo: Lib.ContextInfo,
    DefaultRequestToHostFl: false,
    Graph: Lib.Graph,
    GroupService: Lib.GroupService,
    GroupSiteManager: Lib.GroupSiteManager,
    Helper: Helper,
    HubSites: Lib.HubSites,
    HubSitesUtility: Lib.HubSitesUtility,
    List: Lib.List,
    ListByEntityName: Lib.List.getByEntityName,
    ListDataAsStream: Lib.List.getDataAsStream,
    Navigation: Lib.Navigation,
    PeopleManager: Lib.PeopleManager,
    PeoplePicker: Lib.PeoplePicker,
    ProfileLoader: Lib.ProfileLoader,
    RemoteWeb: function (requestUrl) { return Lib.Web.getRemoteWeb(requestUrl); },
    Search: Lib.Search,
    Site: Lib.Site,
    SiteExists: function (url) { return Lib.Site.exists(url); },
    SiteUrl: function (id) { return Lib.Site.getUrlById(id); },
    SPTypes: Mapper.SPTypes,
    SocialFeed: Lib.SocialFeed,
    ThemeManager: Lib.ThemeManager,
    UserProfile: Lib.UserProfile,
    Utility: Lib.Utility,
    Web: Lib.Web
};
// See if the library doesn't exist, or is an older version
var global = Lib.ContextInfo.window.$REST;
if (global == null || global.__ver == null || global.__ver < exports.$REST.__ver) {
    // Set the global variable
    Lib.ContextInfo.window.$REST = exports.$REST;
    // Ensure the SP lib exists
    if (Lib.ContextInfo.window.SP) {
        // If MDS is turned on in a SP2013 environment, it may throw an error
        try {
            // Alert other scripts this library is loaded
            Lib.ContextInfo.window.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest");
            Lib.ContextInfo.window.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest.js");
        }
        catch (_a) {
            // Log
            console.error("[gd-sprest] Error notifying scripts using the SP SOD library.");
        }
    }
}
