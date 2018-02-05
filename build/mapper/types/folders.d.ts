import { IBase, IBaseCollection } from "../../utils/types";
import { IFolder, IFolderQueryResult, IFolderResult } from ".";
export interface IFoldersMethods {
    add(url: any): IBase<IFolder, IFolderResult>;
    getbyurl(serverRelativeUrl: any): IFolder & IBase<IFolder, IFolderResult, IFolderQueryResult>;
    next(): IBase<IFolders, IFolderResults>;
}
export interface IFolders extends IFoldersMethods, IBaseCollection<IFolder, IFolderResult, IFolderQueryResult> {
}
export interface IFolderResults extends IFoldersMethods, IBaseCollection<IFolderResult, IFolderResult, IFolderQueryResult> {
}
