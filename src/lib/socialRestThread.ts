module $REST {
    /*********************************************************************************************************************************/
    // Social Rest Thread
    /*********************************************************************************************************************************/
    export class SocialRestThread extends Base {

        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(id:string, targetInfo?:ComplexTypes.TargetInfoSettings) {
            // Call the base constructor
            super(targetInfo);

            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "social.feed/post";
            this.targetInfo.method = "POST";

            // Add the methods
            this.addMethods(this, { __metadata: { type: "socialrestthread" } } );
        }
    }

    /*********************************************************************************************************************************/
    // Libraries
    /*********************************************************************************************************************************/
    Library.socialrestthread = {
        delete: {
            requestType: Types.RequestType.PostWithArgsInBody
        },

        like: {
            requestType: Types.RequestType.PostWithArgsInBody
        },

        likers: {
            requestType: Types.RequestType.PostWithArgsInBody
        },

        lock: {
            requestType: Types.RequestType.PostWithArgsInBody
        },
        
        reply: {
            metadataType: "SP.Social.SocialRestPostCreationData",
            requestType: Types.RequestType.PostWithArgsInBody
        },
        
        unlike: {
            requestType: Types.RequestType.PostWithArgsInBody
        },
        
        unlock: {
            requestType: Types.RequestType.PostWithArgsInBody
        }
    }
}