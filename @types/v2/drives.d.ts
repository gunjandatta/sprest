import { IBaseExecution } from "gd-sprest-def/lib/base";
import { driveCollection } from "gd-sprest-def/lib/Microsoft/Graph/entityTypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/v2.0/drives
 *
 * #### Get the libraries for a site.
 *
 * ```typescript
 * import { Drives } from "gd-sprest";
 * 
 * Drives().execute(drives => {
 *   drives.forEach(...);
 * });
 * ```
 */
export const drives: Idrives;

/**
 * Drives
 * The v2.0 REST endpoint.
 * @category Drives
 */
export interface Idrives {
    /**
     * Get the libraries for a site.
     * @param id - (Optional) The site id to target, current by default.
     * @param targetInfo - (Optional) The target information.
     */
    (id?: string, targetInfo?: ITargetInfoProps): IBaseExecution<driveCollection>;
}