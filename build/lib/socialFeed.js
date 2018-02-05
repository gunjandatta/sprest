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
var utils_1 = require("../utils");
var _SocialFeed = (function (_super) {
    __extends(_SocialFeed, _super);
    function _SocialFeed(targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "social.feed";
        _this.addMethods(_this, { __metadata: { type: "socialfeed" } });
        return _this;
    }
    _SocialFeed.prototype.postToFeed = function (accountName, creationData) {
        var postInfo = { ID: null, creationData: creationData };
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
        return this.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [postInfo]);
    };
    _SocialFeed.prototype.postToMyFeed = function (creationData) {
        var postInfo = { ID: null, creationData: creationData };
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
        return this.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "my/feed/post",
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [postInfo]);
    };
    return _SocialFeed;
}(utils_1.Base));
exports.SocialFeed = (new _SocialFeed());
//# sourceMappingURL=socialFeed.js.map