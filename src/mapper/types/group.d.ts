import { SP } from "gd-sprest-def";
import { IBase } from "../../utils/base/types";
import { IUser, IUserResult, IUserResults, IUsers } from ".";

/**
 * Group Methods
 */
export interface IGroupMethods { }

/**
 * Group Query Properties
 */
export interface IGroupQueryProps {
    /**
     * Gets or sets the owner of the group which can be a user or another group assigned permissions to control security.
     */
    Owner(): IUser;

    /**
     * Gets a collection of user objects that represents all of the users in the group.
     */
    Users(): IUsers;

    /**
     * Gets a collection of user objects that represents all of the users in the group.
     * @param id - The user id.
     */
    Users(id): IUser;
}

/**
 * Group Query Result
 */
export interface IGroupQueryResult extends IGroupMethods, SP.Group {
    /**
     * Gets or sets the owner of the group which can be a user or another group assigned permissions to control security.
     */
    Owner: IUserResult;

    /**
     * Gets a collection of user objects that represents all of the users in the group.
     */
    Users: IUserResults;
}

/**
 * Group Result
 */
export interface IGroupResult extends IGroupMethods, SP.Group, IGroupQueryProps, IBase<IGroup, IGroupResult, IGroupQueryResult> { }

/**
 * Group
 */
export interface IGroup extends IGroupMethods, IGroupQueryProps, IBase<IGroup, IGroupResult, IGroupQueryResult> { }