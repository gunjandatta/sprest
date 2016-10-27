declare module $REST.Types {
    /**
     * Role Assignment
     */
    interface IRoleAssignment extends IBase {
        /**
         * Properties
         */

        /**
         * Gets the user or group that corresponds to the Role Assignment.
         */
        Member(): any;

        /** The unique identifier of the role assignment. */
        PrincipalId: string;

        /**
         * Gets the collection of role definition bindings for the role assignment.
         */
        RoleDefinitionBindings(): IRoleDefinitions;

        /**
         * Methods
         */

        /**
         * Deletes the role assignment.
         */
        delete(): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(IRoleAssignment) => void): IRoleAssignment;
    }
}
