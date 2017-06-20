import { IResults, IRoleAssignmentMethods, IRoleDefinition, IUser } from "..";
/**
 * Role Assignment Query Results
 */
export interface IRoleAssignmentQueryResults extends IRoleAssignmentMethods {
    /**
     * Properties
     */
    /**
     * Gets the user or group that corresponds to the Role Assignment.
     */
    Member: IUser;
    /** The unique identifier of the role assignment. */
    PrincipalId: string;
    /**
     * Gets the collection of role definition bindings for the role assignment.
     */
    RoleDefinitionBindings: IResults<IRoleDefinition>;
}
