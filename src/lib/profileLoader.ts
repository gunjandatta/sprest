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
            this.targetInfo.endpoint = "sp.userprofiles.profileloader";

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
            name: "sp.userprofiles.profileloader.getprofileloader.",
            replaceEndpointFl: true,
            requestType: Types.RequestType.PostWithArgsInBody
        },

        getOwnerUserProfile:{
            name: "sp.userprofiles.profileloader.getowneruserprofile.",
            replaceEndpointFl: true,
            requestType: Types.RequestType.Post
        },

        getProfileLoader:{
            name: "sp.userprofiles.profileloader.getProfileLoader.",
            replaceEndpointFl: true,
            requestType: Types.RequestType.Post
        },

        getUserProfile:{
            name: "sp.userprofiles.profileloader.getProfileLoader.",
            replaceEndpointFl: true,
            requestType: Types.RequestType.Post
        },
    };

    /**
     * Profile Loader
     */
    export let ProfileLoader = new _ProfileLoader();
}
