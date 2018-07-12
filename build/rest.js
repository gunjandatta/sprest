"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Helper = require("./helper");
var Lib = require("./lib");
var Mapper = require("./mapper");
/**
 * SharePoint REST Library
 */
exports.$REST = {
    __ver: 4.11,
    AppContext: function (siteUrl) { return Lib.Site.getAppContext(siteUrl); },
    ContextInfo: Lib.ContextInfo,
    DefaultRequestToHostFl: false,
    Graph: Lib.Graph,
    Helper: {
        App: Helper.App,
        Dependencies: Helper.Dependencies,
        FieldSchemaXML: Helper.FieldSchemaXML,
        JSLink: Helper.JSLink,
        ListForm: Helper.ListForm,
        ListFormField: Helper.ListFormField,
        Loader: Helper.Loader,
        parse: Helper.parse,
        RibbonLink: Helper.RibbonLink,
        SP: Helper.SP,
        SPCfgFieldType: Helper.SPCfgFieldType,
        SPCfgType: Helper.SPCfgType,
        SPConfig: Helper.SPConfig,
        SuiteBarLink: Helper.SuiteBarLink,
        Taxonomy: Helper.Taxonomy,
        WebPart: Helper.WebPart
    },
    List: function (listName, targetInfo) { return new Lib.List(listName, targetInfo); },
    ListByEntityName: function (entityTypeName, callback, targetInfo) { return Lib.List.getByEntityName(entityTypeName, callback, targetInfo); },
    ListDataAsStream: function (listFullUrl, parameters) { return Lib.List.getDataAsStream(listFullUrl, parameters); },
    Navigation: function (url, targetInfo) { return new Lib.Navigation(url, targetInfo); },
    PeopleManager: function (targetInfo) { return new Lib.PeopleManager(targetInfo); },
    PeoplePicker: function (targetInfo) { return new Lib.PeoplePicker(targetInfo); },
    ProfileLoader: function (targetInfo) { return new Lib.ProfileLoader(targetInfo); },
    RemoteWeb: function (requestUrl) { return Lib.Web.getRemoteWeb(requestUrl); },
    Search: function (url, targetInfo) { return new Lib.Search(url, targetInfo); },
    Site: function (url, targetInfo) { return new Lib.Site(url, targetInfo); },
    SiteExists: function (url) { return Lib.Site.exists(url); },
    SiteUrl: function (id) { return Lib.Site.getUrlById(id); },
    SPTypes: Mapper.SPTypes,
    SocialFeed: Lib.SocialFeed,
    UserProfile: function (targetInfo) { return new Lib.UserProfile(targetInfo); },
    Utility: function (url, targetInfo) { return new Lib.Utility(url, targetInfo); },
    Web: function (url, targetInfo) { return new Lib.Web(url, targetInfo); }
};
// See if the library doesn't exist, or is an older version
var global = Lib.ContextInfo.window.$REST;
if ((global == null || global.__ver == null || global.__ver < exports.$REST.__ver) && Lib.ContextInfo.window.SP) {
    // Set the global variable
    Lib.ContextInfo.window.$REST = exports.$REST;
    // Alert other scripts this library is loaded
    Lib.ContextInfo.window.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest.js");
}
