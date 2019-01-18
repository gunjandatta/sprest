import { IBase } from "./base";

/**
 * Request Helper Methods
 */
export interface IBaseHelper {
    /** The base object. */
    base: IBase;

    /** The request type */
    requestType: number;

    /** The request's raw response. */
    response: string;

    /** The request's status. */
    status: number;

    /** The xml object. */
    xml: string | XMLDocument;

    /** Adds methods based on the object type. */
    addMethods(base: IBase, data: any);

    /** Adds properties based on the object type. */
    addProperties(base: IBase, data: any);

    /** Updates the data collection objects. */
    updateDataCollection(obj: IBase, results: Array<IBase>);

    /** Updates the data object. */
    updateDataObject(isBatchRequest: boolean);

    /** Updates the metadata. */
    updateMetadata(base, data);
}
