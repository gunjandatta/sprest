import { Base, Request } from "../utils";
import { IThemeManager } from "./types/themeManager";
import { ITargetInfoProps } from "../utils/types/targetInfo";

/**
 * Theme Manager
 */
export const ThemeManager: IThemeManager = ((targetInfo?: ITargetInfoProps) => {
    let mgr = new Base(targetInfo);

    // Default the properties
    mgr.targetInfo.defaultToWebFl = true;
    mgr.targetInfo.endpoint = "thememanager";

    // Add the methods
    Request.addMethods(mgr, { __metadata: { type: "SP.Utilities.ThemeManager" } });

    // Return the theme manager
    return mgr;
}) as any as IThemeManager;