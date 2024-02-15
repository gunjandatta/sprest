import { drives } from "gd-sprest-def/lib/Microsoft/Graph/api";
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
export const Drives: IDrives;

/**
 * Drives
 * The v2.0 REST endpoint.
 * @category Drives
 */
export interface IDrives {
    /**
     * Get the libraries for a site.
     * @param id - (Optional) The site id to target, current by default.
     * @param targetInfo - (Optional) The target information.
     */
    (id?: string, targetInfo?: ITargetInfoProps): drives;
}