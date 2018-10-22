import { IBase } from "./types/base";
import { IRequestInfo, ITargetInfoProps } from "./types";
import { BaseExecution, TargetInfo } from ".";

/*********************************************************************************************************************************/
// Base
// This is the base class for all objects.
/*********************************************************************************************************************************/
export class Base<Type = any, Result = Type, QueryResult = Result> extends BaseExecution<Type, Result> implements IBase {
    /**
     * Constructor
     * @param targetInfo - The target information.
     */
    constructor(targetInfo: ITargetInfoProps) {
        super();

        // Default the properties
        this.targetInfo = Object.create(targetInfo || {});
        this.responses = [];
        this.requestType = 0;
        this.waitFlags = [];
    }

    // Flag to determine if the requested object exists
    existsFl;

    // Method to wait for the requests to complete
    done<T=IBase>(resolve: (value?: T) => void) {
        // Ensure the base is set
        this.base = this.base ? this.base : this;

        // Ensure the response index is set
        this.responseIndex = this.responseIndex >= 0 ? this.responseIndex : 0;

        // Wait for the responses to execute
        this.waitForRequestsToComplete(() => {
            let responses = this.base.responses;

            // Clear the responses
            this.base.responses = [];

            // Clear the wait flags
            this.base.waitFlags = [];

            // Resolve the request
            resolve ? resolve.apply(this, responses) : null;
        });
    }

    // Method to get the request information
    getInfo(): IRequestInfo { return (new TargetInfo(this.targetInfo)).requestInfo; }

    // Method to stringify the object
    stringify(): string {
        // Stringify the object
        return JSON.stringify({
            response: this.response,
            status: this.status,
            targetInfo: {
                accessToken: this.targetInfo.accessToken,
                bufferFl: this.targetInfo.bufferFl,
                defaultToWebFl: this.targetInfo.defaultToWebFl,
                endpoint: this.targetInfo.endpoint,
                method: this.targetInfo.method,
                overrideDefaultRequestToHostFl: this.targetInfo.overrideDefaultRequestToHostFl,
                requestDigest: this.targetInfo.requestDigest,
                requestHeader: this.targetInfo.requestHeader,
                requestInfo: this.targetInfo.requestInfo,
                requestType: this.targetInfo.requestType,
                url: this.targetInfo.url
            }
        });
    }
}