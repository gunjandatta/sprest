"use strict";
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Libraries
/*********************************************************************************************************************************/
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
//# sourceMappingURL=socialFeed.js.map