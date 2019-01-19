import { IBase } from "./base";
import { IMethodInfo } from "./methodInfo";
import { ITargetInfoProps } from "./targetInfo";

/**
 * Request Helper Methods
 */
export interface IBaseHelper {
    /** Adds the base methods. */
    addBaseMethods(base: IBase, obj: any);

    /** Adds methods based on the object type. */
    addMethods(base: IBase, data: any, context?: any);

    /** Adds properties based on the object type. */
    addProperties(base: IBase, data: any);

    /** Method to wait for the requests to complete. */
    done(base: IBase, resolve: (value?: any) => void);

    /** Method to execute the request. */
    execute(base: IBase, args: Array<any>): IBase;

    /** Method to execute the request. */
    executeMethod(base: IBase, methodName: string, methodConfig: IMethodInfo, args?: any);

    /** Method to execute the request. */
    executeRequest(base: IBase, asyncFl: boolean, callback?: (response: any, errorFl: boolean) => void);

    /** Gets the property as a collection. */
    getCollection(base: IBase, method: string, args?: any): IBase;

    /** Gets the next set of results. */
    getNextSetOfResults(base: IBase): IBase;

    /** Gets the property. */
    getProperty(base: IBase, propertyName: string, requestType?: string): IBase;

    /** Parses the xml string and creates a base object. */
    parseXML(xml: string): IBase;

    /** Converts the base object to a JSON string. */
    stringify(base: IBase): string;

    /** Updates the data collection objects. */
    updateDataCollection(base: IBase, results: Array<IBase>);

    /** Updates the data object. */
    updateDataObject(base: IBase, isBatchRequest: boolean);

    /** Updates the metadata. */
    updateMetadata(base, data);

    /** Updates the metdata uri. */
    updateMetadataUri(base: IBase, metadata, targetInfo: ITargetInfoProps);

    /** Validates the data collection results. */
    validateDataCollectionResults(base: IBase): PromiseLike<void>;

    /**
     * Method to wait for the parent requests to complete
     * @param base - The base object.
     * @param callback - The callback method.
     * @param requestIdx - The request index.
     */
    waitForRequestsToComplete(base: IBase, callback: () => void, requestIdx?: number);
}
