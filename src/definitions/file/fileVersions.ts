import {
    IFileVersion, IFileVersionQueryResult, IFileVersionResult
} from "..";
import { IBase, IBaseCollection } from "../../utils";

/**
 * File Versions
 */
export interface IFileVersions extends IBaseCollection<IFileVersion, IFileVersionResult, IFileVersionQueryResult> {
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IFileVersions>;
}