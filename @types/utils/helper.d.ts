import { IMethodInfo, IRequestInfo } from "gd-sprest-def/lib/base";
import { IBase } from "./base";
import { ITargetInfoProps } from "./targetInfo";

/**
 * Request Helper Methods
 */
export interface IBaseHelper {
    /** Adds the base methods. */
    addBaseMethods(base: IBase, obj: any);

    /** Method to wait for the requests to complete. */
    done(base: IBase, resolve: (value?: any) => void);

    /** Method to execute the request. */
    executeMethod(base: IBase, methodName: string, methodConfig: IMethodInfo, args?: any);

    /** Gets the property as a collection. */
    getCollection(base: IBase, method: string, args?: any): IBase;

    /** Gets the next set of results. */
    getNextSetOfResults(base: IBase): IBase;

    /** Gets the property. */
    getProperty(base: IBase, propertyName: string, requestType?: string): IBase;

    /** Gets the XHR request information. */
    getRequestInfo(base: IBase): IRequestInfo;

    /** Converts the base object to a JSON string. */
    stringify(base: IBase): string;

    /** Updates the data collection objects. */
    updateDataCollection(base: IBase, results: Array<IBase>);

    /** Updates the expanded properties for odata queries. */
    updateExpandedProperties(base: IBase);

    /** Updates the metadata. */
    updateMetadata(base, data);

    /** Updates the metdata uri. */
    updateMetadataUri(base: IBase, metadata, targetInfo: ITargetInfoProps);
}
