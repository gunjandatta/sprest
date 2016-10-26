/**
 * Lists
 */
interface ILists extends IBase {
    /**
     * Properties
     */

    /** The list collection. */
    results: Array<IList>;

    /**
     * Methods
     */

    /**
     * Adds a list to the list collection.
     * @param parameters - The list creation information.
     */
    add(parameters:$REST.Types.ListCreationInformation): IList;

    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    ensureSiteAssetsLibrary(): any;

    /**
     * Gets a list that is the default location for wiki pages.
     */
    ensureSitePagesLibrary(): any;

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
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(oData:$REST.Types.ODataSettings): ILists;
}
