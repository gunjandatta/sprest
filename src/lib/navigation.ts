import { Base, Helper } from "../utils";
import { INavigation } from "./types";

/**
 * Navigation
 */
export const Navigation: INavigation = ((url?: string, targetInfo?) => {
    let navigation = new Base(targetInfo);

    // Default the properties
    navigation.targetInfo.defaultToWebFl = true;
    navigation.targetInfo.endpoint = "navigation";

    // See if the web url exists
    if (url) {
        // Set the settings
        navigation.targetInfo.url = url;
    }

    // Add the methods
    Helper.addMethods(navigation, { __metadata: { type: "navigationservicerest" } });

    // Return the navigation
    return navigation;
}) as any;