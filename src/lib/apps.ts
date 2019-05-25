import { Base, Request } from "../utils";
import { IApps } from "./types/apps";
import { ITargetInfoProps } from "../utils/types/targetInfo";

/**
 * Apps
 */
export const Apps: IApps = ((targetInfo?: ITargetInfoProps) => {
    let apps = new Base(targetInfo);

    // Default the properties
    apps.targetInfo.defaultToWebFl = true;
    apps.targetInfo.endpoint = "apps";

    // Add the methods
    Request.addMethods(apps, { __metadata: { type: "Microsoft.AppServices.AppCollection" } });

    // Return the apps
    return apps;
}) as any as IApps;