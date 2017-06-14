import { IBase, IUser, ODataQuery } from ".";
/**
 * File Version
 */
export interface IFileVersion extends IBase {
    /**
     * Properties
     */
    /** Gets a value that specifies the check-in comment. */
    CheckInComment: string;
    /** Gets a value that specifies the creation date and time for the file version. */
    Created: string;
    /**
     * Gets a value that specifies the user that represents the creator of the file version.
     */
    CreatedBy(): IUser;
    /** Gets the internal identifier for the file version. */
    ID: number;
    /** Gets a value that specifies whether the file version is the current version. */
    IsCurrentVersion: string;
    /**  */
    Size: number;
    /** Gets a value that specifies the relative URL of the file version based on the URL for the site or subsite. */
    Url: string;
    /** Gets a value that specifies the implementation specific identifier of the file. Uses the majorVersionNumber.minorVersionNumber format, for example: 1.2. */
    VersionLabel: string;
    /**
     * Methods
     */
    /**
     * Deletes the file version.
     */
    delete(): any;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: IFileVersion, ...args) => any): IFileVersion;
    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): IFileVersion;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: IFileVersion, ...args) => any, waitFl: boolean): IFileVersion;
    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IFileVersion;
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): IFileVersion;
}
