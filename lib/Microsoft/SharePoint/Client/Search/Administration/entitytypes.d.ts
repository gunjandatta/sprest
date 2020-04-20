import { Base } from "../../../../../";
import { SP } from "../../../../../";

/*********************************************
* IDocumentCrawlLog
**********************************************/
export interface IDocumentCrawlLog extends DocumentCrawlLogCollections, DocumentCrawlLogMethods, Base.IBaseQuery<DocumentCrawlLog, IDocumentCrawlLogQuery> {

}

/*********************************************
* IDocumentCrawlLogCollection
**********************************************/
export interface IDocumentCrawlLogCollection extends Base.IBaseResults<DocumentCrawlLog> {
	done?: (resolve: (value?: Array<DocumentCrawlLog>) => void) => void;
}

/*********************************************
* IDocumentCrawlLogQueryCollection
**********************************************/
export interface IDocumentCrawlLogQueryCollection extends Base.IBaseResults<DocumentCrawlLogOData> {
	done?: (resolve: (value?: Array<DocumentCrawlLogOData>) => void) => void;
}

/*********************************************
* IDocumentCrawlLogQuery
**********************************************/
export interface IDocumentCrawlLogQuery extends DocumentCrawlLogOData, DocumentCrawlLogMethods {

}

/*********************************************
* DocumentCrawlLog
**********************************************/
export interface DocumentCrawlLog extends Base.IBaseResult, DocumentCrawlLogProps, DocumentCrawlLogCollections, DocumentCrawlLogMethods {

}

/*********************************************
* DocumentCrawlLogProps
**********************************************/
export interface DocumentCrawlLogProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentCrawlLogPropMethods
**********************************************/
export interface DocumentCrawlLogPropMethods {

}

/*********************************************
* DocumentCrawlLogCollections
**********************************************/
export interface DocumentCrawlLogCollections extends DocumentCrawlLogPropMethods {

}

/*********************************************
* DocumentCrawlLogOData
**********************************************/
export interface DocumentCrawlLogOData extends Base.IBaseResult, DocumentCrawlLogProps, DocumentCrawlLogMethods {

}

/*********************************************
* DocumentCrawlLogMethods
**********************************************/
export interface DocumentCrawlLogMethods {
	getCrawledUrls(getCountOnly?: boolean, maxRows?: number, queryString?: string, isLike?: boolean, contentSourceID?: number, errorLevel?: number, errorID?: number, startDateTime?: any, endDateTime?: any): Base.IBaseExecution<SP.SimpleDataTable>;
	getUnsuccesfulCrawledUrls(displayUrl?: string, startDateTime?: any, endDateTime?: any): Base.IBaseExecution<SP.SimpleDataTable>;
}
