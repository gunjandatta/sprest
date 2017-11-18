System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, userprofile;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Methods
            /*********************************************************************************************************************************/
            exports_1("userprofile", userprofile = {
                /*********************************************************************************************************************************/
                // Properties
                /*********************************************************************************************************************************/
                properties: [
                    "PersonalSite|site"
                ],
                /*********************************************************************************************************************************/
                // Methods
                /*********************************************************************************************************************************/
                createPersonalSiteEnque: {
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                shareAllSocialData: {
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                }
            });
        }
    };
});
//# sourceMappingURL=userProfile.js.map