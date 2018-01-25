import * as Types from "./index.def";
import { Base } from ".";
/**
 * Request Helper
 */
export declare class BaseHelper implements Types.IBaseHelper {
    base: Base;
    requestType: number;
    response: string;
    status: number;
    addMethods(base: Base, data: any): void;
    addProperties(base: any, data: any): void;
    updateDataCollection(obj: any, results: any): void;
    updateDataObject(isBatchRequest: boolean): void;
    updateMetadata(base: any, data: any): void;
}
