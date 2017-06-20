import {
    IBase,
    IRoleAssignment, IRoleAssignmentQueryResults,
    IRoleDefinitions
} from "..";

/**
 * Role Assignment Methods
 */
export interface IRoleAssignmentMethods extends IBase<IRoleAssignment, IRoleAssignmentQueryResults> {
    /**
     * Deletes the role assignment.
     */
    delete(): IBase;
}