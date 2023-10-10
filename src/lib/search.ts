import { Microsoft } from "gd-sprest-def";
import { ISearch, ISearchPostQuery } from "../../@types/lib";
import { Base, Request, RequestType } from "../utils";

/**
 * Search
 */
export const Search: ISearch = ((url?, targetInfo?) => {
    let base = new Base(targetInfo);
    let search = base as any as Microsoft.Office.Server.Search.REST.ISearchService;

    // Default the properties
    base.targetInfo.defaultToWebFl = true;
    base.targetInfo.endpoint = "search";

    // See if the web url exists
    if (url) {
        // Set the settings
        base.targetInfo.url = url;
    }

    // Add the methods
    Request.addMethods(search as any, { __metadata: { type: "Microsoft.Office.Server.Search.REST.SearchService" } });

    /** The search query method */
    search.searchquery = (settings: Microsoft.Office.Server.Search.REST.SearchRequest) => {
        // Execute the request
        return search.executeMethod("query", {
            argNames: ["query"],
            name: "query?[[query]]",
            requestType: RequestType.GetReplace
        }, Search.getQuery(settings));
    }

    // Return the search
    return search;
}) as any;

// Static method to compute the query
Search.getQuery = (parameters: Microsoft.Office.Server.Search.REST.SearchRequest) => {
    let query = "";

    // Parse the parameters
    for (let key in parameters) {
        // Append the parameter to the query
        query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
    }

    // Return the query
    return [query];
}

// Static post query method
Search.postQuery = (props: ISearchPostQuery) => {
    // Return a promise
    return new Promise((resolve, reject) => {
        let queryProps = props.query;

        // Query the first batch
        Search(props.url, props.targetInfo).postquery(queryProps).execute(
            // Success
            request => {
                // Updates the table
                let updateRequest = (searchResult: Microsoft.Office.Server.Search.REST.SearchResult) => {
                    // Call the event
                    props.onQueryCompleted ? props.onQueryCompleted(searchResult) : null;

                    // Parse rows
                    for (let i = 0; i < searchResult.PrimaryQueryResult.RelevantResults.Table.Rows.results.length; i++) {
                        let row = searchResult.PrimaryQueryResult.RelevantResults.Table.Rows.results[i];

                        // Append the row
                        request.postquery.PrimaryQueryResult.RelevantResults.Table.Rows.results.push(row);
                    }
                }

                // Call the event
                props.onQueryCompleted ? props.onQueryCompleted(request.postquery) : null;

                // See if more results exist
                let results = request.postquery.PrimaryQueryResult.RelevantResults;
                if (results.TotalRows > results.RowCount) {
                    let search = Search(props.url, props.targetInfo);
                    let useBatch = typeof (props.useBatch) === "boolean" ? props.useBatch : true;

                    // Compute the row count
                    let rowCount = 500;
                    if (typeof (queryProps.RowLimit) === "number") {
                        // Set the custom limit
                        rowCount = queryProps.RowLimit;
                    } else {
                        // Default to the max size
                        queryProps.RowLimit = rowCount;
                    }

                    // Compute the total # of requests that we need to make
                    let totalPages = Math.ceil(results.TotalRows / rowCount);

                    // Loop for the total # of requests
                    for (let i = 0; i < totalPages; i++) {
                        // Set the start row
                        queryProps.StartRow = i * rowCount;

                        // See if we are making a batch request
                        if (useBatch) {
                            // Create a batch request
                            search.postquery(queryProps).batch(
                                // Success
                                batchRequest => {
                                    // Update the request
                                    updateRequest(batchRequest.postquery);
                                },

                                // Limit to 100 per request
                                i % 100 == 0
                            );
                        } else {
                            // Create the request
                            search.postquery(queryProps).execute(
                                // Success
                                batchRequest => {
                                    // Update the request
                                    updateRequest(batchRequest.postquery);
                                },

                                // Wait for the previous request to complete
                                true
                            );
                        }
                    }

                    // See if we are making a batch request
                    if (useBatch) {
                        // Execute the batch requests
                        search.execute(() => {
                            // Resolve the request
                            resolve(request.postquery);
                        }, reject);
                    } else {
                        // Wait for the requests to complete
                        search.done(() => {
                            // Resolve the request
                            resolve(request.postquery);
                        });
                    }
                } else {
                    // Resolve the request
                    resolve(request.postquery);
                }
            },

            // Error
            reject
        );
    });
}