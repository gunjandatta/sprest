import { Base } from "../../../../../";

/*********************************************
* DeviceEntityData
**********************************************/
export interface DeviceEntityData {
	ClientUserName?: string;
	DeviceName?: string;
	DiskSpace?: number;
	FriendlyName?: string;
	TargetUserName?: string;
	TaskQueueExpiresOnTimeUtc?: any;
	TaskQueueUrl?: string;
	Version?: string;
}

/*********************************************
* DeviceEntityDataCollections
**********************************************/
export interface DeviceEntityDataCollections {

}

/*********************************************
* MigrationTaskEntityData
**********************************************/
export interface MigrationTaskEntityData {
	AzureActiveDirectoryLkp?: boolean;
	CustomAzureAccessKey?: string;
	CustomAzureDeletionAfterMig?: boolean;
	CustomAzureStorageAccount?: string;
	DateCreated?: any;
	DateModified?: any;
	EnableIncremental?: boolean;
	EnableUserMappings?: boolean;
	Encrypted?: boolean;
	FilterOutHiddenFiles?: boolean;
	FilterOutPathSpecialCharacters?: boolean;
	IgnoredFileExtensions?: string;
	MigrateAllWebStructures?: boolean;
	MigrateOneNoteNotebook?: boolean;
	MigrateSchema?: boolean;
	Name?: string;
	PreservePermissionForFileShare?: boolean;
	PreserveUserPermissionForOnPrem?: boolean;
	ScanOnly?: boolean;
	ScheduledStartTimeUTC?: any;
	SkipListWithAudienceEnabled?: boolean;
	SourceListName?: string;
	SourceListRelativePath?: string;
	SourceUri?: string;
	SourceUserName?: string;
	StartMigrationAutomaticallyWhenNoScanIssue?: boolean;
	TargetListName?: string;
	TargetListRelativePath?: string;
	TargetSiteUrl?: string;
	TargetUserName?: string;
	TurnOnDateCreatedFilter?: boolean;
	TurnOnDateModifiedFilter?: boolean;
	TurnOnExtensionFilter?: boolean;
	Type?: number;
	UseCustomAzureStorage?: boolean;
	UserMappingCSVFile?: string;
	VersionNumsPreserved?: number;
}

/*********************************************
* MigrationTaskEntityDataCollections
**********************************************/
export interface MigrationTaskEntityDataCollections {

}

/*********************************************
* MigrationCredentialEntityData
**********************************************/
export interface MigrationCredentialEntityData {
	AccountName?: string;
	Description?: string;
	Password?: string;
	Type?: number;
}

/*********************************************
* MigrationCredentialEntityDataCollections
**********************************************/
export interface MigrationCredentialEntityDataCollections {

}
