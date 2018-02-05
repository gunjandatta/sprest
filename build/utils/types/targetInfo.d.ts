export interface IRequestInfo {
    data?: object;
    method: string;
    url: string;
}
export interface ITargetInfo {
    bufferFl?: boolean;
    callback?: () => void;
    data?: any;
    defaultToWebFl?: boolean;
    endpoint?: string;
    method?: string;
    overrideDefaultRequestToHostFl?: boolean;
    requestDigest?: string;
    requestHeader?: object;
    requestInfo?: object;
    url?: string;
}
