import {RequestType} from "../../types";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const profileloader = {
    createPersonalSiteEnqueueBulk:{
        argNames: ["emailIDs"],
        requestType: RequestType.PostWithArgsInBody
    },

    getOwnerUserProfile:{
        name: "sp.userprofiles.profileloader.getowneruserprofile",
        replaceEndpointFl: true,
        requestType: RequestType.Post,
        returnType: "userprofile"
    },

    getUserProfile:{
        requestType: RequestType.Post,
        returnType: "userprofile"
    },
};