"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
/**
 * Role Assignment
 */
exports.roleassignment = {
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
        requestType: types_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
/**
 * Role Assignments
 */
exports.roleassignments = {
    // Adds a new role assignment with the specified principal and role definitions to the collection.
    addRoleAssignment: {
        argNames: ["principalId", "roleDefId"],
        requestType: types_1.RequestType.PostWithArgs
    },
    // Gets the role assignment associated with the specified principal ID from the collection.
    getByPrincipalId: {
        argNames: ["principalId"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "roleassignment"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    },
    // Gets the role definition with the specified role type.
    removeRoleAssignment: {
        argNames: ["principalId", "roleDefId"],
        requestType: types_1.RequestType.PostWithArgs
    }
};
/**
 * Role Definition
 */
exports.roledefinition = {
    // Deletes the object
    delete: {
        requestType: types_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
/**
 * Role Definitions
 */
exports.roledefinitions = {
    // Gets the role definition with the specified ID from the collection.
    getById: {
        argNames: ["roleDefId"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinition"
    },
    // Gets the role definition with the specified name.
    getByName: {
        argNames: ["name"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinition"
    },
    // Gets the role definitions with the specified role type.
    getByType: {
        argNames: ["roleType"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinitions"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
//# sourceMappingURL=mapper.js.map