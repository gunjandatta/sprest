"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Helper = require("./helper");
var Lib = require("./lib");
var Mapper = require("./mapper");
/**
 * SharePoint REST Library
 */
exports.$REST = {
    __ver: 4.47,
    AppContext: function (siteUrl) { return Lib.Site.getAppContext(siteUrl); },
    ContextInfo: Lib.ContextInfo,
    DefaultRequestToHostFl: false,
    Graph: Lib.Graph,
    Helper: {
        App: Helper.App,
        Dependencies: Helper.Dependencies,
        createDocSet: Helper.createDocSet,
        Executor: Helper.Executor,
        FieldSchemaXML: Helper.FieldSchemaXML,
        hasPermissions: Helper.hasPermissions,
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
    RemoteWeb: function (requestUrl) { return Lib.Web.getRemoteWeb(requestUrl); },
    Search: Lib.Search,
    Site: Lib.Site,
    SiteExists: function (url) { return Lib.Site.exists(url); },
    SiteUrl: function (id) { return Lib.Site.getUrlById(id); },
    SPTypes: Mapper.SPTypes,
    SocialFeed: Lib.SocialFeed,
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
        // Alert other scripts this library is loaded
        Lib.ContextInfo.window.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest.js");
    }
}
