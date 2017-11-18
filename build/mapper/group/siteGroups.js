System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, sitegroups;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Methods
            /*********************************************************************************************************************************/
            exports_1("sitegroups", sitegroups = {
                // Adds a group to the group collection.
                add: {
                    metadataType: "SP.Group",
                    name: "",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Returns a group from the collection based on the member ID of the group.
                getById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "group"
                },
                // Returns a cross-site group from the collection based on the name of the group.
                getByName: {
                    argNames: ["name"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "group"
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                },
                // Removes the group with the specified member ID from the collection.
                removeById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Removes the cross-site group with the specified name from the collection.
                removeByLoginName: {
                    argNames: ["name"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
            });
        }
    };
});
//# sourceMappingURL=siteGroups.js.map