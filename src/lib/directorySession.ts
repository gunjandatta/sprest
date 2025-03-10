import { IDirectorySession } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request } from "../utils";

/**
 * Directory Session
 */
export const DirectorySession: IDirectorySession = ((targetInfo?: ITargetInfoProps) => {
    let svc = new Base(targetInfo);

    // Default the properties
    svc.targetInfo.defaultToWebFl = true;
    svc.targetInfo.endpoint = "SP.Directory.DirectorySession";

    // Add the methods
    Request.addMethods(svc, { __metadata: { type: "SP.Directory.DirectorySession" } });

    // Return the directory session
    return svc;
}) as any as IDirectorySession;