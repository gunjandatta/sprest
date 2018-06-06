import { IBase } from "../../utils/types";
/**
 * Graph Methods
 */
export interface IGraphMethods {
}
/**
 * Graph Query Properties
 */
export interface IGraphQueryProps {
}
/**
 * Graph Result
 */
export interface IGraphResult {
}
/**
 * Graph Query Result
 */
export interface IGraphQueryResult {
}
/**
 * Graph Token
 */
export interface IGraphToken {
    access_token: string;
    expires_on: string;
    resource: string;
    scope: string;
    token_type: string;
}
/**
 * Graph
 */
export interface IGraph extends IGraphMethods, IGraphQueryProps, IBase<IGraph, IGraphResult, IGraphQueryResult> {
    /**
     * Constructor
     * @param version - The version of the graph to target.
     */
    new (listName: string): IGraph;
    /**
     * Method to get the access token from a classic page.
     */
    getAccessToken(): Promise<IGraphToken>;
}
/**
 * Graph User
 */
export interface IGraphUser {
    id: string;
    businessPhones: Array<string>;
    displayName: string;
    givenName: string;
    jobTitle: string;
    mail: string;
    mobilePhone: string;
    officeLocation: string;
    preferredLanguage: string;
    surname: string;
    userPrincipalName: string;
}
