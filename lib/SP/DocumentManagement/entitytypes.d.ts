import { Base } from "../../";

/*********************************************
* IDocumentId
**********************************************/
export interface IDocumentId extends DocumentIdCollections, DocumentIdMethods, Base.IBaseQuery<DocumentId, IDocumentIdQuery> {

}

/*********************************************
* IDocumentIdCollection
**********************************************/
export interface IDocumentIdCollection extends Base.IBaseResults<DocumentId> {
	done?: (resolve: (value?: Array<DocumentId>) => void) => void;
}

/*********************************************
* IDocumentIdQueryCollection
**********************************************/
export interface IDocumentIdQueryCollection extends Base.IBaseResults<DocumentIdOData> {
	done?: (resolve: (value?: Array<DocumentIdOData>) => void) => void;
}

/*********************************************
* IDocumentIdQuery
**********************************************/
export interface IDocumentIdQuery extends DocumentIdOData, DocumentIdMethods {

}

/*********************************************
* DocumentId
**********************************************/
export interface DocumentId extends Base.IBaseResult, DocumentIdProps, DocumentIdCollections, DocumentIdMethods {

}

/*********************************************
* DocumentIdProps
**********************************************/
export interface DocumentIdProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentIdPropMethods
**********************************************/
export interface DocumentIdPropMethods {

}

/*********************************************
* DocumentIdCollections
**********************************************/
export interface DocumentIdCollections extends DocumentIdPropMethods {

}

/*********************************************
* DocumentIdOData
**********************************************/
export interface DocumentIdOData extends Base.IBaseResult, DocumentIdProps, DocumentIdMethods {

}

/*********************************************
* DocumentIdMethods
**********************************************/
export interface DocumentIdMethods {
	resetDocIdByServerRelativePath(DecodedUrl?: string): Base.IBaseExecution<any>;
	resetDocIdsInLibrary(DecodedUrl?: string, contentTypeId?: string): Base.IBaseExecution<any>;
}
