/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Event Receivers
    // The SPEventReceiverDefinitionCollection object.
    /*********************************************************************************************************************************/
    export class EventReceivers extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName?:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/" : "") + "eventreceivers";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "eventreceiverdefinitions" } } );
            }
        }
    }

    export class EventReceivers_Async extends EventReceivers {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName?:string, ...args) {
            // Call the base constructor
            super(listName, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.eventreceiverdefinitions = {
        // Adds an event receiver to the collection.
        add: {
            metadataType: "SP.EventReceiverDefinition",
            name: "",
            requestType: RequestType.PostWithArgsInBody
        },

        // Gets an event receiver by it's id.
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: RequestType.OData
        }
    };
}
