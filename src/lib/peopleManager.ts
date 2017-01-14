import {TargetInfoSettings} from "../definitions";
import {RequestType} from "../types";
import {Base} from "../utils";

/*********************************************************************************************************************************/
// People Manager
/*********************************************************************************************************************************/
export class PeopleManager extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?:TargetInfoSettings) {
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
const Library = {
    amIFollowedBy:{
        argNames: ["accountName"],
        requestType: RequestType.GetWithArgsInQS
    },

    amIFollowing:{
        argNames: ["accountName"],
        requestType: RequestType.GetWithArgsInQS
    },

    follow:{
        argNames: ["accountName"],
        requestType: RequestType.PostWithArgsInQS
    },

    followTag:{
        argNames: ["id"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    getFollowedTags:{
        argNames: ["maxCount"],
        requestType: RequestType.GetWithArgsValueOnly
    },

    getFollowersFor:{
        argNames: ["accountName"],
        requestType: RequestType.GetWithArgsInQS
    },

    getMyFollowers:{
        requestType: RequestType.Get
    },

    getMyProperties:{
        requestType: RequestType.Get
    },

    getMySuggestions:{
        requestType: RequestType.Get
    },

    getPeopleFollowedBy:{
        argNames: ["accountName"],
        requestType: RequestType.GetWithArgsInQS
    },

    getPeopleFollowedByMe:{
        requestType: RequestType.Get
    },

    getPropertiesFor:{
        argNames: ["accountName"],
        requestType: RequestType.GetWithArgsInQS
    },

    getTrendingTags:{
        name: "sp.userprofiles.peoplemanager.gettrendingtags",
        replaceEndpointFl: true,
        requestType: RequestType.Get
    },

    getUserProfilePropertyFor:{
        argNames: ["accountName", "propertyName"],
        requestType: RequestType.GetWithArgsInQS
    },

    hideSuggestion:{
        argNames: ["accountName"],
        requestType: RequestType.PostWithArgsInQS
    },

    isFollowing:{
        argNames: ["possibleFollowerAccountName", "possibleFolloweeAccountName"],
        name: "sp.userprofiles.peoplemanager.isfollowing",
        replaceEndpointFl: true,
        requestType: RequestType.GetWithArgsInQS
    },

    setMyProfilePicture:{
        requestType: RequestType.PostWithArgsInBody
    },

    stopFollowing:{
        argNames: ["accountName"],
        requestType: RequestType.PostWithArgsInQS
    },

    stopFollowingTag:{
        argNames: ["id"],
        requestType: RequestType.PostWithArgsValueOnly
    },
};
export default Library;