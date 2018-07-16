import { Types } from "../../mapper";
import { IBase, ITargetInfo } from "../../utils/types";
/**
 * Web
 */
export interface IWeb {
    /**
     * Creates an instance of the web library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfo): Types.IWeb;
    /**
     * Method to get a remote web.
     * @param requestUrl - The absolute url of the remote web.
     */
    getRemoteWeb(requestUrl: string): IBase<Types.IWebRemote>;
}
