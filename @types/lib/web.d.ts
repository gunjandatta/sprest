import { Base, SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * Web
 */
export const Web: IWeb;

/**
 * Web
 */
export interface IWeb {
    /**
     * Creates an instance of the web library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): SP.IWeb;

    /**
     * Method to get a remote web.
     * @param requestUrl - The absolute url of the remote web.
     */
    getRemoteWeb(requestUrl: string): Base.IBaseExecution<SP.RemoteWeb>;
}