/**
 * Role Definitions
 */
interface IRoleDefinitions extends IBase {
    /**
     * Properties
     */

    /** The role definition collection */
    results: Array<IRoleDefinition>;

    /**
     * Methods
     */

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
    getByType(roleType:$REST.Types.RoleType): IRoleDefinition;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(oData:$REST.Types.ODataSettings): IRoleDefinitions;
}
