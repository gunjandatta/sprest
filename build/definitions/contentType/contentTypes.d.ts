import { IBase, IBaseCollection, IContentType, IContentTypeCreationInformation, IContentTypeQueryResult, IContentTypeResult } from "..";
/**
 * Methods
 */
export interface IContentTypesMethods {
    /**
     * Adds a content type to the collection.
     * @param parameters - The content type creation information.
     */
    add(parameters: IContentTypeCreationInformation): IBase<IContentTypeResult>;
    /**
     * Adds an existing content type to this collection.
     * @param contentTypeId - The content type id to add.
     */
    addAvailableContentType(contentTypeId: any): IBase<IContentTypeResult>;
    /**
     * Gets a content type by id.
     * @param id - The content type id.
     */
    getById(id: any): IBase<IContentTypeResult>;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IContentTypes>;
}
/**
 * Content Types
 */
export interface IContentTypes extends IContentTypesMethods, IBaseCollection<IContentType, IContentTypeResult, IContentTypeQueryResult> {
}
/**
 * Content Type Results
 */
export interface IContentTypeResults extends IContentTypesMethods, IBaseCollection<IContentTypeResult, IContentTypeResult, IContentTypeQueryResult> {
}
