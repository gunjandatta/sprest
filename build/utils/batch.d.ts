import { TargetInfo } from ".";
export declare class Batch {
    static getTargetInfo(requests: Array<Array<{
        callback?: any;
        targetInfo: TargetInfo;
    }>>): TargetInfo;
    private static createBatch(batchId, requests);
}
