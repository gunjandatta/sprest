import { Irequest, IRequest } from "../../../@types/helper/methods";
import { Base } from "../../utils";

/**
 * XML HTTP Request
 */
export const request: Irequest = (props: IRequest): PromiseLike<any> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Execute the request and resolve the promise
        (new Base({
            method: props.method || "GET",
            url: props.url,
            requestHeader: props.headers,
            data: props.data
        })).execute(resolve, reject);
    });
}
