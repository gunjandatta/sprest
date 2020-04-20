/**
 * Base Execution
 */
export interface IBaseExecution<Type = any, Result = Type> {
    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param resolve - The method to be executed after the request completes.
     */
    batch(resolve: (value?: Result) => void): Type;

    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param appendFl - Flag to execute the request as part of a change set.
     */
    batch(appendFl?: boolean): Type;

    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param resolve - The method to be executed after the request completes.
     * @param appendFl - Flag to execute the request as part of a change set.
     */
    batch(resolve: (value?: Result) => void, appendFl?: boolean): Type;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): Type;

    /**
     * Method to execute the request.
     * @param resolve - The method to be executed if the request is successful.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(resolve?: (value?: Result) => void, waitFl?: boolean): Type;

    /**
     * Method to execute the request.
     * @param resolve - The method to be executed if the request is successful.
     * @param reject - The method to be executed if the request fails.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(resolve?: (value?: Result) => void, reject?: (value?: Result) => void, waitFl?: boolean): Type;

    /**
     * Method to execute the request. (This is an internal method, but can be used for dev purposes.)
     * @param methodName - The method name to execute.
     * @param methodConfig - The configuration to pass with the request.
     * @param args - The optional arguments for the request.
     */
    executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any);

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): Result;

    /**
     * Method to wait for the requests to complete.
     * @param resolve - The method to be executed after the request completes.
     */
    done<T=Result>(resolve: (value?: T) => void);

    /**
     * Method to get the request information.
     */
    getInfo(): IRequestInfo;
}

/**
 * Base Query
 */
export interface IBaseQuery<Type = any, Result = Type> extends IBaseExecution<Type> {
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query?: (query: IODataQuery) => IBaseExecution<Result>;
}

/**
 * Base Result
 */
export interface IBaseResult {
    /** True, if the object exists, false otherwise. */
    existsFl: boolean;

    /** The response */
    response: string;

    /**
     * Method to stringify the object.
     */
    stringify(): string;
}

/**
 * Base Results
 */
export interface IBaseResults<Type = any> extends IBaseResult {
    /** Returns the next set of results. */
    next(): IBaseCollection<Type>;

    /** True, if more items exist. */
    nextFl: boolean;

    /** Results */
    results: Array<Type>;
}

/**
 * Base Collection
 */
export interface IBaseCollection<Type = any, Result = Type, Methods = void> extends IBaseQuery<IBaseResults<Type> & Methods, IBaseResults<Result> & Methods> { }

/**
 * Mapper Method
 */
export interface IMapperMethod {
    data?: any;
    inheritMetadataType?: boolean;
    metadataType?: any;
    name?: string;
    replaceEndpointFl?: boolean;
    requestType?: number;
    requestMethod?: string;
    returnType?: string;
}

/**
 * Method Information Settings
 */
export interface IMethodInfo {
    argNames?: Array<string>;
    argValues?: Array<any>;
    data?: any;
    getAllItemsFl?: boolean;
    inheritMetadataType?: boolean;
    metadataType?: string;
    name?: string;
    replaceEndpointFl?: boolean;
    requestMethod?: string;
    requestType?: number;
    returnType?: string;
}

/**
 * OData Query
 */
export interface IODataQuery {
    /** An optional custom query string */
    Custom?: string;

    /** The properties to expand. */
    Expand?: Array<string>;

    /** The filters. */
    Filter?: string;

    /**
     * Flag to get all items.
     * Use this flag to get past the 5000 limit.
     */
    GetAllItems?: boolean;

    /** The order by fields. */
    OrderBy?: Array<string>;

    /** The fields to select. */
    Select?: Array<string>;

    /** The number of results to skip. */
    Skip?: number;

    /** The max number of results to return. */
    Top?: number;
}

/**
 * Request Information
 */
export interface IRequestInfo {
    /** The data being sent in the body of the request. */
    data?: object;

    /** The request headers. */
    headers: { [key: string]: string };

    /** The request method (GET/POST) */
    method: string;

    /** The url of the request. */
    url: string;
}