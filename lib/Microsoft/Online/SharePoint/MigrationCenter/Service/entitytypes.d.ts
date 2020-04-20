import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* IDevice
**********************************************/
export interface IDevice extends DeviceCollections, DeviceMethods, Base.IBaseQuery<Device, IDeviceQuery> {

}

/*********************************************
* IDeviceCollection
**********************************************/
export interface IDeviceCollection extends Base.IBaseResults<Device>, DeviceCollectionMethods {
	done?: (resolve: (value?: Array<Device>) => void) => void;
}

/*********************************************
* IDeviceQueryCollection
**********************************************/
export interface IDeviceQueryCollection extends Base.IBaseResults<DeviceOData>, DeviceCollectionMethods {
	done?: (resolve: (value?: Array<DeviceOData>) => void) => void;
}

/*********************************************
* IDeviceQuery
**********************************************/
export interface IDeviceQuery extends DeviceOData, DeviceMethods {

}

/*********************************************
* Device
**********************************************/
export interface Device extends Microsoft.Online.SharePoint.MigrationCenter.Common.DeviceEntityData, Base.IBaseResult, DeviceProps, DeviceCollections, DeviceMethods {

}

/*********************************************
* DeviceProps
**********************************************/
export interface DeviceProps {
	ActionId?: number;
	AssignedTimeUTC?: any;
	DebugCommand?: string;
	DeviceAddedTimeUTC?: any;
	Disconnected?: boolean;
	FromClient?: boolean;
	Id?: any;
	LastActivityTimeUtc?: any;
	LastHeartbeatTimeUtc?: any;
	LastModifiedTimeUtc?: any;
	LinkedTaskId?: any;
	Status?: number;
}

/*********************************************
* DevicePropMethods
**********************************************/
export interface DevicePropMethods {

}

/*********************************************
* DeviceCollections
**********************************************/
export interface DeviceCollections extends DevicePropMethods {

}

/*********************************************
* DeviceCollectionMethods
**********************************************/
export interface DeviceCollectionMethods {
	getById(id?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.Device> & Microsoft.Online.SharePoint.MigrationCenter.Service.DeviceCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.DeviceMethods;
}

/*********************************************
* DeviceOData
**********************************************/
export interface DeviceOData extends Base.IBaseResult, DeviceProps, DeviceMethods {

}

/*********************************************
* DeviceMethods
**********************************************/
export interface DeviceMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IMigrationCenterServices
**********************************************/
export interface IMigrationCenterServices extends MigrationCenterServicesCollections, MigrationCenterServicesMethods, Base.IBaseQuery<MigrationCenterServices, IMigrationCenterServicesQuery> {

}

/*********************************************
* IMigrationCenterServicesCollection
**********************************************/
export interface IMigrationCenterServicesCollection extends Base.IBaseResults<MigrationCenterServices> {
	done?: (resolve: (value?: Array<MigrationCenterServices>) => void) => void;
}

/*********************************************
* IMigrationCenterServicesQueryCollection
**********************************************/
export interface IMigrationCenterServicesQueryCollection extends Base.IBaseResults<MigrationCenterServicesOData> {
	done?: (resolve: (value?: Array<MigrationCenterServicesOData>) => void) => void;
}

/*********************************************
* IMigrationCenterServicesQuery
**********************************************/
export interface IMigrationCenterServicesQuery extends MigrationCenterServicesOData, MigrationCenterServicesMethods {

}

/*********************************************
* MigrationCenterServices
**********************************************/
export interface MigrationCenterServices extends Base.IBaseResult, MigrationCenterServicesProps, MigrationCenterServicesCollections, MigrationCenterServicesMethods {

}

/*********************************************
* MigrationCenterServicesProps
**********************************************/
export interface MigrationCenterServicesProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MigrationCenterServicesPropMethods
**********************************************/
export interface MigrationCenterServicesPropMethods {
	Storage(): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorage> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorageCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorageMethods;
}

/*********************************************
* MigrationCenterServicesCollections
**********************************************/
export interface MigrationCenterServicesCollections extends MigrationCenterServicesPropMethods {
	Devices(): Base.IBaseCollection<Microsoft.Online.SharePoint.MigrationCenter.Service.Device> & Microsoft.Online.SharePoint.MigrationCenter.Service.DeviceCollectionMethods;
	Devices(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.Device> & Microsoft.Online.SharePoint.MigrationCenter.Service.DeviceCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.DeviceMethods;
	Tasks(): Base.IBaseCollection<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTaskCollectionMethods;
	Tasks(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTaskCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTaskMethods;
}

/*********************************************
* MigrationCenterServicesOData
**********************************************/
export interface MigrationCenterServicesOData extends Base.IBaseResult, MigrationCenterServicesProps, MigrationCenterServicesMethods {
	Devices: Base.IBaseResults<Microsoft.Online.SharePoint.MigrationCenter.Service.Device> & Microsoft.Online.SharePoint.MigrationCenter.Service.DeviceCollectionMethods;
	Storage: Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorage & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorageCollections;
	Tasks: Base.IBaseResults<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTaskCollectionMethods;
}

/*********************************************
* MigrationCenterServicesMethods
**********************************************/
export interface MigrationCenterServicesMethods {

}

/*********************************************
* IMigrationCenterStorage
**********************************************/
export interface IMigrationCenterStorage extends MigrationCenterStorageCollections, MigrationCenterStorageMethods, Base.IBaseQuery<MigrationCenterStorage, IMigrationCenterStorageQuery> {

}

/*********************************************
* IMigrationCenterStorageCollection
**********************************************/
export interface IMigrationCenterStorageCollection extends Base.IBaseResults<MigrationCenterStorage> {
	done?: (resolve: (value?: Array<MigrationCenterStorage>) => void) => void;
}

/*********************************************
* IMigrationCenterStorageQueryCollection
**********************************************/
export interface IMigrationCenterStorageQueryCollection extends Base.IBaseResults<MigrationCenterStorageOData> {
	done?: (resolve: (value?: Array<MigrationCenterStorageOData>) => void) => void;
}

/*********************************************
* IMigrationCenterStorageQuery
**********************************************/
export interface IMigrationCenterStorageQuery extends MigrationCenterStorageOData, MigrationCenterStorageMethods {

}

/*********************************************
* MigrationCenterStorage
**********************************************/
export interface MigrationCenterStorage extends Base.IBaseResult, MigrationCenterStorageProps, MigrationCenterStorageCollections, MigrationCenterStorageMethods {

}

/*********************************************
* MigrationCenterStorageProps
**********************************************/
export interface MigrationCenterStorageProps {
	ActionId?: number;
	DebugCommand?: string;
	GlobalTaskSettings?: Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationTaskSettings;
	IsServiceInitialized?: boolean;
	SchedulerInformation?: Microsoft.Online.SharePoint.MigrationCenter.Common.TaskSchedulerInformation;
	SchemaVersion?: string;
	TotalDevicesAdded?: number;
	TotalTasksAdded?: number;
}

/*********************************************
* MigrationCenterStoragePropMethods
**********************************************/
export interface MigrationCenterStoragePropMethods {

}

/*********************************************
* MigrationCenterStorageCollections
**********************************************/
export interface MigrationCenterStorageCollections extends MigrationCenterStoragePropMethods {

}

/*********************************************
* MigrationCenterStorageOData
**********************************************/
export interface MigrationCenterStorageOData extends Base.IBaseResult, MigrationCenterStorageProps, MigrationCenterStorageMethods {

}

/*********************************************
* MigrationCenterStorageMethods
**********************************************/
export interface MigrationCenterStorageMethods {
	create(config?: Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationStorageSettings): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IMigrationTask
**********************************************/
export interface IMigrationTask extends MigrationTaskCollections, MigrationTaskMethods, Base.IBaseQuery<MigrationTask, IMigrationTaskQuery> {

}

/*********************************************
* IMigrationTaskCollection
**********************************************/
export interface IMigrationTaskCollection extends Base.IBaseResults<MigrationTask>, MigrationTaskCollectionMethods {
	done?: (resolve: (value?: Array<MigrationTask>) => void) => void;
}

/*********************************************
* IMigrationTaskQueryCollection
**********************************************/
export interface IMigrationTaskQueryCollection extends Base.IBaseResults<MigrationTaskOData>, MigrationTaskCollectionMethods {
	done?: (resolve: (value?: Array<MigrationTaskOData>) => void) => void;
}

/*********************************************
* IMigrationTaskQuery
**********************************************/
export interface IMigrationTaskQuery extends MigrationTaskOData, MigrationTaskMethods {

}

/*********************************************
* MigrationTask
**********************************************/
export interface MigrationTask extends Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationTaskEntityData, Base.IBaseResult, MigrationTaskProps, MigrationTaskCollections, MigrationTaskMethods {

}

/*********************************************
* MigrationTaskProps
**********************************************/
export interface MigrationTaskProps {
	ActionId?: number;
	ClientName?: string;
	DebugCommand?: string;
	Duration?: any;
	ErrorCode?: number;
	ErrorMessage?: string;
	FailedTimes?: number;
	FailedTimeUtc?: any;
	FailureId?: number;
	FilesScanned?: number;
	FilesScannedWithIssues?: number;
	FriendlyClientName?: string;
	IsRetryableFailure?: boolean;
	IsScanDone?: boolean;
	LinkedDeviceId?: any;
	LogFilePath?: string;
	ManagementStatus?: number;
	MigratedFilesCount?: number;
	ReportFileUrl?: string;
	ScanDoneTimeUtc?: any;
	StartTimeUTC?: any;
	Status?: number;
	StatusUpdatedTimeUTC?: any;
	TaskId?: any;
	ToBeMigratedFilesCount?: number;
	TotalBytes?: number;
	TotalBytesMigrated?: number;
	UpdateStatusOnly?: boolean;
	WorkflowId?: any;
}

/*********************************************
* MigrationTaskPropMethods
**********************************************/
export interface MigrationTaskPropMethods {

}

/*********************************************
* MigrationTaskCollections
**********************************************/
export interface MigrationTaskCollections extends MigrationTaskPropMethods {

}

/*********************************************
* MigrationTaskCollectionMethods
**********************************************/
export interface MigrationTaskCollectionMethods {
	getById(id?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTaskCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTaskMethods;
}

/*********************************************
* MigrationTaskOData
**********************************************/
export interface MigrationTaskOData extends Base.IBaseResult, MigrationTaskProps, MigrationTaskMethods {

}

/*********************************************
* MigrationTaskMethods
**********************************************/
export interface MigrationTaskMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IMigrationCredential
**********************************************/
export interface IMigrationCredential extends MigrationCredentialCollections, MigrationCredentialMethods, Base.IBaseQuery<MigrationCredential, IMigrationCredentialQuery> {

}

/*********************************************
* IMigrationCredentialCollection
**********************************************/
export interface IMigrationCredentialCollection extends Base.IBaseResults<MigrationCredential>, MigrationCredentialCollectionMethods {
	done?: (resolve: (value?: Array<MigrationCredential>) => void) => void;
}

/*********************************************
* IMigrationCredentialQueryCollection
**********************************************/
export interface IMigrationCredentialQueryCollection extends Base.IBaseResults<MigrationCredentialOData>, MigrationCredentialCollectionMethods {
	done?: (resolve: (value?: Array<MigrationCredentialOData>) => void) => void;
}

/*********************************************
* IMigrationCredentialQuery
**********************************************/
export interface IMigrationCredentialQuery extends MigrationCredentialOData, MigrationCredentialMethods {

}

/*********************************************
* MigrationCredential
**********************************************/
export interface MigrationCredential extends Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationCredentialEntityData, Base.IBaseResult, MigrationCredentialProps, MigrationCredentialCollections, MigrationCredentialMethods {

}

/*********************************************
* MigrationCredentialProps
**********************************************/
export interface MigrationCredentialProps {
	Id?: any;
	LastModifiedBy?: string;
	LastModifiedDateTimeUtc?: any;
}

/*********************************************
* MigrationCredentialPropMethods
**********************************************/
export interface MigrationCredentialPropMethods {

}

/*********************************************
* MigrationCredentialCollections
**********************************************/
export interface MigrationCredentialCollections extends MigrationCredentialPropMethods {

}

/*********************************************
* MigrationCredentialCollectionMethods
**********************************************/
export interface MigrationCredentialCollectionMethods {
	getById(id?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredential> & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredentialCollections & Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredentialMethods;
	getCredentials(AccountName?: string, Type?: number): Base.IBaseExecution<Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredential>;
}

/*********************************************
* MigrationCredentialOData
**********************************************/
export interface MigrationCredentialOData extends Base.IBaseResult, MigrationCredentialProps, MigrationCredentialMethods {

}

/*********************************************
* MigrationCredentialMethods
**********************************************/
export interface MigrationCredentialMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}
