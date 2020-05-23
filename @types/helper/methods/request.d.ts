/**
 * XML HTTP Request
 * @category Helper
 */
export const request: Irequest;
export interface Irequest {
    (props: IRequest): PromiseLike<any>;
}

/**
 * The XML HTTP request properties.
 */
export interface IRequest {
    /** The data to pass in the request. */
    data?: any;

    /** The request headers. */
    headers?: { [key: string]: string };

    /** The request method. */
    method?: string;

    /** The request url. */
    url: string;
}