import { IAttachment, IBase, IResults } from "..";
/**
 * Attachment Files
 */
export interface IAttachmentFiles extends IResults<IAttachment>, IBase<IAttachmentFiles, IResults<IAttachment>> {
    /**
     * Adds the attachment that is represented by the specified file name and byte array to the list item.
     * @param fileName - The filename of the attachment.
     * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
     */
    add(fileName: any, content: any): IBase;
    /**
     * Method to get the next set of results.
     */
    next(): IAttachmentFiles;
}
