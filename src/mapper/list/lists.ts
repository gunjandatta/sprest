import { IBase, IBaseCollection } from "../../utils";
import { IList, IListCreationInformation, IListQueryResult, IListResult } from ".";

/**
 * Methods
 */
export interface IListsMethods {
    /**
     * Adds a list to the list collection.
     * @param parameters - The list creation information.
     */
    add(parameters: IListCreationInformation): IBase<IList, IListResult>;

    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    ensureSiteAssetsLibrary(): IBase<IList, IListResult, IListQueryResult>;

    /**
     * Gets a list that is the default location for wiki pages.
     */
    ensureSitePagesLibrary(): IBase<IList, IListResult, IListQueryResult>;

    /**
     * Returns the list with the specified list identifier.
     * @param id - The list id.
     */
    getById(id): IList & IBase<IList, IListResult, IListQueryResult>;

    /**
     * Returns the list with the specified title from the collection.
     * @param title - The list title.
     */
    getByTitle(title): IList & IBase<IList, IListResult, IListQueryResult>;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<ILists, IListResults>;
}

/**
 * Lists
 */
export interface ILists extends IListsMethods, IBaseCollection<IList, IListResult, IListQueryResult> { }

/**
 * List Results
 */
export interface IListResults extends IListsMethods, IBaseCollection<IList, IListResult, IListQueryResult> { }