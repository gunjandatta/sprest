import { SP } from "gd-sprest-def";
import { IBaseExecution, IBaseCollection, IBaseCollectionResult } from "../utils/types/base";
import { IList, IListQueryResult, IListResult } from ".";

/**
 * Methods
 */
export interface IListsMethods {
    /**
     * Adds a list to the list collection.
     * @param parameters - The list creation information.
     */
    add(parameters: SP.List): IBaseExecution<IList, IListResult>;

    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    ensureSiteAssetsLibrary(): IBaseExecution<IList, IListResult, IListQueryResult>;

    /**
     * Gets a list that is the default location for wiki pages.
     */
    ensureSitePagesLibrary(): IBaseExecution<IList, IListResult, IListQueryResult>;

    /**
     * Returns the list with the specified list identifier.
     * @param id - The list id.
     */
    getById(id): IList & IBaseExecution<IList, IListResult, IListQueryResult>;

    /**
     * Returns the list with the specified title from the collection.
     * @param title - The list title.
     */
    getByTitle(title): IList & IBaseExecution<IList, IListResult, IListQueryResult>;
}

/**
 * Lists
 */
export interface ILists extends IListsMethods, IBaseCollection<IList, IListResult, IListQueryResult> { }

/**
 * List Query Results
 */
export interface IListQueryResults extends IListsMethods, IBaseCollectionResult<IListQueryResult> { }

/**
 * List Results
 */
export interface IListResults extends IListsMethods, IBaseCollectionResult<IListResult> { }