import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* ISyncTranslator
**********************************************/
export interface ISyncTranslator extends SyncTranslatorCollections, SyncTranslatorMethods, Base.IBaseQuery<SyncTranslator, ISyncTranslatorQuery> {

}

/*********************************************
* ISyncTranslatorCollection
**********************************************/
export interface ISyncTranslatorCollection extends Base.IBaseResults<SyncTranslator> {
	done?: (resolve: (value?: Array<SyncTranslator>) => void) => void;
}

/*********************************************
* ISyncTranslatorQueryCollection
**********************************************/
export interface ISyncTranslatorQueryCollection extends Base.IBaseResults<SyncTranslatorOData> {
	done?: (resolve: (value?: Array<SyncTranslatorOData>) => void) => void;
}

/*********************************************
* ISyncTranslatorQuery
**********************************************/
export interface ISyncTranslatorQuery extends SyncTranslatorOData, SyncTranslatorMethods {

}

/*********************************************
* SyncTranslator
**********************************************/
export interface SyncTranslator extends Base.IBaseResult, SyncTranslatorProps, SyncTranslatorCollections, SyncTranslatorMethods {

}

/*********************************************
* SyncTranslatorProps
**********************************************/
export interface SyncTranslatorProps {
	OutputSaveBehavior?: number;
}

/*********************************************
* SyncTranslatorPropMethods
**********************************************/
export interface SyncTranslatorPropMethods {

}

/*********************************************
* SyncTranslatorCollections
**********************************************/
export interface SyncTranslatorCollections extends SyncTranslatorPropMethods {

}

/*********************************************
* SyncTranslatorOData
**********************************************/
export interface SyncTranslatorOData extends Base.IBaseResult, SyncTranslatorProps, SyncTranslatorMethods {

}

/*********************************************
* SyncTranslatorMethods
**********************************************/
export interface SyncTranslatorMethods {
	translate(inputFile?: string, outputFile?: string): Base.IBaseExecution<SP.Translation.TranslationItemInfo>;
	translateStream(inputFile?: any, fileExtension?: string): Base.IBaseExecution<any>;
}

/*********************************************
* ITranslationJob
**********************************************/
export interface ITranslationJob extends TranslationJobCollections, TranslationJobMethods, Base.IBaseQuery<TranslationJob, ITranslationJobQuery> {

}

/*********************************************
* ITranslationJobCollection
**********************************************/
export interface ITranslationJobCollection extends Base.IBaseResults<TranslationJob> {
	done?: (resolve: (value?: Array<TranslationJob>) => void) => void;
}

/*********************************************
* ITranslationJobQueryCollection
**********************************************/
export interface ITranslationJobQueryCollection extends Base.IBaseResults<TranslationJobOData> {
	done?: (resolve: (value?: Array<TranslationJobOData>) => void) => void;
}

/*********************************************
* ITranslationJobQuery
**********************************************/
export interface ITranslationJobQuery extends TranslationJobOData, TranslationJobMethods {

}

/*********************************************
* TranslationJob
**********************************************/
export interface TranslationJob extends Base.IBaseResult, TranslationJobProps, TranslationJobCollections, TranslationJobMethods {

}

/*********************************************
* TranslationJobProps
**********************************************/
export interface TranslationJobProps {
	JobId?: any;
	Name?: string;
	OutputSaveBehavior?: number;
}

/*********************************************
* TranslationJobPropMethods
**********************************************/
export interface TranslationJobPropMethods {

}

/*********************************************
* TranslationJobCollections
**********************************************/
export interface TranslationJobCollections extends TranslationJobPropMethods {

}

/*********************************************
* TranslationJobOData
**********************************************/
export interface TranslationJobOData extends Base.IBaseResult, TranslationJobProps, TranslationJobMethods {

}

/*********************************************
* TranslationJobMethods
**********************************************/
export interface TranslationJobMethods {
	translateFile(inputFile?: string, outputFile?: string): Base.IBaseExecution<any>;
	translateFolder(inputFolder?: string, outputFolder?: string, recursion?: boolean): Base.IBaseExecution<any>;
	translateLibrary(inputLibrary?: string, outputLibrary?: string): Base.IBaseExecution<any>;
}

/*********************************************
* ITranslationJobStatus
**********************************************/
export interface ITranslationJobStatus extends TranslationJobStatusCollections, TranslationJobStatusMethods, Base.IBaseQuery<TranslationJobStatus, ITranslationJobStatusQuery> {

}

/*********************************************
* ITranslationJobStatusCollection
**********************************************/
export interface ITranslationJobStatusCollection extends Base.IBaseResults<TranslationJobStatus> {
	done?: (resolve: (value?: Array<TranslationJobStatus>) => void) => void;
}

/*********************************************
* ITranslationJobStatusQueryCollection
**********************************************/
export interface ITranslationJobStatusQueryCollection extends Base.IBaseResults<TranslationJobStatusOData> {
	done?: (resolve: (value?: Array<TranslationJobStatusOData>) => void) => void;
}

/*********************************************
* ITranslationJobStatusQuery
**********************************************/
export interface ITranslationJobStatusQuery extends TranslationJobStatusOData, TranslationJobStatusMethods {

}

/*********************************************
* TranslationJobStatus
**********************************************/
export interface TranslationJobStatus extends Base.IBaseResult, TranslationJobStatusProps, TranslationJobStatusCollections, TranslationJobStatusMethods {

}

/*********************************************
* TranslationJobStatusProps
**********************************************/
export interface TranslationJobStatusProps {
	Canceled?: number;
	Count?: number;
	Failed?: number;
	InProgress?: number;
	Name?: string;
	NotStarted?: number;
	Succeeded?: number;
}

/*********************************************
* TranslationJobStatusPropMethods
**********************************************/
export interface TranslationJobStatusPropMethods {

}

/*********************************************
* TranslationJobStatusCollections
**********************************************/
export interface TranslationJobStatusCollections extends TranslationJobStatusPropMethods {

}

/*********************************************
* TranslationJobStatusOData
**********************************************/
export interface TranslationJobStatusOData extends Base.IBaseResult, TranslationJobStatusProps, TranslationJobStatusMethods {

}

/*********************************************
* TranslationJobStatusMethods
**********************************************/
export interface TranslationJobStatusMethods {
	getAllItems(): Base.IBaseCollection<SP.Translation.TranslationItemInfo>;
}

/*********************************************
* VariationsTranslationTimerJob
**********************************************/
export interface VariationsTranslationTimerJob {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* VariationsTranslationTimerJobCollections
**********************************************/
export interface VariationsTranslationTimerJobCollections {

}
