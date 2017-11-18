System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, peoplemanager;
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
            exports_1("peoplemanager", peoplemanager = {
                amIFollowedBy: {
                    argNames: ["accountName"],
                    requestType: index_1.RequestType.GetWithArgsInQS
                },
                amIFollowing: {
                    argNames: ["accountName"],
                    requestType: index_1.RequestType.GetWithArgsInQS
                },
                follow: {
                    argNames: ["accountName"],
                    requestType: index_1.RequestType.PostWithArgsInQS
                },
                followTag: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                getFollowedTags: {
                    argNames: ["maxCount"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly
                },
                getFollowersFor: {
                    argNames: ["accountName"],
                    requestType: index_1.RequestType.GetWithArgsInQS
                },
                getMyFollowers: {
                    requestType: index_1.RequestType.Get
                },
                getMyProperties: {
                    requestType: index_1.RequestType.Get
                },
                getMySuggestions: {
                    requestType: index_1.RequestType.Get
                },
                getPeopleFollowedBy: {
                    argNames: ["accountName"],
                    requestType: index_1.RequestType.GetWithArgsInQS
                },
                getPeopleFollowedByMe: {
                    requestType: index_1.RequestType.Get
                },
                getPropertiesFor: {
                    argNames: ["accountName"],
                    requestType: index_1.RequestType.GetWithArgsInQS
                },
                getTrendingTags: {
                    name: "sp.userprofiles.peoplemanager.gettrendingtags",
                    replaceEndpointFl: true,
                    requestType: index_1.RequestType.Get
                },
                getUserProfilePropertyFor: {
                    argNames: ["accountName", "propertyName"],
                    requestType: index_1.RequestType.GetWithArgsInQS
                },
                hideSuggestion: {
                    argNames: ["accountName"],
                    requestType: index_1.RequestType.PostWithArgsInQS
                },
                isFollowing: {
                    argNames: ["possibleFollowerAccountName", "possibleFolloweeAccountName"],
                    name: "sp.userprofiles.peoplemanager.isfollowing",
                    replaceEndpointFl: true,
                    requestType: index_1.RequestType.GetWithArgsInQS
                },
                setMyProfilePicture: {
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                stopFollowing: {
                    argNames: ["accountName"],
                    requestType: index_1.RequestType.PostWithArgsInQS
                },
                stopFollowingTag: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
            });
        }
    };
});
//# sourceMappingURL=peopleManager.js.map