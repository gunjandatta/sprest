import { IMethodInfo, IRequestInfo, ITargetInfo } from "../definitions";
import { XHRRequest } from ".";
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
    done(callback: (...args) => any): void;
    execute(...args: any[]): this;
    executeAndWait(): this;
    getInfo(): IRequestInfo;
    then(resolve: any, reject: any): PromiseLike<Base>;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private base;
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
    private updateDataCollection(results);
    protected updateDataObject(): void;
    private updateMetadata(data);
    private updateMetadataUri(metadata, targetInfo);
    private validateDataCollectionResults(request, promise?);
    private waitForRequestsToComplete(callback, requestIdx?);
}
