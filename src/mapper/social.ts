import { RequestType } from "../utils";

/**
 * People Manager
 */
export const peoplemanager = {
    amIFollowedBy: {
        argNames: ["accountName"],
        name: "amIFollowedBy(@v)?@v='[[accountName]]'",
        requestType: RequestType.GetReplace
    },

    amIFollowing: {
        name: "amIFollowing(@v)?@v='[[accountName]]'",
        requestType: RequestType.GetReplace
    },

    follow: {
        argNames: ["accountName"],
        name: "follow(@v)?@v='[[accountName]]'",
        requestType: RequestType.PostReplace
    },

    followTag: {
        argNames: ["id"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    getFollowedTags: {
        argNames: ["maxCount"],
        requestType: RequestType.GetWithArgsValueOnly
    },

    getFollowersFor: {
        argNames: ["accountName"],
        name: "getFollowersFor(@v)?@v='[[accountName]]'",
        requestType: RequestType.GetReplace
    },

    getMyFollowers: {
        requestType: RequestType.Get
    },

    getMyProperties: {
        requestType: RequestType.Get
    },

    getMySuggestions: {
        requestType: RequestType.Get
    },

    getPeopleFollowedBy: {
        argNames: ["accountName"],
        name: "getPeopleFollowedBy(@v)?@v='[[accountName]]'",
        requestType: RequestType.GetReplace
    },

    getPeopleFollowedByMe: {
        requestType: RequestType.Get
    },

    getPropertiesFor: {
        argNames: ["accountName"],
        name: "getPropertiesFor(@v)?@v='[[accountName]]'",
        requestType: RequestType.GetReplace
    },

    getTrendingTags: {
        name: "sp.userprofiles.peoplemanager.gettrendingtags",
        replaceEndpointFl: true,
        requestType: RequestType.Get
    },

    getUserProfilePropertyFor: {
        argNames: ["accountName", "propertyName"],
        name: "getUserProfilePropertyFor(accountname=@v, propertyname='[[propertyName]]')?@v='[[accountName]]'",
        requestType: RequestType.GetReplace
    },

    hideSuggestion: {
        argNames: ["accountName"],
        name: "hideSuggestion(@v)?@v='[[accountName]]'",
        requestType: RequestType.PostReplace
    },

    isFollowing: {
        argNames: ["possibleFollowerAccountName", "possibleFolloweeAccountName"],
        name: "sp.userprofiles.peoplemanager.isfollowing(possiblefolloweraccountname=@v, possiblefolloweeaccountname=@y)?@v='[[possibleFollowerAccountName]]'&@y='[[possibleFolloweeAccountName]]'",
        replaceEndpointFl: true,
        requestType: RequestType.GetReplace
    },

    setMyProfilePicture: {
        requestType: RequestType.PostWithArgsInBody
    },

    stopFollowing: {
        argNames: ["accountName"],
        name: "stopFollowing(@v)?@v='[[accountName]]'",
        requestType: RequestType.PostWithArgsInQSAsVar
    },

    stopFollowingTag: {
        argNames: ["id"],
        requestType: RequestType.PostWithArgsValueOnly
    },
};

/**
 * Profile Loader
 */
export const profileloader = {
    createPersonalSiteEnqueueBulk: {
        argNames: ["emailIDs"],
        requestType: RequestType.PostWithArgsInBody
    },

    getOwnerUserProfile: {
        name: "sp.userprofiles.profileloader.getowneruserprofile",
        replaceEndpointFl: true,
        requestType: RequestType.Post,
        returnType: "userprofile"
    },

    getUserProfile: {
        requestType: RequestType.Post,
        returnType: "userprofile"
    },
};

/**
 * Social Feed
 */
export const socialfeed = {
    actor: {
        argNames: ["accountName"],
        name: "actor(item=@v)?@v='[[accountName]]'",
        requestType: RequestType.GetReplace
    },

    actorFeed: {
        argNames: ["accountName"],
        name: "actor(item=@v)/feed?@v='[[accountName]]'",
        requestType: RequestType.GetReplace
    },

    clearMyUnreadMentionCount: {
        name: "my/mentionfeed/clearMyUnreadMentionCount",
        requestType: RequestType.Post
    },

    my: {
        name: "my",
        requestType: RequestType.Get
    },

    myFeed: {
        name: "my/feed",
        requestType: RequestType.Get
    },

    myLikes: {
        name: "my/likes",
        requestType: RequestType.Get
    },

    myMentionFeed: {
        name: "my/mentionfeed",
        requestType: RequestType.Get
    },

    myNews: {
        name: "my/news",
        requestType: RequestType.Get
    },

    myTimelineFeed: {
        name: "my/timelinefeed",
        requestType: RequestType.Get
    },

    myUnreadMentionCount: {
        name: "my/unreadmentioncount",
        requestType: RequestType.Get
    }
};

/**
 * User Profile
 */
export const userprofile = {
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
        requestType: RequestType.PostWithArgsValueOnly
    },

    shareAllSocialData: {
        argNames: ["makePublic"],
        requestType: RequestType.PostWithArgsValueOnly
    }
};