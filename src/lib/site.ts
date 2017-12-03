import { Types } from "../mapper";
import { Base } from "../utils";
import { Web } from ".";

/*********************************************************************************************************************************/
// Site
// The SPSite object.
/*********************************************************************************************************************************/
class _Site extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(url?, targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.targetInfo.endpoint = "site";

        // See if the web url exists
        if (url) {
            // Set the settings
            this.targetInfo.url = url;
        }

        // Add the methods
        this.addMethods(this, { __metadata: { type: "site" } });
    }

    // Method to get the root web
    getRootWeb() { return new Web(null, this.targetInfo); }

    // Method to determine if the current user has access, based on the permissions.
    hasAccess(permissions) {
        // TO DO
        return true;
    };
}
export const Site: Types.ISite = <any>_Site;