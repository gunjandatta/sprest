import { IBase, IMethodInfo, IRequestInfo, ITargetInfo } from "../definitions/index";
import { XHRRequest } from "./index";
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class Base<Type = any, Result = Type, QueryResult = Result> {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    constructor(targetInfo: ITargetInfo);
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    existsFl: any;
    parent: Base;
    requestType: any;
    readonly response: any;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    batch(arg?: any): this;
    done(callback: (...args) => any): void;
    execute(...args: any[]): this;
    executeAndWait(): this;
    getInfo(): IRequestInfo;
    then(resolve: any, reject: any): PromiseLike<IBase>;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private base;
    private batchRequests;
    protected defaultToWebFl: boolean;
    protected getAllItemsFl: boolean;
    private promise;
    protected request: XHRRequest;
    protected responses: Array<Base>;
    private responseIndex;
    protected targetInfo: ITargetInfo;
    private waitFlags;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    protected addMethods(obj: any, data: any): void;
    private addProperties(obj, data);
    protected executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any): Base<any, any, any>;
    protected executeRequest(asyncFl: boolean, callback?: (...args) => void): this;
    private getCollection(method, args?);
    protected getProperty(propertyName: string, requestType?: string): Base<any, any, any>;
    protected getNextSetOfResults(): Base<any, any, any>;
    private updateDataCollection(obj, results);
    protected updateDataObject(isBatchRequest: boolean): any;
    private updateMetadata(obj, data);
    private updateMetadataUri(metadata, targetInfo);
    private validateDataCollectionResults(request, promise?);
    private waitForRequestsToComplete(callback, requestIdx?);
}
