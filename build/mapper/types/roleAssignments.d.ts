import { IBase, IBaseCollection } from "../../utils/types";
import { IRoleAssignment, IRoleAssignmentQueryResult, IRoleAssignmentResult } from ".";
export interface IRoleAssignmentsMethods {
    addRoleAssignment(principalId: any, roleDefId: any): IBase<IRoleAssignment, IRoleAssignmentResult>;
    getByPrincipalId(principalId: any): IRoleAssignment & IBase<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult>;
    removeRoleAssignment(principalId: any, roleDefId: any): IBase;
    next(): IBase<IRoleAssignments, IRoleAssignmentResults>;
}
export interface IRoleAssignments extends IRoleAssignmentsMethods, IBaseCollection<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
}
export interface IRoleAssignmentResults extends IRoleAssignmentsMethods, IBaseCollection<IRoleAssignmentResult, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
}
