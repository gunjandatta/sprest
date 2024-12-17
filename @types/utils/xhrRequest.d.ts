import { ITargetInfo } from "./targetInfo";

/**
 * XHR Request
 */
export const XHRRequest: (asyncFl: boolean, targetInfo: ITargetInfo, callback?: (...args) => void) => IXHRRequest;

/**
 * XHR Request
 */
export interface IXHRRequest {
    // Flag indicating the request has completed
    completedFl: boolean;

    // Flag indicating if this is a batch request
    isBatch: boolean;

    // Flag indicating if this is a graph request
    isGraph: boolean;

    // The response
    response: string;

    // The xml http request
    request: XMLHttpRequest;

    // The data send in the body of the request
    requestData: any;

    // The request headers
    requestHeaders: { [key: string]: string };

    // The reqest url
    requestUrl: string;

    // The request status
    status: number;
}