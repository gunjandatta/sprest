import { Base } from ".";
/**
 * Request Helper Methods
 */
export interface IBaseHelper {
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
/**
 * Request Helper
 */
export declare class BaseHelper implements IBaseHelper {
    addMethods(base: Base, data: any): void;
    addProperties(base: any, data: any): void;
    updateDataCollection(obj: any, results: any): void;
    updateDataObject(base: Base, isBatchRequest: boolean): void;
    updateMetadata(base: any, data: any): void;
}
