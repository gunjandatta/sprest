import { BaseExecution, Types } from ".";
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class Base<Type = any, Result = Type, QueryResult = Result> extends BaseExecution<Type, Result> implements Types.IBase {
    /**
     * Constructor
     * @param targetInfo - The target information.
     */
    constructor(targetInfo: Types.ITargetInfo);
    defaultToWebFl: boolean;
    existsFl: any;
    done(callback: (...args) => any): void;
    getInfo(): Types.IRequestInfo;
    stringify(): string;
}
