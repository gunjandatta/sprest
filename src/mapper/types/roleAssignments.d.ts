import { IBaseExecution, IBaseCollection } from "../../utils/types/base";
import { IRoleAssignment, IRoleAssignmentQueryResult, IRoleAssignmentResult } from ".";

/**
 * Methods
 */
export interface IRoleAssignmentsMethods {
    /**
     * Adds a new role assignment with the specified principal and role definitions to the collection.
     * @param principalId - The ID of the user or group to assign permissions to.
     * @param roleDefId - The ID of the role definition that defines the permissions to assign.
     */
    addRoleAssignment(principalId, roleDefId): IBaseExecution<IRoleAssignment, IRoleAssignmentResult>;

    /**
     * Gets the role assignment associated with the specified principal ID from the collection.
     * @param principalId - The ID of the user or group to assign permissions to.
     */
    getByPrincipalId(principalId): IRoleAssignment & IBaseExecution<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult>;

    /**
     * Gets the role definition with the specified role type.
     * @param principalId - The ID of the user or group to assign permissions to.
     * @param roleDefId - The ID of the role definition that defines the permissions to assign.
     */
    removeRoleAssignment(principalId, roleDefId): IBaseExecution;

    /**
     * Method to get the next set of results.
     */
    next(): IBaseExecution<IRoleAssignments, IRoleAssignmentResults>;
}

/**
 * Role Assignments
 */
export interface IRoleAssignments extends IRoleAssignmentsMethods, IBaseCollection<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> { }

/**
 * Role Assignment Results
 */
export interface IRoleAssignmentResults extends IRoleAssignmentsMethods, IBaseCollection<IRoleAssignmentResult, IRoleAssignmentResult, IRoleAssignmentQueryResult> { }