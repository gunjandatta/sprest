import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* SPMachineLearningPublicationEntityData
**********************************************/
export interface SPMachineLearningPublicationEntityData {
	ModelUniqueId?: any;
	TargetLibraryServerRelativeUrl?: string;
	TargetSiteUrl?: string;
	TargetWebServerRelativeUrl?: string;
}

/*********************************************
* SPMachineLearningPublicationEntityDataCollections
**********************************************/
export interface SPMachineLearningPublicationEntityDataCollections {

}

/*********************************************
* SPMachineLearningPublicationResult
**********************************************/
export interface SPMachineLearningPublicationResult {
	Publication?: Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationEntityData;
	StatusCode?: number;
}

/*********************************************
* SPMachineLearningPublicationResultCollections
**********************************************/
export interface SPMachineLearningPublicationResultCollections {

}
