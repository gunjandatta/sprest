import { Base } from "../utils";
import { IPeoplePicker } from "./types";
import { ITargetInfo } from "../utils/types";

/**
 * People Picker
 */
export const PeoplePicker: IPeoplePicker = ((targetInfo?: ITargetInfo) => {
    let peoplePicker = new Base(targetInfo);

    // Default the properties
    peoplePicker.targetInfo.defaultToWebFl = true;
    peoplePicker.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";
    peoplePicker.targetInfo.overrideDefaultRequestToHostFl = true;

    // Add the methods
    peoplePicker.addMethods(peoplePicker, { __metadata: { type: "peoplepicker" } });

    // Return the people picker
    return peoplePicker;
}) as any;