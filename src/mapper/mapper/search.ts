import { RequestType } from "../../utils";

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