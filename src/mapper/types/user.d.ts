import { SP } from "gd-sprest-def";
import { IBase } from "../../utils/types";
import { IGroup, ISiteGroupResults, ISiteGroups, IUser } from ".";

/**
 * User Creation Information
 */
export interface IUserCreationInformation {
    Email?: string;
    LoginName: string;
    Title?: string;
}

/**
 * User Methods
 */
export interface IUserMethods {
    /**
     * Deletes the user custom action.
     */
    delete(): IBase;
}

/**
 * User Query Properties
 */
export interface IUserQueryProps {
    /**
     * Gets the groups of which the user is a member.
     */
    Groups(): ISiteGroups;

    /**
     * Gets the group of which the user is a member.
     * @param id - The group id.
     */
    Groups(id: number): IBase<IGroup>;
}

/**
 * User Query Result
 */
export interface IUserQueryResult extends IUserMethods, SP.ObjectSharingInformationUser {
    /**
     * Gets the groups of which the user is a member.
     */
    Groups: ISiteGroupResults;
}

/**
 * User Result
 */
export interface IUserResult extends IUserMethods, SP.ObjectSharingInformationUser, IUserQueryProps, IBase<IUser, IUserResult, IUserQueryResult> { }

/**
 * User
 */
export interface IUser extends IUserMethods, IUserQueryProps, IBase<IUser, IUserResult, IUserQueryResult> { }