import { Types } from "../../mapper";
import { ITargetInfo } from "../../utils/types";
/**
 * People Manager
 */
export interface IPeopleManager {
    /**
     * Creates an instance of the people manager library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfo): Types.IPeopleManager;
}
