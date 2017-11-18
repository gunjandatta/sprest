System.register(["../utils/index", "./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, _Site, Site;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Site
            // The SPSite object.
            /*********************************************************************************************************************************/
            _Site = class _Site extends index_1.Base {
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(url, targetInfo) {
                    // Call the base constructor
                    super(targetInfo);
                    // Default the properties
                    this.defaultToWebFl = true;
                    this.targetInfo.endpoint = "site";
                    // See if the web url exists
                    if (url) {
                        // Set the settings
                        this.targetInfo.url = url;
                    }
                    // Add the methods
                    this.addMethods(this, { __metadata: { type: "site" } });
                }
                // Method to get the root web
                getRootWeb() { return new index_2.Web(null, this.targetInfo); }
                // Method to determine if the current user has access, based on the permissions.
                hasAccess(permissions) {
                    // TO DO
                    return true;
                }
                ;
            };
            exports_1("Site", Site = _Site);
        }
    };
});
//# sourceMappingURL=site.js.map