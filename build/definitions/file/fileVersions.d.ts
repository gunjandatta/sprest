import { IBase, IBaseCollection, IFileVersion, IFileVersionQueryResults } from "..";
/**
 * File Versions
 */
export interface IFileVersions extends IBaseCollection<IFileVersion, IFileVersionQueryResults> {
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IFileVersions>;
}
