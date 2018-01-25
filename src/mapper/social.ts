import { RequestType } from "../utils";

/**
 * People Manager
 */
export const peoplemanager = {
    amIFollowedBy: {
        argNames: ["accountName"],
        requestType: RequestType.GetWithArgsInQS
    },

    amIFollowing: {
        argNames: ["accountName"],
        requestType: RequestType.GetWithArgsInQS
    },

    follow: {
        argNames: ["accountName"],
        requestType: RequestType.PostWithArgsInQS
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
        requestType: RequestType.GetWithArgsInQS
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
        requestType: RequestType.GetWithArgsInQS
    },

    getPeopleFollowedByMe: {
        requestType: RequestType.Get
    },

    getPropertiesFor: {
        argNames: ["accountName"],
        requestType: RequestType.GetWithArgsInQS
    },

    getTrendingTags: {
        name: "sp.userprofiles.peoplemanager.gettrendingtags",
        replaceEndpointFl: true,
        requestType: RequestType.Get
    },

    getUserProfilePropertyFor: {
        argNames: ["accountName", "propertyName"],
        requestType: RequestType.GetWithArgsInQS
    },

    hideSuggestion: {
        argNames: ["accountName"],
        requestType: RequestType.PostWithArgsInQS
    },

    isFollowing: {
        argNames: ["possibleFollowerAccountName", "possibleFolloweeAccountName"],
        name: "sp.userprofiles.peoplemanager.isfollowing",
        replaceEndpointFl: true,
        requestType: RequestType.GetWithArgsInQS
    },

    setMyProfilePicture: {
        requestType: RequestType.PostWithArgsInBody
    },

    stopFollowing: {
        argNames: ["accountName"],
        requestType: RequestType.PostWithArgsInQS
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
        requestType: RequestType.PostWithArgsValueOnly
    },

    shareAllSocialData: {
        requestType: RequestType.PostWithArgsValueOnly
    }
};