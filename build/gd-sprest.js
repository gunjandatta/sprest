System.register(["./definitions/index", "./types/index", "./lib/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Types, index_1, index_2, gd_sprest, $REST;
    return {
        setters: [
            function (Types_1) {
                Types = Types_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            exports_1("Types", Types);
            exports_1("RequestType", index_1.RequestType);
            exports_1("SPTypes", index_1.SPTypes);
            exports_1("ContextInfo", index_2.ContextInfo);
            exports_1("Email", index_2.Email);
            exports_1("Helper", index_2.Helper);
            exports_1("JSLink", index_2.JSLink);
            exports_1("List", index_2.List);
            exports_1("PeopleManager", index_2.PeopleManager);
            exports_1("PeoplePicker", index_2.PeoplePicker);
            exports_1("ProfileLoader", index_2.ProfileLoader);
            exports_1("Search", index_2.Search);
            exports_1("Site", index_2.Site);
            exports_1("SocialFeed", index_2.SocialFeed);
            exports_1("UserProfile", index_2.UserProfile);
            exports_1("Web", index_2.Web);
            /**
             * SharePoint REST Library
             */
            gd_sprest = {
                __ver: 2.25,
                ContextInfo,
                DefaultRequestToHostFl: false,
                Email,
                Helper,
                JSLink,
                List: (listName, targetInfo) => { return new index_2.List(listName, targetInfo); },
                PeopleManager: (targetInfo) => { return new index_2.PeopleManager(targetInfo); },
                PeoplePicker: (targetInfo) => { return new index_2.PeoplePicker(targetInfo); },
                ProfileLoader: (targetInfo) => { return new index_2.ProfileLoader(targetInfo); },
                RequestType,
                Search: (url, targetInfo) => { return new index_2.Search(url, targetInfo); },
                Site: (url, targetInfo) => { return new index_2.Site(url, targetInfo); },
                SocialFeed,
                SPTypes,
                Types,
                UserProfile: (targetInfo) => { return new index_2.UserProfile(targetInfo); },
                Web: (url, targetInfo) => { return new index_2.Web(url, targetInfo); }
            };
            // Export the $REST library
            exports_1("$REST", $REST = gd_sprest);
            // See if the library doesn't exist, or is an older version
            if (index_2.ContextInfo.window.$REST == null || index_2.ContextInfo.window.$REST.__ver == null || index_2.ContextInfo.window.$REST.__ver < gd_sprest.__ver) {
                // Set the global variable
                index_2.ContextInfo.window.$REST = gd_sprest;
            }
        }
    };
});
//# sourceMappingURL=gd-sprest.js.map