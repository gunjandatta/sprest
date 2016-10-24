module $REST {
    /*********************************************************************************************************************************/
    // Content Type
    // The SPContentType object.
    /*********************************************************************************************************************************/
    export class ContentType extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(name:string, listName?:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;

            // Create the parent
            this.parent = new $REST.ContentTypes(listName, false, { asyncFl: this.targetInfo.asyncFl });

            // Get the content type
            let contentType = this.parent["getByName"](name);

            // See if this is an asynchronous request
            if(this.targetInfo.asyncFl) {
                // Resolve the parent request for asynchronous requests
                contentType.done((ct) => { this.resolveParentRequest(ct); });
            }
            else {
                // Return the content type
                return contentType;
            }
        }
    }

    export class ContentType_Async extends ContentType {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(contentTypeName:string, listName?:string, ...args) {
            // Call the base constructor
            super(contentTypeName, listName, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.contenttype = {
        // Adds a field link to the content type.
        addFieldLink: {
            name: "fieldlink",
            metadataType: "SP.FieldLink",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Deletes the content type.
        delete: {
            requestType: Types.RequestType.Delete
        },

        // Gets a field by it's internal name.
        getFieldByInternalName: {
            argNames: ["name"],
            name: "fields?$filter=InternalName eq '[[name]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Gets a field by it's static name.
        getFieldByStaticName: {
            argNames: ["name"],
            name: "fields?$filter=StaticName eq '[[name]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Gets a field by it's title.
        getFieldByTitle: {
            argNames: ["title"],
            name: "fields?$filter=Title eq '[[title]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Gets a field by it's internal name.
        getFieldLinkByName: {
            argNames: ["name"],
            name: "fields?$filter=Name eq '[[name]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.ContentType",
            name: "",
            requestMethod: "MERGE",
            requestType: Types.RequestType.PostWithArgsInBody
        }
    };
}
