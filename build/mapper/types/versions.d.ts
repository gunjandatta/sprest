import { IBase, IBaseCollection } from "../../utils/types";
import { IVersion } from ".";
export interface IVersions extends IBaseCollection<IVersion, IVersion, IVersion> {
    deleteAll(): IBase;
    deleteById(id: any): IBase;
    deleteByLabel(label: any): IBase;
    getById(id: any): IBase<IVersion>;
    next(): IBase<IVersions>;
    restoreByLabel(label: any): IBase<IVersion>;
}
