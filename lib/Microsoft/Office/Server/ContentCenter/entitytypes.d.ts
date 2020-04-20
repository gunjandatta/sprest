import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* ISPMachineLearningHub
**********************************************/
export interface ISPMachineLearningHub extends SPMachineLearningHubCollections, SPMachineLearningHubMethods, Base.IBaseQuery<SPMachineLearningHub, ISPMachineLearningHubQuery> {

}

/*********************************************
* ISPMachineLearningHubCollection
**********************************************/
export interface ISPMachineLearningHubCollection extends Base.IBaseResults<SPMachineLearningHub> {
	done?: (resolve: (value?: Array<SPMachineLearningHub>) => void) => void;
}

/*********************************************
* ISPMachineLearningHubQueryCollection
**********************************************/
export interface ISPMachineLearningHubQueryCollection extends Base.IBaseResults<SPMachineLearningHubOData> {
	done?: (resolve: (value?: Array<SPMachineLearningHubOData>) => void) => void;
}

/*********************************************
* ISPMachineLearningHubQuery
**********************************************/
export interface ISPMachineLearningHubQuery extends SPMachineLearningHubOData, SPMachineLearningHubMethods {

}

/*********************************************
* SPMachineLearningHub
**********************************************/
export interface SPMachineLearningHub extends Base.IBaseResult, SPMachineLearningHubProps, SPMachineLearningHubCollections, SPMachineLearningHubMethods {

}

/*********************************************
* SPMachineLearningHubProps
**********************************************/
export interface SPMachineLearningHubProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPMachineLearningHubPropMethods
**********************************************/
export interface SPMachineLearningHubPropMethods {

}

/*********************************************
* SPMachineLearningHubCollections
**********************************************/
export interface SPMachineLearningHubCollections extends SPMachineLearningHubPropMethods {
	Models(): Base.IBaseCollection<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollectionMethods;
	Models(id: string | number): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelMethods;
	Publications(): Base.IBaseCollection<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollectionMethods;
	Publications(id: string | number): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationMethods;
	Samples(): Base.IBaseCollection<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollectionMethods;
	Samples(id: string | number): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleMethods;
}

/*********************************************
* SPMachineLearningHubOData
**********************************************/
export interface SPMachineLearningHubOData extends Base.IBaseResult, SPMachineLearningHubProps, SPMachineLearningHubMethods {
	Models: Base.IBaseResults<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollectionMethods;
	Publications: Base.IBaseResults<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollectionMethods;
	Samples: Base.IBaseResults<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollectionMethods;
}

/*********************************************
* SPMachineLearningHubMethods
**********************************************/
export interface SPMachineLearningHubMethods {

}

/*********************************************
* ISPMachineLearningModel
**********************************************/
export interface ISPMachineLearningModel extends SPMachineLearningModelCollections, SPMachineLearningModelMethods, Base.IBaseQuery<SPMachineLearningModel, ISPMachineLearningModelQuery> {

}

/*********************************************
* ISPMachineLearningModelCollection
**********************************************/
export interface ISPMachineLearningModelCollection extends Base.IBaseResults<SPMachineLearningModel>, SPMachineLearningModelCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningModel>) => void) => void;
}

/*********************************************
* ISPMachineLearningModelQueryCollection
**********************************************/
export interface ISPMachineLearningModelQueryCollection extends Base.IBaseResults<SPMachineLearningModelOData>, SPMachineLearningModelCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningModelOData>) => void) => void;
}

/*********************************************
* ISPMachineLearningModelQuery
**********************************************/
export interface ISPMachineLearningModelQuery extends SPMachineLearningModelOData, SPMachineLearningModelMethods {

}

/*********************************************
* SPMachineLearningModel
**********************************************/
export interface SPMachineLearningModel extends Base.IBaseResult, SPMachineLearningModelProps, SPMachineLearningModelCollections, SPMachineLearningModelMethods {

}

/*********************************************
* SPMachineLearningModelProps
**********************************************/
export interface SPMachineLearningModelProps {
	Accuracy?: any;
	ContentTypeGroup?: string;
	ContentTypeId?: string;
	ContentTypeName?: string;
	DriveId?: string;
	Explanations?: string;
	ID?: number;
	LastTrained?: any;
	ListID?: any;
	ObjectId?: string;
	Schemas?: string;
	UniqueId?: any;
}

/*********************************************
* SPMachineLearningModelPropMethods
**********************************************/
export interface SPMachineLearningModelPropMethods {

}

/*********************************************
* SPMachineLearningModelCollections
**********************************************/
export interface SPMachineLearningModelCollections extends SPMachineLearningModelPropMethods {

}

/*********************************************
* SPMachineLearningModelCollectionMethods
**********************************************/
export interface SPMachineLearningModelCollectionMethods {
	getByTitle(title?: string): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelMethods;
	getByUniqueId(uniqueId?: any): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningModel> & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningModelMethods;
}

/*********************************************
* SPMachineLearningModelOData
**********************************************/
export interface SPMachineLearningModelOData extends Base.IBaseResult, SPMachineLearningModelProps, SPMachineLearningModelMethods {

}

/*********************************************
* SPMachineLearningModelMethods
**********************************************/
export interface SPMachineLearningModelMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ISPMachineLearningPublication
**********************************************/
export interface ISPMachineLearningPublication extends SPMachineLearningPublicationCollections, SPMachineLearningPublicationMethods, Base.IBaseQuery<SPMachineLearningPublication, ISPMachineLearningPublicationQuery> {

}

/*********************************************
* ISPMachineLearningPublicationCollection
**********************************************/
export interface ISPMachineLearningPublicationCollection extends Base.IBaseResults<SPMachineLearningPublication>, SPMachineLearningPublicationCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningPublication>) => void) => void;
}

/*********************************************
* ISPMachineLearningPublicationQueryCollection
**********************************************/
export interface ISPMachineLearningPublicationQueryCollection extends Base.IBaseResults<SPMachineLearningPublicationOData>, SPMachineLearningPublicationCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningPublicationOData>) => void) => void;
}

/*********************************************
* ISPMachineLearningPublicationQuery
**********************************************/
export interface ISPMachineLearningPublicationQuery extends SPMachineLearningPublicationOData, SPMachineLearningPublicationMethods {

}

/*********************************************
* SPMachineLearningPublication
**********************************************/
export interface SPMachineLearningPublication extends Base.IBaseResult, SPMachineLearningPublicationProps, SPMachineLearningPublicationCollections, SPMachineLearningPublicationMethods {

}

/*********************************************
* SPMachineLearningPublicationProps
**********************************************/
export interface SPMachineLearningPublicationProps {
	DriveId?: string;
	ID?: number;
	ModelId?: number;
	ModelUniqueId?: any;
	ModelVersion?: string;
	ObjectId?: string;
	TargetLibraryUrl?: string;
	UniqueId?: any;
}

/*********************************************
* SPMachineLearningPublicationPropMethods
**********************************************/
export interface SPMachineLearningPublicationPropMethods {

}

/*********************************************
* SPMachineLearningPublicationCollections
**********************************************/
export interface SPMachineLearningPublicationCollections extends SPMachineLearningPublicationPropMethods {

}

/*********************************************
* SPMachineLearningPublicationCollectionMethods
**********************************************/
export interface SPMachineLearningPublicationCollectionMethods {
	batchDelete(publications?: Array<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationEntityData>): Base.IBaseExecution<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationsResult>;
	getByModelUniqueId(modelUniqueId?: any): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationMethods;
	getByUniqueId(uniqueId?: any): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication> & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationMethods;
}

/*********************************************
* SPMachineLearningPublicationOData
**********************************************/
export interface SPMachineLearningPublicationOData extends Base.IBaseResult, SPMachineLearningPublicationProps, SPMachineLearningPublicationMethods {

}

/*********************************************
* SPMachineLearningPublicationMethods
**********************************************/
export interface SPMachineLearningPublicationMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ISPMachineLearningSample
**********************************************/
export interface ISPMachineLearningSample extends SPMachineLearningSampleCollections, SPMachineLearningSampleMethods, Base.IBaseQuery<SPMachineLearningSample, ISPMachineLearningSampleQuery> {

}

/*********************************************
* ISPMachineLearningSampleCollection
**********************************************/
export interface ISPMachineLearningSampleCollection extends Base.IBaseResults<SPMachineLearningSample>, SPMachineLearningSampleCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningSample>) => void) => void;
}

/*********************************************
* ISPMachineLearningSampleQueryCollection
**********************************************/
export interface ISPMachineLearningSampleQueryCollection extends Base.IBaseResults<SPMachineLearningSampleOData>, SPMachineLearningSampleCollectionMethods {
	done?: (resolve: (value?: Array<SPMachineLearningSampleOData>) => void) => void;
}

/*********************************************
* ISPMachineLearningSampleQuery
**********************************************/
export interface ISPMachineLearningSampleQuery extends SPMachineLearningSampleOData, SPMachineLearningSampleMethods {

}

/*********************************************
* SPMachineLearningSample
**********************************************/
export interface SPMachineLearningSample extends Base.IBaseResult, SPMachineLearningSampleProps, SPMachineLearningSampleCollections, SPMachineLearningSampleMethods {

}

/*********************************************
* SPMachineLearningSampleProps
**********************************************/
export interface SPMachineLearningSampleProps {
	DriveId?: string;
	ExtractedText?: string;
	ID?: number;
	ListID?: any;
	Markups?: string;
	ObjectId?: string;
	UniqueId?: any;
}

/*********************************************
* SPMachineLearningSamplePropMethods
**********************************************/
export interface SPMachineLearningSamplePropMethods {

}

/*********************************************
* SPMachineLearningSampleCollections
**********************************************/
export interface SPMachineLearningSampleCollections extends SPMachineLearningSamplePropMethods {

}

/*********************************************
* SPMachineLearningSampleCollectionMethods
**********************************************/
export interface SPMachineLearningSampleCollectionMethods {
	getByModelId(modelID?: number): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleMethods;
	getByTitle(title?: string): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleMethods;
	getByUniqueId(uniqueId?: any): Base.IBaseQuery<Microsoft.Office.Server.ContentCenter.SPMachineLearningSample> & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleCollections & Microsoft.Office.Server.ContentCenter.SPMachineLearningSampleMethods;
}

/*********************************************
* SPMachineLearningSampleOData
**********************************************/
export interface SPMachineLearningSampleOData extends Base.IBaseResult, SPMachineLearningSampleProps, SPMachineLearningSampleMethods {

}

/*********************************************
* SPMachineLearningSampleMethods
**********************************************/
export interface SPMachineLearningSampleMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* SPMachineLearningModelEntityData
**********************************************/
export interface SPMachineLearningModelEntityData {
	Accuracy?: any;
	ColumnId?: string;
	ColumnName?: string;
	ContentTypeGroup?: string;
	ContentTypeId?: string;
	ContentTypeName?: string;
	Explanations?: string;
	LastTrained?: any;
	Schemas?: string;
}

/*********************************************
* SPMachineLearningModelEntityDataCollections
**********************************************/
export interface SPMachineLearningModelEntityDataCollections {

}

/*********************************************
* SPMachineLearningPublicationsEntityData
**********************************************/
export interface SPMachineLearningPublicationsEntityData {
	Comment?: string;
	Publications?: { results: Array<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationEntityData> };
}

/*********************************************
* SPMachineLearningPublicationsEntityDataCollections
**********************************************/
export interface SPMachineLearningPublicationsEntityDataCollections {

}

/*********************************************
* SPMachineLearningSampleEntityData
**********************************************/
export interface SPMachineLearningSampleEntityData {
	ExtractedText?: string;
	Markups?: string;
}

/*********************************************
* SPMachineLearningSampleEntityDataCollections
**********************************************/
export interface SPMachineLearningSampleEntityDataCollections {

}

/*********************************************
* SPMachineLearningPublicationsResult
**********************************************/
export interface SPMachineLearningPublicationsResult {
	Details?: { results: Array<Microsoft.Office.Server.ContentCenter.SPMachineLearningPublicationResult> };
	TotalFailures?: number;
	TotalSuccesses?: number;
}

/*********************************************
* SPMachineLearningPublicationsResultCollections
**********************************************/
export interface SPMachineLearningPublicationsResultCollections {

}
