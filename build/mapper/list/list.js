System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, list;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Library
            /*********************************************************************************************************************************/
            //{ name: "hasAccess", "function": function (userName, permissions) { return hasAccess(this, permissions, userName); } },
            exports_1("list", list = {
                /*********************************************************************************************************************************/
                // Properties
                /*********************************************************************************************************************************/
                properties: [
                    "BrowserFileHandling", "ContentTypes|contenttypes|('[Name]')|contenttype", "CreatablesInfo", "DefaultView|view",
                    "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field",
                    "FirstUniqueAncestorSecurableObject", "Forms|forms|('[Name]')|form", "InformationRightsManagementSettings",
                    "Items|items|([Name])|item", "ParentWeb", "RoleAssignments|roleassignments|([Name])|roleassignment",
                    "RootFolder|folder|/getByUrl('[Name]')|file", "Subscriptions", "TitleResource",
                    "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "Views|views|('[Name]')|view", "WorkflowAssociations"
                ],
                /*********************************************************************************************************************************/
                // Methods
                /*********************************************************************************************************************************/
                // Creates unique role assignments for the securable object.
                breakRoleInheritance: {
                    argNames: ["copyroleassignments", "clearsubscopes"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Deletes the object
                delete: {
                    requestType: index_1.RequestType.Delete
                },
                // Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
                getChanges: {
                    argNames: ["query"],
                    metadataType: "SP.ChangeQuery",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Returns an item based on the id.
                getItemById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "item"
                },
                // Returns a collection of items from the list based on the view xml.
                getItems: {
                    argNames: ["viewXml"],
                    requestType: index_1.RequestType.PostWithArgsInBody,
                    data: {
                        query: {
                            __metadata: { type: "SP.CamlQuery" },
                            ViewXml: "[[viewXml]]"
                        }
                    }
                },
                // Returns a collection of items from the list based on the specified query.
                getItemsByQuery: {
                    argNames: ["camlQuery"],
                    name: "getItems",
                    requestType: index_1.RequestType.PostWithArgsInBody,
                    data: {
                        query: {
                            __metadata: { type: "SP.CamlQuery" },
                            ViewXml: "<View>[[camlQuery]]</View>"
                        }
                    }
                },
                // Returns a collection of items from the list based on the specified query.
                getListItemChangesSinceToken: {
                    argNames: ["query"],
                    metadataType: "SP.ChangeLogItemQuery",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
                getRelatedFields: {
                    requestType: index_1.RequestType.Get
                },
                // Gets the effective user permissions for the current user.
                getUserEffectivePermissions: {
                    argNames: ["loginName"],
                    name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
                    requestType: index_1.RequestType.GetReplace
                },
                // Returns the list view with the specified view identifier.
                getViewById: {
                    argNames: ["viewId"],
                    name: "getView",
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "view"
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                },
                // Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
                recycle: {
                    requestType: index_1.RequestType.Post
                },
                // Renders the list data.
                renderListData: {
                    argNames: ["viewXml"],
                    name: "renderListData(@v)?@v='<View>[[viewXml]]</View>'",
                    requestType: index_1.RequestType.PostReplace
                },
                // Renders the list form data.
                // Types of modes: 1 - Display, 2 - Edit, 3 - New
                renderListFormData: {
                    argNames: ["itemid", "formid", "mode"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Reserves a list item ID for idempotent list item creation.
                reserveListItemId: {
                    requestType: index_1.RequestType.Post
                },
                // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
                resetRoleInheritance: {
                    requestType: index_1.RequestType.Post
                },
                // Updates it's properties.
                update: {
                    metadataType: "SP.List",
                    name: "",
                    requestMethod: "MERGE",
                    requestType: index_1.RequestType.PostWithArgsInBody
                }
            });
        }
    };
});
//# sourceMappingURL=list.js.map