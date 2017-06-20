import {
    IBase,
    IFileVersion, IFileVersionQueryResults
} from "..";

/**
 * File Version Methods
 */
export interface IFileVersionMethods extends IBase<IFileVersion, IFileVersionQueryResults> {
    /**
     * Deletes the file version.
     */
    delete(): any;
}