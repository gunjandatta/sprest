import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IContentType, IContentTypeResult, IList, IListResult } from ".";
export interface IListItemMethods {
    breakRoleInheritance(copyRoleAssignments: any, clearSubScopes: any): IBase;
    delete(): IBase;
    getUserEffectivePermissions(loginName: any): IBase;
    recycle(): IBase;
    resetRoleInheritance(): IBase;
    update(data: any): IBase;
    validateUpdateListItem(formValues: any, bNewDocumentUpdate: any): any;
}
export interface IListItemProps {
    DisplayName: string;
    EffectiveBasePermissions: Types.SP.IBasePermissions;
    EffectiveBasePermissionsForUI: Types.SP.IBasePermissions;
    FileSystemObjectType: number;
    IconOverlay: string;
    Id: number;
    ServerRedirectedEmbedUrl: string;
}
export interface IListItemQueryProps {
    AttachmentFiles(): Types.SP.IAttachmentFiles;
    AttachmentFiles(fileName: string): IBase<Types.SP.IAttachment>;
    ContentType(): IContentType;
    FieldValuesAsHtml(): IBase;
    FieldValuesAsText(): IBase;
    FieldValuesForEdit(): IBase;
    File(): Types.SP.IFile;
    FirstUniqueAncestorSecurableObject(): IBase<string>;
    Folder(): Types.SP.IFolder;
    GetDlpPolicyTip(): IBase;
    HasUniqueRoleAssignments(): IBase<string>;
    ParentList(): IList;
    Properties(): IBase<Types.SP.IPropertyValues>;
    RoleAssignments(): Types.SP.IRoleAssignments;
    RoleAssignments(id: string): Types.SP.IRoleAssignment;
}
export interface IListItemQueryResult extends IListItemMethods, IListItemProps {
    AttachmentFiles: Types.SP.IAttachmentFilesMethods & Types.SP.IResults<Types.SP.IAttachment>;
    ContentType: IContentTypeResult;
    FieldValuesAsHtml: Array<string>;
    FieldValuesAsText: Array<string>;
    FieldValuesForEdit: Array<string>;
    File: Types.SP.IFileResult;
    FirstUniqueAncestorSecurableObject: IListResult;
    Folder: Types.SP.IFolderResult;
    GetDlpPolicyTip(): IBase;
    HasUniqueRoleAssignments: boolean;
    ParentList: IListResult;
    Properties: Array<string>;
    RoleAssignments: Types.SP.IRoleAssignmentResults;
}
export interface IListItemResult extends IListItemMethods, IListItemProps, IListItemQueryProps, IBase<IListItem, IListItemResult, IListItemQueryResult> {
}
export interface IListItem extends IListItemMethods, IListItemQueryProps, IBase<IListItem, IListItemResult, IListItemQueryResult> {
}
