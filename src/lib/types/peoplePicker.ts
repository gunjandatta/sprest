import { Types } from "../../mapper";
import { ITargetInfo } from "../../utils/types";

/**
 * People Picker
 */
export interface IPeoplePicker {
    /**
     * Creates an instance of the people picker library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfo): Types.IPeoplePicker;
}