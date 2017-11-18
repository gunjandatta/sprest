System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, users;
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
            exports_1("users", users = {
                // Adds a user to the user collection.
                add: {
                    metadataType: "SP.User",
                    name: "",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Gets the user with the specified email address.
                getByEmail: {
                    argNames: ["email"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "user"
                },
                // Gets the user with the specified member identifier (ID).
                getById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "user"
                },
                // Gets the user with the specified login name.
                getByLoginName: {
                    argNames: ["loginName"],
                    name: "getByLoginName(@v)?@v='[[loginName]]'",
                    requestType: index_1.RequestType.GetReplace,
                    returnType: "user"
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                },
                // Removes the user with the specified ID.
                removeById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Removes the user with the specified login name.
                removeByLoginName: {
                    argNames: ["loginName"],
                    name: "removeByLoginName(@v)?@v='[[loginName]]'",
                    requestType: index_1.RequestType.PostReplace
                }
            });
        }
    };
});
//# sourceMappingURL=users.js.map