import * as Types from "../../intellisense";
import { ITargetInfoProps } from "../../utils/types";

/**
 * People Manager
 */
export const PeopleManager: IPeopleManager;

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