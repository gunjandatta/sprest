import { IListItemResult } from "../mapper/types";
import { Base } from "../utils";
import { IRequest } from "./types";
/**
 * Creates a document set item.
 * @param name - The name of the document set folder to create.
 * @param listName - The name of the document set library.
 * @param webUrl - The url of the web containing the document set library.
 */
export declare const createDocSet: (name: string, listName: string, webUrl?: string) => PromiseLike<IListItemResult>;
/**
 * Convert a JSON string to a base object
 */
export declare const parse: <T = Base<any, any, any>>(jsonString: string) => T;
/**
 * XML HTTP Request
 */
export declare const request: (props: IRequest) => PromiseLike<any>;
