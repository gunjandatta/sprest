"use strict";
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
import "core-js/es6/promise"
import { Helper } from "./helper";
import { Types } from "./mapper";
import { RequestType, SPTypes } from "./types";
import {
    ContextInfo,
    JSLink,
    List,
    Navigation,
    PeopleManager,
    PeoplePicker,
    ProfileLoader,
    Search,
    Site,
    SocialFeed,
    UserProfile,
    Utility,
    Web
} from "./lib";
export {
    ContextInfo,
    Helper,
    JSLink,
    List,
    Navigation,
    PeopleManager,
    PeoplePicker,
    ProfileLoader,
    RequestType,
    Search,
    Site,
    SocialFeed,
    SPTypes,
    Types,
    UserProfile,
    Utility,
    Web
}

/**
 * SharePoint REST Library
 */
export const $REST: Types.IREST = {
    __ver: 2.82,
    ContextInfo,
    DefaultRequestToHostFl: false,
    Helper,
    JSLink,
    List: (listName, targetInfo) => { return new List(listName, targetInfo); },
    Navigation: (url, targetInfo) => { return new Navigation(url, targetInfo); },
    PeopleManager: (targetInfo) => { return new PeopleManager(targetInfo); },
    PeoplePicker: (targetInfo) => { return new PeoplePicker(targetInfo); },
    ProfileLoader: (targetInfo) => { return new ProfileLoader(targetInfo); },
    Search: (url, targetInfo) => { return new Search(url, targetInfo); },
    Site: (url, targetInfo) => { return new Site(url, targetInfo); },
    SPTypes,
    SocialFeed,
    UserProfile: (targetInfo) => { return new UserProfile(targetInfo); },
    Utility: (url, targetInfo) => { return new Utility(url, targetInfo); },
    Web: (url, targetInfo) => { return new Web(url, targetInfo); }
};

// See if the library doesn't exist, or is an older version
let global: Types.IREST = ContextInfo.window.$REST;
if (global == null || global.__ver == null || global.__ver < $REST.__ver) {
    // Set the global variable
    ContextInfo.window.$REST = $REST;
}