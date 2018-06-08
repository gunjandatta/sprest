import { Types } from "..";
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
        this.targetInfo.defaultToWebFl = true;
        this.targetInfo.endpoint = "site";

        // See if the web url exists
        if (url) {
            // Set the settings
            this.targetInfo.url = url;
        }

        // Add the methods
        this.addMethods(this, { __metadata: { type: "site" } });
    }

    // Method to see if a site exists
    static exists(url: string) {
        // Return the base object
        return new Base({
            data: { url },
            defaultToWebFl: true,
            endpoint: "SP.Site.Exists",
            method: "POST"
        });
    }

    // Method to get the app context
    static getAppContext(siteUrl: string) {
        // Return the base object
        return new Base({
            data: { siteUrl },
            defaultToWebFl: true,
            endpoint: "SP.AppContextSite",
            method: "POST"
        });
    }

    // Method to get the root web
    getRootWeb() { return new Web(null, this.targetInfo); }

    // Method to get the url by id
    static getUrlById(id: string) {
        // Return the base object
        return new Base({
            data: { id },
            defaultToWebFl: true,
            endpoint: "SP.Site.GetUrlById",
            method: "POST"
        });
    }

    // Method to determine if the current user has access, based on the permissions.
    hasAccess(permissions) {
        // TO DO
        return true;
    };
}
export const Site: Types.SP.ISite = <any>_Site;