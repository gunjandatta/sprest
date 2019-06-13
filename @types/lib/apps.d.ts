import { Microsoft } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * Apps
 */
export const Apps: IApps;

/**
 * Apps
 */
export interface IApps {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): Microsoft.AppServices.IAppCollection;
}