import {IUserProfile} from "../definitions";
import {Base} from "../utils";
/*********************************************************************************************************************************/
// User Profile
/*********************************************************************************************************************************/
class _UserProfile extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
        this.targetInfo.method = "POST";

        // Add the methods
        this.addMethods(this, { __metadata: { type: "userprofile" } } );
    }
}
export const UserProfile:IUserProfile = <any>_UserProfile;