import { Idrive } from "../../@types/v2";
import { ITargetInfoProps } from "../../@types/utils";
import { ContextInfo } from "../lib/contextInfo";
import { Base, Request, RequestType } from "../utils";

/**
 * Drive
 * Returns the default library for a site.
 */
export const drive: Idrive = ((props: { driveId?: string, siteId?: string, siteUrl?: string, targetInfo?: ITargetInfoProps } = {}) => {
    let drive = new Base(props.targetInfo);

    // Default the properties
    drive.targetInfo.defaultToWebFl = true;
    drive.targetInfo.requestType = RequestType.GraphGet;

    // Default the url
    drive.targetInfo.url = props.siteUrl || props?.targetInfo?.url || ContextInfo.webServerRelativeUrl;

    // See if an endpoint is not defined
    if (drive.targetInfo.endpoint == undefined) {
        if (props.driveId) {
            // Set the endpoint
            drive.targetInfo.endpoint = `_api/v2.0/${props.siteId ? "sites/" + props.siteId.replace(/[{}]/g, '') + "/" : ""}drives/${props.driveId}`;
        } else {
            // Default the endpoint
            drive.targetInfo.endpoint = `_api/v2.0/${props.siteId ? "sites/" + props.siteId.replace(/[{}]/g, '') + "/" : ""}drive`;
        }

        // Add the methods
        Request.addMethods(drive, { __metadata: { type: "@odata.context/_api/v2.0/$metadata#drive" } });
    }

    // Return the default library
    return drive;
}) as any as Idrive;