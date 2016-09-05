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
                // Create a list
                var list = new List(listName, this.targetInfo, false);

                // Query the items
                return list[/^<View/.test(camlQuery) ? "getItems" : "getItemsByQuery"](camlQuery);
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
            metadataType: "SP.ListItem",
            requestType: RequestType.PostWithArgsInBody
        },

        // Gets an item by its id.
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        }
    };
}
