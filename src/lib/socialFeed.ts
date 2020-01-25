import { ISocialFeed } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request, RequestType } from "../utils";

/**
 * Social Feed
 */
export const SocialFeed: ISocialFeed = ((targetInfo?: ITargetInfoProps) => {
    let base = new Base(targetInfo);
    let socialFeed = base as any as ISocialFeed;

    // Default the properties
    base.targetInfo.defaultToWebFl = true;
    base.targetInfo.endpoint = "social.feed";

    // Add the methods
    Request.addMethods(socialFeed as any, { __metadata: { type: "SP.Social.SocialRestFeedManager" } });

    // Return the social feed
    return socialFeed;
}) as any;

// Method to post to another user's feed
SocialFeed.postToFeed = (accountName, creationData) => {
    let postInfo = { ID: null, creationData: creationData };

    // Set the post metadata
    postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
    postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };

    // Execute the request
    return SocialFeed().executeMethod("postToMyFeed", {
        argNames: ["restCreationData"],
        name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
        requestType: RequestType.PostWithArgsInBody
    }, [postInfo]);
}

// Method to post to the current user's feed
SocialFeed.postToMyFeed = (creationData) => {
    let postInfo = { ID: null, creationData: creationData };

    // Set the post metadata
    postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
    postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };

    // Execute the request
    return SocialFeed().executeMethod("postToMyFeed", {
        argNames: ["restCreationData"],
        name: "my/feed/post",
        requestType: RequestType.PostWithArgsInBody
    }, [postInfo]);
}
