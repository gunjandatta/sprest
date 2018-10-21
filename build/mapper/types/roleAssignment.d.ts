import { SP } from "gd-sprest-def";
import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IRoleDefinition, IRoleDefinitions } from ".";
/**
 * Role Assignment Methods
 */
export interface IRoleAssignmentMethods {
    /**
     * Deletes the role assignment.
     */
    delete(): IBase;
}
/**
 * Role Assignment Query Properties
 */
export interface IRoleAssignmentQueryProps {
    /**
     * Gets the user or group that corresponds to the Role Assignment.
     */
    Member(): IBase<Types.SP.IGroup | Types.SP.IUser>;
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
    Member: Types.SP.IUser;
    /**
     * Gets the collection of role definition bindings for the role assignment.
     */
    RoleDefinitionBindings: Types.SP.Results.IResults<IRoleDefinition>;
}
/**
 * Role Assignment Result
 */
export interface IRoleAssignmentResult extends IRoleAssignmentMethods, SP.RoleAssignment, IRoleAssignmentQueryProps, IBase<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
}
/**
 * Role Assignment
 */
export interface IRoleAssignment extends IRoleAssignmentMethods, IRoleAssignmentQueryProps, IBase<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
}
