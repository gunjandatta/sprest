import { TargetInfo } from ".";
/**
 * Batch Requests
 */
export declare class Batch {
    /**
     * Methods
     */
    static getTargetInfo(requests: Array<Array<{
        callback?: any;
        targetInfo: TargetInfo;
    }>>): TargetInfo;
    private static createBatch(batchId, requests);
}
