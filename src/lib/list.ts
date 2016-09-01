/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // List
    // The SPList object.
    /*********************************************************************************************************************************/
    //export class List extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
    //}

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    //{ name: "hasAccess", "function": function (userName, permissions) { return hasAccess(this, permissions, userName); } },
    Library.list = {
        // Adds an existing content type to this collection.
        addAvailableContentType: {
            argNames: ["contentTypeId"],
            name: "contenttypes/addAvailableContentType",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a content type to the collection.
        addContentType: {
            argNames: ["data"],
            metadataType: "SP.ContentType",
            name: "contenttypes/add",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a field to the field collection.
        addField: {
            argNames: ["parameters"],
            metadataType: "SP.FieldCreationInformation",
            name: "fields/add",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
        addDependentLookupField: {
            argNames: ["displayname", "primarylookupfieldid", "showfield"],
            name: "fields/addDependentLookupField",
            requestType: RequestType.PostWithArgs
        },

        // Adds an item to the list item collection.
        addItem: {
            metadataType: "SP.ListItem",
            name: "items",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a new role assignment with the specified principal and role definitions to the collection.
        addSiteGroup: {
            argNames: ["principalid", "roledefid"],
            name: "roleassignments/addroleassignment",
            requestType: RequestType.PostWithArgs
        },

        // Adds the folder that is located at the specified URL to the collection.
        addSubFolder: {
            argNames: ["url"],
            name: "folders/add",
            requestType: RequestType.PostWithArgs
        },

        // Adds an item to the list item collection.
        addView: {
            metadataType: "SP.View",
            name: "views",
            requestType: RequestType.PostWithArgsInBody
        },

        // Creates a field based on the specified schema, Boolean value, and field options.
        createFieldAsXml: {
            argNames: ["parameters"],
            metadataType: "SP.XmlSchemaFieldCreationInformation",
            name: "fields/createFieldAsXml",
            requestType: RequestType.PostWithArgsInBody
        },

        // Creates unique role assignments for the securable object.
        breakRoleInheritance: {
            argNames: ["copyroleassignments", "clearsubscopes"],
            requestType: RequestType.PostWithArgs
        },

        // Deletes the object
        delete: {
            requestType: RequestType.Delete
        },

        // Returns the list item with the specified list item identifier.
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: RequestType.PostWithArgsInBody
        },

        // Gets a content type by it's name.
        getContentType: {
            argNames: ["name"],
            name: "contenttypes?$filter=Name eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Gets a content type by id.
        getContentTypeById: {
            argNames: ["id"],
            name: "contenttypes/getById([[id]])",
            requestType: RequestType.GetReplace
        },

        // Returns the display form.
        getDefaultDisplayForm: {
            name: "forms?$filter=FormType eq 4",
            requestType: RequestType.GetReplace
        },

        // Returns the edit form.
        getDefaultEditForm: {
            name: "forms?$filter=FormType eq 6",
            requestType: RequestType.GetReplace
        },

        // Returns the new form.
        getDefaultNewForm: {
            name: "forms?$filter=FormType eq 8",
            requestType: RequestType.GetReplace
        },
        
        // Returns the list form based on the form type.
        getForm: {
            argNames: ["formType"],
            name: "forms?$filter=FormType eq [[formType]]",
            requestType: RequestType.GetReplace
        },
        
        // Gets the field with the specified ID.
        getFieldById: {
            argNames: ["id"],
            name: "fields/getFieldById",
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Returns the first Field object with the specified internal name or title from the collection.
        getFieldByInternalNameOrTitle: {
            argNames: ["internalNameOrTitle"],
            name: "fields/getFieldByInternalNameOrTitle",
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Returns the first field object in the collection based on the title of the specified field.
        getFieldByTitle: {
            argNames: ["title"],
            name: "fields/getFieldByTitle",
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Get the file at the specified URL.
        getSubFolder: {
            argNames: ["serverRelativeUrl"],
            name: "folders/getbyurl",
            requestType: RequestType.GetWithArgsValueOnly
        },
        
        // Returns an item based on the id.
        getItemById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Returns an item based on the title.
        getItemByTitle: {
            argNames: ["title"],
            name: "items?$filter Title eq '[[title]]'",
            requestType: RequestType.GetReplace
        },

        // Returns a collection of items based on the filter.
        getItemsByFilter: {
            argNames: ["filter"],
            name: "items?$filter=[[filter]]",
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Returns a collection of items from the list based on the specified query.
        getItems: {
            argNames: ["query"],
            name: "fields/createFieldAsXml",
            requestType: RequestType.PostWithArgsInBody,
            data: `{
                query: {
                     __metadata: { type: "SP.CamlQuery" },
                     ViewXml: "<View>[[query]]</View>"
                }
            }`
        },

        // Returns a collection of items from the list based on the specified query.
        getListItemChangesSinceToken: {
            argNames: ["query"],
            metadataType: "SP.ChangeLogItemQuery",
            requestType: RequestType.PostWithArgsInBody
        },

        // Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
        getRelatedFields: {
            requestType: RequestType.Get
        },

        // Gets the effective user permissions for the current user.
        getUserEffectivePermissions: {
            argNames: ["loginName"],
            requestType: RequestType.PostWithArgsInQS
        },

        // Returns the list view with the specified view identifier.
        getViewById: {
            argNames: ["viewId"],
            name: "getView",
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Returns the list view with the specified view identifier.
        getViewByTitle: {
            argNames: ["title"],
            name: "views?$filter=Title eq '[[title]]'",
            requestType: RequestType.GetReplace
        },

        // Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: RequestType.Post
        },

        // Renders the list data.
        renderListData: {
            argNames: ["viewXml"],
            name: "renderListData(@v)?@v='<View>[[viewXml]]</View>'",
            requestType: RequestType.PostReplace
        },

        // Renders the list form data.
        // Types of modes: 1 - Display, 2 - Edit, 3 - New
        renderListFormData: {
            argNames: ["itemid", "formid", "mode"],
            requestType: RequestType.PostWithArgs
        },

        // Reserves a list item ID for idempotent list item creation.
        reserveListItemId: {
            requestType: RequestType.Post
        },

        // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
        resetRoleInheritance: {
            requestType: RequestType.Post
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.List",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostWithArgsInBody
        }
    };
}
