/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // List Items
    // The SPItemCollection object.
    /*********************************************************************************************************************************/
    export class ListItems extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName:string, camlQuery?:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')/items";

            // See if the caml query exists
            if(camlQuery) {
                // Create the parent
                this.parent = new $REST.List(listName, false, { asyncFl: this.targetInfo.asyncFl });

                // Query the items
                let items = this.parent[/^<View/.test(camlQuery) ? "getItems" : "getItemsByQuery"](camlQuery);

                // See if this is an asynchronous request
                if(this.targetInfo.asyncFl) {
                    // Resolve the parent request for asynchronous requests
                    items.done((items) => { this.resolveParentRequest(items); });
                }
                else {
                    // Return the items
                    return items;
                }
            }
            else {
                // See if we are executing the request
                if(this.executeRequestFl) {
                    // Execute the request
                    this.execute();
                }
                else {
                    // Add the methods
                    this.addMethods(this, { __metadata: { type: "items" } } );
                }
            }
        }
    }

    export class ListItems_Async extends ListItems {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName:string, camlQuery?:string, ...args) {
            // Call the base constructor
            super(listName, camlQuery, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.items = {
        // Adds an item to the list item collection.
        add: {
            metadataType: function(obj) { return obj.Parent && obj.Parent["ListItemEntityTypeFullName"] ? obj.Parent["ListItemEntityTypeFullName"] : "SP.ListItem" },
            requestType: RequestType.PostWithArgsInBody
        },

        // Gets an item by its id.
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        }
    };
}
