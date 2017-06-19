import {
    IBase,
    IResourcePath
} from "..";

/**
 * Attachment
 */
export interface IAttachment extends IBase<IAttachment, IAttachment> {
    /**
     * Properties
     */

    /** The filename. */
    FileName: string;

    /** The filename as a path. */
    FileNameAsPath: IResourcePath;

    /** The server relative path. */
    ServerRelativePath: IResourcePath;

    /** The server relative url. */
    ServerRelativeUrl: string;
}