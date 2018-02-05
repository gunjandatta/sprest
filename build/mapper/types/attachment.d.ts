import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IAttachmentFiles } from ".";
export interface IAttachmentFilesMethods {
    add(fileName: any, content: any): IBase<IAttachment>;
    next(): IBase<IAttachmentFiles>;
}
export interface IAttachment {
    FileName: string;
    FileNameAsPath: Types.SP.IResourcePath;
    ServerRelativePath: Types.SP.IResourcePath;
    ServerRelativeUrl: string;
}
