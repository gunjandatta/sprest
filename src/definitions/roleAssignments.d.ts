declare module $REST.Types {
    /**
     * RoleAssignments
     */
    interface IRoleAssignments extends IBase {
        /**
         * Properties
         */

        /** The role assignment collection. */
        results: Array<IRoleAssignment>;

        /**
         * Methods
         */

        /**
         * Adds a new role assignment with the specified principal and role definitions to the collection.
         * @param principalId - The ID of the user or group to assign permissions to.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        addRoleAssignment(principalId, roleDefId): IRoleAssignment;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IRoleAssignments;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IRoleAssignments;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IRoleAssignments;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IRoleAssignments;

        /**
         * Gets the role assignment associated with the specified principal ID from the collection.
         * @param principalId - The ID of the user or group to assign permissions to.
         */
        getByPrincipalId(principalId): IRoleAssignment;

        /**
         * Gets the role definition with the specified role type.
         * @param principalId - The ID of the user or group to assign permissions to.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        removeRoleAssignment(principalId, roleDefId): IBase;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IRoleAssignments;
    }
}
