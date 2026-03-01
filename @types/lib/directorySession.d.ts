import { IDirectorySession as IDirectorySessionCore } from "gd-sprest-def/lib/SP/Directory/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/SP.Directory.DirectorySession
 */
export const DirectorySession: IDirectorySession;

/**
 * Directory Session
 * @category Directory Session
 */
export interface IDirectorySession {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): IDirectorySessionCore;
}