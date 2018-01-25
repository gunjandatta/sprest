import { Base } from "../utils";
/**
 * Convert a JSON string to a base object
 */
export declare const parse: <T = Base<any, any, any>>(jsonString: string) => T;
