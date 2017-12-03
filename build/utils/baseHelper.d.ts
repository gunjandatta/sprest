import { BaseExecution } from ".";
/**
 * Request Helper Methods
 */
export interface IBaseHelper {
    /** The base object. */
    base: BaseExecution;
    /** The request type */
    requestType: number;
    /** The request's raw response. */
    response: string;
    /** The request's status. */
    status: number;
    /** Adds methods based on the object type. */
    addMethods(base: BaseExecution, data: any): any;
    /** Adds properties based on the object type. */
    addProperties(base: BaseExecution, data: any): any;
    /** Updates the data collection objects. */
    updateDataCollection(obj: BaseExecution, results: Array<BaseExecution>): any;
    /** Updates the data object. */
    updateDataObject(isBatchRequest: boolean): any;
    /** Updates the metadata. */
    updateMetadata(base: any, data: any): any;
}
/**
 * Request Helper
 */
export declare class BaseHelper implements IBaseHelper {
    base: BaseExecution;
    requestType: number;
    response: string;
    status: number;
    addMethods(base: BaseExecution, data: any): void;
    addProperties(base: any, data: any): void;
    updateDataCollection(obj: any, results: any): void;
    updateDataObject(isBatchRequest: boolean): void;
    updateMetadata(base: any, data: any): void;
}
