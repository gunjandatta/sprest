import { IBase } from "./base";
import { IMethodInfo } from "./methodInfo";
import { ITargetInfoProps } from "./targetInfo";

/**
 * Request Helper Methods
 */
export interface IBaseHelper {
    /** Adds the base methods. */
    addBaseReferences(base: IBase, obj: any);

    /** Adds methods based on the object type. */
    addMethods(base: IBase, data: any, context?: any);

    /** Adds properties based on the object type. */
    addProperties(base: IBase, data: any);

    /** Method to execute the request. */
    executeMethod(base: IBase, methodName: string, methodConfig: IMethodInfo, args?: any);

    /** Gets the property as a collection. */
    getCollection(base: IBase, method: string, args?: any): IBase;

    /** Gets the property. */
    getProperty(base: IBase, propertyName: string, requestType?: string): IBase;

    /** Parses the xml string and creates a base object. */
    parseXML(xml: string): IBase;

    /** Converts the base object to a JSON string. */
    stringify(base: IBase): string;

    /** Updates the data collection objects. */
    updateDataCollection(obj: IBase, results: Array<IBase>);

    /** Updates the metadata. */
    updateMetadata(base, data);

    /** Updates the metdata uri. */
    updateMetadataUri(base: IBase, metadata, targetInfo: ITargetInfoProps);
}
