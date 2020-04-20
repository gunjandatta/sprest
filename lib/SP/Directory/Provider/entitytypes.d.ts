import { Base } from "../../../";
import { SP } from "../../../";

/*********************************************
* IDirectoryNotification
**********************************************/
export interface IDirectoryNotification extends DirectoryNotificationCollections, DirectoryNotificationMethods, Base.IBaseQuery<DirectoryNotification, IDirectoryNotificationQuery> {

}

/*********************************************
* IDirectoryNotificationCollection
**********************************************/
export interface IDirectoryNotificationCollection extends Base.IBaseResults<DirectoryNotification> {
	done?: (resolve: (value?: Array<DirectoryNotification>) => void) => void;
}

/*********************************************
* IDirectoryNotificationQueryCollection
**********************************************/
export interface IDirectoryNotificationQueryCollection extends Base.IBaseResults<DirectoryNotificationOData> {
	done?: (resolve: (value?: Array<DirectoryNotificationOData>) => void) => void;
}

/*********************************************
* IDirectoryNotificationQuery
**********************************************/
export interface IDirectoryNotificationQuery extends DirectoryNotificationOData, DirectoryNotificationMethods {

}

/*********************************************
* DirectoryNotification
**********************************************/
export interface DirectoryNotification extends Base.IBaseResult, DirectoryNotificationProps, DirectoryNotificationCollections, DirectoryNotificationMethods {

}

/*********************************************
* DirectoryNotificationProps
**********************************************/
export interface DirectoryNotificationProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DirectoryNotificationPropMethods
**********************************************/
export interface DirectoryNotificationPropMethods {

}

/*********************************************
* DirectoryNotificationCollections
**********************************************/
export interface DirectoryNotificationCollections extends DirectoryNotificationPropMethods {

}

/*********************************************
* DirectoryNotificationOData
**********************************************/
export interface DirectoryNotificationOData extends Base.IBaseResult, DirectoryNotificationProps, DirectoryNotificationMethods {

}

/*********************************************
* DirectoryNotificationMethods
**********************************************/
export interface DirectoryNotificationMethods {
	notifyChanges(directoryObjectChanges?: SP.Directory.Provider.DirectoryObjectChanges): Base.IBaseExecution<any>;
}

/*********************************************
* ISharePointDirectoryProvider
**********************************************/
export interface ISharePointDirectoryProvider extends SharePointDirectoryProviderCollections, SharePointDirectoryProviderMethods, Base.IBaseQuery<SharePointDirectoryProvider, ISharePointDirectoryProviderQuery> {

}

/*********************************************
* ISharePointDirectoryProviderCollection
**********************************************/
export interface ISharePointDirectoryProviderCollection extends Base.IBaseResults<SharePointDirectoryProvider> {
	done?: (resolve: (value?: Array<SharePointDirectoryProvider>) => void) => void;
}

/*********************************************
* ISharePointDirectoryProviderQueryCollection
**********************************************/
export interface ISharePointDirectoryProviderQueryCollection extends Base.IBaseResults<SharePointDirectoryProviderOData> {
	done?: (resolve: (value?: Array<SharePointDirectoryProviderOData>) => void) => void;
}

/*********************************************
* ISharePointDirectoryProviderQuery
**********************************************/
export interface ISharePointDirectoryProviderQuery extends SharePointDirectoryProviderOData, SharePointDirectoryProviderMethods {

}

/*********************************************
* SharePointDirectoryProvider
**********************************************/
export interface SharePointDirectoryProvider extends Base.IBaseResult, SharePointDirectoryProviderProps, SharePointDirectoryProviderCollections, SharePointDirectoryProviderMethods {

}

/*********************************************
* SharePointDirectoryProviderProps
**********************************************/
export interface SharePointDirectoryProviderProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointDirectoryProviderPropMethods
**********************************************/
export interface SharePointDirectoryProviderPropMethods {

}

/*********************************************
* SharePointDirectoryProviderCollections
**********************************************/
export interface SharePointDirectoryProviderCollections extends SharePointDirectoryProviderPropMethods {

}

/*********************************************
* SharePointDirectoryProviderOData
**********************************************/
export interface SharePointDirectoryProviderOData extends Base.IBaseResult, SharePointDirectoryProviderProps, SharePointDirectoryProviderMethods {

}

/*********************************************
* SharePointDirectoryProviderMethods
**********************************************/
export interface SharePointDirectoryProviderMethods {
	createDirectoryObject(data?: SP.Directory.Provider.DirectoryObjectData): Base.IBaseExecution<SP.Directory.Provider.DirectoryObjectData>;
	deleteDirectoryObject(data?: SP.Directory.Provider.DirectoryObjectData): Base.IBaseExecution<any>;
	getOrCreateUnifiedGroupTenantInstanceId(groupId?: any, tenantInstanceId?: any): Base.IBaseExecution<any>;
	getOrCreateUnifiedGroupWithPreferredDataLocation(groupId?: any, preferredDataLocation?: string): Base.IBaseExecution<any>;
	notifyDataChanges(data?: SP.Directory.Provider.DirectoryObjectData): Base.IBaseExecution<any>;
	readDirectoryObject(data?: SP.Directory.Provider.DirectoryObjectData): Base.IBaseExecution<SP.Directory.Provider.DirectoryObjectData>;
	readDirectoryObjectBatch(ids?: Array<any>, objectType?: number): Base.IBaseCollection<SP.Directory.Provider.DirectoryObjectData>;
	updateCache(data?: SP.Directory.Provider.DirectoryObjectData): Base.IBaseExecution<any>;
	updateDirectoryObject(data?: SP.Directory.Provider.DirectoryObjectData): Base.IBaseExecution<any>;
}
