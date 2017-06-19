import { IWebQueryResult } from "./webResults";
import { IBase, IResults, IWeb, IWebCreationInformation } from "..";
/**
 * Webs
 */
export interface IWebs extends IResults<IWeb>, IBase<IResults<IWeb>, IResults<IWebQueryResult>> {
    /**
     * Methods
     */
    /**
     * Adds a site to the site collection.
     * @param parameters - The web creation information.
     */
    add(parameters: IWebCreationInformation): IWeb;
    /**
     * Method to get the next set of results.
     */
    next(): IWebs;
}
