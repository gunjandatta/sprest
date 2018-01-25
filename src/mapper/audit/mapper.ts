import { RequestType } from "../../utils/index";

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