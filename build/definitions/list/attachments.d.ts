import { IAttachment, IBase, IBaseCollection } from "../index";
/**
 * Methods
 */
export interface IAttachmentFilesMethods {
    /**
     * Adds the attachment that is represented by the specified file name and byte array to the list item.
     * @param fileName - The filename of the attachment.
     * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
     */
    add(fileName: any, content: any): IBase<IAttachment>;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IAttachmentFiles>;
}
/**
 * Attachment Files
 */
export interface IAttachmentFiles extends IAttachmentFilesMethods, IBaseCollection<IAttachment, IAttachmentFiles, IAttachment> {
}
