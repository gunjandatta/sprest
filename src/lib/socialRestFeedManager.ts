module $REST {
    /*********************************************************************************************************************************/
    // Social REST Feed Manager
    /*********************************************************************************************************************************/
    Library.socialrestfeedmanager = {};
    Library.socialrestfeedmanager[Types.RequestType.Custom] = [
        { name: "createPost", "function": function (data) { data = { restCreationData: { __metadata: { type: "SP.Social.SocialRestPostCreationData" }, ID: null, creationData: data } }; data.restCreationData.creationData.__metadata = { type: "SP.Social.SocialPostCreationData" }; return this.executePost("my/feed/post", null, data, true); } },
        { name: "deletePost", "function": function (id) { return this.executePost("post/delete", null, { ID: id }, true); } },
        { name: "getMyFeed", "function": function () { return this.executeGet("my/feed"); } },
        { name: "getMyInfo", "function": function () { return this.executeGet("my"); } },
        { name: "getMyLikes", "function": function () { return this.executeGet("my/likes"); } },
        { name: "getMyMentionFeed", "function": function () { return this.executeGet("my/mentionfeed"); } },
        { name: "getMyNews", "function": function () { return this.executeGet("my/news"); } },
        { name: "getMyTimeLineFeed", "function": function () { return this.executeGet("my/timelinefeed"); } },
        { name: "getMyUnreadMentionCount", "function": function () { return this.executeGet("my/unreadmentioncount"); } },
        { name: "getPost", "function": function (id) { return this.executePost("post", null, { ID: id }, true); } },
        { name: "getPostLikers", "function": function (id) { return this.executePost("post/likers", null, { ID: id }, true); } },
        { name: "getUser", "function": function (user) { return user.indexOf('i:0#.f|') == 0 ? this.executeGet("actor", null, user) : this.executeGet("actor", user); } },
        { name: "likePost", "function": function (id) { return this.executePost("post/like", null, { ID: id }, true); } },
        { name: "lockPost", "function": function (id) { return this.executePost("post/lock", null, { ID: id }, true); } },
        { name: "replyToPost", "function": function (id, data) { data = { restCreationData: { __metadata: { type: "SP.Social.SocialRestPostCreationData" }, ID: id, creationData: data } }; data.restCreationData.creationData.__metadata = { type: "SP.Social.SocialPostCreationData" }; return this.executePost("post/reply", null, data, true); } },
        { name: "unlikePost", "function": function (id) { return this.executePost("post/unlike", null, { ID: id }, true); } },
        { name: "unlockPost", "function": function (id) { return this.executePost("post/unlock", null, { ID: id }, true); } },
    ];
}
