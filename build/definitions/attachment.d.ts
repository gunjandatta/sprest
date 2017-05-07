import { ComplexTypes, IBase } from ".";
/**
 * Attachment
 */
export interface IAttachment extends IBase {
    /**
     * Properties
     */
    /** The filename. */
    FileName: string;
    /** The filename as a path. */
    FileNameAsPath: ComplexTypes.ResourcePath;
    /** The server relative path. */
    ServerRelativePath: ComplexTypes.ResourcePath;
    /** The server relative url. */
    ServerRelativeUrl: string;
    /**
     * Methods
     */
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: IAttachment, ...args) => any): IAttachment;
    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): IAttachment;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: IAttachment, ...args) => any, waitFl: boolean): IAttachment;
    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IAttachment;
}
