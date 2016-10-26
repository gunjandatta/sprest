/**
 * List Items
 */
interface IListItems extends IBase {
    /**
     * Properties
     */

    /** The list item collection. */
    results: Array<IListItem>;

    /**
     * Methods
     */

    /**
     * Adds an item to the list item collection.
     * @param data - The item properties.
     */
    add(data): IListItem;

    /**
     * Gets an item by the specified id.
     * @param id - The item id.
     */
    getById(id): IListItem;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(oData:$REST.Types.ODataSettings): IListItems;
}
