import { Types } from "../..";
import { IBaseExecution, IRequestInfo } from ".";
export interface IBase<Type = any, Result = Type, QueryResult = Result> extends IBaseExecution<Type, Result> {
    existsFl: boolean;
    parent: any;
    response: string;
    done<T = IBase>(resolve: (value?: T) => void): any;
    getInfo(): IRequestInfo;
    query?(query: Types.SP.ODataQuery): IBase<Result, QueryResult>;
    stringify(): string;
}
export interface IBaseCollectionResult<Result> extends Types.SP.IResults<Result> {
    existsFl: boolean;
    response: string;
    stringify(): string;
}
export interface IBaseCollection<Type = any, Result = Type, QueryResult = Result> extends Types.SP.IResults<Type>, IBase<IBaseCollectionResult<Result>, IBaseCollectionResult<Result>, IBaseCollectionResult<QueryResult>> {
}
