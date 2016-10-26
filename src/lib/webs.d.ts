/**
 * Webs
 */
interface IWebs extends IBase {
    /**
     * Properties
     */

    /** The web collection. */
    results: Array<IWeb>;

    /**
     * Methods
     */

    /**
     * Adds a site to the site collection.
     * @param parameters - The web creation information.
     */
    add(parameters:$REST.Types.WebCreationInformation);

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(oData:$REST.Types.ODataSettings): IWebs;
}
