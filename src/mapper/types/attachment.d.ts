import { SP } from "gd-sprest-def";
import { IBaseLib } from "../../utils/types/base";
import { IAttachmentFiles } from ".";

/**
 * Methods
 */
export interface IAttachmentFilesMethods {
    /**
     * Adds the attachment that is represented by the specified file name and byte array to the list item.
     * @param fileName - The filename of the attachment.
     * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
     */
    add(fileName, content): IBaseLib<SP.Attachment>;

    /**
     * Method to get the next set of results.
     */
    next(): IBaseLib<IAttachmentFiles>;
}