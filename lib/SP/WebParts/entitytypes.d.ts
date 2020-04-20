import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* WebPart
**********************************************/
export interface WebPart {
	ExportMode?: number;
	Hidden?: boolean;
	IsClosed?: boolean;
	Subtitle?: string;
	Title?: string;
	TitleUrl?: string;
	ZoneIndex?: number;
}

/*********************************************
* WebPartCollections
**********************************************/
export interface WebPartCollections {

}

/*********************************************
* WebPartOData
**********************************************/
export interface WebPartOData extends Base.IBaseResult, WebPart {
	Properties: SP.PropertyValues & SP.PropertyValuesCollections;
}

/*********************************************
* ILimitedWebPartManager
**********************************************/
export interface ILimitedWebPartManager extends LimitedWebPartManagerCollections, LimitedWebPartManagerMethods, Base.IBaseQuery<LimitedWebPartManager, ILimitedWebPartManagerQuery> {

}

/*********************************************
* ILimitedWebPartManagerCollection
**********************************************/
export interface ILimitedWebPartManagerCollection extends Base.IBaseResults<LimitedWebPartManager> {
	done?: (resolve: (value?: Array<LimitedWebPartManager>) => void) => void;
}

/*********************************************
* ILimitedWebPartManagerQueryCollection
**********************************************/
export interface ILimitedWebPartManagerQueryCollection extends Base.IBaseResults<LimitedWebPartManagerOData> {
	done?: (resolve: (value?: Array<LimitedWebPartManagerOData>) => void) => void;
}

/*********************************************
* ILimitedWebPartManagerQuery
**********************************************/
export interface ILimitedWebPartManagerQuery extends LimitedWebPartManagerOData, LimitedWebPartManagerMethods {

}

/*********************************************
* LimitedWebPartManager
**********************************************/
export interface LimitedWebPartManager extends Base.IBaseResult, LimitedWebPartManagerProps, LimitedWebPartManagerCollections, LimitedWebPartManagerMethods {

}

/*********************************************
* LimitedWebPartManagerProps
**********************************************/
export interface LimitedWebPartManagerProps {
	HasPersonalizedParts?: boolean;
	Scope?: number;
}

/*********************************************
* LimitedWebPartManagerPropMethods
**********************************************/
export interface LimitedWebPartManagerPropMethods {

}

/*********************************************
* LimitedWebPartManagerCollections
**********************************************/
export interface LimitedWebPartManagerCollections extends LimitedWebPartManagerPropMethods {
	WebParts(): Base.IBaseCollection<SP.WebParts.WebPartDefinition, SP.WebParts.WebPartDefinitionOData, Base.IBaseExecution & SP.WebParts.WebPartDefinitionCollectionMethods> & Base.IBaseExecution & SP.WebParts.WebPartDefinitionCollectionMethods;
	WebParts(id: string | number): Base.IBaseQuery<SP.WebParts.WebPartDefinition, SP.WebParts.WebPartDefinitionOData> & SP.WebParts.WebPartDefinitionCollections & SP.WebParts.WebPartDefinitionMethods;
}

/*********************************************
* LimitedWebPartManagerOData
**********************************************/
export interface LimitedWebPartManagerOData extends Base.IBaseResult, LimitedWebPartManagerProps, LimitedWebPartManagerMethods {
	WebParts: Base.IBaseResults<SP.WebParts.WebPartDefinition> & SP.WebParts.WebPartDefinitionCollectionMethods;
}

/*********************************************
* LimitedWebPartManagerMethods
**********************************************/
export interface LimitedWebPartManagerMethods {
	exportWebPart(webPartId?: any): Base.IBaseExecution<string>;
	importWebPart(webPartXml?: string): Base.IBaseQuery<SP.WebParts.WebPartDefinition, SP.WebParts.WebPartDefinitionOData> & SP.WebParts.WebPartDefinitionCollections & SP.WebParts.WebPartDefinitionMethods;
}

/*********************************************
* IWebPartDefinition
**********************************************/
export interface IWebPartDefinition extends WebPartDefinitionCollections, WebPartDefinitionMethods, Base.IBaseQuery<WebPartDefinition, IWebPartDefinitionQuery> {

}

/*********************************************
* IWebPartDefinitionCollection
**********************************************/
export interface IWebPartDefinitionCollection extends Base.IBaseResults<WebPartDefinition>, WebPartDefinitionCollectionMethods {
	done?: (resolve: (value?: Array<WebPartDefinition>) => void) => void;
}

/*********************************************
* IWebPartDefinitionQueryCollection
**********************************************/
export interface IWebPartDefinitionQueryCollection extends Base.IBaseResults<WebPartDefinitionOData>, WebPartDefinitionCollectionMethods {
	done?: (resolve: (value?: Array<WebPartDefinitionOData>) => void) => void;
}

/*********************************************
* IWebPartDefinitionQuery
**********************************************/
export interface IWebPartDefinitionQuery extends WebPartDefinitionOData, WebPartDefinitionMethods {

}

/*********************************************
* WebPartDefinition
**********************************************/
export interface WebPartDefinition extends Base.IBaseResult, WebPartDefinitionProps, WebPartDefinitionCollections, WebPartDefinitionMethods {

}

/*********************************************
* WebPartDefinitionProps
**********************************************/
export interface WebPartDefinitionProps {
	Id?: any;
	ZoneId?: string;
}

/*********************************************
* WebPartDefinitionPropMethods
**********************************************/
export interface WebPartDefinitionPropMethods {
	WebPart(): Base.IBaseQuery<SP.WebParts.WebPart, SP.WebParts.WebPartOData> & SP.WebParts.WebPartCollections;
}

/*********************************************
* WebPartDefinitionCollections
**********************************************/
export interface WebPartDefinitionCollections extends WebPartDefinitionPropMethods {

}

/*********************************************
* WebPartDefinitionCollectionMethods
**********************************************/
export interface WebPartDefinitionCollectionMethods {
	getByControlId(controlId?: string): Base.IBaseQuery<SP.WebParts.WebPartDefinition, SP.WebParts.WebPartDefinitionOData> & SP.WebParts.WebPartDefinitionCollections & SP.WebParts.WebPartDefinitionMethods;
	getById(id?: any): Base.IBaseQuery<SP.WebParts.WebPartDefinition, SP.WebParts.WebPartDefinitionOData> & SP.WebParts.WebPartDefinitionCollections & SP.WebParts.WebPartDefinitionMethods;
}

/*********************************************
* WebPartDefinitionOData
**********************************************/
export interface WebPartDefinitionOData extends Base.IBaseResult, WebPartDefinitionProps, WebPartDefinitionMethods {
	WebPart: SP.WebParts.WebPart & SP.WebParts.WebPartCollections;
}

/*********************************************
* WebPartDefinitionMethods
**********************************************/
export interface WebPartDefinitionMethods {
	closeWebPart(): Base.IBaseExecution<any>;
	deleteWebPart(): Base.IBaseExecution<any>;
	moveWebPartTo(zoneID?: string, zoneIndex?: number): Base.IBaseExecution<any>;
	openWebPart(): Base.IBaseExecution<any>;
	saveWebPartChanges(): Base.IBaseExecution<any>;
}
