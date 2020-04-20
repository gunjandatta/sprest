import { Base } from "../../";
import { MS } from "../../";

/*********************************************
* FileSystemItem
**********************************************/
export interface FileSystemItem {
	CreatedBy?: MS.FileServices.UserInformation;
	ETag?: string;
	Id?: string;
	LastModifiedBy?: MS.FileServices.UserInformation;
	Name?: string;
	Size?: number;
	TimeCreated?: any;
	TimeLastModified?: any;
	Url?: string;
}

/*********************************************
* FileSystemItemCollections
**********************************************/
export interface FileSystemItemCollections extends FileSystemItemCollectionMethods {

}

/*********************************************
* FileSystemItemCollectionMethods
**********************************************/
export interface FileSystemItemCollectionMethods {
	add(name?: string, overwrite?: boolean, content?: any): Base.IBaseExecution<MS.FileServices.File>;
	getById(id?: string): Base.IBaseQuery<MS.FileServices.FileSystemItem> & MS.FileServices.FileSystemItemCollections;
}

/*********************************************
* IFile
**********************************************/
export interface IFile extends FileCollections, FileMethods, Base.IBaseQuery<File, IFileQuery> {

}

/*********************************************
* IFileCollection
**********************************************/
export interface IFileCollection extends Base.IBaseResults<File> {
	done?: (resolve: (value?: Array<File>) => void) => void;
}

/*********************************************
* IFileQueryCollection
**********************************************/
export interface IFileQueryCollection extends Base.IBaseResults<FileOData> {
	done?: (resolve: (value?: Array<FileOData>) => void) => void;
}

/*********************************************
* IFileQuery
**********************************************/
export interface IFileQuery extends FileOData, FileMethods {

}

/*********************************************
* File
**********************************************/
export interface File extends MS.FileServices.FileSystemItem, Base.IBaseResult, FileProps, FileCollections, FileMethods {

}

/*********************************************
* FileProps
**********************************************/
export interface FileProps {

}

/*********************************************
* FilePropMethods
**********************************************/
export interface FilePropMethods {

}

/*********************************************
* FileCollections
**********************************************/
export interface FileCollections extends FilePropMethods {

}

/*********************************************
* FileOData
**********************************************/
export interface FileOData extends Base.IBaseResult, FileProps, FileMethods {

}

/*********************************************
* FileMethods
**********************************************/
export interface FileMethods {
	copyTo(target?: string, overwrite?: boolean): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	download(): Base.IBaseExecution<any>;
	moveTo(target?: string, overwrite?: boolean): Base.IBaseExecution<any>;
	upload(stream?: any): Base.IBaseExecution<any>;
}

/*********************************************
* FileService
**********************************************/
export interface FileService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* FileServiceCollections
**********************************************/
export interface FileServiceCollections {

}

/*********************************************
* IFolder
**********************************************/
export interface IFolder extends FolderCollections, FolderMethods, Base.IBaseQuery<Folder, IFolderQuery> {

}

/*********************************************
* IFolderCollection
**********************************************/
export interface IFolderCollection extends Base.IBaseResults<Folder> {
	done?: (resolve: (value?: Array<Folder>) => void) => void;
}

/*********************************************
* IFolderQueryCollection
**********************************************/
export interface IFolderQueryCollection extends Base.IBaseResults<FolderOData> {
	done?: (resolve: (value?: Array<FolderOData>) => void) => void;
}

/*********************************************
* IFolderQuery
**********************************************/
export interface IFolderQuery extends FolderOData, FolderMethods {

}

/*********************************************
* Folder
**********************************************/
export interface Folder extends MS.FileServices.FileSystemItem, Base.IBaseResult, FolderProps, FolderCollections, FolderMethods {

}

/*********************************************
* FolderProps
**********************************************/
export interface FolderProps {
	ChildrenCount?: number;
}

/*********************************************
* FolderPropMethods
**********************************************/
export interface FolderPropMethods {

}

/*********************************************
* FolderCollections
**********************************************/
export interface FolderCollections extends FolderPropMethods {
	Children(): Base.IBaseCollection<MS.FileServices.FileSystemItem> & MS.FileServices.FileSystemItemCollectionMethods;
	Children(id: string | number): Base.IBaseQuery<MS.FileServices.FileSystemItem> & MS.FileServices.FileSystemItemCollections;
}

/*********************************************
* FolderOData
**********************************************/
export interface FolderOData extends Base.IBaseResult, FolderProps, FolderMethods {
	Children: Base.IBaseResults<MS.FileServices.FileSystemItem> & MS.FileServices.FileSystemItemCollectionMethods;
}

/*********************************************
* FolderMethods
**********************************************/
export interface FolderMethods {
	delete(): Base.IBaseExecution<any>;
	moveTo(target?: string): Base.IBaseExecution<any>;
}

/*********************************************
* MeFileService
**********************************************/
export interface MeFileService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MeFileServiceCollections
**********************************************/
export interface MeFileServiceCollections {

}
