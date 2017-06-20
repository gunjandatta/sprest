import { IBase, IRoleAssignment, IRoleAssignmentQueryResults } from "..";
/**
 * Role Assignment Methods
 */
export interface IRoleAssignmentMethods extends IBase<IRoleAssignment, IRoleAssignmentQueryResults> {
    /**
     * Deletes the role assignment.
     */
    delete(): IBase;
}
