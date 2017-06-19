import { IFileVersionQueryResults } from "./fileVersionResults";
import { IBase, IFileVersion, IResults } from "..";
/**
 * File Versions
 */
export interface IFileVersions extends IResults<IFileVersion>, IBase<IResults<IFileVersion>, IResults<IFileVersionQueryResults>> {
    /**
     * Method to get the next set of results.
     */
    next(): IFileVersions;
}
