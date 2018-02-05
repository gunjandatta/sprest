"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.roleassignment = {
    properties: [
        "Member", "RoleDefinitionBindings|roledefinitions"
    ],
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.roleassignments = {
    addRoleAssignment: {
        argNames: ["principalId", "roleDefId"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    getByPrincipalId: {
        argNames: ["principalId"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roleassignment"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    removeRoleAssignment: {
        argNames: ["principalId", "roleDefId"],
        requestType: utils_1.RequestType.PostWithArgs
    }
};
exports.roledefinition = {
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.roledefinitions = {
    getById: {
        argNames: ["roleDefId"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinition"
    },
    getByName: {
        argNames: ["name"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinition"
    },
    getByType: {
        argNames: ["roleType"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinitions"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=security.js.map