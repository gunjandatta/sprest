System.register(["../utils/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, _ProfileLoader, ProfileLoader;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Profile Loader
            /*********************************************************************************************************************************/
            _ProfileLoader = class _ProfileLoader extends index_1.Base {
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(targetInfo) {
                    // Call the base constructor
                    super(targetInfo);
                    // Default the properties
                    this.defaultToWebFl = true;
                    this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
                    this.targetInfo.method = "POST";
                    // Add the methods
                    this.addMethods(this, { __metadata: { type: "profileloader" } });
                }
            };
            exports_1("ProfileLoader", ProfileLoader = _ProfileLoader);
        }
    };
});
//# sourceMappingURL=profileLoader.js.map