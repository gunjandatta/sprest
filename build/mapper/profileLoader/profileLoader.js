System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, profileloader;
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
            exports_1("profileloader", profileloader = {
                createPersonalSiteEnqueueBulk: {
                    argNames: ["emailIDs"],
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                getOwnerUserProfile: {
                    name: "sp.userprofiles.profileloader.getowneruserprofile",
                    replaceEndpointFl: true,
                    requestType: index_1.RequestType.Post,
                    returnType: "userprofile"
                },
                getUserProfile: {
                    requestType: index_1.RequestType.Post,
                    returnType: "userprofile"
                },
            });
        }
    };
});
//# sourceMappingURL=profileLoader.js.map