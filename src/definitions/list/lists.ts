import {
    IBase,
    IList, IListCreationInformation, IListQueryResults,
    IResults
} from "..";

/**
 * Lists
 */
export interface ILists extends IResults<IList>, IBase<IResults<IList>, IResults<IListQueryResults>> {
    /**
     * Adds a list to the list collection.
     * @param parameters - The list creation information.
     */
    add(parameters: IListCreationInformation): IList;

    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    ensureSiteAssetsLibrary(): IBase;

    /**
     * Gets a list that is the default location for wiki pages.
     */
    ensureSitePagesLibrary(): IBase;

    /**
     * Returns the list with the specified list identifier.
     * @param id - The list id.
     */
    getById(id): IList;

    /**
     * Returns the list with the specified title from the collection.
     * @param title - The list title.
     */
    getByTitle(title): IList;

    /**
     * Method to get the next set of results.
     */
    next(): ILists;
}