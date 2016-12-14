declare module $REST.ComplexTypes {
    /**
     * Client People Picker Query Parameters
     */
    interface PeoplePickerQuery {
        /** True to allow the email address. */
        AllowEmailAddresses: boolean;

        /** True to allow multiple entities.  */
        AllowMultipleEntities: boolean;

        /** True to allow all url zones. */
        AllUrlZones: boolean;

        /** True to enable claim providers. */
        EnabledClaimProviders: boolean;

        /** True to force claims. */
        ForceClaims: boolean;

        /** Maximum entity suggestions. */
        MaximumEntitySuggestions: number;

        /** The principal source. */
        PrincipalSource: number;

        /** The principal type. */
        PrincipalType: number;

        /** The query string. */
        QueryString: string;

        /** Required flag. */
        Required: boolean;

        /** The SharePoint group id. */
        SharePointGroupID: number;

        /** The url zone. */
        UrlZone: string;

        /** Url zone specified flag. */
        UrlZoneSpecified: boolean;

        /** The web. */
        Web: any;

        /** The web application id. */
        WebApplicationID: any;
    }
}

declare module $REST.Types {
    /**
     * Client People Picker
     */
    interface IPeoplePicker extends IBase {
        /**
         * Constructor
         * @param settings - The search settings.
         */
        new(settings?:ComplexTypes.TargetInfoSettings): IPeoplePicker;

        /**
         * Methods
         */

        /** Method to resolve users.
         * @param query - The people picker query.
        */
        clientPeoplePickerResolveUser(query:ComplexTypes.PeoplePickerQuery);

        /** Method to search for users.
         * @param query - The people picker query.
        */
        clientPeoplePickerSearchUser(query:ComplexTypes.PeoplePickerQuery);
    }
}