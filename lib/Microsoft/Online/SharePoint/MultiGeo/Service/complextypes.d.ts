import { Base } from "../../../../../";

/*********************************************
* GeoCredentials
**********************************************/
export interface GeoCredentials {
	AltDatabaseCredentials?: Array<string>;
	FarmCredentials?: Array<string>;
	FarmCredentialsExpirationTime?: any;
}

/*********************************************
* GeoCredentialsCollections
**********************************************/
export interface GeoCredentialsCollections {

}

/*********************************************
* GeoAdministratorEntityData
**********************************************/
export interface GeoAdministratorEntityData {
	DisplayName?: string;
	LoginName?: string;
	MemberType?: number;
	ObjectId?: any;
}

/*********************************************
* GeoAdministratorEntityDataCollections
**********************************************/
export interface GeoAdministratorEntityDataCollections {

}

/*********************************************
* GeoMoveTenantPropertyCompatibilityCheck
**********************************************/
export interface GeoMoveTenantPropertyCompatibilityCheck {
	GeoMoveTenantPropertyCheckResult?: number;
	PropertyName?: string;
}

/*********************************************
* GeoMoveTenantPropertyCompatibilityCheckCollections
**********************************************/
export interface GeoMoveTenantPropertyCompatibilityCheckCollections {

}
