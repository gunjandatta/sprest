module $REST {
    /*********************************************************************************************************************************/
    // Social Feed
    /*********************************************************************************************************************************/
    export class SocialFeed extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(targetInfo?:ComplexTypes.TargetInfoSettings) {
            // Call the base constructor
            super(targetInfo);

            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "social.feed";

            // Add the methods
            this.addMethods(this, { __metadata: { type: "socialfeed" } } );
        }
    }

    /*********************************************************************************************************************************/
    // Libraries
    /*********************************************************************************************************************************/

    Library.socialfeed = {
        properties: ["Actor|socialrestactor", "My|socialrestactor", "Post|socialrestthread"],

        actor: {
            argNames: ["accountName"],
            name: "actor(item=@v)?@v='[[accountName]]'",
            requestType: Types.RequestType.GetReplace
        },

        actorFeed: {
            argNames: ["accountName"],
            name: "actor(item=@v)/feed?@v='[[accountName]]'",
            requestType: Types.RequestType.GetReplace
        },

        actorFeedPost: {
            argNames: ["accountName"],
            name: "actor(item=@v)/feed?@v='[[accountName]]'",
            requestType: Types.RequestType.PostReplace
        },

        clearMyUnreadMentionCount: {
            name: "my/mentionfeed/clearMyUnreadMentionCount",
            requestType: Types.RequestType.Post
        },

        my: {
            name: "my",
            requestType: Types.RequestType.Get
        },

        myFeed: {
            name: "my/feed",
            requestType: Types.RequestType.Get
        },

        myLikes: {
            name: "my/likes",
            requestType: Types.RequestType.Get
        },

        myMentionFeed: {
            name: "my/mentionfeed",
            requestType: Types.RequestType.Get
        },

        myNews: {
            name: "my/news",
            requestType: Types.RequestType.Get
        },

        myTimelineFeed: {
            name: "my/timelinefeed",
            requestType: Types.RequestType.Get
        },

        myUnreadMentionCount: {
            name: "my/unreadmentioncount",
            requestType: Types.RequestType.Get
        },

        postToMyFeed: {
            argNames: ["restCreationData"],
            name: "my/feed/post",
            requestType: Types.RequestType.PostWithArgsInBody
        }
    }
}