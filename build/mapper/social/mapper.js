"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
/**
 * People Manager
 */
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
/**
 * Profile Loader
 */
exports.profileloader = {
    createPersonalSiteEnqueueBulk: {
        argNames: ["emailIDs"],
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    getOwnerUserProfile: {
        name: "sp.userprofiles.profileloader.getowneruserprofile",
        replaceEndpointFl: true,
        requestType: types_1.RequestType.Post,
        returnType: "userprofile"
    },
    getUserProfile: {
        requestType: types_1.RequestType.Post,
        returnType: "userprofile"
    },
};
/**
 * Social Feed
 */
exports.socialfeed = {
    actor: {
        argNames: ["accountName"],
        name: "actor(item=@v)?@v='[[accountName]]'",
        requestType: types_1.RequestType.GetReplace
    },
    actorFeed: {
        argNames: ["accountName"],
        name: "actor(item=@v)/feed?@v='[[accountName]]'",
        requestType: types_1.RequestType.GetReplace
    },
    clearMyUnreadMentionCount: {
        name: "my/mentionfeed/clearMyUnreadMentionCount",
        requestType: types_1.RequestType.Post
    },
    my: {
        name: "my",
        requestType: types_1.RequestType.Get
    },
    myFeed: {
        name: "my/feed",
        requestType: types_1.RequestType.Get
    },
    myLikes: {
        name: "my/likes",
        requestType: types_1.RequestType.Get
    },
    myMentionFeed: {
        name: "my/mentionfeed",
        requestType: types_1.RequestType.Get
    },
    myNews: {
        name: "my/news",
        requestType: types_1.RequestType.Get
    },
    myTimelineFeed: {
        name: "my/timelinefeed",
        requestType: types_1.RequestType.Get
    },
    myUnreadMentionCount: {
        name: "my/unreadmentioncount",
        requestType: types_1.RequestType.Get
    }
};
/**
 * User Profile
 */
exports.userprofile = {
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
        requestType: types_1.RequestType.PostWithArgsValueOnly
    },
    shareAllSocialData: {
        requestType: types_1.RequestType.PostWithArgsValueOnly
    }
};
//# sourceMappingURL=mapper.js.map