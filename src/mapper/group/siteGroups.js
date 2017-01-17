import {RequestType} from "../../types";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const siteGroups = {
    // Adds a group to the group collection.
    add: {
        metadataType: "SP.Group",
        name: "",
        requestType: RequestType.PostWithArgsInBody
    },

    // Returns a group from the collection based on the member ID of the group.
    getById: {
        argNames: ["id"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },

    // Returns a cross-site group from the collection based on the name of the group.
    getByName: {
        argNames: ["name"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Removes the group with the specified member ID from the collection.
    removeById: {
        argNames: ["id"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    // Removes the cross-site group with the specified name from the collection.
    removeByLoginName: {
        argNames: ["name"],
        requestType: RequestType.PostWithArgsValueOnly
    },
};