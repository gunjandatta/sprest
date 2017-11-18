System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, listitem;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("listitem", listitem = {
                /*********************************************************************************************************************************/
                // Properties
                /*********************************************************************************************************************************/
                properties: [
                    "AttachmentFiles|attachmentfiles|('[Name]')|attachment", "ContentType|contenttype", "FieldValuesAsHtml", "FieldValuesAsText", "FieldValuesForEdit",
                    "File|file", "FirstUniqueAncestorSecurableObject", "Folder|folder", "GetDlpPolicyTip", "ParentList|list",
                    "Properties|propertyvalues", "RoleAssignments|roleassignments|roleassignments|([Name])|roleassignment"
                ],
                /*********************************************************************************************************************************/
                // Methods
                /*********************************************************************************************************************************/
                // Adds the attachment that is represented by the specified file name and byte array to the list item.
                //{ name: "addAttachmentFile", "function": function (file) { var thisObj = this; var promise = new Promise(); getFileInfo(file).done(function (name, buffer) { if (name && buffer) { thisObj.addAttachment(name, buffer).done(function (file) { promise.resolve(file); }); } else { promise.resolve(); } }); return promise; } },
                // Creates unique role assignments for the securable object.
                breakRoleInheritance: {
                    argNames: ["copyroleassignments", "clearsubscopes"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Deletes the object
                delete: {
                    requestType: index_1.RequestType.Delete
                },
                // Gets the effective permissions that a specified user has on the list item.
                getUserEffectivePermissions: {
                    argNames: ["loginName"],
                    name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
                    requestType: index_1.RequestType.GetReplace
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                },
                // Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
                recycle: {
                    requestType: index_1.RequestType.Post
                },
                // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
                resetRoleInheritance: {
                    requestType: index_1.RequestType.Post
                },
                // Updates it's properties.
                update: {
                    inheritMetadataType: true,
                    name: "",
                    requestMethod: "MERGE",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Validates and sets the values of the specified collection of fields for the list item.
                validateUpdateListItem: {
                    argNames: ["formValues", "bNewDocumentUpdate"],
                    requestType: index_1.RequestType.PostWithArgsInBody
                }
            });
        }
    };
});
//# sourceMappingURL=listItem.js.map