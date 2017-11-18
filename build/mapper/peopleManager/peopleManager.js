"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
exports.peoplemanager = {
    amIFollowedBy: {
        argNames: ["accountName"],
        requestType: types_1.RequestType.GetWithArgsInQS
    },
    amIFollowing: {
        argNames: ["accountName"],
        requestType: types_1.RequestType.GetWithArgsInQS
    },
    follow: {
        argNames: ["accountName"],
        requestType: types_1.RequestType.PostWithArgsInQS
    },
    followTag: {
        argNames: ["id"],
        requestType: types_1.RequestType.PostWithArgsValueOnly
    },
    getFollowedTags: {
        argNames: ["maxCount"],
        requestType: types_1.RequestType.GetWithArgsValueOnly
    },
    getFollowersFor: {
        argNames: ["accountName"],
        requestType: types_1.RequestType.GetWithArgsInQS
    },
    getMyFollowers: {
        requestType: types_1.RequestType.Get
    },
    getMyProperties: {
        requestType: types_1.RequestType.Get
    },
    getMySuggestions: {
        requestType: types_1.RequestType.Get
    },
    getPeopleFollowedBy: {
        argNames: ["accountName"],
        requestType: types_1.RequestType.GetWithArgsInQS
    },
    getPeopleFollowedByMe: {
        requestType: types_1.RequestType.Get
    },
    getPropertiesFor: {
        argNames: ["accountName"],
        requestType: types_1.RequestType.GetWithArgsInQS
    },
    getTrendingTags: {
        name: "sp.userprofiles.peoplemanager.gettrendingtags",
        replaceEndpointFl: true,
        requestType: types_1.RequestType.Get
    },
    getUserProfilePropertyFor: {
        argNames: ["accountName", "propertyName"],
        requestType: types_1.RequestType.GetWithArgsInQS
    },
    hideSuggestion: {
        argNames: ["accountName"],
        requestType: types_1.RequestType.PostWithArgsInQS
    },
    isFollowing: {
        argNames: ["possibleFollowerAccountName", "possibleFolloweeAccountName"],
        name: "sp.userprofiles.peoplemanager.isfollowing",
        replaceEndpointFl: true,
        requestType: types_1.RequestType.GetWithArgsInQS
    },
    setMyProfilePicture: {
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    stopFollowing: {
        argNames: ["accountName"],
        requestType: types_1.RequestType.PostWithArgsInQS
    },
    stopFollowingTag: {
        argNames: ["id"],
        requestType: types_1.RequestType.PostWithArgsValueOnly
    },
};
//# sourceMappingURL=peopleManager.js.map