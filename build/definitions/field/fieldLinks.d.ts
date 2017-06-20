import { IBase, IFieldLink, IResults } from "..";
/**
 * Field Links
 */
export interface IFieldLinks extends IResults<IFieldLink>, IBase<IResults<IFieldLink>, IResults<IFieldLink>> {
    /**
     * Adds a content type to the collection.
     * @param data - The field link properties.
     */
    add(data: any): IBase;
    /**
     * Gets the field link by its id.
     * @param id - The id of the field.
     */
    getById(id: any): IBase<IFieldLink>;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IFieldLinks>;
}
