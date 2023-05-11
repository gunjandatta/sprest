import { IStringify } from "../../../@types/helper/methods";

/**
 * Convert an object to a string
 */
export const stringify: IStringify = (obj: any): string => {
    // Return the string
    return JSON.stringify(obj, (key, value) => {
        // Ensure a key exists
        if (key) {
            // See if this is a string or number, and return it
            let valueType = typeof (value);
            if (valueType === "string" || valueType === "number") { return value; }

            try {
                // Try to parse it
                JSON.parse(value);

                // Return the value
                return value;
            } catch {
                // Don't include this key/value pair
                return undefined;
            }
        }

        // Return the value
        return value;
    });
}
