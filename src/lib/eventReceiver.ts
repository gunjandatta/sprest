/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Event Receiver
    // The SPEventReceiverDefinition object.
    /*********************************************************************************************************************************/
    export class EventReceiver extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(id:string, listName?:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/" : "") + "eventreceivers/getById(guid'" + id + "')";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "eventreceiverdefinition" } } );
            }
        }
    }

    export class EventReceiver_Async extends EventReceiver {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(id:string, listName?:string, ...args) {
            // Call the base constructor
            super(id, listName, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.eventreceiverdefinition = {
        // Deletes the object
        delete: {
            requestType: RequestType.Delete
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.EventReceiverDefinition",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostWithArgsInBody
        }
    };
}
