import { IPeoplePickerQuery, IPeoplePickerResolveUser, IPeoplePickerSearchUser, ITargetInfo } from "..";
import { IBase } from "../../utils";
/**
 * People Picker
 */
export interface IPeoplePicker extends IBase {
    /**
     * Constructor
     * @param settings - The search settings.
     */
    new (settings?: ITargetInfo): IPeoplePicker;
    /**
     * Methods
     */
    /** Method to resolve users.
     * @param query - The people picker query.
    */
    clientPeoplePickerResolveUser(query: IPeoplePickerQuery): IBase<IPeoplePickerResolveUser>;
    /** Method to search for users.
     * @param query - The people picker query.
    */
    clientPeoplePickerSearchUser(query: IPeoplePickerQuery): IBase<IPeoplePickerSearchUser>;
}
