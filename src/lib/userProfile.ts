import {TargetInfoSettings} from "../definitions";
import {RequestType} from "../types";
import {Base} from "../utils";

/*********************************************************************************************************************************/
// User Profile
/*********************************************************************************************************************************/
export class UserProfile extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?:TargetInfoSettings) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
        this.targetInfo.method = "POST";

        // Add the methods
        this.addMethods(this, { __metadata: { type: "userprofile" } } );
    }
}

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
const Library = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/

    properties: [
        "PersonalSite|site"
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    createPersonalSiteEnque: {
        requestType: RequestType.PostWithArgsValueOnly
    },

    shareAllSocialData: {
        requestType: RequestType.PostWithArgsValueOnly
    }
};
export default Library;