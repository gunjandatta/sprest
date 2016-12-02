declare module GD.ComplexTypes {
    /**
     * Email Properties
     */
    interface EmailProperties {
        /** A collection of additional email headers. */
        AdditionalHeaders?: Results.KeyValue;

        /** A value that specifies the email addresses to blind carbon copy the email to. */
        BCC?: Results.String;

        /** A value that specifies the body of the email. */
        Body: string;

        /** A value that specifies the email addresses to carbon copy the email to. */
        CC?: Results.String;

        /** A value that specifies the email address of the sender. */
        From: string;

        /** A value that specifies the email addresses to send the email to. */
        To: Results.String;

        /** A value that specifies the email subject. */
        Subject: string;
    }
}

declare module GD.Types {
    /**
     * Email
     */
    interface IEmail {
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
        send(properties:ComplexTypes.EmailProperties): IBase;
    }
}
