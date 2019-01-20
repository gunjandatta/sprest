import { IBaseExecution, IBaseCollection } from "../utils/types/base";
import { IFileVersion, IFileVersionQueryResult, IFileVersionResult } from ".";

/**
 * File Versions
 */
export interface IFileVersions extends IBaseCollection<IFileVersion, IFileVersionResult, IFileVersionQueryResult> {
    /**
     * Method to get the next set of results.
     */
    next(): IBaseExecution<IFileVersions>;
}