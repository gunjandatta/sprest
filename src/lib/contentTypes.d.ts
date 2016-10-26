/**
 * Content Types
 */
interface IContentTypes extends IBase {
    /**
     * Properties
     */

    /** The content type collection. */
    results: Array<IContentType>;

    /**
     * Methods
     */

    /**
     * Adds a content type to the collection.
     * @param parameters - The content type creation information.
     */
    add(parameters:$REST.Types.ContentTypeCreationInformation): IContentType;

    /**
     * Adds an existing content type to this collection.
     * @param contentTypeId - The content type id to add.
     */
    addAvailableContentType(contentTypeId): IContentType;

    /**
     * Gets a content type by id.
     * @param id - The content type id.
     */
    getById(id): IContentType;

    /**
     * Gets a content type by name.
     * @param name - The name of the content type.
     */
    getByName(name);

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(oData:$REST.Types.ODataSettings): IContentTypes;
}
