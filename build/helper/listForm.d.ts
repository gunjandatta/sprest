import { Types } from "../mapper";
/**
 * List Form Properties
 */
export interface IListFormProps {
    /** The form fields */
    fields?: Array<string>;
    /** The list name */
    listName: string;
    /** Event triggered when the list form information is initialized */
    onInit?: (formFields: {
        [key: string]: Types.IFieldResult;
    }) => void;
    /** The relative web url containing the list */
    webUrl?: string;
}
/**
 * List Form
 */
export interface IListForm {
    /**
     * Creates an instance of the list form
     * @param props - The list form properties.
     */
    new (props: IListFormProps): any;
}
export declare const ListForm: IListForm;
