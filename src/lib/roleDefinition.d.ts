declare module $REST.Types {
    /**
     * Role Definition
     */
    interface IRoleDefinition extends IBase {
        /**
         * Properties
         */

        /** Gets or sets a value that specifies the base permissions for the role definition. */
        BasePermissions: any;

        /** Gets or sets a value that specifies the description of the role definition. */
        Description: string;

        /** Gets a value that specifies whether the role definition is displayed. */
        Hidden: string;

        /** Gets a value that specifies the Id of the role definition. */
        Id: string;

        /** Gets or sets a value that specifies the role definition name. */
        Name: string;

        /** Gets or sets a value that specifies the order position of the object in the site collection Permission Levels page. */
        Order: string;

        /** Gets a value that specifies the type of the role definition. Represents an SP.RoleType value. See RoleType in the .NET client object model reference for a list of role type values. */
        RoleTypeKind: string;

        /**
         * Methods
         */

        /**
         * Deletes the role definition.
         */
        delete(): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(IRoleDefinition) => void): IRoleDefinition;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IRoleDefinition;
    }
}
