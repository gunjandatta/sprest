import { Types } from "..";
import { Base } from "../utils";

/*********************************************************************************************************************************/
// Web
/*********************************************************************************************************************************/
class _Web extends Base<Types.SP.IWeb> {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(url?, targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.targetInfo.defaultToWebFl = true;
        this.targetInfo.endpoint = "web";

        // See if the web url exists
        if (url) {
            // Set the settings
            this.targetInfo.url = url;
        }

        // Add the methods
        this.addMethods(this, { __metadata: { type: "web" } });
    }

    // Method to get a remote web
    static getRemoteWeb(requestUrl: string) {
        // Return the remote web information
        return new Base({
            data: { requestUrl },
            defaultToWebFl: true,
            endpoint: "SP.RemoteWeb?$expand=Web",
            method: "POST"
        });
    }
}
export const Web: Types.SP.IWeb = _Web as any;