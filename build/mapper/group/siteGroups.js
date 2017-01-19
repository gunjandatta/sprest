"use strict";
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
exports.sitegroups = {
    // Adds a group to the group collection.
    add: {
        metadataType: "SP.Group",
        name: "",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Returns a group from the collection based on the member ID of the group.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },
    // Returns a cross-site group from the collection based on the name of the group.
    getByName: {
        argNames: ["name"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    },
    // Removes the group with the specified member ID from the collection.
    removeById: {
        argNames: ["id"],
        requestType: types_1.RequestType.PostWithArgsValueOnly
    },
    // Removes the cross-site group with the specified name from the collection.
    removeByLoginName: {
        argNames: ["name"],
        requestType: types_1.RequestType.PostWithArgsValueOnly
    },
};
//# sourceMappingURL=siteGroups.js.map