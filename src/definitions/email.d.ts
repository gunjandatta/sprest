declare module $REST.Settings {
    /**
     * Email Creation Information
     */
    interface EmailCreationInformation {
        /** A value that specifies the email addresses to blind carbon copy the email to. */
        BCC?:Array<string>;

        /** A value that specifies the body of the email. */
        Body:string;

        /** A value that specifies the email addresses to carbon copy the email to. */
        CC?:Array<string>;

        /** A value that specifies the email address of the sender. */
        From:string;

        /** A value that specifies the email addresses to send the email to. */
        To:Array<string>;

        /** A value that specifies the email subject. */
        Subject:string;
    }
}

declare module $REST.Types {
    /**
     * Email
     */
    interface IEmail {
        /**
         * Constructor
         * @param targetInfo - (Optional) The target information.
         */
        new(targetInfo?:Settings.TargetInfoSettings): IEmail;

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
        send(properties:Settings.EmailCreationInformation): IBase;
    }
}
