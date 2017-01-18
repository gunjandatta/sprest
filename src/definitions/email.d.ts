declare module "gd-sprest" {
    export namespace Types {
        /**
         * Email Properties
         */
        export interface EmailProperties {
            /** A collection of additional email headers. */
            AdditionalHeaders?: ComplexTypes.KeyValue;

            /** A value that specifies the email addresses to blind carbon copy the email to. */
            BCC?: String;

            /** A value that specifies the body of the email. */
            Body: string;

            /** A value that specifies the email addresses to carbon copy the email to. */
            CC?: String;

            /** A value that specifies the email address of the sender. */
            From: string;

            /** A value that specifies the email addresses to send the email to. */
            To: String;

            /** A value that specifies the email subject. */
            Subject: string;
        }

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
            send(properties:EmailProperties): Types.IBase;
        }
    }
}