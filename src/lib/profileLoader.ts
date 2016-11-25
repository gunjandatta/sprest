module $REST {
    /*********************************************************************************************************************************/
    // Profile Loader
    /*********************************************************************************************************************************/
    export class ProfileLoader extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(targetInfo?:Settings.TargetInfoSettings) {
            // Call the base constructor
            super(targetInfo);

            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
            this.targetInfo.method = "POST";

            // Add the methods
            this.addMethods(this, { __metadata: { type: "profileloader" } } );
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.profileloader = {
        createPersonalSiteEnqueueBulk:{
            argNames: ["emailIDs"],
            requestType: Types.RequestType.PostWithArgsInBody
        },

        getOwnerUserProfile:{
            name: "sp.userprofiles.profileloader.getowneruserprofile",
            replaceEndpointFl: true,
            requestType: Types.RequestType.Post,
            returnType: "userprofile"
        },

        getUserProfile:{
            requestType: Types.RequestType.Post,
            returnType: "userprofile"
        },
    };
}
