import { SP } from "gd-sprest-def";
import { IBaseExecution, IBaseCollection } from "../utils/types/base";

/**
 * Field Links
 */
export interface IFieldLinks extends IBaseCollection<SP.FieldLink> {
    /**
     * Adds a content type to the collection.
     * @param data - The field link properties.
     */
    add(data): IBaseExecution<SP.FieldLink>;

    /**
     * Gets the field link by its id.
     * @param id - The id of the field.
     */
    getById(id): SP.FieldLink & IBaseExecution<SP.FieldLink>;

    /**
     * Method to get the next set of results.
     */
    next(): IBaseExecution<IFieldLinks>;
}