import * as Types from "../../mapper/types";
import { ITargetInfoProps } from "../../utils/types";

/**
 * People Picker
 */
export const PeoplePicker: IPeoplePicker;

/**
 * People Picker
 */
export interface IPeoplePicker {
    /**
     * Creates an instance of the people picker library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): Types.IPeoplePicker;
}