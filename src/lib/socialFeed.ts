import { Types } from "../mapper";
import { Base, RequestType } from "../utils";
import { ISocialFeed } from "./types";
import { ITargetInfo } from "../utils/types";

/**
 * Social Feed
 */
export const SocialFeed: ISocialFeed = ((targetInfo?: ITargetInfo) => {
    let socialFeed = new Base(targetInfo) as any as Types.ISocialFeed;

    // Default the properties
    socialFeed.targetInfo.defaultToWebFl = true;
    socialFeed.targetInfo.endpoint = "social.feed";

    // Add the methods
    socialFeed.addMethods(socialFeed as any, { __metadata: { type: "socialfeed" } });

    // Method to post to another user's feed
    socialFeed.postToFeed = (accountName, creationData) => {
        let postInfo = { ID: null, creationData: creationData };

        // Set the post metadata
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };

        return socialFeed.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
            requestType: RequestType.PostWithArgsInBody
        }, [postInfo]);
    }

    // Method to post to the current user's feed
    socialFeed.postToMyFeed = (creationData) => {
        let postInfo = { ID: null, creationData: creationData };

        // Set the post metadata
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };

        return socialFeed.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "my/feed/post",
            requestType: RequestType.PostWithArgsInBody
        }, [postInfo]);
    }

    // Return the social feed
    return socialFeed;
}) as any;