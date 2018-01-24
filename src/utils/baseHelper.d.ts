import { Base } from ".";

/**
 * Request Helper Methods
 */
export interface IBaseHelper {
    /** The base object. */
    base: Base;

    /** The request type */
    requestType: number;

    /** The request's raw response. */
    response: string;

    /** The request's status. */
    status: number;

    /** Adds methods based on the object type. */
    addMethods(base: Base, data: any);

    /** Adds properties based on the object type. */
    addProperties(base: Base, data: any);

    /** Updates the data collection objects. */
    updateDataCollection(obj: Base, results: Array<Base>);

    /** Updates the data object. */
    updateDataObject(isBatchRequest: boolean);

    /** Updates the metadata. */
    updateMetadata(base, data);
}
