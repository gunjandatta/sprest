import * as Types from "../../mapper/types";
import { ITargetInfoProps } from "../../utils/types";

/**
 * People Manager
 */
export interface IPeopleManager {
    /**
     * Creates an instance of the people manager library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): Types.IPeopleManager;
}