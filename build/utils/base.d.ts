import * as Types from "./types";
import { BaseExecution } from ".";
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class Base<Type = any, Result = Type, QueryResult = Result> extends BaseExecution<Type, Result> implements Types.IBase {
    /**
     * Constructor
     * @param targetInfo - The target information.
     */
    constructor(targetInfo: Types.ITargetInfo);
    existsFl: any;
    done<T = Types.IBase>(resolve: (value?: T) => void): void;
    getInfo(): Types.IRequestInfo;
    stringify(): string;
}
