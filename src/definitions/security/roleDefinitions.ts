import {
    IBase, IBaseCollection,
    IRoleDefinition, IRoleDefinitionQueryResult, IRoleDefinitionResult,
    SPTypes
} from "..";

/**
 * Role Definitions
 */
export interface IRoleDefinitions extends IBaseCollection<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult> {
    /**
     * Gets the role definition with the specified ID from the collection.
     * @param roleDefId - The ID of the role definition that defines the permissions to assign.
     */
    getById(roleDefId): IRoleDefinition;

    /**
     * Gets the role definition with the specified name.
     * @param name -
     */
    getByName(name): IRoleDefinition;

    /**
     * Gets the role definition with the specified role type.
     * @param roleType - The RoleTypeKind of the role definition.
     */
    getByType(roleType: SPTypes.RoleType): IRoleDefinition;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IRoleDefinitions>;
}