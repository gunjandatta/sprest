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
        properties: ["Delete", "Like", "Lock", "Reply", "Unlike", "Unlock"]
    }
}