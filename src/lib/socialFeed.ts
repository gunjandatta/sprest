import * as Types from "../mapper/types";
import { Base, Helper, RequestType } from "../utils";
import { ISocialFeed } from "./types";
import { ITargetInfoProps } from "../utils/types";

/**
 * Social Feed
 */
export const SocialFeed: ISocialFeed = ((targetInfo?: ITargetInfoProps) => {
    let socialFeed = new Base(targetInfo) as any as Types.ISocialFeed;

    // Default the properties
    socialFeed.targetInfo.defaultToWebFl = true;
    socialFeed.targetInfo.endpoint = "social.feed";

    // Add the methods
    Helper.addMethods(socialFeed as any, { __metadata: { type: "socialfeed" } });

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