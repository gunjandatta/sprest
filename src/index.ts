"use strict";
// Type definitions for gd-sprest
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
import {
    IContextInfo,
    IEmail,
    IHelper,
    IList,
    IPeopleManager,
    IPeoplePicker,
    ISearch,
    ISite,
    ISocialFeed,
    IUserProfile,
    IWeb
} from "./definitions";
import {
    Email,
    List,
    PeopleManager,
    PeoplePicker,
    ProfileLoader,
    Search,
    Site,
    SocialFeed,
    UserProfile,
    Web
} from "./lib";
import {
    ContextInfo,
    Helper
} from "./utils";

/**
 * The SharePoint REST Class
 */
class gd_sprest {
    /**
     * The context information
     */
    get ContextInfo():IContextInfo { return <any>(new ContextInfo()); }

    /**
     * Flag to default the request to th host web.
     * False by default.
     */
    DefaultRequestToHostFl = false;

    /**
     * The email class
     */
    get Email():IEmail { return <any>(new Email()); }

    /**
     * Helper Methods
     */
    get Helper():IHelper { return <any>Helper; }

    /**
     * The list class
     */
    get List():IList { return <any>List; }

    /**
     * The people manager class
     */
    get PeopleManager():IPeopleManager { return <any>PeopleManager; }

    /**
     * The people picker class
     */
    get PeoplePicker():IPeoplePicker { return <any>PeoplePicker; }

    /**
     * The search class
     */
    get Search():ISearch { return <any>Search; }

    /**
     * The site class
     */
    get Site():ISite { return <any>Site; }

    /**
     * The social feed class
     */
    get SocialFeed():ISocialFeed { return <any>SocialFeed; }

    /**
     * The user profile class
     */
    get UserProfile():IUserProfile { return <any>UserProfile; }

    /**
     * The web class
     */
    get Web():IWeb { return <any>Web; }
};

/**
 * Library
 */
export const Library = [];

/**
 * SharePoint Object Types
 */
export * from "./definitions";

/**
 * SharePoint Enumerators
 */
export * from "./types";

/**
 * REST Library
 */
export const $REST = new gd_sprest();
window["$REST"] = $REST;
export default $REST;