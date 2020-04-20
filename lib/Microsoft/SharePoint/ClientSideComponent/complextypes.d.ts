import { Base } from "../../../";

/*********************************************
* SPClientSideComponentIdentifier
**********************************************/
export interface SPClientSideComponentIdentifier {
	id?: string;
	version?: string;
}

/*********************************************
* SPClientSideComponentIdentifierCollections
**********************************************/
export interface SPClientSideComponentIdentifierCollections {

}

/*********************************************
* SPClientSideComponentQueryResult
**********************************************/
export interface SPClientSideComponentQueryResult {
	ComponentType?: number;
	Id?: string;
	Manifest?: string;
	ManifestType?: number;
	Name?: string;
	Status?: number;
}

/*********************************************
* SPClientSideComponentQueryResultCollections
**********************************************/
export interface SPClientSideComponentQueryResultCollections {

}
