/**
 * Target Information
 */
export const TargetInfo: (props: ITargetInfoProps) => ITargetInfo;

/**
 * Request Information
 */
export interface IRequestInfo {
    /** The data being sent in the body of the request. */
    data?: object;

    /** The request method (GET/POST) */
    method: string;

    /** The url of the request. */
    url: string;
}

/**
 * Target Information
 */
export interface ITargetInfo {
    // The target information properties
    props: ITargetInfoProps;

    // Flag to determine if this is a batch request
    isBatchRequest: boolean;

    // Flag to determine if this is a graph request
    isGraph: boolean;

    // The request data
    requestData: any;

    // The request information
    requestInfo: IRequestInfo;

    // The request header
    requestHeaders: object;

    // The request method
    requestMethod: string;

    // The request type
    requestType: number;

    // The request url
    requestUrl: string;
}

/**
 * Target Information Properties
 */
export interface ITargetInfoProps {
    /** The access token for the graph api request. */
    accessToken?: string;

    /** True if the expected request returns an array buffer. */
    bufferFl?: boolean;

    /** The method to execute after the asynchronous request executes. */
    callback?: () => void;

    /** The data to be passed in the body of the request. */
    data?: any;

    /** True to default the request to the web api, site api otherwise. */
    defaultToWebFl?: boolean;

    /** The endpoint of the request. */
    endpoint?: string;

    /** The method to execute. */
    method?: string;

    /** True to override the default request to host flag. */
    overrideDefaultRequestToHostFl?: boolean;

    /** The request digest to use for the request. */
    requestDigest?: string;

    /** The request header. */
    requestHeader?: object;

    /** The request information. */
    requestInfo?: object;

    /** The request type. */
    requestType?: number;

    /** The url of the site/web to execute the request against. */
    url?: string;
}