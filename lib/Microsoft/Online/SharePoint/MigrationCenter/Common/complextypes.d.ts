import { Base } from "../../../../../";

/*********************************************
* MigrationStorageSettings
**********************************************/
export interface MigrationStorageSettings {
	EncryptedCertificate?: string;
	EncryptionKey?: string;
}

/*********************************************
* MigrationStorageSettingsCollections
**********************************************/
export interface MigrationStorageSettingsCollections {

}

/*********************************************
* MigrationTaskSettings
**********************************************/
export interface MigrationTaskSettings {
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
	PreservePermissionForFileShare?: boolean;
	PreserveUserPermissionForOnPrem?: boolean;
	ScanOnly?: boolean;
	SkipListWithAudienceEnabled?: boolean;
	StartMigrationAutomaticallyWhenNoScanIssue?: boolean;
	TurnOnDateCreatedFilter?: boolean;
	TurnOnDateModifiedFilter?: boolean;
	TurnOnExtensionFilter?: boolean;
	UseCustomAzureStorage?: boolean;
	UserMappingCSVFile?: string;
	VersionNumsPreserved?: number;
}

/*********************************************
* MigrationTaskSettingsCollections
**********************************************/
export interface MigrationTaskSettingsCollections {

}

/*********************************************
* TaskSchedulerInformation
**********************************************/
export interface TaskSchedulerInformation {
	AverageDurationMilliSeconds?: number;
	CreatedDateUtc?: string;
	DeliveryDateUtc?: string;
	MaxDurationMilliSeconds?: number;
	ScheduledTimes?: number;
	SchedulerExists?: boolean;
	SchedulerId?: string;
	Version?: string;
}

/*********************************************
* TaskSchedulerInformationCollections
**********************************************/
export interface TaskSchedulerInformationCollections {

}
