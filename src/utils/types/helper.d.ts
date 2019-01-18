import { IBase } from "./base";

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

    /** Parses the xml string and creates a base object. */
    parseXML(xml: string): IBase;

    /** Updates the data collection objects. */
    updateDataCollection(obj: IBase, results: Array<IBase>);

    /** Updates the metadata. */
    updateMetadata(base, data);
}
