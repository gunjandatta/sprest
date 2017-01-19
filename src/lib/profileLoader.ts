import {IProfileLoader} from "../definitions";
import {Base} from "../utils";
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
        this.responses = [];
        this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
        this.targetInfo.method = "POST";

        // Add the methods
        this.addMethods(this, { __metadata: { type: "profileloader" } } );
    }
}
export const ProfileLoader:IProfileLoader = <any>_ProfileLoader;