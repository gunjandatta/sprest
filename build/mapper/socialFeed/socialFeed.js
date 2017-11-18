System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, socialfeed;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Libraries
            /*********************************************************************************************************************************/
            exports_1("socialfeed", socialfeed = {
                actor: {
                    argNames: ["accountName"],
                    name: "actor(item=@v)?@v='[[accountName]]'",
                    requestType: index_1.RequestType.GetReplace
                },
                actorFeed: {
                    argNames: ["accountName"],
                    name: "actor(item=@v)/feed?@v='[[accountName]]'",
                    requestType: index_1.RequestType.GetReplace
                },
                clearMyUnreadMentionCount: {
                    name: "my/mentionfeed/clearMyUnreadMentionCount",
                    requestType: index_1.RequestType.Post
                },
                my: {
                    name: "my",
                    requestType: index_1.RequestType.Get
                },
                myFeed: {
                    name: "my/feed",
                    requestType: index_1.RequestType.Get
                },
                myLikes: {
                    name: "my/likes",
                    requestType: index_1.RequestType.Get
                },
                myMentionFeed: {
                    name: "my/mentionfeed",
                    requestType: index_1.RequestType.Get
                },
                myNews: {
                    name: "my/news",
                    requestType: index_1.RequestType.Get
                },
                myTimelineFeed: {
                    name: "my/timelinefeed",
                    requestType: index_1.RequestType.Get
                },
                myUnreadMentionCount: {
                    name: "my/unreadmentioncount",
                    requestType: index_1.RequestType.Get
                }
            });
        }
    };
});
//# sourceMappingURL=socialFeed.js.map