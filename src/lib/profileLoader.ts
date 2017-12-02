import { Types } from "../mapper";
import { Base, Request } from "../utils";

/*********************************************************************************************************************************/
// Profile Loader
/*********************************************************************************************************************************/
class _ProfileLoader extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
        this.targetInfo.method = "POST";

        // Add the methods
        Request.addMethods(this, { __metadata: { type: "profileloader" } });
    }
}
export const ProfileLoader: Types.IProfileLoader = _ProfileLoader as any;