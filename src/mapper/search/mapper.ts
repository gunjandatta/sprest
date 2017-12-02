import { RequestType } from "../../types";

/**
 * Search
 */
export const search = {
    postquery: {
        argNames: ["request"],
        metadataType: "Microsoft.Office.Server.Search.REST.SearchRequest",
        requestType: RequestType.PostWithArgsInBody
    }
}