"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * People Manager
 */
exports.peoplemanager = {
    amIFollowedBy: {
        argNames: ["accountName"],
        name: "amIFollowedBy(@v)?@v='[[accountName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    amIFollowing: {
        name: "amIFollowing(@v)?@v='[[accountName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    follow: {
        argNames: ["accountName"],
        name: "follow(@v)?@v='[[accountName]]'",
        requestType: utils_1.RequestType.PostReplace
    },
    followTag: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    getFollowedTags: {
        argNames: ["maxCount"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getFollowersFor: {
        argNames: ["accountName"],
        name: "getFollowersFor(@v)?@v='[[accountName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    getMyFollowers: {
        requestType: utils_1.RequestType.Get
    },
    getMyProperties: {
        requestType: utils_1.RequestType.Get
    },
    getMySuggestions: {
        requestType: utils_1.RequestType.Get
    },
    getPeopleFollowedBy: {
        argNames: ["accountName"],
        name: "getPeopleFollowedBy(@v)?@v='[[accountName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    getPeopleFollowedByMe: {
        requestType: utils_1.RequestType.Get
    },
    getPropertiesFor: {
        argNames: ["accountName"],
        name: "getPropertiesFor(@v)?@v='[[accountName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    getTrendingTags: {
        name: "sp.userprofiles.peoplemanager.gettrendingtags",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Get
    },
    getUserProfilePropertyFor: {
        argNames: ["accountName", "propertyName"],
        name: "getUserProfilePropertyFor(accountname=@v, propertyname='[[propertyName]]')?@v='[[accountName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    hideSuggestion: {
        argNames: ["accountName"],
        name: "hideSuggestion(@v)?@v='[[accountName]]'",
        requestType: utils_1.RequestType.PostReplace
    },
    isFollowing: {
        argNames: ["possibleFollowerAccountName", "possibleFolloweeAccountName"],
        name: "sp.userprofiles.peoplemanager.isfollowing(possiblefolloweraccountname=@v, possiblefolloweeaccountname=@y)?@v='[[possibleFollowerAccountName]]'&@y='[[possibleFolloweeAccountName]]'",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.GetReplace
    },
    setMyProfilePicture: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    stopFollowing: {
        argNames: ["accountName"],
        name: "stopFollowing(@v)?@v='[[accountName]]'",
        requestType: utils_1.RequestType.PostWithArgsInQS
    },
    stopFollowingTag: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
};
/**
 * Profile Loader
 */
exports.profileloader = {
    createPersonalSiteEnqueueBulk: {
        argNames: ["emailIDs"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getOwnerUserProfile: {
        name: "sp.userprofiles.profileloader.getowneruserprofile",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post,
        returnType: "userprofile"
    },
    getUserProfile: {
        requestType: utils_1.RequestType.Post,
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
        requestType: utils_1.RequestType.GetReplace
    },
    actorFeed: {
        argNames: ["accountName"],
        name: "actor(item=@v)/feed?@v='[[accountName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    clearMyUnreadMentionCount: {
        name: "my/mentionfeed/clearMyUnreadMentionCount",
        requestType: utils_1.RequestType.Post
    },
    my: {
        name: "my",
        requestType: utils_1.RequestType.Get
    },
    myFeed: {
        name: "my/feed",
        requestType: utils_1.RequestType.Get
    },
    myLikes: {
        name: "my/likes",
        requestType: utils_1.RequestType.Get
    },
    myMentionFeed: {
        name: "my/mentionfeed",
        requestType: utils_1.RequestType.Get
    },
    myNews: {
        name: "my/news",
        requestType: utils_1.RequestType.Get
    },
    myTimelineFeed: {
        name: "my/timelinefeed",
        requestType: utils_1.RequestType.Get
    },
    myUnreadMentionCount: {
        name: "my/unreadmentioncount",
        requestType: utils_1.RequestType.Get
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
        argNames: ["interactiveMode"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    shareAllSocialData: {
        argNames: ["makePublic"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    }
};
