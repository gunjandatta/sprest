import { IBase, IBaseCollection } from "../../utils/types";
import { IFile, IFileQueryResult, IFileResult } from ".";
export interface IFilesMethods {
    add(overwrite: any, url: any, content: any): IBase<IFile, IFileResult>;
    addTemplateFile(urlOfFile: any, templateFileType: number): IBase<IFile, IFileResult>;
    getByUrl(serverRelativeUrl: any): IFile & IBase<IFile, IFileResult, IFileQueryResult>;
    next(): IBase<IFiles>;
}
export interface IFiles extends IFilesMethods, IBaseCollection<IFile, IFileResult, IFileQueryResult> {
}
export interface IFileResults extends IFilesMethods, IBaseCollection<IFileResult, IFileResult, IFileQueryResult> {
}
