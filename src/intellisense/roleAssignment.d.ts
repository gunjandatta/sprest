import { SP } from "gd-sprest-def";
import * as Types from ".";
import { IBaseExecution, IBaseQueryExecution, IBaseResult } from "../utils/types/base";
import { IRoleDefinition, IRoleDefinitions } from ".";

/**
 * Role Assignment Methods
 */
export interface IRoleAssignmentMethods {
    /**
     * Deletes the role assignment.
     */
    delete(): IBaseExecution;
}

/**
 * Role Assignment Query Properties
 */
export interface IRoleAssignmentQueryProps {
    /**
     * Gets the user or group that corresponds to the Role Assignment.
     */
    Member(): IBaseExecution<Types.IGroup | Types.IUser>;

    /**
     * Gets the collection of role definition bindings for the role assignment.
     */
    RoleDefinitionBindings(): IRoleDefinitions;
}

/**
 * Role Assignment Query Result
 */
export interface IRoleAssignmentQueryResult extends IRoleAssignmentMethods, SP.RoleAssignment {
    /**
     * Gets the user or group that corresponds to the Role Assignment.
     */
    Member: Types.IUser;

    /**
     * Gets the collection of role definition bindings for the role assignment.
     */
    RoleDefinitionBindings: Types.Results.IResults<IRoleDefinition>;
}

/**
 * Role Assignment Result
 */
export interface IRoleAssignmentResult extends IRoleAssignmentMethods, SP.RoleAssignment, IRoleAssignmentQueryProps, IBaseResult<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> { }

/**
 * Role Assignment
 */
export interface IRoleAssignment extends IRoleAssignmentMethods, IRoleAssignmentQueryProps, IBaseQueryExecution<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
}