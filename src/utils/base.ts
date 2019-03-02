import { IMethodInfo, IRequestInfo } from "gd-sprest-def/base";
import { IBase } from "./types/base";
import { ITargetInfo, ITargetInfoProps } from "./types/targetInfo";
import { Batch, Helper, Request, TargetInfo, XHRRequest } from ".";

/*********************************************************************************************************************************/
// Base
// This is the base class for all objects.
/*********************************************************************************************************************************/
export class Base<Type = any, Result = Type, QueryResult = Result> implements IBase {
    /**
     * Constructor
     * @param targetInfo - The target information.
     */
    constructor(targetInfo: ITargetInfoProps) {
        // Default the properties
        this.targetInfo = Object.create(targetInfo || {});
        this.responses = [];
        this.requestType = 0;
        this.waitFlags = [];
    }

    /**
     * Execution Properties
     */

    batchRequests: Array<Array<{ callback?: any, response?: IBase, targetInfo: ITargetInfo }>>;
    parent: IBase;
    responseIndex: number;
    responses: Array<IBase>;
    waitFlags: Array<boolean>;

    /**
     * Request Properties
     */

    base: IBase;
    getAllItemsFl: boolean;
    existsFl;
    nextFl: boolean;
    requestType: number;
    response: string;
    status: number;
    targetInfo: ITargetInfoProps;
    xml: string | XMLDocument;
    xhr: XHRRequest;

    // Method to update the object functions, based on the type
    addMethods(data: any, context?: any) { return Request.addMethods(this, data, context); }

    // Method to execute this request as a batch request
    batch(...args) { return Batch.execute(this, args); }

    // Method to wait for the requests to complete
    done<T=IBase>(resolve: (value?: T) => void) { return Helper.done(this, resolve); }

    // Method to execute the request
    execute(...args) { return Request.execute(this, args); }

    // Method to execute a method
    executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any) { return Helper.executeMethod(this, methodName, methodConfig, args); }

    // Method to execute the request synchronously
    executeAndWait() { return Request.executeRequest(this, false); }

    // Method to return a collection
    getCollection(method: string, args?: any) { return Helper.getCollection(this, method, args); }

    // Method to get the request information
    getInfo(): IRequestInfo { return Helper.getRequestInfo(this); }

    // Method to get the next set of results
    getNextSetOfResults() { return Helper.getNextSetOfResults(this); }

    // Method to return a property of the base object
    getProperty(propertyName: string, requestType?: string) { return Helper.getProperty(this, propertyName, requestType); }

    // Method to stringify the object
    stringify(): string { return Helper.stringify(this); }

    // Method to update the metadata uri
    updateMetadataUri(metadata, targetInfo: ITargetInfoProps) { return Helper.updateMetadataUri(this, metadata, targetInfo); }

    // Method to wait for the parent requests to complete
    waitForRequestsToComplete(callback: () => void, requestIdx?: number) { Request.waitForRequestsToComplete(this, callback, requestIdx); }
}