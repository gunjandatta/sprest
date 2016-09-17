/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // List Item
    // The SPListItem object.
    /*********************************************************************************************************************************/
    export class ListItem extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(itemId:number, listName:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')/items(" + itemId + ")";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "listItem" } } );
            }
        }

        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/

        /**
         * Specifies the collection of attachments that are associated with the list item.
         */
        public get_AttachmentFiles() { return this.getProperty("AttachmentFiles"); }

        /**
         * Gets a value that specifies the content type of the list item.
         */
        public get_ContentType() { return this.getProperty("ContentType"); }

        /**
         * Gets the values for the list item as HTML.
         */
        public get_FieldValuesAsHtml() { return this.getProperty("FieldValuesAsHtml"); }

        /**
         * Gets the list item's field values as a collection of string values.
         */
        public get_FieldValuesAsText() { return this.getProperty("FieldValuesAsText"); }

        /**
         * Gets the formatted values to be displayed in an edit form.
         */
        public get_FieldValuesForEdit() { return this.getProperty("FieldValuesForEdit"); }

        /**
         * Gets the file that is represented by the item from a document library.
         */
        public get_File() { return this.getProperty("File"); }

        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        public get_FirstUniqueAncestorSecurableObject() { return this.getProperty("FirstUniqueAncestorSecurableObject"); }

        /**
         * Gets a folder object that is associated with a folder item.
         */
        public get_Folder() { return this.getProperty("Folder"); }

        /**
         * 
         */
        public get_GetDlpPolicyTip() { return this.getProperty("GetDlpPolicyTip"); }

        /**
         * Gets the parent list that contains the list item.
         */
        public get_ParentList() { return this.getProperty("ParentList"); }

        /**
         * Gets the role assignments for the securable object.
         */
        public get_RoleAssignments() { return this.getProperty("RoleAssignments"); }
    }

    export class ListItem_Async extends ListItem {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(itemId:number, listName:string, ...args) {
            // Call the base constructor
            super(itemId, listName, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.listitem = {
        // Adds the attachment that is represented by the specified file name and byte array to the list item.
        addAttachment: {
            argNames: ["name"],
            name: "attachmentfiles/add",
            requestType: RequestType.PostWithArgs
        },

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
}
