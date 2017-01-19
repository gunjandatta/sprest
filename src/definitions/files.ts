import {
    IBase,
    IFile,
    ODataQuery,
    SPTypes
} from ".";
/**
 * Files
 */
export interface IFiles extends IBase {
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
    addTemplateFile(urlOfFile, templateFileType:SPTypes.FileTemplateType): IBase;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?:(...args) => any): IFiles;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl:boolean): IFiles;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback:any, waitFl:boolean): IFiles;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IFiles;

    /**
     * Get the file at the specified URL.
     * @param serverRelativeUrl - The name or server relative url of the file.
     */
    getByUrl(serverRelativeUrl): IFile;

    /**
     * Method to get the next set of results.
     */
    next(): IFiles;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query:ODataQuery): IFiles;
}