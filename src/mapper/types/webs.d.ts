import { SP } from "gd-sprest-def";
import { IBaseExecution, IBaseCollection } from "../../utils/types/base";
import { IWeb, IWebQueryResult, IWebResult } from ".";

/**
 * Methods
 */
export interface IWebsMethods {
    /**
     * Adds a site to the site collection.
     * @param parameters - The web creation information.
     */
    add(parameters: SP.WebCreationInformation): IBaseExecution<IWeb, IWebResult>;

    /**
     * Method to get the next set of results.
     */
    next(): IWebs & IBaseExecution<IWebs, IWebResults>;
}

/**
 * Webs
 */
export interface IWebs extends IWebsMethods, IBaseCollection<IWeb, IWebResult, IWebQueryResult> { }

/**
 * Web Results
 */
export interface IWebResults extends IWebsMethods, IBaseCollection<IWebResult, IWebResult, IWebQueryResult> { }