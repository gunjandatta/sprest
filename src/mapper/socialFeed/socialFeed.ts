import {RequestType} from "../../types/index";

/*********************************************************************************************************************************/
// Libraries
/*********************************************************************************************************************************/
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