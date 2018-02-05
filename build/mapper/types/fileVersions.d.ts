import { IBase, IBaseCollection } from "../../utils/types";
import { IFileVersion, IFileVersionQueryResult, IFileVersionResult } from ".";
export interface IFileVersions extends IBaseCollection<IFileVersion, IFileVersionResult, IFileVersionQueryResult> {
    next(): IBase<IFileVersions>;
}
