import {
    IBase,
    IFile, IFileQueryResults,
    IResults,
    SPTypes
} from "..";

/**
 * Files
 */
export interface IFiles extends IResults<IFile>, IBase<IResults<IFile>, IResults<IFileQueryResults>> {
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
    addTemplateFile(urlOfFile, templateFileType: SPTypes.FileTemplateType): IBase;

    /**
     * Get the file at the specified URL.
     * @param serverRelativeUrl - The name or server relative url of the file.
     */
    getByUrl(serverRelativeUrl): IFile;

    /**
     * Method to get the next set of results.
     */
    next(): IFiles;
}