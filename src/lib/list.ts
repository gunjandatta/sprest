module $REST {
    /*********************************************************************************************************************************/
    // List
    // The SPList object.
    /*********************************************************************************************************************************/
    export class List extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "list" } } );
            }
        }
    }

    export class List_Async extends List {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName:string, ...args) {
            // Call the base constructor
            super(listName, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Library
    /*********************************************************************************************************************************/
    //{ name: "hasAccess", "function": function (userName, permissions) { return hasAccess(this, permissions, userName); } },

    Library.list = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "BrowserFileHandling", "ContentTypes|contenttypes", "CreatablesInfo", "DefaultView|view", "DescriptionResource",
            "EventReceivers|eventreceivers", "Fields|fields", "FirstUniqueAncestorSecurableObject", "Forms", "InformationRightsManagementSettings",
            "Items|items", "ParentWeb", "RoleAssignments|roleassignments", "RootFolder|folder", "Subscriptions", "TitleResource",
            "UserCustomActions|usercustomactions", "Views|views", "WorkflowAssociations"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Adds an existing content type to this collection.
        addAvailableContentType: {
            argNames: ["contentTypeId"],
            name: "contenttypes/addAvailableContentType",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds a content type to the collection.
        addContentType: {
            argNames: ["parameters"],
            metadataType: "SP.ContentType",
            name: "contenttypes/add",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds an event receiver to the collection.
        addEventReceiver: {
            metadataType: "SP.EventReceiverDefinition",
            name: "eventreceivers",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds a field to the field collection.
        addField: {
            argNames: ["parameters"],
            metadataType: "SP.FieldCreationInformation",
            name: "fields/add",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds a field, using it's Schema XML, to the field collection.
        // Set the option to SP.AddFieldOptions.addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
        addFieldAsXml: {
            argNames: ["schemaXml"],
            name: "fields/createFieldAsXml",
            requestType: Types.RequestType.PostWithArgsInBody,
            data: {
                parameters: {
                     __metadata: { type: "SP.XmlSchemaFieldCreationInformation" },
                     Options: 8,
                     SchemaXml: "[[schemaXml]]"
                }
            }
        },

        // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
        addDependentLookupField: {
            argNames: ["displayname", "primarylookupfieldid", "showfield"],
            name: "fields/addDependentLookupField",
            requestType: Types.RequestType.PostWithArgs
        },

        // Adds an item to the list item collection.
        addItem: {
            metadataType: function(obj) { return obj["ListItemEntityTypeFullName"] || "SP.ListItem" },
            name: "items",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds a new role assignment with the specified principal and role definitions to the collection.
        addSiteGroup: {
            argNames: ["principalid", "roledefid"],
            name: "roleassignments/addroleassignment",
            requestType: Types.RequestType.PostWithArgs
        },

        // Adds the folder that is located at the specified URL to the collection.
        addSubFolder: {
            argNames: ["url"],
            name: "folders/add",
            requestType: Types.RequestType.PostWithArgs
        },

        // Adds a view to the list view collection.
        addView: {
            metadataType: "SP.View",
            name: "views",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Creates unique role assignments for the securable object.
        breakRoleInheritance: {
            argNames: ["copyroleassignments", "clearsubscopes"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Deletes the object
        delete: {
            requestType: Types.RequestType.Delete
        },

        // Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Gets a content type by it's name.
        getContentType: {
            argNames: ["name"],
            name: "contenttypes?$filter=Name eq '[[name]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Gets a content type by id.
        getContentTypeById: {
            argNames: ["id"],
            name: "contenttypes/getById([[id]])",
            requestType: Types.RequestType.GetReplace
        },

        // Returns the display form.
        getDefaultDisplayForm: {
            name: "forms?$filter=FormType eq 4",
            requestType: Types.RequestType.GetReplace
        },

        // Returns the edit form.
        getDefaultEditForm: {
            name: "forms?$filter=FormType eq 6",
            requestType: Types.RequestType.GetReplace
        },

        // Returns the new form.
        getDefaultNewForm: {
            name: "forms?$filter=FormType eq 8",
            requestType: Types.RequestType.GetReplace
        },
        
        // Returns the list form based on the form type.
        getForm: {
            argNames: ["formType"],
            name: "forms?$filter=FormType eq [[formType]]",
            requestType: Types.RequestType.GetReplace
        },
        
        // Gets the field with the specified ID.
        getFieldById: {
            argNames: ["id"],
            name: "fields/getById",
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Returns the first Field object with the specified internal name or title from the collection.
        getFieldByInternalNameOrTitle: {
            argNames: ["internalNameOrTitle"],
            name: "fields/getByInternalNameOrTitle",
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Returns the first field object in the collection based on the title of the specified field.
        getFieldByTitle: {
            argNames: ["title"],
            name: "fields/getByTitle",
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Get the folder at the specified URL.
        getSubFolder: {
            argNames: ["serverRelativeUrl"],
            name: "folders/getbyurl",
            requestType: Types.RequestType.GetWithArgsValueOnly
        },
        
        // Returns an item based on the id.
        getItemById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Returns an item based on the title.
        getItemByTitle: {
            argNames: ["title"],
            name: "items?$filter Title eq '[[title]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Returns a collection of items from the list based on the view xml.
        getItems: {
            argNames: ["viewXml"],
            requestType: Types.RequestType.PostWithArgsInBody,
            data: {
                query: {
                     __metadata: { type: "SP.CamlQuery" },
                     ViewXml: "[[viewXml]]"
                }
            }
        },

        // Returns a collection of items based on the filter.
        getItemsByFilter: {
            argNames: ["filter"],
            name: "items?$filter=[[filter]]",
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Returns a collection of items from the list based on the specified query.
        getItemsByQuery: {
            argNames: ["camlQuery"],
            name: "getItems",
            requestType: Types.RequestType.PostWithArgsInBody,
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
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
        getRelatedFields: {
            requestType: Types.RequestType.Get
        },

        // Gets the effective user permissions for the current user.
        getUserEffectivePermissions: {
            argNames: ["loginName"],
            name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Returns the list view with the specified view identifier.
        getViewById: {
            argNames: ["viewId"],
            name: "getView",
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Returns the list view with the specified view identifier.
        getViewByTitle: {
            argNames: ["title"],
            name: "views?$filter=Title eq '[[title]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: Types.RequestType.Post
        },

        // Renders the list data.
        renderListData: {
            argNames: ["viewXml"],
            name: "renderListData(@v)?@v='<View>[[viewXml]]</View>'",
            requestType: Types.RequestType.PostReplace
        },

        // Renders the list form data.
        // Types of modes: 1 - Display, 2 - Edit, 3 - New
        renderListFormData: {
            argNames: ["itemid", "formid", "mode"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Reserves a list item ID for idempotent list item creation.
        reserveListItemId: {
            requestType: Types.RequestType.Post
        },

        // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
        resetRoleInheritance: {
            requestType: Types.RequestType.Post
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.List",
            name: "",
            requestMethod: "MERGE",
            requestType: Types.RequestType.PostWithArgsInBody
        }
    };
}
