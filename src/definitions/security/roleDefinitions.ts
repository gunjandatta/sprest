import {
    IRoleDefinition, IRoleDefinitionQueryResult, IRoleDefinitionResult,
    SPTypes
} from "..";
import { IBase, IBaseCollection } from "../../utils";

/**
 * Methods
 */
export interface IRoleDefinitionsMethods {
    /**
     * Gets the role definition with the specified ID from the collection.
     * @param roleDefId - The ID of the role definition that defines the permissions to assign.
     */
    getById(roleDefId): IRoleDefinition & IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult>;

    /**
     * Gets the role definition with the specified name.
     * @param name -
     */
    getByName(name): IRoleDefinition & IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult>;

    /**
     * Gets the role definition with the specified role type.
     * @param roleType - The RoleTypeKind of the role definition.
     */
    getByType(roleType: SPTypes.RoleType): IRoleDefinition & IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult>;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IRoleDefinitions, IRoleDefinitionResults>;
}

/**
 * Role Definitions
 */
export interface IRoleDefinitions extends IRoleDefinitionsMethods, IBaseCollection<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult> { }

/**
 * Role Definition Results
 */
export interface IRoleDefinitionResults extends IRoleDefinitionsMethods, IBaseCollection<IRoleDefinitionResult, IRoleDefinitionResult, IRoleDefinitionQueryResult> { }