module $REST {
    Library.listitem = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/

        properties: [
            "AttachmentFiles|attachmentfiles", "ContentType|contenttype", "FieldValuesAsHtml", "FieldValuesAsText", "FieldValuesForEdit",
            "File|file", "FirstUniqueAncestorSecurableObject", "Folder|folder", "GetDlpPolicyTip", "ParentList|list",
            "RoleAssignments|roleassignments"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Adds the attachment that is represented by the specified file name and byte array to the list item.
        addAttachment: {
            argNames: ["name"],
            name: "attachmentfiles/add",
            requestType: Types.RequestType.PostWithArgs
        },

        // Adds the attachment that is represented by the specified file name and byte array to the list item.
        //{ name: "addAttachmentFile", "function": function (file) { var thisObj = this; var promise = new Promise(); getFileInfo(file).done(function (name, buffer) { if (name && buffer) { thisObj.addAttachment(name, buffer).done(function (file) { promise.resolve(file); }); } else { promise.resolve(); } }); return promise; } },

        // Creates unique role assignments for the securable object.
        breakRoleInheritance: {
            argNames: ["copyroleassignments", "clearsubscopes"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Deletes the object
        delete: {
            requestType: Types.RequestType.Delete
        },

        // Gets the effective permissions that a specified user has on the list item.
        getUserEffectivePermissions: {            
            argNames: ["loginName"],
            name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: Types.RequestType.Post
        },

        // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
        resetRoleInheritance: {
            requestType: Types.RequestType.Post
        },

        // Updates it's properties.
        update: {
            inheritMetadataType: true,
            name: "",
            requestMethod: "MERGE",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Validates and sets the values of the specified collection of fields for the list item.
        validateUpdateListItem: {
            argNames: ["formValues", "bNewDocumentUpdate"],
            requestType: Types.RequestType.PostWithArgsInBody
        }
    };
}
