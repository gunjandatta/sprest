import { IBase } from "../../utils/types";
import { Types } from "../..";
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
    add(fileName: any, content: any): IBase<IAttachment>;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IAttachmentFiles>;
}
/**
 * Attachment
 */
export interface IAttachment {
    /** The filename. */
    FileName: string;
    /** The filename as a path. */
    FileNameAsPath: Types.SP.IResourcePath;
    /** The server relative path. */
    ServerRelativePath: Types.SP.IResourcePath;
    /** The server relative url. */
    ServerRelativeUrl: string;
}
