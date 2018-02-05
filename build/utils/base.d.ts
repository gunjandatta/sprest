import { BaseExecution, Types } from ".";
export declare class Base<Type = any, Result = Type, QueryResult = Result> extends BaseExecution<Type, Result> implements Types.IBase {
    constructor(targetInfo: Types.ITargetInfo);
    existsFl: any;
    done<T = Types.IBase>(resolve: (value?: T) => void): void;
    getInfo(): Types.IRequestInfo;
    stringify(): string;
}
