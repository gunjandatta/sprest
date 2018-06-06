import { IBase } from "../../utils/types";

/**
 * Graph Methods
 */
export interface IGraphMethods { }

/**
 * Graph Query Properties
 */
export interface IGraphQueryProps { }

/**
 * Graph Result
 */
export interface IGraphResult { }

/**
 * Graph Query Result
 */
export interface IGraphQueryResult { }

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
    new(listName: string): IGraph;

    /**
     * Method to get the access token from a classic page.
     */
    getAccessToken(): Promise<IGraphToken>;
}

/**
 * Graph User
 */
export interface IGraphUser {
    // The unique identifier for the user.
    id: string;

    // The user's phone numbers.
    businessPhones: Array<string>;

    // The name displayed in the address book for the user.
    displayName: string;

    // The first name of the user.
    givenName: string;

    // The user's job title.
    jobTitle: string;

    // The user's email address.
    mail: string;

    // The user's cellphone number.
    mobilePhone: string;

    // The user's physical office location.
    officeLocation: string;

    // The user's language of preference.
    preferredLanguage: string;

    // The last name of the user.
    surname: string;

    // The user's principal name.
    userPrincipalName: string;
}