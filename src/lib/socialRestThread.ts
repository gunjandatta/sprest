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

            // Add the methods
            this.addMethods(this, { __metadata: { type: "socialrestthread" } } );
        }
    }

    /*********************************************************************************************************************************/
    // Libraries
    /*********************************************************************************************************************************/
    Library.socialrestthread = {
        properties: ["Delete", "Like", "Lock", "Reply", "Unlike", "Unlock"]
    }
}