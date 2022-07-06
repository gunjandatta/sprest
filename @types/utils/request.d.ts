import { IBase } from "./base";

/**
 * Request
 */
export interface IRequest {
    /** Adds methods based on the object type. */
    addMethods(base: IBase, data: any, context?: any);

    /** Adds properties based on the object type. */
    addProperties(base: IBase, data: any);

    /** Method to execute the request. */
    execute(base: IBase, args: Array<any>): IBase;

    /** Method to execute the request. */
    executeRequest(base: IBase, asyncFl: boolean, callback?: (response: any, errorFl: boolean) => void);

    /** Parses the xml string and creates a base object. */
    parseXML(xml: string): IBase;

    /** Updates the data object. */
    updateDataObject(base: IBase, isBatchRequest: boolean, batchIdx: number, batchCallback?: (batchResponses: Array<any>) => void);

    /** Validates the data collection results. */
    validateDataCollectionResults(base: IBase): PromiseLike<void>;

    /** Method to wait for the parent requests to complete */
    waitForRequestsToComplete(base: IBase, callback: () => void, requestIdx?: number);
}