System.register(["../types/index", "../utils/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, _Search, Search;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Search
            /*********************************************************************************************************************************/
            _Search = class _Search extends index_2.Base {
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(url, targetInfo) {
                    // Call the base constructor
                    super(targetInfo);
                    // Default the properties
                    this.defaultToWebFl = true;
                    this.targetInfo.endpoint = "search";
                    // See if the web url exists
                    if (url) {
                        // Set the settings
                        this.targetInfo.url = url;
                    }
                    // Add the methods
                    this.addMethods(this, { __metadata: { type: "search" } });
                }
                /*********************************************************************************************************************************/
                // Methods
                /*********************************************************************************************************************************/
                // Method to compute the query
                getQuery(parameters) {
                    let query = "";
                    // Parse the parameters
                    for (let key in parameters) {
                        // Append the parameter to the query
                        query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
                    }
                    // Return the query
                    return [query];
                }
                /** The search query method */
                searchquery(settings) {
                    // Execute the request
                    return this.executeMethod("query", {
                        argNames: ["query"],
                        name: "query?[[query]]",
                        requestType: index_1.RequestType.GetReplace
                    }, this.getQuery(settings));
                }
                /** The suggest method */
                suggest(settings) {
                    // Execute the request
                    return this.executeMethod("query", {
                        argNames: ["query"],
                        name: "suggest?[[query]]",
                        requestType: index_1.RequestType.GetReplace
                    }, this.getQuery(settings));
                }
            };
            exports_1("Search", Search = _Search);
        }
    };
});
//# sourceMappingURL=search.js.map