module $REST {
    /*********************************************************************************************************************************/
    // Profile Loader
    /*********************************************************************************************************************************/
    class _ProfileLoader extends Base {
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
            requestType: Types.RequestType.Post
        },

        getProfileLoader:{
            name: "",
            requestType: Types.RequestType.Post,
            returnType: "profileloader"
        },

        getUserProfile:{
            requestType: Types.RequestType.Post
        },
    };

    /**
     * Profile Loader
     */
    export let ProfileLoader = new _ProfileLoader();
}
