import { IBase, IBaseCollection, IWeb, IWebCreationInformation, IWebQueryResult, IWebResult } from "..";
/**
 * Webs
 */
export interface IWebs extends IBaseCollection<IWeb, IWebResult, IWebQueryResult> {
    /**
     * Adds a site to the site collection.
     * @param parameters - The web creation information.
     */
    add(parameters: IWebCreationInformation): IBase<IWeb>;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IWebs>;
}
