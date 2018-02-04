import { INavigationServiceREST } from "../mapper/types";
import { Base } from "../utils";

/**
 * Navigation
 */
class _Navigation extends Base {
    /**
     * Constructor
     */
    constructor(url?: string, targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.targetInfo.defaultToWebFl = true;
        this.targetInfo.endpoint = "navigation";

        // See if the web url exists
        if (url) {
            // Set the settings
            this.targetInfo.url = url;
        }

        // Add the methods
        this.addMethods(this, { __metadata: { type: "navigationservicerest" } });
    }
}
export const Navigation: INavigationServiceREST = _Navigation as any;