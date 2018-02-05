import { IBase } from "../../utils/types";
import { IGroup, ISiteGroupResults, ISiteGroups, IUser } from ".";
export interface IUserCreationInformation {
    Email?: string;
    LoginName: string;
    Title?: string;
}
export interface IUserMethods {
    delete(): IBase;
}
export interface IUserProps {
    Email: string;
    Id: string;
    IsHiddenInUI: boolean;
    IsSharedByEmailGuestUser: boolean;
    IsSiteAdmin: boolean;
    LoginName: string;
    PrincipalType: string;
    Title: string;
    UserId: string;
}
export interface IUserQueryProps {
    Groups(): ISiteGroups;
    Groups(id: number): IBase<IGroup>;
}
export interface IUserQueryResult extends IUserMethods, IUserProps {
    Groups: ISiteGroupResults;
}
export interface IUserResult extends IUserMethods, IUserProps, IUserQueryProps, IBase<IUser, IUserResult, IUserQueryResult> {
}
export interface IUser extends IUserMethods, IUserQueryProps, IBase<IUser, IUserResult, IUserQueryResult> {
}
