import { Base } from ".";
/**
 * Request Helper Methods
 */
export interface IRequest {
    /** Adds methods based on the object type. */
    addMethods(base: Base, data: any): any;
    /** Adds properties based on the object type. */
    addProperties(base: Base, data: any): any;
    /** Updates the data collection objects. */
    updateDataCollection(obj: Base, results: Array<Base>): any;
    /** Updates the data object. */
    updateDataObject(base: Base, isBatchRequest: boolean): any;
    /** Updates the metadata. */
    updateMetadata(base: any, data: any): any;
}
export declare const Request: IRequest;
