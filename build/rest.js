"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./helper");
var lib_1 = require("./lib");
var mapper_1 = require("./mapper");
/**
 * SharePoint REST Library
 */
exports.$REST = {
    __ver: 3.17,
    ContextInfo: lib_1.ContextInfo,
    DefaultRequestToHostFl: false,
    Helper: helper_1.Helper,
    JSLink: lib_1.JSLink,
    List: function (listName, targetInfo) { return new lib_1.List(listName, targetInfo); },
    Navigation: function (url, targetInfo) { return new lib_1.Navigation(url, targetInfo); },
    PeopleManager: function (targetInfo) { return new lib_1.PeopleManager(targetInfo); },
    PeoplePicker: function (targetInfo) { return new lib_1.PeoplePicker(targetInfo); },
    ProfileLoader: function (targetInfo) { return new lib_1.ProfileLoader(targetInfo); },
    Search: function (url, targetInfo) { return new lib_1.Search(url, targetInfo); },
    Site: function (url, targetInfo) { return new lib_1.Site(url, targetInfo); },
    SPTypes: mapper_1.SPTypes,
    SocialFeed: lib_1.SocialFeed,
    UserProfile: function (targetInfo) { return new lib_1.UserProfile(targetInfo); },
    Utility: function (url, targetInfo) { return new lib_1.Utility(url, targetInfo); },
    Web: function (url, targetInfo) { return new lib_1.Web(url, targetInfo); }
};
// See if the library doesn't exist, or is an older version
var global = lib_1.ContextInfo.window.$REST;
if (global == null || global.__ver == null || global.__ver < exports.$REST.__ver) {
    // Set the global variable
    lib_1.ContextInfo.window.$REST = exports.$REST;
}
//# sourceMappingURL=rest.js.map