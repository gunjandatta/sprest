System.register(["../types/index", "../utils/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, _SocialFeed, SocialFeed;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Social Feed
            /*********************************************************************************************************************************/
            _SocialFeed = class _SocialFeed extends index_2.Base {
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(targetInfo) {
                    // Call the base constructor
                    super(targetInfo);
                    // Default the properties
                    this.defaultToWebFl = true;
                    this.targetInfo.endpoint = "social.feed";
                    // Add the methods
                    this.addMethods(this, { __metadata: { type: "socialfeed" } });
                }
                /*********************************************************************************************************************************/
                // Methods
                /*********************************************************************************************************************************/
                // Method to post to another user's feed
                postToFeed(accountName, creationData) {
                    let postInfo = { ID: null, creationData: creationData };
                    // Set the post metadata
                    postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
                    postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
                    return this.executeMethod("postToMyFeed", {
                        argNames: ["restCreationData"],
                        name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
                        requestType: index_1.RequestType.PostWithArgsInBody
                    }, [postInfo]);
                }
                // Method to post to the current user's feed
                postToMyFeed(creationData) {
                    let postInfo = { ID: null, creationData: creationData };
                    // Set the post metadata
                    postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
                    postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
                    return this.executeMethod("postToMyFeed", {
                        argNames: ["restCreationData"],
                        name: "my/feed/post",
                        requestType: index_1.RequestType.PostWithArgsInBody
                    }, [postInfo]);
                }
            };
            exports_1("SocialFeed", SocialFeed = (new _SocialFeed()));
        }
    };
});
//# sourceMappingURL=socialFeed.js.map