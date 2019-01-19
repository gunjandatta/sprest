import { SP } from "gd-sprest-def";
import { IBaseLib, IBaseCollection } from "../../utils/types/base";

/**
 * Field Links
 */
export interface IFieldLinks extends IBaseCollection<SP.FieldLink> {
    /**
     * Adds a content type to the collection.
     * @param data - The field link properties.
     */
    add(data): IBaseLib<SP.FieldLink>;

    /**
     * Gets the field link by its id.
     * @param id - The id of the field.
     */
    getById(id): SP.FieldLink & IBaseLib<SP.FieldLink>;

    /**
     * Method to get the next set of results.
     */
    next(): IBaseLib<IFieldLinks>;
}