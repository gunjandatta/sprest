import { IBase, IBaseCollection, IFileVersion, IFileVersionQueryResult, IFileVersionResult } from "..";
/**
 * File Versions
 */
export interface IFileVersions extends IBaseCollection<IFileVersion, IFileVersionResult, IFileVersionQueryResult> {
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IFileVersions>;
}
