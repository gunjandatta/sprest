import { Base, Request } from "../utils";
import { IPeoplePicker } from "./types";
import { ITargetInfoProps } from "../utils/types";

/**
 * People Picker
 */
export const PeoplePicker: IPeoplePicker = ((targetInfo?: ITargetInfoProps) => {
    let peoplePicker = new Base(targetInfo);

    // Default the properties
    peoplePicker.targetInfo.defaultToWebFl = true;
    peoplePicker.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";
    peoplePicker.targetInfo.overrideDefaultRequestToHostFl = true;

    // Add the methods
    Request.addMethods(peoplePicker, { __metadata: { type: "peoplepicker" } });

    // Return the people picker
    return peoplePicker;
}) as any;