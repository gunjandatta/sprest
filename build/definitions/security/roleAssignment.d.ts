import { IBase, IGroup, IRoleAssignmentMethods, IRoleDefinitions, IUser } from "..";
/**
 * Role Assignment
 */
export interface IRoleAssignment extends IRoleAssignmentMethods {
    /**
     * Properties
     */
    /**
     * Gets the user or group that corresponds to the Role Assignment.
     */
    Member(): IBase<IGroup | IUser>;
    /** The unique identifier of the role assignment. */
    PrincipalId: string;
    /**
     * Gets the collection of role definition bindings for the role assignment.
     */
    RoleDefinitionBindings(): IRoleDefinitions;
}
