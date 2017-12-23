import { Types } from "../mapper";
import { Base } from "../utils";

/*********************************************************************************************************************************/
// Web
/*********************************************************************************************************************************/
class _Web extends Base<Types.IWeb> {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(url?, targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.targetInfo.endpoint = "web";

        // See if the web url exists
        if (url) {
            // Set the settings
            this.targetInfo.url = url;
        }

        // Add the methods
        this.addMethods(this, { __metadata: { type: "web" } });
    }
}
export const Web: Types.IWeb = _Web as any;