import { Base } from "../../";

/*********************************************
* PolicyEvaluationInfo
**********************************************/
export interface PolicyEvaluationInfo {
	ApplicablePolicies?: { results: Array<string> };
	DlpAccessScope?: number;
	MatchedRules?: { results: Array<string> };
	OverriddenRules?: { results: Array<string> };
}

/*********************************************
* PolicyEvaluationInfoCollections
**********************************************/
export interface PolicyEvaluationInfoCollections {

}

/*********************************************
* ISPPolicyStoreProxy
**********************************************/
export interface ISPPolicyStoreProxy extends SPPolicyStoreProxyCollections, SPPolicyStoreProxyMethods, Base.IBaseQuery<SPPolicyStoreProxy, ISPPolicyStoreProxyQuery> {

}

/*********************************************
* ISPPolicyStoreProxyCollection
**********************************************/
export interface ISPPolicyStoreProxyCollection extends Base.IBaseResults<SPPolicyStoreProxy> {
	done?: (resolve: (value?: Array<SPPolicyStoreProxy>) => void) => void;
}

/*********************************************
* ISPPolicyStoreProxyQueryCollection
**********************************************/
export interface ISPPolicyStoreProxyQueryCollection extends Base.IBaseResults<SPPolicyStoreProxyOData> {
	done?: (resolve: (value?: Array<SPPolicyStoreProxyOData>) => void) => void;
}

/*********************************************
* ISPPolicyStoreProxyQuery
**********************************************/
export interface ISPPolicyStoreProxyQuery extends SPPolicyStoreProxyOData, SPPolicyStoreProxyMethods {

}

/*********************************************
* SPPolicyStoreProxy
**********************************************/
export interface SPPolicyStoreProxy extends Base.IBaseResult, SPPolicyStoreProxyProps, SPPolicyStoreProxyCollections, SPPolicyStoreProxyMethods {

}

/*********************************************
* SPPolicyStoreProxyProps
**********************************************/
export interface SPPolicyStoreProxyProps {
	PolicyStoreUrl?: string;
	ReviewCenterUrl?: string;
	SupportContentTypeRetention?: boolean;
}

/*********************************************
* SPPolicyStoreProxyPropMethods
**********************************************/
export interface SPPolicyStoreProxyPropMethods {

}

/*********************************************
* SPPolicyStoreProxyCollections
**********************************************/
export interface SPPolicyStoreProxyCollections extends SPPolicyStoreProxyPropMethods {

}

/*********************************************
* SPPolicyStoreProxyOData
**********************************************/
export interface SPPolicyStoreProxyOData extends Base.IBaseResult, SPPolicyStoreProxyProps, SPPolicyStoreProxyMethods {

}

/*********************************************
* SPPolicyStoreProxyMethods
**********************************************/
export interface SPPolicyStoreProxyMethods {
	addDynamicScopeBinding(identity?: string, siteId?: string): Base.IBaseExecution<any>;
	bulkUpdateDynamicScopeBindings(scopesToAdd?: Array<string>, scopesToRemove?: Array<string>, siteId?: string): Base.IBaseExecution<any>;
	deleteDynamicScopeBinding(identity?: string, siteId?: string): Base.IBaseExecution<any>;
	extendReviewItemsRetention(itemIds?: Array<number>, extensionDate?: any): Base.IBaseCollection<number>;
	getDynamicScopeBindingBySiteId(siteId?: string): Base.IBaseCollection<string>;
	markReviewItemsForDeletion(itemIds?: Array<number>): Base.IBaseCollection<number>;
	openBinaryStreamForOriginalItem(itemId?: number): Base.IBaseExecution<any>;
	removeContainerRetentionPolicy(siteId?: string): Base.IBaseExecution<any>;
	removeContainerSettings(externalId?: Array<string>): Base.IBaseExecution<any>;
	retagReviewItems(itemIds?: Array<number>, newTag?: string, newTagIsRecord?: boolean, newTagBlockDelete?: boolean, newTagIsEventBased?: boolean): Base.IBaseCollection<number>;
	retagReviewItemsWithMetas(itemIds?: Array<number>, newTagName?: string, newTagMetas?: Array<string>): Base.IBaseCollection<number>;
	setContainerRetentionPolicy(siteId?: string, defaultContainerLabel?: any): Base.IBaseExecution<any>;
	updateContainerSetting(siteId?: string, externalId?: string, settingType?: number, setting?: string): Base.IBaseExecution<any>;
}

/*********************************************
* SPSitePreservationUtility
**********************************************/
export interface SPSitePreservationUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPSitePreservationUtilityCollections
**********************************************/
export interface SPSitePreservationUtilityCollections {

}
