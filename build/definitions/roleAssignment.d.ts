import { IBase, IRoleDefinitions } from ".";
/**
 * Role Assignment
 */
export interface IRoleAssignment extends IBase {
    /**
     * Properties
     */
    /**
     * Gets the user or group that corresponds to the Role Assignment.
     */
    Member(): IBase;
    /** The unique identifier of the role assignment. */
    PrincipalId: string;
    /**
     * Gets the collection of role definition bindings for the role assignment.
     */
    RoleDefinitionBindings(): IRoleDefinitions;
    /**
     * Methods
     */
    /**
     * Deletes the role assignment.
     */
    delete(): IBase;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (...args) => any): IRoleAssignment;
    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): IRoleAssignment;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: any, waitFl: boolean): IRoleAssignment;
    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IRoleAssignment;
}
