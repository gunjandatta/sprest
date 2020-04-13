import * as Types from "../intellisense";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface
 */
export const PeoplePicker: IPeoplePicker;

/**
 * People Picker
 * @category People Picker
 */
export interface IPeoplePicker {
    /**
     * Creates an instance of the people picker library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): Types.IPeoplePicker;
}