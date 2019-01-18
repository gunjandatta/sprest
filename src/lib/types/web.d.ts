import { SP } from "gd-sprest-def";
import * as Types from "../../mapper/types";
import { IBase } from "../../utils/types/base";
import { ITargetInfoProps } from "../../utils/types";

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
    (url?: string, targetInfo?: ITargetInfoProps): Types.IWeb;

    /**
     * Method to get a remote web.
     * @param requestUrl - The absolute url of the remote web.
     */
    getRemoteWeb(requestUrl: string): IBase<SP.RemoteWeb>;
}