import { IDrives } from "../../@types/v2";
import { ITargetInfoProps } from "../../@types/utils";
import { ContextInfo } from "../lib/contextInfo";
import { Base, RequestType } from "../utils";

/**
 * Drives
 * Returns the libraries for a site.
 */
export const Drives: IDrives = ((id?: string, targetInfo?: ITargetInfoProps) => {
    let drives = new Base(targetInfo);

    // Default the properties
    drives.targetInfo.defaultToWebFl = true;
    drives.targetInfo.requestType = RequestType.GraphGet;

    // See if an endpoint is not defined
    if (drives.targetInfo.endpoint == undefined) {
        // Default the endpoint
        drives.targetInfo.endpoint = "_api/v2.0/sites/" + (id || ContextInfo?.siteId?.replace(/[{}]/g, '') + "/drives");

        // Add the methods
        // TODO
    }

    // Return the libraries
    return drives;
}) as any as IDrives;