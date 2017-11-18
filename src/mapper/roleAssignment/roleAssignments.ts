import {RequestType} from "../../types";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const roleassignments = {
    // Adds a new role assignment with the specified principal and role definitions to the collection.
    addRoleAssignment: {
        argNames: ["principalId", "roleDefId"],
        requestType: RequestType.PostWithArgs
    },

    // Gets the role assignment associated with the specified principal ID from the collection.
    getByPrincipalId: {
        argNames: ["principalId"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "roleassignment"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Gets the role definition with the specified role type.
    removeRoleAssignment: {
        argNames: ["principalId", "roleDefId"],
        requestType: RequestType.PostWithArgs
    }
};