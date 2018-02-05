import { IBase } from "../../utils/types";
import { IBasePermissions } from ".";
export interface IRoleDefinitionMethods {
    delete(): IBase;
}
export interface IRoleDefinitionProps {
    BasePermissions: IBasePermissions;
    Description: string;
    Hidden: boolean;
    Id: number;
    Name: string;
    Order: number;
    RoleTypeKind: number;
}
export interface IRoleDefinitionQueryProps {
}
export interface IRoleDefinitionQueryResult extends IRoleDefinitionMethods, IRoleDefinitionProps {
}
export interface IRoleDefinitionResult extends IRoleDefinitionMethods, IRoleDefinitionProps, IRoleDefinitionQueryProps, IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult> {
}
export interface IRoleDefinition extends IRoleDefinitionMethods, IRoleDefinitionQueryProps, IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult> {
}
