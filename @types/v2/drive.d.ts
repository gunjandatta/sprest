import { IBaseExecution } from "gd-sprest-def/lib/base";
import { drive } from "gd-sprest-def/lib/Microsoft/Graph/entityTypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/v2.0/drive
 *
 * #### Get the default library for a site.
 *
 * ```typescript
 * import { Drives } from "gd-sprest";
 * 
 * Drives().execute(drives => {
 *   drives.forEach(...);
 * });
 * ```
 */
export const Drive: IDrive;

/**
 * Drive
 * The v2.0 REST endpoint.
 * @category Drive
 */
export interface IDrive {
    /**
     * Get the default library for a site.
     * @param id - (Optional) The site id to target, current by default.
     * @param targetInfo - (Optional) The target information.
     */
    (id?: string, targetInfo?: ITargetInfoProps): IBaseExecution<drive>;
}