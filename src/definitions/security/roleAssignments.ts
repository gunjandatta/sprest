import {
    IBase, IBaseCollection,
    IRoleAssignment, IRoleAssignmentQueryResult, IRoleAssignmentResult
} from "..";

/**
 * Role Assignments
 */
export interface IRoleAssignments extends IBaseCollection<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
    /**
     * Adds a new role assignment with the specified principal and role definitions to the collection.
     * @param principalId - The ID of the user or group to assign permissions to.
     * @param roleDefId - The ID of the role definition that defines the permissions to assign.
     */
    addRoleAssignment(principalId, roleDefId): IBase<IRoleAssignment>;

    /**
     * Gets the role assignment associated with the specified principal ID from the collection.
     * @param principalId - The ID of the user or group to assign permissions to.
     */
    getByPrincipalId(principalId): IRoleAssignment;

    /**
     * Gets the role definition with the specified role type.
     * @param principalId - The ID of the user or group to assign permissions to.
     * @param roleDefId - The ID of the role definition that defines the permissions to assign.
     */
    removeRoleAssignment(principalId, roleDefId): IBase;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IRoleAssignments>;
}