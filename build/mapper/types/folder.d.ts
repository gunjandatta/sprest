import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IFile, IFileResults, IFiles, IFolderResults, IFolders } from ".";
export interface IFolderMethods {
    delete(): IBase;
    getByUrl(serverRelativeUrl: any): IFolder & IBase<IFolder, IFolderResult, IFolderQueryResult>;
    recycle(): IBase;
    update(data: any): IBase;
}
export interface IFolderProps {
    ContentTypeOrder: Types.SP.IStringValue;
    Exists: boolean;
    ItemCount: number;
    IsWOPIEnabled: boolean;
    Name: string;
    ServerRelativePath: Types.SP.IResourcePath;
    ServerRelativeUrl: string;
    TimeCreated: string;
    TimeLastModified: string;
    UniqueContentTypeOrder: Types.SP.IStringValue;
    UniqueId: string;
    WelcomePage: string;
}
export interface IFolderQueryProps {
    Files(): IFiles;
    Files(url: string): IFile;
    Folders(): IFolders;
    Folders(url: string): IFolderMethods;
    ListItemAllFields(): IBase<Types.SP.IListItem>;
    ParentFolder(): IFolderMethods;
    Properties(): IBase<Types.SP.IPropertyValues>;
    StorageMetrics(): IBase;
}
export interface IFolderQueryResult extends IFolderMethods, IFolderProps {
    Files: IFileResults;
    Folders: IFolderResults;
    ListItemAllFields: Types.SP.IListItemResults;
    ParentFolder: IFolderResult;
    Properties: Types.SP.IPropertyValues;
    StorageMetrics: any;
}
export interface IFolderResult extends IFolderMethods, IFolderProps, IFolderQueryProps, IFolderQueryProps, IBase<IFolder, IFolderResult, IFolderQueryResult> {
}
export interface IFolder extends IFolderMethods, IFolderQueryProps, IBase<IFolder, IFolderResult, IFolderQueryResult> {
}
