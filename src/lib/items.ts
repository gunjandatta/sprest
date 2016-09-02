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
        constructor(listName:string, camlQuery?:string, settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Call the base constructor
            super(settings, executeRequestFl);

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')/items";

            // See if the caml query exists
            if(camlQuery) {
                // Create a list
                var list = new List(listName, settings, false);

                // Query the items
                return list["existsFl"] ? list["getItems"](camlQuery) : list;
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
        constructor(listName:string, camlQuery?:string, settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;

            // Call the base constructor
            super(listName, camlQuery, settings, executeRequestFl);
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
