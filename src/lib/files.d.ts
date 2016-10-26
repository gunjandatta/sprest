/**
 * Files
 */
interface IFiles extends IBase {
    /**
     * Properties
     */

    /** The file collection. */
    results: Array<IFile>;

    /**
     * Methods
     */

    /**
     * Adds a file to this collection.
     * @param overwrite - true to overwrite the file if it already exists; otherwise false.
     * @param url - The folder-relative URL of the file.
     * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
     */
    add(overwrite, url, content): IFile;

    /**
     * Adds a ghosted file to an existing list or document library.
     * @param urlOfFile - The server-relative URL where you want to save the file.
     * @param templateFileType - The SP.TemplateFileType to use to create the file.
     */
    addTemplateFile(urlOfFile, templateFileType:$REST.Types.FileTemplateType): any;

    /**
     * Gets the file for the specified name
     * @param name - The file name.
     */
    getByName(name): IFile;

    /**
     * Get the file at the specified URL.
     * @param serverRelativeUrl - The name or server relative url of the file.
     */
    getByUrl(serverRelativeUrl): IFile;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(oData:$REST.Types.ODataSettings): IFiles;
}
