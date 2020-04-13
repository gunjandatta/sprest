import { Microsoft } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/Microsoft.AppServices.AppCollection
 */
export const Apps: IApps;

/**
 * Apps
 * @category Apps
 */
export interface IApps {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): Microsoft.AppServices.IAppCollection;
}