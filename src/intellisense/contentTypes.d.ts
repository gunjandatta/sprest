import { SP } from "gd-sprest-def";
import { IBaseExecution, IBaseCollection, IBaseCollectionResult } from "../utils/types/base";
import { IContentType, IContentTypeQueryResult, IContentTypeResult } from ".";

/**
 * Methods
 */
export interface IContentTypesMethods {
    /**
     * Adds a content type to the collection.
     * @param parameters - The content type creation information.
     */
    add(parameters: SP.ContentTypeCreationInformation): IBaseExecution<IContentType, IContentTypeResult>;

    /**
     * Adds an existing content type to this collection.
     * @param contentTypeId - The content type id to add.
     */
    addAvailableContentType(contentTypeId): IBaseExecution<IContentType, IContentTypeResult>;

    /**
     * Gets a content type by id.
     * @param id - The content type id.
     */
    getById(id): IContentType & IBaseExecution<IContentType, IContentTypeResult, IContentTypeQueryResult>;
}

/**
 * Content Types
 */
export interface IContentTypes extends IContentTypesMethods, IBaseCollection<IContentType, IContentTypeResult, IContentTypeQueryResult> { }

/**
 * Content Type Event ReceiverResults
 */
export interface IContentTypeQueryResults extends IContentTypesMethods, IBaseCollectionResult<IContentTypeQueryResult> { }

/**
 * Content Type Results
 */
export interface IContentTypeResults extends IContentTypesMethods, IBaseCollectionResult<IContentTypeResult> { }