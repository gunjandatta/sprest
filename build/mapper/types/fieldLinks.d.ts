import { SP } from "gd-sprest-def";
import { IBase, IBaseCollection } from "../../utils/types";
/**
 * Field Links
 */
export interface IFieldLinks extends IBaseCollection<SP.FieldLink> {
    /**
     * Adds a content type to the collection.
     * @param data - The field link properties.
     */
    add(data: any): IBase<SP.FieldLink>;
    /**
     * Gets the field link by its id.
     * @param id - The id of the field.
     */
    getById(id: any): SP.FieldLink & IBase<SP.FieldLink>;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IFieldLinks>;
}
