import { TargetInfo } from ".";
export declare class XHRRequest {
    constructor(asyncFl: boolean, targetInfo: TargetInfo, callback?: (...args) => void);
    readonly completedFl: boolean;
    readonly response: any;
    readonly request: any;
    readonly requestData: any;
    readonly requestUrl: string;
    readonly status: number;
    private asyncFl;
    private targetInfo;
    private onRequestCompleted;
    private xhr;
    private createXHR();
    private defaultHeaders();
    private execute();
}
