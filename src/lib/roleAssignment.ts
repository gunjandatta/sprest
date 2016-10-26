module $REST {
    Library.roleAssignment = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "Member", "RoleDefinitionBindings|roledefinitions"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Deletes the object
        delete: {
            requestType: Types.RequestType.Delete
        }
    };
}
