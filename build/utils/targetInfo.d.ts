import { IRequestInfo, ITargetInfo } from "./types";
/**
 * Target Information
 */
export declare class TargetInfo {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    constructor(targetInfo: ITargetInfo);
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    request: ITargetInfo;
    readonly isBatchRequest: boolean;
    readonly isGraph: boolean;
    requestData: any;
    readonly requestInfo: IRequestInfo;
    requestHeaders: object;
    requestMethod: string;
    requestType: number;
    requestUrl: string;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private getDomainUrl();
    private static getQueryStringValue(key);
    private setGraphRequestUrl();
    private setRESTRequestUrl();
}
