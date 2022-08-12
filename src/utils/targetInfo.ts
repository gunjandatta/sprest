import { ITargetInfo, ITargetInfoProps } from "../../@types/utils";
import { ContextInfo } from "../lib";
import { RequestType } from ".";

/**
 * Target Information
 */
export class TargetInfo implements ITargetInfo {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(props: ITargetInfoProps) {
        // Default the properties
        this.props = props || {};
        this.requestData = this.props.data;
        this.requestHeaders = this.props.requestHeader;
        this.requestMethod = this.props.method ? this.props.method : "GET";

        // See if this is a graph request
        if (this.isGraph) {
            // Set the request method
            this.requestMethod = this.props.requestType == RequestType.GraphGet ? "GET" : "POST";

            // Set the security flag
            let defaultProps = this.requestData || {};
            this.requestData = { ...{ securityEnabledOnly: true }, ...defaultProps };

            // Set the request url
            this.requestUrl = this.props.endpoint;
        } else {
            // Set the request url
            this.setRESTRequestUrl();
        }
    }

    /*********************************************************************************************************************************/
    // Public Properties
    /*********************************************************************************************************************************/

    // The target information properties
    props: ITargetInfoProps;

    // Flag to determine if this is a batch request
    get isBatchRequest(): boolean { return this.props.endpoint == "$batch"; }

    // Flag to determine if this is a graph request
    get isGraph(): boolean { return this.props.requestType == RequestType.GraphGet || this.props.requestType == RequestType.GraphPost; }

    // The request data
    requestData: any;

    // The request header
    requestHeaders: object;

    // The request method
    requestMethod: string;

    // The request type
    requestType: number;

    // The request url
    requestUrl: string;

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Method to get the domain url
    private getDomainUrl(): string {
        let url: any = ContextInfo.document ? ContextInfo.document.location.href : "";

        // See if this is an app web
        if (ContextInfo.isAppWeb) {
            // Set the url to the host url
            url = TargetInfo.getQueryStringValue("SPHostUrl") + "";
        }

        // Split the url and validate it
        url = url.split('/');
        if (url && url.length >= 2) {
            // Set the url
            url = url[0] + "//" + url[2];
        }

        // Return the url
        return url;
    }

    // Method to get a query string value
    private static getQueryStringValue(key: string) {
        // Get the query string
        var queryString: any = ContextInfo.existsFl && ContextInfo.document ? ContextInfo.document.location.href.split('?') : [""];
        queryString = queryString.length > 1 ? queryString[1] : queryString[0];

        // Parse the values
        var values = queryString.split('&');
        for (var i = 0; i < values.length; i++) {
            var keyValue = values[i].split('=');

            // Ensure a value exists
            if (keyValue.length == 1) { continue; }

            // See if this is the key we are looking for
            if (decodeURIComponent(keyValue[0]) == key) {
                return decodeURIComponent(keyValue[1]);
            }
        }

        // Key was not found
        return null;
    }

    // Method to set the request url for the REST API
    private setRESTRequestUrl() {
        let endpoint = this.props.endpoint ? "/" + this.props.endpoint : "";
        let hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
        let qs = (endpoint.indexOf("?") === -1 ? "?" : "&") + "@target='{{Target}}'";
        let template = "{{Url}}" + (this.props.endpoint ? "/_api/{{EndPoint}}{{TargetUrl}}" : "");

        // See if we are defaulting the url for the app web
        if (ContextInfo.existsFl && ContextInfo.window.$REST && ContextInfo.window.$REST.DefaultRequestToHostFl && ContextInfo.isAppWeb && !this.props.overrideDefaultRequestToHostFl && this.props.url == null) {
            // Default the url to the host web
            this.props.url = hostUrl;
        }

        // Ensure the url exists
        if (this.props.url == null) {
            // Default the url to the current site/web url
            this.props.url = this.props.defaultToWebFl == false ? ContextInfo.siteAbsoluteUrl : ContextInfo.webAbsoluteUrl;
        }
        // Else, see if the url already contains the full request
        else if (/\/_api\//.test(this.props.url)) {
            // Get the url
            var url = this.props.url.toLowerCase().split("/_api/");

            // See if this is the app web and we are executing against a different web
            if (ContextInfo.isAppWeb && url[0] != ContextInfo.webAbsoluteUrl.toLowerCase()) {
                // Set the request url
                this.requestUrl = ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" +
                    url[1] + endpoint + qs.replace(/{{Target}}/g, url[0]);
            }
            else {
                // Set the request url
                this.requestUrl = this.props.url + (this.props.endpoint ? "/" + this.props.endpoint : "");
            }
            return;
        }

        // See if this is a relative url
        if (this.props.url.indexOf("http") != 0) {
            // Add the domain
            this.props.url = this.getDomainUrl() + this.props.url;
        }

        // See if this is the app web, and we are executing against a different web
        if (ContextInfo.isAppWeb && this.props.url != ContextInfo.webAbsoluteUrl) {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, ContextInfo.webAbsoluteUrl)
                .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)" + endpoint)
                .replace(/{{TargetUrl}}/g, qs.replace(/{{Target}}/g, this.props.url));
        } else {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, this.props.url)
                .replace(/{{EndPoint}}/g, this.props.endpoint)
                .replace(/{{TargetUrl}}/g, "");
        }
    }
}