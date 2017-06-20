import {
    IBase,
    IFileVersionMethods,
    IUser
} from "..";

/**
 * File Version Query Results
 */
export interface IFileVersionQueryResults extends IFileVersionMethods {
    /** Gets a value that specifies the check-in comment. */
    CheckInComment: string;

    /** Gets a value that specifies the creation date and time for the file version. */
    Created: string;

    /**
     * Gets a value that specifies the user that represents the creator of the file version.
     */
    CreatedBy: IUser;

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
}