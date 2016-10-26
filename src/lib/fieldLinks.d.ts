/**
 * Field Links
 */
interface IFieldLinks extends IBase {
    /**
     * Properties
     */

    /** The field link collection. */
    results: Array<any>;

    /**
     * Methods
     */

    /**
     * Adds a content type to the collection.
     * @param data - The field link properties.
     */
    add(data): any;

    /**
     * Gets the field link by its id.
     * @param id - The id of the field.
     */
    getById(id);

    /**
     * Gets a field by it's internal name.
     * @param name - The internal name of the field.
     */
    getFieldLinkByName(name): any;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(oData:$REST.Types.ODataSettings): IFieldLinks;
}
