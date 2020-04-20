import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* ConfiguredMetadataNavigationItemCollection
**********************************************/
export interface ConfiguredMetadataNavigationItemCollection {
	Items?: Array<SP.MetadataNavigation.ConfiguredMetadataNavigationItem>;
}

/*********************************************
* ConfiguredMetadataNavigationItemCollectionCollections
**********************************************/
export interface ConfiguredMetadataNavigationItemCollectionCollections {

}

/*********************************************
* ConfiguredMetadataNavigationItem
**********************************************/
export interface ConfiguredMetadataNavigationItem {
	FieldDisplayName?: string;
	FieldTitle?: string;
	FieldTypeAsString?: string;
	IsContentTypeField?: boolean;
	IsFolderHierarchy?: boolean;
	IsHierarchy?: boolean;
	IsMultiValueLookup?: boolean;
	IsTaxonomyField?: boolean;
}

/*********************************************
* ConfiguredMetadataNavigationItemCollections
**********************************************/
export interface ConfiguredMetadataNavigationItemCollections {

}
