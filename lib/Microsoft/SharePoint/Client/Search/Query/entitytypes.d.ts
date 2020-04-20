import { Base } from "../../../../../";
import { SP } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* IStringCollection
**********************************************/
export interface IStringCollection extends StringCollectionCollections, StringCollectionMethods, Base.IBaseQuery<StringCollection, IStringCollectionQuery> {

}

/*********************************************
* IStringCollectionCollection
**********************************************/
export interface IStringCollectionCollection extends Base.IBaseResults<StringCollection> {
	done?: (resolve: (value?: Array<StringCollection>) => void) => void;
}

/*********************************************
* IStringCollectionQueryCollection
**********************************************/
export interface IStringCollectionQueryCollection extends Base.IBaseResults<StringCollectionOData> {
	done?: (resolve: (value?: Array<StringCollectionOData>) => void) => void;
}

/*********************************************
* IStringCollectionQuery
**********************************************/
export interface IStringCollectionQuery extends StringCollectionOData, StringCollectionMethods {

}

/*********************************************
* StringCollection
**********************************************/
export interface StringCollection extends Base.IBaseResult, StringCollectionProps, StringCollectionCollections, StringCollectionMethods {

}

/*********************************************
* StringCollectionProps
**********************************************/
export interface StringCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: { results: Array<string> };
}

/*********************************************
* StringCollectionPropMethods
**********************************************/
export interface StringCollectionPropMethods {

}

/*********************************************
* StringCollectionCollections
**********************************************/
export interface StringCollectionCollections extends StringCollectionPropMethods {

}

/*********************************************
* StringCollectionOData
**********************************************/
export interface StringCollectionOData extends Base.IBaseResult, StringCollectionProps, StringCollectionMethods {

}

/*********************************************
* StringCollectionMethods
**********************************************/
export interface StringCollectionMethods {
	add(property?: string): Base.IBaseExecution<any>;
	clear(): Base.IBaseExecution<any>;
}

/*********************************************
* QueryPersonalizationData
**********************************************/
export interface QueryPersonalizationData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* QueryPersonalizationDataCollections
**********************************************/
export interface QueryPersonalizationDataCollections {

}

/*********************************************
* IRankingLabeling
**********************************************/
export interface IRankingLabeling extends RankingLabelingCollections, RankingLabelingMethods, Base.IBaseQuery<RankingLabeling, IRankingLabelingQuery> {

}

/*********************************************
* IRankingLabelingCollection
**********************************************/
export interface IRankingLabelingCollection extends Base.IBaseResults<RankingLabeling> {
	done?: (resolve: (value?: Array<RankingLabeling>) => void) => void;
}

/*********************************************
* IRankingLabelingQueryCollection
**********************************************/
export interface IRankingLabelingQueryCollection extends Base.IBaseResults<RankingLabelingOData> {
	done?: (resolve: (value?: Array<RankingLabelingOData>) => void) => void;
}

/*********************************************
* IRankingLabelingQuery
**********************************************/
export interface IRankingLabelingQuery extends RankingLabelingOData, RankingLabelingMethods {

}

/*********************************************
* RankingLabeling
**********************************************/
export interface RankingLabeling extends Base.IBaseResult, RankingLabelingProps, RankingLabelingCollections, RankingLabelingMethods {

}

/*********************************************
* RankingLabelingProps
**********************************************/
export interface RankingLabelingProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RankingLabelingPropMethods
**********************************************/
export interface RankingLabelingPropMethods {

}

/*********************************************
* RankingLabelingCollections
**********************************************/
export interface RankingLabelingCollections extends RankingLabelingPropMethods {

}

/*********************************************
* RankingLabelingOData
**********************************************/
export interface RankingLabelingOData extends Base.IBaseResult, RankingLabelingProps, RankingLabelingMethods {

}

/*********************************************
* RankingLabelingMethods
**********************************************/
export interface RankingLabelingMethods {
	addJudgment(userQuery?: string, url?: string, labelId?: number): Base.IBaseExecution<any>;
	getJudgementsForQuery(query?: string): Base.IBaseCollection<SP.KeyValue>;
	normalizeResultUrl(url?: string): Base.IBaseExecution<string>;
}

/*********************************************
* IReorderingRuleCollection
**********************************************/
export interface IReorderingRuleCollection extends ReorderingRuleCollectionCollections, ReorderingRuleCollectionMethods, Base.IBaseQuery<ReorderingRuleCollection, IReorderingRuleCollectionQuery> {

}

/*********************************************
* IReorderingRuleCollectionCollection
**********************************************/
export interface IReorderingRuleCollectionCollection extends Base.IBaseResults<ReorderingRuleCollection> {
	done?: (resolve: (value?: Array<ReorderingRuleCollection>) => void) => void;
}

/*********************************************
* IReorderingRuleCollectionQueryCollection
**********************************************/
export interface IReorderingRuleCollectionQueryCollection extends Base.IBaseResults<ReorderingRuleCollectionOData> {
	done?: (resolve: (value?: Array<ReorderingRuleCollectionOData>) => void) => void;
}

/*********************************************
* IReorderingRuleCollectionQuery
**********************************************/
export interface IReorderingRuleCollectionQuery extends ReorderingRuleCollectionOData, ReorderingRuleCollectionMethods {

}

/*********************************************
* ReorderingRuleCollection
**********************************************/
export interface ReorderingRuleCollection extends Base.IBaseResult, ReorderingRuleCollectionProps, ReorderingRuleCollectionCollections, ReorderingRuleCollectionMethods {

}

/*********************************************
* ReorderingRuleCollectionProps
**********************************************/
export interface ReorderingRuleCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: { results: Array<Microsoft.SharePoint.Client.Search.Query.ReorderingRule> };
}

/*********************************************
* ReorderingRuleCollectionPropMethods
**********************************************/
export interface ReorderingRuleCollectionPropMethods {

}

/*********************************************
* ReorderingRuleCollectionCollections
**********************************************/
export interface ReorderingRuleCollectionCollections extends ReorderingRuleCollectionPropMethods {

}

/*********************************************
* ReorderingRuleCollectionOData
**********************************************/
export interface ReorderingRuleCollectionOData extends Base.IBaseResult, ReorderingRuleCollectionProps, ReorderingRuleCollectionMethods {

}

/*********************************************
* ReorderingRuleCollectionMethods
**********************************************/
export interface ReorderingRuleCollectionMethods {
	add(matchType?: number, matchValue?: string, boost?: number): Base.IBaseExecution<any>;
	clear(): Base.IBaseExecution<any>;
}

/*********************************************
* ISortCollection
**********************************************/
export interface ISortCollection extends SortCollectionCollections, SortCollectionMethods, Base.IBaseQuery<SortCollection, ISortCollectionQuery> {

}

/*********************************************
* ISortCollectionCollection
**********************************************/
export interface ISortCollectionCollection extends Base.IBaseResults<SortCollection> {
	done?: (resolve: (value?: Array<SortCollection>) => void) => void;
}

/*********************************************
* ISortCollectionQueryCollection
**********************************************/
export interface ISortCollectionQueryCollection extends Base.IBaseResults<SortCollectionOData> {
	done?: (resolve: (value?: Array<SortCollectionOData>) => void) => void;
}

/*********************************************
* ISortCollectionQuery
**********************************************/
export interface ISortCollectionQuery extends SortCollectionOData, SortCollectionMethods {

}

/*********************************************
* SortCollection
**********************************************/
export interface SortCollection extends Base.IBaseResult, SortCollectionProps, SortCollectionCollections, SortCollectionMethods {

}

/*********************************************
* SortCollectionProps
**********************************************/
export interface SortCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: { results: Array<Microsoft.SharePoint.Client.Search.Query.Sort> };
}

/*********************************************
* SortCollectionPropMethods
**********************************************/
export interface SortCollectionPropMethods {

}

/*********************************************
* SortCollectionCollections
**********************************************/
export interface SortCollectionCollections extends SortCollectionPropMethods {

}

/*********************************************
* SortCollectionOData
**********************************************/
export interface SortCollectionOData extends Base.IBaseResult, SortCollectionProps, SortCollectionMethods {

}

/*********************************************
* SortCollectionMethods
**********************************************/
export interface SortCollectionMethods {
	add(strProperty?: string, direction?: number): Base.IBaseExecution<any>;
	clear(): Base.IBaseExecution<any>;
}
