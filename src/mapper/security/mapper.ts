import { RequestType } from "../../types";

/**
 * Role Assignment
 */
export const roleassignment = {
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
        requestType: RequestType.Delete
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};

/**
 * Role Assignments
 */
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

/**
 * Role Definition
 */
export const roledefinition = {
    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};

/**
 * Role Definitions
 */
export const roledefinitions = {
    // Gets the role definition with the specified ID from the collection.
    getById: {
        argNames: ["roleDefId"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "roledefinition"
    },

    // Gets the role definition with the specified name.
    getByName: {
        argNames: ["name"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "roledefinition"
    },

    // Gets the role definitions with the specified role type.
    getByType: {
        argNames: ["roleType"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "roledefinitions"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};