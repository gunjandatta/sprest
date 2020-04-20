import { Base } from "../../../";
import { SP } from "../../../";

/*********************************************
* AlternateIdData
**********************************************/
export interface AlternateIdData {
	Email?: string;
	IdentifyingProperty?: number;
	UserPrincipalName?: string;
}

/*********************************************
* AlternateIdDataCollections
**********************************************/
export interface AlternateIdDataCollections {

}

/*********************************************
* DirectoryObjectChanges
**********************************************/
export interface DirectoryObjectChanges {
	DirectoryObjectSubType?: number;
	DirectoryObjectType?: number;
	Id?: any;
	LinkChanges?: Array<SP.Directory.Provider.LinkChange>;
	PropertyChanges?: Array<SP.Directory.Provider.PropertyChange>;
}

/*********************************************
* DirectoryObjectChangesCollections
**********************************************/
export interface DirectoryObjectChangesCollections {

}

/*********************************************
* LinkChange
**********************************************/
export interface LinkChange {
	Added?: Array<SP.Directory.Provider.LinkTarget>;
	Name?: string;
	Removed?: Array<SP.Directory.Provider.LinkTarget>;
}

/*********************************************
* LinkChangeCollections
**********************************************/
export interface LinkChangeCollections {

}

/*********************************************
* LinkTarget
**********************************************/
export interface LinkTarget {
	ObjectId?: any;
	ObjectSubType?: number;
	ObjectType?: number;
}

/*********************************************
* LinkTargetCollections
**********************************************/
export interface LinkTargetCollections {

}

/*********************************************
* PropertyChange
**********************************************/
export interface PropertyChange {
	Name?: string;
	Value?: string;
	Values?: Array<string>;
}

/*********************************************
* PropertyChangeCollections
**********************************************/
export interface PropertyChangeCollections {

}

/*********************************************
* DirectoryObjectData
**********************************************/
export interface DirectoryObjectData {
	AlternateId?: SP.Directory.Provider.AlternateIdData;
	AttributeExpirationTimes?: Array<SP.KeyValue>;
	ChangeMarker?: string;
	DirectoryObjectSubType?: number;
	DirectoryObjectType?: number;
	Id?: any;
	IsNew?: boolean;
	LastModifiedTime?: any;
	TenantContextId?: any;
	Version?: number;
}

/*********************************************
* DirectoryObjectDataCollections
**********************************************/
export interface DirectoryObjectDataCollections {

}

/*********************************************
* SchemaData
**********************************************/
export interface SchemaData {
	AttributeDataSource?: number;
	DelayLoad?: boolean;
	IsInitialized?: boolean;
	Name?: string;
	Privacy?: number;
}

/*********************************************
* SchemaDataCollections
**********************************************/
export interface SchemaDataCollections {

}

/*********************************************
* ExtendedAttributeData
**********************************************/
export interface ExtendedAttributeData {
	Value?: any;
}

/*********************************************
* ExtendedAttributeDataCollections
**********************************************/
export interface ExtendedAttributeDataCollections {

}

/*********************************************
* PropertyCollectionData
**********************************************/
export interface PropertyCollectionData {
	TotalCount?: number;
}

/*********************************************
* PropertyCollectionDataCollections
**********************************************/
export interface PropertyCollectionDataCollections {

}

/*********************************************
* PropertyData
**********************************************/
export interface PropertyData {
	Value?: any;
}

/*********************************************
* PropertyDataCollections
**********************************************/
export interface PropertyDataCollections {

}

/*********************************************
* RelationData
**********************************************/
export interface RelationData {
	AttributeDataSource?: number;
	TargetObjectId?: any;
	TargetObjectSubtype?: number;
	TargetObjectType?: number;
	Value?: any;
}

/*********************************************
* RelationDataCollections
**********************************************/
export interface RelationDataCollections {

}

/*********************************************
* RelationSetData
**********************************************/
export interface RelationSetData {
	TotalCount?: number;
}

/*********************************************
* RelationSetDataCollections
**********************************************/
export interface RelationSetDataCollections {

}

/*********************************************
* ResourceData
**********************************************/
export interface ResourceData {
	ErrorCode?: number;
	ErrorMessage?: string;
	ResourceAction?: number;
	State?: number;
	Value?: any;
}

/*********************************************
* ResourceDataCollections
**********************************************/
export interface ResourceDataCollections {

}

/*********************************************
* StateData
**********************************************/
export interface StateData {
	AdapterName?: string;
	Value?: any;
}

/*********************************************
* StateDataCollections
**********************************************/
export interface StateDataCollections {

}
