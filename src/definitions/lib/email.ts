import {
    ComplexTypes,
    IBase
} from "../index"
/**
 * Email Properties
 */
export interface EmailProperties {
    /** A collection of additional email headers. */
    AdditionalHeaders?: Array<ComplexTypes.KeyValue>;

    /** A string or collection of email addresses to blind carbon copy the email to. */
    BCC?: string | Array<string>;

    /** A value that specifies the body of the email. */
    Body: string;

    /** A string or collection of email addresses to carbon copy the email to. */
    CC?: string | Array<string>;

    /** A value that specifies the email address of the sender. */
    From: string;

    /** A string or collection of email addresses to send the email to. */
    To: string | Array<string>;

    /** A value that specifies the email subject. */
    Subject: string;
}

/**
 * Email
 */
export interface IEmail {
    /**
     * Properties
     */

    /**
     * Methods
     */

    /**
     * Method to send an email.
     * @param properties - The email information.
     */
    send(properties:EmailProperties): IBase;
}