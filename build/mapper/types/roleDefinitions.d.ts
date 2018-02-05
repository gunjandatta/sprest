import { IBase, IBaseCollection } from "../../utils/types";
import { IRoleDefinition, IRoleDefinitionQueryResult, IRoleDefinitionResult } from ".";
export interface IRoleDefinitionsMethods {
    getById(roleDefId: any): IRoleDefinition & IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult>;
    getByName(name: any): IRoleDefinition & IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult>;
    getByType(roleType: number): IRoleDefinition & IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult>;
    next(): IBase<IRoleDefinitions, IRoleDefinitionResults>;
}
export interface IRoleDefinitions extends IRoleDefinitionsMethods, IBaseCollection<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult> {
}
export interface IRoleDefinitionResults extends IRoleDefinitionsMethods, IBaseCollection<IRoleDefinitionResult, IRoleDefinitionResult, IRoleDefinitionQueryResult> {
}
