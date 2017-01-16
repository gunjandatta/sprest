/// <reference path="../definitions/userProfile.d.ts" />
import {Base} from "../utils";
import {RequestType} from ".";
import {
    IUserProfile,
    TargetInfoSettings
} from "../definitions";

/*********************************************************************************************************************************/
// User Profile
/*********************************************************************************************************************************/
class _UserProfile extends Base {
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
export const UserProfile:IUserProfile = <any>_UserProfile;

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