System.register(["../utils/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, _UserProfile, UserProfile;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // User Profile
            /*********************************************************************************************************************************/
            _UserProfile = class _UserProfile extends index_1.Base {
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(targetInfo) {
                    // Call the base constructor
                    super(targetInfo);
                    // Default the properties
                    this.defaultToWebFl = true;
                    this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
                    this.targetInfo.method = "POST";
                    // Add the methods
                    this.addMethods(this, { __metadata: { type: "userprofile" } });
                }
            };
            exports_1("UserProfile", UserProfile = _UserProfile);
        }
    };
});
//# sourceMappingURL=userProfile.js.map