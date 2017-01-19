"use strict";
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
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
//# sourceMappingURL=roleDefinitions.js.map