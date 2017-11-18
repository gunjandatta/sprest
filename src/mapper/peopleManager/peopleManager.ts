import {RequestType} from "../../types";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const peoplemanager = {
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