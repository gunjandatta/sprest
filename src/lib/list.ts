import { IList, IListEntityProps, IRunFlow, IRunFlowResult } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { SP } from "gd-sprest-def";
import { SPTypes } from "../sptypes";
import { Base, Request, RequestType } from "../utils";
import { Graph } from "./graph";
import { Web } from "./web";

/**
 * List
 */
export const List: IList = ((listName: string, targetInfo?: ITargetInfoProps) => {
    let list = new Base(targetInfo);

    // Default the properties
    list.targetInfo.defaultToWebFl = true;
    list.targetInfo.endpoint = "web/lists/getByTitle('" + listName.replace(/\'/g, "''") + "')";

    // Add the methods
    Request.addMethods(list, { __metadata: { type: "SP.List" } });

    // Return the list
    return list;
}) as any as IList;

// Static method to get the list by the entity name.
List.getByEntityName = ((props: IListEntityProps) => {
    // Query for the list
    let query = Web(props.url, props.targetInfo)
        // Get the lists
        .Lists()
        // Set the query
        .query({
            Filter: "EntityTypeName eq '" + props.name + "'",
            Top: 1
        });

    // See if the callback exists
    if (props.callback) {
        // Execute the request asynchronously
        query.execute((lists) => {
            // Execute the callback method
            props.callback(lists.results ? lists.results[0] : null as any);
        });
    } else {
        // Execute the request synchronously and return it
        let list = query.executeAndWait();
        return list.results ? list.results[0] : list;
    }
}) as any;

// Static method to get the list data from the SP.List.getListDataAsStream endpoint
List.getDataAsStream = ((listFullUrl: string, parameters: SP.RenderListDataParameters = {}) => {
    let params = "?listFullUrl='" + listFullUrl + "'";

    // Parse the parameters
    for (let key in parameters) {
        // Append the parameter
        params += "&" + key + "=" + parameters[key];
    }

    // Return the base object
    return new Base({
        endpoint: "SP.List.getListDataAsStream" + params
    }) as any;
});

// Static method for executing a flow against a list item
List.runFlow = (props: IRunFlow): PromiseLike<IRunFlowResult> => {
    // Return a promise
    return new Promise((resolve) => {
        // Gets the graph token
        let getGraphToken = (): PromiseLike<string> => {
            // Return a promise
            return new Promise(resolveAuth => {
                // Get the graph token
                Graph.getAccessToken(SPTypes.CloudEnvironment.Flow).execute(
                    auth => {
                        // Resolve the request
                        resolveAuth(auth.access_token);
                    },

                    // Error
                    (ex: any) => {
                        // Resolve the request
                        resolve({
                            executed: false,
                            errorDetails: ex.response,
                            errorMessage: "Auth Error: Unable to get the flow token."
                        });
                    }
                );
            });
        }

        // Gets the flow token
        let getFlowToken = (flowInfo: any): PromiseLike<string> => {
            // Return a promise
            return new Promise(resolveAuth => {
                // See if the flow token is provided
                if (props.token) {
                    // Resolve the request
                    resolveAuth(props.token);
                }
                else {
                    // Get the graph token
                    getGraphToken().then(token => {
                        // See if the cloud environment was provided
                        if (props.cloudEnv) {
                            // Set the url
                            let authUrl = `${props.cloudEnv}${flowInfo.properties.environment.id}/users/me/onBehalfOfTokenBundle?app-version=2016-11-01`;

                            // Execute the request
                            new Base({
                                endpoint: authUrl,
                                method: "POST",
                                requestType: RequestType.GraphPost,
                                requestHeader: {
                                    "authorization": "Bearer " + token
                                }
                            }).execute(
                                (tokenInfo) => {
                                    // Resolve the request
                                    resolveAuth(tokenInfo.audienceToToken["https://" + flowInfo.properties.connectionReferences.shared_sharepointonline.swagger.host] || token);
                                },

                                // Error
                                (ex) => {
                                    // Resolve the request
                                    resolve({
                                        executed: false,
                                        errorDetails: ex.response,
                                        errorMessage: `Auth Error: Unable to get the flow token for cloud: ${props.cloudEnv}`
                                    });
                                }
                            )
                        } else {
                            // Resolve the request
                            resolveAuth(token);
                        }
                    });
                }
            });
        }

        // Get the flow information
        Web(props.webUrl).Lists(props.list).syncFlowInstance(props.id).execute(
            // Success
            flow => {
                // Get the flow information
                let flowInfo = JSON.parse(flow.SynchronizationData);

                // Get the flow token
                getFlowToken(flowInfo).then(token => {
                    // Trigger the flow
                    new Base({
                        accessToken: token,
                        requestType: RequestType.GraphPost,
                        endpoint: flowInfo.properties.flowTriggerUri,
                        data: {
                            rows: [{
                                entity: props.data
                            }]
                        }
                    }).execute(
                        // Success
                        () => {
                            // Resolve the request
                            resolve({
                                executed: true,
                                flowToken: token
                            });
                        },

                        // Error
                        (ex) => {
                            // Resolve the request
                            resolve({
                                executed: false,
                                errorDetails: ex.response,
                                errorMessage: "Error triggering the flow."
                            });
                        }
                    )
                });
            },

            // Error
            (ex: any) => {
                // Resolve the request
                resolve({
                    executed: false,
                    errorDetails: ex.response,
                    errorMessage: "Error getting the flow information."
                });
            }
        );
    });
}