import { IAttachment, IBase, ODataQuery } from "..";
/**
 * Attachment Files
 */
export interface IAttachmentFiles extends IBase {
    /**
     * Properties
     */
    /** The attachment file collection. */
    results: Array<IAttachment>;
    /**
     * Methods
     */
    /**
     * Adds the attachment that is represented by the specified file name and byte array to the list item.
     * @param fileName - The filename of the attachment.
     * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
     */
    add(fileName: any, content: any): IBase;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: IAttachmentFiles, ...args) => any): IAttachmentFiles;
    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): IAttachmentFiles;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: IAttachmentFiles, ...args) => any, waitFl: boolean): IAttachmentFiles;
    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IAttachmentFiles;
    /**
     * Method to get the next set of results.
     */
    next(): IAttachmentFiles;
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): IAttachmentFiles;
}
