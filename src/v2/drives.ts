import { ITargetInfoProps } from "../../@types/utils";
import { Idrives } from "../../@types/v2";
import { ContextInfo } from "../lib/contextInfo";
import { Base, Request, RequestType } from "../utils";

/**
 * Drives
 * Returns the libraries for a site.
 */
export const drives: Idrives = ((props: { siteId?: string, driveId?: string, targetInfo?: ITargetInfoProps } = {}) => {
    let drives = new Base(props.targetInfo);

    // Default the properties
    drives.targetInfo.defaultToWebFl = true;
    drives.targetInfo.requestType = RequestType.GraphGet;

    // See if an endpoint is not defined
    if (drives.targetInfo.endpoint == undefined) {
        // Default the endpoint
        drives.targetInfo.endpoint = "_api/v2.0/sites/" + (props.siteId || ContextInfo?.siteId?.replace(/[{}]/g, '') + "/drives");

        // See if the drive id was provided
        if (props.driveId) {
            // Append the id
            drives.targetInfo.endpoint += "/" + props.driveId;

            // Add the methods
            Request.addMethods(drives, { __metadata: { type: "@odata.context/_api/v2.0/$metadata#drive" } });
        } else {
            // Add the methods
            Request.addMethods(drives, { __metadata: { type: "@odata.context/_api/v2.0/$metadata#drives" } });
        }
    }

    // Return the libraries
    return drives;
}) as any as Idrives;