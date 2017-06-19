import {
    IBase,
    IResults,
    IWeb,
    IWebCreationInformation,
    ODataQuery
} from "..";

/**
 * Webs
 */
export interface IWebs extends IResults<IWeb>, IBase<IWebs> {
    /**
     * Methods
     */

    /**
     * Adds a site to the site collection.
     * @param parameters - The web creation information.
     */
    add(parameters:IWebCreationInformation): IWeb;

    /**
     * Method to get the next set of results.
     */
    next(): IWebs;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query:ODataQuery): IBase<IWebs>;
}