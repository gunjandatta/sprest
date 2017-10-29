"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type definitions for gd-sprest
// Project: https://gunjandatta.github.io/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>
/***************************************************************************************************
MIT License

Copyright (c) 2016 Dattabase, LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************************************/
var Types = require("./definitions");
exports.Types = Types;
var types_1 = require("./types");
exports.RequestType = types_1.RequestType;
exports.SPTypes = types_1.SPTypes;
var lib_1 = require("./lib");
exports.ContextInfo = lib_1.ContextInfo;
exports.Email = lib_1.Email;
exports.Helper = lib_1.Helper;
exports.JSLink = lib_1.JSLink;
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
    __ver: 2.15,
    ContextInfo: lib_1.ContextInfo,
    DefaultRequestToHostFl: false,
    Email: lib_1.Email,
    Helper: lib_1.Helper,
    JSLink: lib_1.JSLink,
    List: function (listName, targetInfo) { return new lib_1.List(listName, targetInfo); },
    PeopleManager: function (targetInfo) { return new lib_1.PeopleManager(targetInfo); },
    PeoplePicker: function (targetInfo) { return new lib_1.PeoplePicker(targetInfo); },
    ProfileLoader: function (targetInfo) { return new lib_1.ProfileLoader(targetInfo); },
    Search: function (url, targetInfo) { return new lib_1.Search(url, targetInfo); },
    Site: function (url, targetInfo) { return new lib_1.Site(url, targetInfo); },
    SocialFeed: lib_1.SocialFeed,
    UserProfile: function (targetInfo) { return new lib_1.UserProfile(targetInfo); },
    Web: function (url, targetInfo) { return new lib_1.Web(url, targetInfo); }
};
// Export the $REST library
exports.$REST = gd_sprest;
// See if the library doesn't exist, or is an older version
if (lib_1.ContextInfo.window.$REST == null || lib_1.ContextInfo.window.$REST.__ver == null || lib_1.ContextInfo.window.$REST.__ver < gd_sprest.__ver) {
    // Set the global variable
    lib_1.ContextInfo.window.$REST = gd_sprest;
}
//# sourceMappingURL=gd-sprest.js.map