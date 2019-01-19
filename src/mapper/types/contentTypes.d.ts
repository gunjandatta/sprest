import { SP } from "gd-sprest-def";
import { IBaseLib, IBaseCollection } from "../../utils/types/base";
import { IContentType, IContentTypeQueryResult, IContentTypeResult } from ".";

/**
 * Methods
 */
export interface IContentTypesMethods {
    /**
     * Adds a content type to the collection.
     * @param parameters - The content type creation information.
     */
    add(parameters: SP.ContentTypeCreationInformation): IBaseLib<IContentType, IContentTypeResult>;

    /**
     * Adds an existing content type to this collection.
     * @param contentTypeId - The content type id to add.
     */
    addAvailableContentType(contentTypeId): IBaseLib<IContentType, IContentTypeResult>;

    /**
     * Gets a content type by id.
     * @param id - The content type id.
     */
    getById(id): IContentType & IBaseLib<IContentType, IContentTypeResult, IContentTypeQueryResult>;

    /**
     * Method to get the next set of results.
     */
    next(): IBaseLib<IContentTypes, IContentTypeResults>;
}

/**
 * Content Types
 */
export interface IContentTypes extends IContentTypesMethods, IBaseCollection<IContentType, IContentTypeResult, IContentTypeQueryResult> { }

/**
 * Content Type Results
 */
export interface IContentTypeResults extends IContentTypesMethods, IBaseCollection<IContentTypeResult, IContentTypeResult, IContentTypeQueryResult> { }