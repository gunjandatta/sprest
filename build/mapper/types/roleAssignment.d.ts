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
 * Role Assignment Properties
 */
export interface IRoleAssignmentProps {
    /** The unique identifier of the role assignment. */
    PrincipalId: string;
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
export interface IRoleAssignmentQueryResult extends IRoleAssignmentMethods, IRoleAssignmentProps {
    /**
     * Gets the user or group that corresponds to the Role Assignment.
     */
    Member: Types.SP.IUser;
    /**
     * Gets the collection of role definition bindings for the role assignment.
     */
    RoleDefinitionBindings: Types.SP.IResults<IRoleDefinition>;
}
/**
 * Role Assignment Result
 */
export interface IRoleAssignmentResult extends IRoleAssignmentMethods, IRoleAssignmentProps, IRoleAssignmentQueryProps, IBase<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
}
/**
 * Role Assignment
 */
export interface IRoleAssignment extends IRoleAssignmentMethods, IRoleAssignmentQueryProps, IBase<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
}
