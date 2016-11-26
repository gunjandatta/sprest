module $REST {
    /*********************************************************************************************************************************/
    // People Manager
    /*********************************************************************************************************************************/
    export class PeopleManager extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(targetInfo?:ComplexTypes.TargetInfoSettings) {
            // Call the base constructor
            super(targetInfo);

            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "sp.userprofiles.peoplemanager";

            // Add the methods
            this.addMethods(this, { __metadata: { type: "peoplemanager" } } );
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.peoplemanager = {
        amIFollowedBy:{
            argNames: ["accountName"],
            requestType: Types.RequestType.GetWithArgsInQS
        },

        amIFollowing:{
            argNames: ["accountName"],
            requestType: Types.RequestType.GetWithArgsInQS
        },

        follow:{
            argNames: ["accountName"],
            requestType: Types.RequestType.PostWithArgsInQS
        },

        followTag:{
            argNames: ["id"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        getFollowedTags:{
            argNames: ["maxCount"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        getFollowersFor:{
            argNames: ["accountName"],
            requestType: Types.RequestType.GetWithArgsInQS
        },

        getMyFollowers:{
            requestType: Types.RequestType.Get
        },

        getMyProperties:{
            requestType: Types.RequestType.Get
        },

        getMySuggestions:{
            requestType: Types.RequestType.Get
        },

        getPeopleFollowedBy:{
            argNames: ["accountName"],
            requestType: Types.RequestType.GetWithArgsInQS
        },

        getPeopleFollowedByMe:{
            requestType: Types.RequestType.Get
        },

        getPropertiesFor:{
            argNames: ["accountName"],
            requestType: Types.RequestType.GetWithArgsInQS
        },

        getTrendingTags:{
            name: "sp.userprofiles.peoplemanager.gettrendingtags",
            replaceEndpointFl: true,
            requestType: Types.RequestType.Get
        },

        getUserProfilePropertyFor:{
            argNames: ["accountName", "propertyName"],
            requestType: Types.RequestType.GetWithArgsInQS
        },

        hideSuggestion:{
            argNames: ["accountName"],
            requestType: Types.RequestType.PostWithArgsInQS
        },

        isFollowing:{
            argNames: ["possibleFollowerAccountName", "possibleFolloweeAccountName"],
            name: "sp.userprofiles.peoplemanager.isfollowing",
            replaceEndpointFl: true,
            requestType: Types.RequestType.GetWithArgsInQS
        },

        setMyProfilePicture:{
            requestType: Types.RequestType.PostWithArgsInBody
        },

        stopFollowing:{
            argNames: ["accountName"],
            requestType: Types.RequestType.PostWithArgsInQS
        },

        stopFollowingTag:{
            argNames: ["id"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },
    }
}