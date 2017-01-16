/// <reference path="../definitions/socialFeed.d.ts" />
import {Base} from "../utils";
import {RequestType} from ".";
import {
    ComplexTypes,
    TargetInfoSettings
} from "gd-sprest";

/*********************************************************************************************************************************/
// Social Feed
/*********************************************************************************************************************************/
class _SocialFeed extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?:TargetInfoSettings) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "social.feed";

        // Add the methods
        this.addMethods(this, { __metadata: { type: "socialfeed" } } );
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Method to post to another user's feed
    postToFeed(accountName:string, creationData: ComplexTypes.SocialPostCreationData) {
        let postInfo:ComplexTypes.SocialRestPostCreationData = { ID: null, creationData: creationData };

        // Set the post metadata
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };

        return this.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
            requestType: RequestType.PostWithArgsInBody
        }, [postInfo]);
    }

    // Method to post to the current user's feed
    postToMyFeed(creationData:ComplexTypes.SocialPostCreationData) {
        let postInfo:ComplexTypes.SocialRestPostCreationData = { ID: null, creationData: creationData };

        // Set the post metadata
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };

        return this.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "my/feed/post",
            requestType: RequestType.PostWithArgsInBody
        }, [postInfo]);
    }
}

/*********************************************************************************************************************************/
// Libraries
/*********************************************************************************************************************************/
const Library = {
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
export default Library;

/*********************************************************************************************************************************/
// Social Feed
/*********************************************************************************************************************************/
export let SocialFeed = new _SocialFeed();