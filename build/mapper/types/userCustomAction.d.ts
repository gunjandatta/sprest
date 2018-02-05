import { IBase } from "../../utils/types";
import { IBasePermissions, IUserCustomActionMethods } from ".";
export interface IUserCustomActionCreationInformation {
    CommandUIExtension?: string;
    Description?: string;
    Group?: string;
    ImageUrl?: string;
    Location?: string;
    Name: string;
    RegistrationId?: string;
    RegistrationType?: number;
    Rights?: any;
    ScriptBlock?: string;
    ScriptSrc?: string;
    Sequence?: number;
    Title?: string;
    Url?: string;
}
export interface IUserCustomActionMethods {
    delete(): IBase;
}
export interface IUserCustomActionProps {
    CommandUIExtension: string;
    Description: string;
    Group: string;
    Id: string;
    ImageUrl: string;
    Location: string;
    Name: string;
    RegistrationId: string;
    RegistrationType: number;
    Rights: IBasePermissions;
    Scope: number;
    ScriptBlock: string;
    ScriptSrc: string;
    Sequence: number;
    Title: string;
    Url: string;
    VersionOfUserCustomAction: string;
}
export interface IUserCustomActionQueryProps {
}
export interface IUserCustomActionQueryResult extends IUserCustomActionMethods, IUserCustomActionProps {
}
export interface IUserCustomActionResult extends IUserCustomActionMethods, IUserCustomActionProps, IUserCustomActionQueryProps, IBase<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> {
}
export interface IUserCustomAction extends IUserCustomActionMethods, IUserCustomActionQueryProps, IBase<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> {
}
