import { IApps } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request } from "../utils";

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