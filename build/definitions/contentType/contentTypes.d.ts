import { IBase, IContentType, IContentTypeCreationInformation, IContentTypeQueryResults, IResults } from "..";
/**
 * Content Types
 */
export interface IContentTypes extends IResults<IContentType>, IBase<IResults<IContentType>, IResults<IContentTypeQueryResults>> {
    /**
     * Adds a content type to the collection.
     * @param parameters - The content type creation information.
     */
    add(parameters: IContentTypeCreationInformation): IContentType;
    /**
     * Adds an existing content type to this collection.
     * @param contentTypeId - The content type id to add.
     */
    addAvailableContentType(contentTypeId: any): IContentType;
    /**
     * Gets a content type by id.
     * @param id - The content type id.
     */
    getById(id: any): IContentType;
    /**
     * Method to get the next set of results.
     */
    next(): IContentTypes;
}
