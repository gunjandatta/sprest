module $REST {
    /*********************************************************************************************************************************/
    // Social Rest Actor
    /*********************************************************************************************************************************/
    export class SocialRestActor extends Base {

        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(accountName?:string, targetInfo?:ComplexTypes.TargetInfoSettings) {
            // Call the base constructor
            super(targetInfo);

            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "social.feed/" +
                (accountName && accountName.length > 0 ? "actor(item=@v)?@v='" + encodeURIComponent(accountName) + "'" : "my");

            // Add the methods
            this.addMethods(this, { __metadata: { type: "socialrestactor" } } );
        }
    }

    /*********************************************************************************************************************************/
    // Libraries
    /*********************************************************************************************************************************/
    Library.socialrestactor = {
        properties: ["Feed", "Likes", "MentionFeed", "News", "TimelineFeed", "UnreadMentionCount"],

        clearUnreadMentionCount: {
            metadataType: "SP.Social.SocialFeedOptions",
            name: "UnreadMentionCount/ClearUnreadMentionCount",
            requestType: Types.RequestType.Post
        }
    }
}