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
import * as Types from "./definitions/index";
import { RequestType, SPTypes } from "./types/index";
import {
    ContextInfo,
    Email,
    Helper,
    JSLink,
    List,
    PeopleManager,
    PeoplePicker,
    ProfileLoader,
    Search,
    Site,
    SocialFeed,
    UserProfile,
    Web
} from "./lib/index";
export {
    ContextInfo,
    Email,
    Helper,
    JSLink,
    List,
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
    Web
}

/**
 * SharePoint REST Library
 */
const gd_sprest = {
    __ver: 2.25,
    ContextInfo,
    DefaultRequestToHostFl: false,
    Email,
    Helper,
    JSLink,
    List: (listName: string, targetInfo?: Types.ITargetInfo) => { return new List(listName, targetInfo); },
    PeopleManager: (targetInfo?: Types.ITargetInfo) => { return new PeopleManager(targetInfo); },
    PeoplePicker: (targetInfo?: Types.ITargetInfo) => { return new PeoplePicker(targetInfo); },
    ProfileLoader: (targetInfo?: Types.ITargetInfo) => { return new ProfileLoader(targetInfo); },
    RequestType,
    Search: (url?: string, targetInfo?: Types.ITargetInfo) => { return new Search(url, targetInfo); },
    Site: (url?: string, targetInfo?: Types.ITargetInfo) => { return new Site(url, targetInfo); },
    SocialFeed,
    SPTypes,
    Types,
    UserProfile: (targetInfo?: Types.ITargetInfo) => { return new UserProfile(targetInfo); },
    Web: (url?: string, targetInfo?: Types.ITargetInfo) => { return new Web(url, targetInfo); }
}

// Export the $REST library
export const $REST: Types.IREST = <any>gd_sprest;

// See if the library doesn't exist, or is an older version
if (ContextInfo.window.$REST == null || ContextInfo.window.$REST.__ver == null || ContextInfo.window.$REST.__ver < gd_sprest.__ver) {
    // Set the global variable
    ContextInfo.window.$REST = gd_sprest;
}
