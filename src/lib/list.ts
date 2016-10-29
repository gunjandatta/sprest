module $REST {
    /*********************************************************************************************************************************/
    // List
    // The SPList object.
    /*********************************************************************************************************************************/
    export class List extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName:string, targetInfo?:Settings.TargetInfoSettings) {
            // Call the base constructor
            super(targetInfo);

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "lists/getByTitle('" + listName + "')";

            // Add the methods
            this.addMethods(this, { __metadata: { type: "list" } } );
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
            "BrowserFileHandling", "ContentTypes|contenttypes|([Name])|contenttype", "CreatablesInfo", "DefaultView|view",
            "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field",
            "FirstUniqueAncestorSecurableObject", "Forms|forms|('[Name]')|form", "InformationRightsManagementSettings",
            "Items|items|([Name])|item", "ParentWeb", "RoleAssignments|roleassignments|([Name])|roleassignment",
            "RootFolder|folder|/getByUrl('[Name]')|file", "Subscriptions", "TitleResource",
            "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "Views|views||('[Name]')|view", "WorkflowAssociations"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

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

        // Returns an item based on the id.
        getItemById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
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
