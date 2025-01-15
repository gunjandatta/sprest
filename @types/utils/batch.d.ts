import { IBase } from "./base";
import { ITargetInfo } from "./targetInfo";

/**
 * Batch Request
 */
export interface IBatchRequest {
    callback?: any;
    changesetId?: string;
    response?: IBase;
    targetInfo: ITargetInfo;
}

/**
 * V2 Batch Request
 */
export interface IBatchRequestV2 {
    body?: object | string;
    headers?: { [key: string]: string };
    id: string;
    method: string;
    url: string;
}