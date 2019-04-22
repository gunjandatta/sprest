import * as Helper from "./helper";
import * as Lib from "./lib";
import * as Mapper from "./mapper";
import { IREST } from "./rest.d";

/**
 * SharePoint REST Library
 */
export const $REST: IREST = {
    __ver: 4.82,
    AppContext: (siteUrl: string) => { return Lib.Site.getAppContext(siteUrl); },
    ContextInfo: Lib.ContextInfo,
    DefaultRequestToHostFl: false,
    Graph: Lib.Graph,
    Helper,
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