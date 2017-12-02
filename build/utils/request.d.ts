import { Base } from ".";
/**
 * Request Helper Methods
 */
export declare class Request {
    static addMethods(base: Base, data: any): void;
    static addProperties(base: any, data: any): void;
    static updateDataCollection(obj: any, results: any): void;
    static updateDataObject(base: Base, isBatchRequest: boolean): any;
    static updateMetadata(base: any, data: any): void;
}
