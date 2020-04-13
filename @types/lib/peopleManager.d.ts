import { SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/SP.UserProfiles.PeopleManager
 */
export const PeopleManager: IPeopleManager;

/**
 * People Manager
 * @category People Manager
 */
export interface IPeopleManager {
    /**
     * Creates an instance of the people manager library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): SP.UserProfiles.IPeopleManager;
}