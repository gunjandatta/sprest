System.register(["../utils/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, _Web, Web;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Web
            /*********************************************************************************************************************************/
            _Web = class _Web extends index_1.Base {
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(url, targetInfo) {
                    // Call the base constructor
                    super(targetInfo);
                    // Default the properties
                    this.defaultToWebFl = true;
                    this.targetInfo.endpoint = "web";
                    // See if the web url exists
                    if (url) {
                        // Set the settings
                        this.targetInfo.url = url;
                    }
                    // Add the methods
                    this.addMethods(this, { __metadata: { type: "web" } });
                }
                // Method to determine if the current user has access, based on the permissions.
                hasAccess(permissions) {
                    // TO DO
                    return true;
                }
                ;
            };
            exports_1("Web", Web = _Web);
        }
    };
});
//# sourceMappingURL=web.js.map