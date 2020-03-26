import { Base, Request } from "../../utils";

/**
 * Convert a JSON string to a base object
 */
export const parse = <T = Base>(jsonString: string): T => {
    // Try to parse the string
    try {
        let obj = JSON.parse(jsonString);

        // Create a base object
        let base = new Base(obj.props);

        // Set the properties
        base.response = obj.response;
        base.status = obj.status;
        base.targetInfo = obj.targetInfo;

        // Update the object
        Request.updateDataObject(base, false);

        // Return the base object
        return base as any;
    } catch { }

    return null;
}
