import {
    IBase,
    IResults,
    IWeb, IWebCreationInformation, IWebQueryResult
} from "..";

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
    add(parameters:IWebCreationInformation): IBase<IWeb>;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IWebs>;
}