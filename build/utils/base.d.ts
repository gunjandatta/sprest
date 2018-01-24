export * from "./base.d";
import { BaseExecution, IBase, IRequestInfo, ITargetInfo } from ".";
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class Base<Type = any, Result = Type, QueryResult = Result> extends BaseExecution<Type, Result> implements IBase {
    /**
     * Constructor
     * @param targetInfo - The target information.
     */
    constructor(targetInfo: ITargetInfo);
    defaultToWebFl: boolean;
    existsFl: any;
    done(callback: (...args) => any): void;
    getInfo(): IRequestInfo;
    stringify(): string;
}
