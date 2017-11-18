import {RequestType} from "../../types/index";

export const listitem = {
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
        requestType: RequestType.PostWithArgs
    },

    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Gets the effective permissions that a specified user has on the list item.
    getUserEffectivePermissions: {            
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: RequestType.GetReplace
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: RequestType.Post
    },

    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
    resetRoleInheritance: {
        requestType: RequestType.Post
    },

    // Updates it's properties.
    update: {
        inheritMetadataType: true,
        name: "",
        requestMethod: "MERGE",
        requestType: RequestType.PostWithArgsInBody
    },

    // Validates and sets the values of the specified collection of fields for the list item.
    validateUpdateListItem: {
        argNames: ["formValues", "bNewDocumentUpdate"],
        requestType: RequestType.PostWithArgsInBody
    }
};