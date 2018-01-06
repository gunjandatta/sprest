import { Base } from "../../utils";

/**
 * Convert a JSON string to a base object
 */
export const parse = (jsonString: string) => {
    // Try to parse the string
    try {
        let obj = JSON.parse(jsonString);

        // Create a base object
        let base = new Base(obj.props);

        // Set the properties
        base.response = obj.response;
        base.status = obj.status;

        // Update the object
        base.updateDataObject(false);

        // Return the base object
        return base as any;
    } catch { }

    return null;
}