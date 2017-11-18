System.register(["../utils/index", "./web"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, web_1, _List, List;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (web_1_1) {
                web_1 = web_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // List
            // The SPList object.
            /*********************************************************************************************************************************/
            _List = class _List extends index_1.Base {
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(listName, targetInfo) {
                    // Call the base constructor
                    super(targetInfo);
                    // Default the properties
                    this.defaultToWebFl = true;
                    this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')";
                    // Add the methods
                    this.addMethods(this, { __metadata: { type: "list" } });
                }
                // Method to get the list by the entity name.
                static getByEntityName(entityTypeName, callback, targetInfo) {
                    // Query for the list
                    let query = (new web_1.Web(targetInfo))
                        .Lists()
                        .query({
                        Filter: "EntityTypeName eq '" + entityTypeName + "'",
                        Top: 1
                    });
                    // See if the callback exists
                    if (typeof (callback) != "function") {
                        // Execute the request synchronously and return it
                        let list = query.executeAndWait();
                        return list.results ? list.results[0] : list;
                    }
                    // Execute the request asynchronously
                    query.execute((lists) => {
                        // Execute the callback method
                        callback(lists.results ? lists.results[0] : lists);
                    });
                }
            };
            exports_1("List", List = _List);
        }
    };
});
//# sourceMappingURL=list.js.map