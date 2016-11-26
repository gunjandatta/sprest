module $REST {
    /*********************************************************************************************************************************/
    // Search
    /*********************************************************************************************************************************/
    export class Search extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(url?:string, targetInfo?:ComplexTypes.TargetInfoSettings) {
            // Call the base constructor
            super(targetInfo);

            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "search";

            // See if the web url exists
            if(url) {
                // Set the settings
                this.targetInfo.url = url;
            }

            // Add the methods
            this.addMethods(this, { __metadata: { type: "search" } } );
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.search = {
        query: {
            argNames: ["settings"],
            metadataType: "Microsoft.Office.Server.Search.REST.SearchRequest",
            requestType: Types.RequestType.GetWithArgsInQS
        },

        postquery: {
            argNames: ["request"],
            metadataType: "Microsoft.Office.Server.Search.REST.SearchRequest",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        suggest: {
            argNames: ["queryText"],
            metadataType: "Microsoft.Office.Server.Search.REST.SearchRequest",
            requestType: Types.RequestType.GetWithArgs
        }
    }
}
