declare module $REST.ComplexTypes {
    /**
     * Entity Data
     */
    interface EntityData {
        /** Department. */
        Department: string;

        /** EMail */
        EMail: string;

        /** */
        IsAltSecIdPresent: boolean;

        /** Mobile Phone */
        MobilePhone: string;

        /** Object ID */
        ObjectId: string;

        /** Title */
        Title: string;
    }

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

    /**
     * People Picker Resolve User
     */
    interface PeoplePickerResolveUser {
    }

    /**
     * People Picker Search User
     */
    interface PeoplePickerSearchUser {
        /** The email address of the user. */
        Description: string;

        /** The full name of the user. */
        DisplayText: string;

        /** The user entity data. */
        EntityData: EntityData;

        /** Entity Type */
        EntityType: string;

        /** Flag to determine if the search user is resolved. */
        IsResovled: boolean;

        /** The user identity. */
        Key: string;

        /** Multiple Matches */
        MultipleMatches: Array<any>;

        /** Provider Display Name */
        ProviderDisplayName: string;

        /** Provider Name */
        ProviderName: string;
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

    /**
     * People Picker Resolve User
     */
    interface IPeoplePickerResolveUser extends IBase {
        // The client people picker resolve user results
        ClientPeoplePickerResolveUser: Array<ComplexTypes.PeoplePickerResolveUser>;
    }

    /**
     * People Picker Search User
     */
    interface IPeoplePickerSearchUser extends IBase {
        // The client people picker search user results
        ClientPeoplePickerSearchUser: Array<ComplexTypes.PeoplePickerSearchUser>;
    }
}