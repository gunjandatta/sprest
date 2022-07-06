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