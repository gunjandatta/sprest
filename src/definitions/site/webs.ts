import {
    IBase, IBaseCollection,
    IWeb, IWebCreationInformation, IWebQueryResult, IWebResult
} from "..";

/**
 * Methods
 */
export interface IWebsMethods {
    /**
     * Adds a site to the site collection.
     * @param parameters - The web creation information.
     */
    add(parameters: IWebCreationInformation): IBase<IWebResult>;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IWebResults>;
}

/**
 * Webs
 */
export interface IWebs extends IWebsMethods, IBaseCollection<IWeb, IWebResult, IWebQueryResult> { }

/**
 * Web Results
 */
export interface IWebResults extends IWebsMethods, IBaseCollection<IWebResult, IWebResult, IWebQueryResult> { }