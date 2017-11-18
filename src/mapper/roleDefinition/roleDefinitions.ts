import {RequestType} from "../../types/index";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
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