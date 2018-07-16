"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Social Feed
 */
exports.SocialFeed = (function (targetInfo) {
    var socialFeed = new utils_1.Base(targetInfo);
    // Default the properties
    socialFeed.targetInfo.defaultToWebFl = true;
    socialFeed.targetInfo.endpoint = "social.feed";
    // Add the methods
    socialFeed.addMethods(socialFeed, { __metadata: { type: "socialfeed" } });
    // Method to post to another user's feed
    socialFeed.postToFeed = function (accountName, creationData) {
        var postInfo = { ID: null, creationData: creationData };
        // Set the post metadata
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
        return _this.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [postInfo]);
    };
    // Method to post to the current user's feed
    socialFeed.postToMyFeed = function (creationData) {
        var postInfo = { ID: null, creationData: creationData };
        // Set the post metadata
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
        return _this.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "my/feed/post",
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [postInfo]);
    };
    // Return the social feed
    return socialFeed;
});
