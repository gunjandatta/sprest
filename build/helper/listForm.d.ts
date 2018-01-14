import { Types } from "../mapper";
/**
 * List Form Properties
 */
export interface IListFormProps {
    /** The form fields */
    fields?: Array<string>;
    /** The list name */
    listName: string;
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
    new (props: IListFormProps): PromiseLike<{
        [key: string]: Types.IFieldResult;
    }>;
    /** The list fields */
    Fields: {
        [key: string]: Types.IFieldResult;
    };
    /** The list */
    List: Types.IListResult;
}
export declare const ListForm: IListForm;
