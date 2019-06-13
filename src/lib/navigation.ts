import { INavigation } from "../../@types/lib";
import { Base, Request } from "../utils";

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
    Request.addMethods(navigation, { __metadata: { type: "navigationservicerest" } });

    // Return the navigation
    return navigation;
}) as any as INavigation;