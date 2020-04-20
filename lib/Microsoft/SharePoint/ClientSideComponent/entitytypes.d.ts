import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* IHostedAppsManager
**********************************************/
export interface IHostedAppsManager extends HostedAppsManagerCollections, HostedAppsManagerMethods, Base.IBaseQuery<HostedAppsManager, IHostedAppsManagerQuery> {

}

/*********************************************
* IHostedAppsManagerCollection
**********************************************/
export interface IHostedAppsManagerCollection extends Base.IBaseResults<HostedAppsManager> {
	done?: (resolve: (value?: Array<HostedAppsManager>) => void) => void;
}

/*********************************************
* IHostedAppsManagerQueryCollection
**********************************************/
export interface IHostedAppsManagerQueryCollection extends Base.IBaseResults<HostedAppsManagerOData> {
	done?: (resolve: (value?: Array<HostedAppsManagerOData>) => void) => void;
}

/*********************************************
* IHostedAppsManagerQuery
**********************************************/
export interface IHostedAppsManagerQuery extends HostedAppsManagerOData, HostedAppsManagerMethods {

}

/*********************************************
* HostedAppsManager
**********************************************/
export interface HostedAppsManager extends Base.IBaseResult, HostedAppsManagerProps, HostedAppsManagerCollections, HostedAppsManagerMethods {

}

/*********************************************
* HostedAppsManagerProps
**********************************************/
export interface HostedAppsManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HostedAppsManagerPropMethods
**********************************************/
export interface HostedAppsManagerPropMethods {

}

/*********************************************
* HostedAppsManagerCollections
**********************************************/
export interface HostedAppsManagerCollections extends HostedAppsManagerPropMethods {

}

/*********************************************
* HostedAppsManagerOData
**********************************************/
export interface HostedAppsManagerOData extends Base.IBaseResult, HostedAppsManagerProps, HostedAppsManagerMethods {

}

/*********************************************
* HostedAppsManagerMethods
**********************************************/
export interface HostedAppsManagerMethods {
	add(webPartDataAsJson?: string, hostType?: string): Base.IBaseExecution<number>;
	getById(id?: number): Base.IBaseExecution<Microsoft.SharePoint.ClientSideComponent.HostedApp>;
}

/*********************************************
* IHostedApp
**********************************************/
export interface IHostedApp extends HostedAppCollections, HostedAppMethods, Base.IBaseQuery<HostedApp, IHostedAppQuery> {

}

/*********************************************
* IHostedAppCollection
**********************************************/
export interface IHostedAppCollection extends Base.IBaseResults<HostedApp> {
	done?: (resolve: (value?: Array<HostedApp>) => void) => void;
}

/*********************************************
* IHostedAppQueryCollection
**********************************************/
export interface IHostedAppQueryCollection extends Base.IBaseResults<HostedAppOData> {
	done?: (resolve: (value?: Array<HostedAppOData>) => void) => void;
}

/*********************************************
* IHostedAppQuery
**********************************************/
export interface IHostedAppQuery extends HostedAppOData, HostedAppMethods {

}

/*********************************************
* HostedApp
**********************************************/
export interface HostedApp extends Base.IBaseResult, HostedAppProps, HostedAppCollections, HostedAppMethods {

}

/*********************************************
* HostedAppProps
**********************************************/
export interface HostedAppProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HostedAppPropMethods
**********************************************/
export interface HostedAppPropMethods {

}

/*********************************************
* HostedAppCollections
**********************************************/
export interface HostedAppCollections extends HostedAppPropMethods {

}

/*********************************************
* HostedAppOData
**********************************************/
export interface HostedAppOData extends Base.IBaseResult, HostedAppProps, HostedAppMethods {

}

/*********************************************
* HostedAppMethods
**********************************************/
export interface HostedAppMethods {
	delete(): Base.IBaseExecution<any>;
	updateWebPartData(webPartDataAsJson?: string): Base.IBaseExecution<any>;
}

/*********************************************
* StorageEntity
**********************************************/
export interface StorageEntity {
	Comment?: string;
	Description?: string;
	Value?: string;
}

/*********************************************
* StorageEntityCollections
**********************************************/
export interface StorageEntityCollections {

}
