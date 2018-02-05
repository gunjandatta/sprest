import { IBase } from "../../utils/types";
import { IUser, IUserResult, IUserResults, IUsers } from ".";
export interface IGroupCreationInformation {
    Description?: string;
    Title: string;
}
export interface IGroupMethods {
}
export interface IGroupProps {
    AllowMembersEditMembership: boolean;
    AllowRequestToJoinLeave: boolean;
    Description: string;
    Id: string;
    IsHiddenInUI: string;
    LoginName: string;
    OnlyAllowMembersViewMembership: boolean;
    OwnerTitle: string;
    RequestToJoinLeaveEmailSetting: string;
    PrincipalType: string;
    Title: string;
}
export interface IGroupQueryProps {
    AutoAcceptRequestToJoinLeave(): IBase<boolean>;
    CanCurrentUserEditMembership(): IBase<boolean>;
    CanCurrentUserManageGroup(): IBase<boolean>;
    CanCurrentUserViewMembership(): IBase<boolean>;
    Owner(): IUser;
    Users(): IUsers;
    Users(id: any): IUser;
}
export interface IGroupQueryResult extends IGroupMethods, IGroupProps {
    AutoAcceptRequestToJoinLeave: boolean;
    CanCurrentUserEditMembership: boolean;
    CanCurrentUserManageGroup: boolean;
    CanCurrentUserViewMembership: boolean;
    Owner: IUserResult;
    Users: IUserResults;
}
export interface IGroupResult extends IGroupMethods, IGroupProps, IGroupQueryProps, IBase<IGroup, IGroupResult, IGroupQueryResult> {
}
export interface IGroup extends IGroupMethods, IGroupQueryProps, IBase<IGroup, IGroupResult, IGroupQueryResult> {
}
