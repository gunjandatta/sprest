import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IFileVersionResult, IFileVersions } from ".";
export interface IFileMethods {
    approve(comment: any): IBase;
    cancelupload(uploadId: any): IBase;
    checkin(comment: any, checkInType: any): IBase;
    checkout(): IBase;
    content(): IBase;
    continueUpload(uploadId: any, fileOffset: any): IBase;
    copyTo(strNewUrl: any, bOverWrite: any): IBase;
    delete(): IBase;
    deny(comment: any): IBase;
    finishUpload(uploadId: any, fileOffset: any): IBase;
    getlimitedwebpartmanager(scope: any): IBase;
    moveTo(newUrl: any, flags: any): IBase;
    openBinaryStream(): IBase;
    publish(comment: any): IBase;
    recycle(): IBase;
    saveBinaryStream(stream: any): IBase;
    startUpload(uploadId: any): IBase;
    undoCheckOut(): IBase;
    unpublish(comment: any): IBase;
    update(data: any): IBase;
}
export interface IFileProps {
    CheckInComment: string;
    CheckOutType: number;
    ContentTag: string;
    CustomizedPageStatus: number;
    ETag: string;
    Exists: boolean;
    Length: number;
    Level: number;
    LinkingUrl: string;
    MajorVersion: number;
    MinorVersion: number;
    Name: string;
    ServerRelativePath: Types.SP.IResourcePath;
    ServerRelativeUrl: string;
    SiteId: string;
    TimeCreated: string;
    TimeLastModified: string;
    Title: string;
    UiVersion: number;
    UiVersionLabel: string;
    UniqueId: string;
    WebId: string;
}
export interface IFileQueryProps {
    Author(): Types.SP.IUser;
    CheckedOutByUser(): Types.SP.IUser;
    EffectiveInformationRightsManagementSettings(): IBase;
    InformationRightsManagementSettings(): IBase;
    ListItemAllFields(): IBase;
    LockedByUser(): Types.SP.IUser;
    ModifiedBy(): Types.SP.IUser;
    Properties(): IBase<Types.SP.IPropertyValues>;
    VersionEvents(): IBase;
    Versions(): IBase<IFileVersions>;
}
export interface IFileQueryResult extends IFileMethods, IFileProps {
    Author: Types.SP.IUserResult;
    CheckedOutByUser: Types.SP.IUserResult;
    EffectiveInformationRightsManagementSettings: IBase;
    InformationRightsManagementSettings: Types.SP.IInformationRightsManagementSettings;
    ListItemAllFields: Types.SP.IListItemResult;
    LockedByUser: Types.SP.IUserResult;
    ModifiedBy: Types.SP.IUserResult;
    Properties: Types.SP.IPropertyValues;
    VersionEvents: Types.SP.IResults<any>;
    Versions: Types.SP.IResults<IFileVersionResult>;
}
export interface IFileResult extends IFileMethods, IFileProps, IFileQueryProps, IBase<IFile, IFileResult, IFileQueryResult> {
}
export interface IFile extends IFileMethods, IFileQueryProps, IBase<IFile, IFileResult, IFileQueryResult> {
}
