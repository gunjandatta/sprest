import { RequestType } from "../../types";

/**
 * Audit
 */
export const audit = {
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};