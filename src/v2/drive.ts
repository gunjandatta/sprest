import { Idrive } from "../../@types/v2";
import { ITargetInfoProps } from "../../@types/utils";
import { ContextInfo } from "../lib/contextInfo";
import { Base, Request, RequestType } from "../utils";

/**
 * Drive
 * Returns the default library for a site.
 */
export const drive: Idrive = ((props: { siteId?: string, siteUrl?: string, targetInfo?: ITargetInfoProps } = {}) => {
    let drive = new Base(props.targetInfo);

    // Default the properties
    drive.targetInfo.defaultToWebFl = true;
    drive.targetInfo.requestType = RequestType.GraphGet;

    // See if the web url exists
    if (props.siteUrl) {
        // Set the settings
        drive.targetInfo.url = props.siteUrl;
    }

    // See if an endpoint is not defined
    if (drive.targetInfo.endpoint == undefined) {
        // Default the endpoint
        drive.targetInfo.endpoint = `_api/v2.0/${props.siteId ? "sites/" + props.siteId.replace(/[{}]/g, '') : ""}drive`;

        // Add the methods
        Request.addMethods(drive, { __metadata: { type: "@odata.context/_api/v2.0/$metadata#drive" } });
    }

    // Return the default library
    return drive;
}) as any as Idrive;