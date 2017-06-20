import { IBase, IBaseCollection, IContentType, IContentTypeMethods, IContentTypeCreationInformation, IContentTypeQueryResults } from "..";
/**
 * Content Types
 */
export interface IContentTypes extends IBaseCollection<IContentType, IContentTypeQueryResults> {
    /**
     * Adds a content type to the collection.
     * @param parameters - The content type creation information.
     */
    add(parameters: IContentTypeCreationInformation): IBase<IContentType>;
    /**
     * Adds an existing content type to this collection.
     * @param contentTypeId - The content type id to add.
     */
    addAvailableContentType(contentTypeId: any): IContentTypeMethods;
    /**
     * Gets a content type by id.
     * @param id - The content type id.
     */
    getById(id: any): IContentTypeMethods;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IContentTypes>;
}
