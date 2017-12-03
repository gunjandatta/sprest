import { Types } from "../mapper";
import { RequestType } from "../types";
import { Base } from "../utils";

/*********************************************************************************************************************************/
// Social Feed
/*********************************************************************************************************************************/
class _SocialFeed extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?) {
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
            requestType: RequestType.PostWithArgsInBody
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
            requestType: RequestType.PostWithArgsInBody
        }, [postInfo]);
    }
}
export const SocialFeed: Types.ISocialFeed = <any>(new _SocialFeed());