import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* ILogExport
**********************************************/
export interface ILogExport extends LogExportCollections, LogExportMethods, Base.IBaseQuery<LogExport, ILogExportQuery> {

}

/*********************************************
* ILogExportCollection
**********************************************/
export interface ILogExportCollection extends Base.IBaseResults<LogExport> {
	done?: (resolve: (value?: Array<LogExport>) => void) => void;
}

/*********************************************
* ILogExportQueryCollection
**********************************************/
export interface ILogExportQueryCollection extends Base.IBaseResults<LogExportOData> {
	done?: (resolve: (value?: Array<LogExportOData>) => void) => void;
}

/*********************************************
* ILogExportQuery
**********************************************/
export interface ILogExportQuery extends LogExportOData, LogExportMethods {

}

/*********************************************
* LogExport
**********************************************/
export interface LogExport extends Base.IBaseResult, LogExportProps, LogExportCollections, LogExportMethods {

}

/*********************************************
* LogExportProps
**********************************************/
export interface LogExportProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* LogExportPropMethods
**********************************************/
export interface LogExportPropMethods {

}

/*********************************************
* LogExportCollections
**********************************************/
export interface LogExportCollections extends LogExportPropMethods {

}

/*********************************************
* LogExportOData
**********************************************/
export interface LogExportOData extends Base.IBaseResult, LogExportProps, LogExportMethods {

}

/*********************************************
* LogExportMethods
**********************************************/
export interface LogExportMethods {
	getFiles(partitionId?: string, logType?: string): Base.IBaseCollection<Microsoft.Online.SharePoint.SPLogger.LogFileInfo>;
	getLogTypes(): Base.IBaseCollection<string>;
	getPartitions(logType?: string): Base.IBaseCollection<string>;
}

/*********************************************
* LogFileInfo
**********************************************/
export interface LogFileInfo {
	AlternateUrl?: string;
	DecryptionIV?: any;
	DecryptionKey?: any;
	Exception?: string;
	FileName?: string;
	Url?: string;
}

/*********************************************
* LogFileInfoCollections
**********************************************/
export interface LogFileInfoCollections {

}
