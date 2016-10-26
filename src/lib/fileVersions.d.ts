/**
 * File Versions
 */
interface IFileVersions extends IBase {
    /**
     * Properties
     */

    /** The file version collection. */
    results: Array<IFileVersion>;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(oData:$REST.Types.ODataSettings): IFileVersions;
}
