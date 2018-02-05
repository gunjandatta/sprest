import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IFileVersion, IFileVersionQueryResult, IFileVersionResult } from ".";
export interface IFileVersionMethods {
    delete(): any;
}
export interface IFileVersionProps {
    CheckInComment: string;
    Created: string;
    ID: number;
    IsCurrentVersion: string;
    Size: number;
    Url: string;
    VersionLabel: string;
}
export interface IFileVersionQueryProps {
    CreatedBy(): Types.SP.IUser;
}
export interface IFileVersionQueryResult extends IFileVersionMethods, IFileVersionProps {
    CreatedBy: Types.SP.IUserResult;
}
export interface IFileVersionResult extends IFileVersionMethods, IFileVersionProps, IFileVersionQueryProps, IBase<IFileVersion, IFileVersionResult, IFileVersionQueryResult> {
}
export interface IFileVersion extends IFileVersionMethods, IFileVersionQueryProps, IBase<IFileVersion, IFileVersionResult, IFileVersionQueryResult> {
}
