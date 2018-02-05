import { Base } from "..";
export interface IBaseHelper {
    base: Base;
    requestType: number;
    response: string;
    status: number;
    addMethods(base: Base, data: any): any;
    addProperties(base: Base, data: any): any;
    updateDataCollection(obj: Base, results: Array<Base>): any;
    updateDataObject(isBatchRequest: boolean): any;
    updateMetadata(base: any, data: any): any;
}
