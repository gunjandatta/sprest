import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* GroupNameValidationResultErrorParams
**********************************************/
export interface GroupNameValidationResultErrorParams {
	BlockedWord?: string;
	Prefix?: string;
	Suffix?: string;
	ValidationErrorCode?: string;
	ValidationErrorMessage?: string;
	ValidationPropertyName?: string;
}

/*********************************************
* GroupNameValidationResultErrorParamsCollections
**********************************************/
export interface GroupNameValidationResultErrorParamsCollections {

}

/*********************************************
* GroupNameValidationResult
**********************************************/
export interface GroupNameValidationResult {
	AliasErrorDetails?: SP.Directory.GroupNameValidationResultErrorParams;
	DisplayNameErrorDetails?: SP.Directory.GroupNameValidationResultErrorParams;
	ErrorCode?: string;
	ErrorMessage?: string;
	IsValidName?: boolean;
}

/*********************************************
* GroupNameValidationResultCollections
**********************************************/
export interface GroupNameValidationResultCollections {

}
