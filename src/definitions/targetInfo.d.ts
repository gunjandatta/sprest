/**
 * Target Information
 */
export interface TargetInfoSettings {
    /** True if the expected request returns an array buffer. */
    bufferFl?:boolean;

    /** The method to execute after the asynchronous request executes. */
    callback?:() => void;

    /** The data to be passed in the body of the request. */
    data?:any;

    /** True to default the request to the web api, site api otherwise. */
    defaultToWebFl?:boolean;

    /** The method to execute. */
    method?:string;

    /** The endpoint of the request. */
    endpoint?:string;

    /** The url of the site/web to execute the request against. */
    url?:string;
}