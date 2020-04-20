import { Base } from "../../";

/*********************************************
* TranslationItemInfo
**********************************************/
export interface TranslationItemInfo {
	Canceled?: boolean;
	ErrorMessage?: string;
	Failed?: boolean;
	InProgress?: boolean;
	InputFile?: string;
	NotStarted?: boolean;
	OutputFile?: string;
	Result?: number;
	Succeeded?: boolean;
	TranslationId?: any;
}

/*********************************************
* TranslationItemInfoCollections
**********************************************/
export interface TranslationItemInfoCollections {

}

/*********************************************
* TranslationJobInfo
**********************************************/
export interface TranslationJobInfo {
	Canceled?: boolean;
	CancelTime?: any;
	JobId?: any;
	Name?: string;
	PartiallySubmitted?: boolean;
	SubmittedTime?: any;
}

/*********************************************
* TranslationJobInfoCollections
**********************************************/
export interface TranslationJobInfoCollections {

}
