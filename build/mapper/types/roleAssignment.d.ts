import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IRoleDefinition, IRoleDefinitions } from ".";
export interface IRoleAssignmentMethods {
    delete(): IBase;
}
export interface IRoleAssignmentProps {
    PrincipalId: string;
}
export interface IRoleAssignmentQueryProps {
    Member(): IBase<Types.SP.IGroup | Types.SP.IUser>;
    RoleDefinitionBindings(): IRoleDefinitions;
}
export interface IRoleAssignmentQueryResult extends IRoleAssignmentMethods, IRoleAssignmentProps {
    Member: Types.SP.IUser;
    RoleDefinitionBindings: Types.SP.IResults<IRoleDefinition>;
}
export interface IRoleAssignmentResult extends IRoleAssignmentMethods, IRoleAssignmentProps, IRoleAssignmentQueryProps, IBase<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
}
export interface IRoleAssignment extends IRoleAssignmentMethods, IRoleAssignmentQueryProps, IBase<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
}
