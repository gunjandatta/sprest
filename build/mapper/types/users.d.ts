import { IBase, IBaseCollection } from "../../utils/types";
import { IUser, IUserCreationInformation, IUserQueryResult, IUserResult } from ".";
export interface IUsersMethods {
    add(userInfo: IUserCreationInformation): IBase<IUser, IUserResult>;
    getByEmail(email: any): IUser & IBase<IUser, IUserResult, IUserQueryResult>;
    getById(id: any): IUser & IBase<IUser, IUserResult, IUserQueryResult>;
    getByLoginName(loginName: any): IUser & IBase<IUser, IUserResult, IUserQueryResult>;
    next(): IBase<IUsers, IUserResults>;
    removeById(id: any): IBase;
    removeByLoginName(loginName: any): IBase;
}
export interface IUsers extends IUsersMethods, IBaseCollection<IUser, IUserResult, IUserQueryResult> {
}
export interface IUserResults extends IUsersMethods, IBaseCollection<IUserResult, IUserResult, IUserQueryResult> {
}
