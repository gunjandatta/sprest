"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var utils_1 = require("../utils");
/*********************************************************************************************************************************/
// Social Feed
/*********************************************************************************************************************************/
var _SocialFeed = /** @class */ (function (_super) {
    __extends(_SocialFeed, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _SocialFeed(targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.defaultToWebFl = true;
        _this.targetInfo.endpoint = "social.feed";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "socialfeed" } });
        return _this;
    }
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to post to another user's feed
    _SocialFeed.prototype.postToFeed = function (accountName, creationData) {
        var postInfo = { ID: null, creationData: creationData };
        // Set the post metadata
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
        return this.executeMethod(this, "postToMyFeed", {
            argNames: ["restCreationData"],
            name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
            requestType: types_1.RequestType.PostWithArgsInBody
        }, [postInfo]);
    };
    // Method to post to the current user's feed
    _SocialFeed.prototype.postToMyFeed = function (creationData) {
        var postInfo = { ID: null, creationData: creationData };
        // Set the post metadata
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
        return this.executeMethod(this, "postToMyFeed", {
            argNames: ["restCreationData"],
            name: "my/feed/post",
            requestType: types_1.RequestType.PostWithArgsInBody
        }, [postInfo]);
    };
    return _SocialFeed;
}(utils_1.Base));
exports.SocialFeed = (new _SocialFeed());
//# sourceMappingURL=socialFeed.js.map