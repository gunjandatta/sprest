import {Base} from "../utils";
import {RequestType} from ".";
import {
    TargetInfoSettings
} from "gd-sprest";

/*********************************************************************************************************************************/
// Profile Loader
/*********************************************************************************************************************************/
export class ProfileLoader extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?:TargetInfoSettings) {
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
const Library = {
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
export default Library;