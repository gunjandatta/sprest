import { IWeb, IWebCreationInformation, IWebQueryResult, IWebResult } from ".";
import { IBase, IBaseCollection } from "../../utils/index.def";
/**
 * Methods
 */
export interface IWebsMethods {
    /**
     * Adds a site to the site collection.
     * @param parameters - The web creation information.
     */
    add(parameters: IWebCreationInformation): IBase<IWeb, IWebResult>;
    /**
     * Method to get the next set of results.
     */
    next(): IWebs & IBase<IWebs, IWebResults>;
}
/**
 * Webs
 */
export interface IWebs extends IWebsMethods, IBaseCollection<IWeb, IWebResult, IWebQueryResult> {
}
/**
 * Web Results
 */
export interface IWebResults extends IWebsMethods, IBaseCollection<IWebResult, IWebResult, IWebQueryResult> {
}
