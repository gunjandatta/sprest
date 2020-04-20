import { Base } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* SPActivityEntity
**********************************************/
export interface SPActivityEntity {
	action?: Microsoft.SharePoint.Activities.ActionFacet;
	actor?: SP.Sharing.Principal;
	isCoalesced?: Microsoft.SharePoint.Activities.CoalescedFacet;
	docDetails?: Microsoft.SharePoint.Activities.InDocFacet;
	id?: string;
	resource?: Microsoft.SharePoint.Activities.ResourceFacet;
	times?: Microsoft.SharePoint.Activities.ActivityTimeFacet;
}

/*********************************************
* SPActivityEntityCollections
**********************************************/
export interface SPActivityEntityCollections {

}

/*********************************************
* ActivityExtensions
**********************************************/
export interface ActivityExtensions {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ActivityExtensionsCollections
**********************************************/
export interface ActivityExtensionsCollections {

}
