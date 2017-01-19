"use strict";
var lib_1 = require("./lib");
exports.ContextInfo = lib_1.ContextInfo;
exports.Email = lib_1.Email;
exports.Helper = lib_1.Helper;
exports.List = lib_1.List;
exports.PeopleManager = lib_1.PeopleManager;
exports.PeoplePicker = lib_1.PeoplePicker;
exports.ProfileLoader = lib_1.ProfileLoader;
exports.Search = lib_1.Search;
exports.Site = lib_1.Site;
exports.SocialFeed = lib_1.SocialFeed;
exports.UserProfile = lib_1.UserProfile;
exports.Web = lib_1.Web;
/**
 * SharePoint REST Library
 */
var gd_sprest = {
    ContextInfo: lib_1.ContextInfo,
    DefaultRequestToHostFl: false,
    Email: lib_1.Email,
    Helper: lib_1.Helper,
    List: lib_1.List,
    PeopleManager: lib_1.PeopleManager,
    PeoplePicker: lib_1.PeoplePicker,
    ProfileLoader: lib_1.ProfileLoader,
    Search: lib_1.Search,
    Site: lib_1.Site,
    SocialFeed: lib_1.SocialFeed,
    UserProfile: lib_1.UserProfile,
    Web: lib_1.Web
};
// Make the library globally available
window["$REST"] = gd_sprest;
exports.$REST = gd_sprest;
//# sourceMappingURL=gd-sprest.js.map