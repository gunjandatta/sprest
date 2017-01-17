import {
    ComplexTypes,
    IBase,
    IFileVersions,
    IPropertyValues,
    IUser,
    SPTypes
} from ".";
/**
 * File
 */
export interface IFile extends IBase {
    /**
     * Properties
     */

    /**
     * Gets a value that specifies the user who added the file.
     */
    Author(): IUser;

    /**
     * Gets a value that returns the user who has checked out the file.
     */
    CheckedOutByUser(): IUser;

    /** Gets a value that returns the comment used when a document is checked in to a document library. */
    CheckInComment: string;

    /** Gets a value that indicates how the file is checked out of a document library. Represents an SP.CheckOutType value: . The checkout state of a file is independent of its locked state. */
    CheckOutType: SPTypes.CheckOutType;

    /** Returns internal version of content, used to validate document equality for read purposes. */
    ContentTag: string;

    /** Gets a value that specifies the customization status of the file. Represents an SP.CustomizedPageStatus value: None = 0; Uncustomized = 1; Customized = 2. */
    CustomizedPageStatus: number;

    EffectiveInformationRightsManagementSettings(): IBase;

    /** Gets a value that specifies the ETag value. */
    ETag: string;

    /** Gets a value that specifies whether the file exists. */
    Exists: boolean;

    InformationRightsManagementSettings(): IBase;

    /** Gets the size of the file in bytes, excluding the size of any Web Parts that are used in the file. */
    Length: number;

    /** Gets a value that specifies the publishing level of the file. Represents an SP.FileLevel value: Published = 1; Draft = 2; Checkout = 255. */
    Level: number;

    LinkingUrl: string;

    /**
     * Gets a value that specifies the list item field values for the list item corresponding to the file.
     */
    ListItemAllFields(): IBase;

    /**
     * Gets a value that returns the user that owns the current lock on the file.
     */
    LockedByUser(): IUser;

    /** Gets a value that specifies the major version of the file. */
    MajorVersion: number;

    /** Gets a value that specifies the minor version of the file. */
    MinorVersion: number;

    /**
     * Gets a value that returns the user who last modified the file.
     */
    ModifiedBy(): IUser;

    /** Gets the name of the file including the extension. */
    Name: string;

    /**
     * Property Bag
     */
    Properties(): IPropertyValues;

    ServerRelativePath: ComplexTypes.ResourcePath;

    /** Gets the relative URL of the file based on the URL for the server. */
    ServerRelativeUrl: string;

    SiteId: string;

    /** Gets a value that specifies when the file was created. */
    TimeCreated: string;

    /** Gets a value that specifies when the file was last modified. */
    TimeLastModified: string;

    /** Gets a value that specifies the display name of the file. */
    Title: string;

    /** Gets a value that specifies the implementation-specific version identifier of the file. */
    UiVersion: number;

    /** Gets a value that specifies the implementation-specific version identifier of the file. */
    UiVersionLabel: string;

    UniqueId: string;

    VersionEvents(): IBase;

    /**
     * Gets a value that returns a collection of file version objects that represent the versions of the file.
     */
    Versions(): IFileVersions;

    WebId: string;

    /**
     * Methods
     */

    /**
     * Approves the file submitted for content approval with the specified comment.
     * @param comment - The comment for the approval. It's length must be <= 1023.
     */
    approve(comment): IBase;

    /**
     * Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     * @param uploadId - The unique id of the upload session.
     */
    cancelupload(uploadId): IBase;

    /**
     * Checks the file in to a document library based on the check-in type.
     * @param comment - The comment for the check-in. Its length must be <= 1023.
     * @param checkInType - The check-in type: MinorCheckIn - 0; MajorCheckIn - 1; OverwriteCheckIn - 2
     */
    checkin(comment, checkInType): IBase;

    /**
     * Checks out the file from a document library based on the check-out type.
     */
    checkout(): IBase;

    /**
     * Returns the file content.
     */
    content(): IBase;

    /**
     * Continues the chunk upload session with an additional fragment. The current file content is not changed.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     * @param uploadId - The unique id of the upload session.
     * @param fileOffset - The size of the offset into the file where the fragment starts.
     */
    continueUpload(uploadId, fileOffset): IBase;

    /**
     * Copies the file to the destination URL.
     * @param strNewUrl - The absolute URL or server relative URL of the destination file path to copy to.
     * @param bOverWrite - True to overwrite a file with the same name in the location.
     */
    copyTo(strNewUrl, bOverWrite): IBase;

    /**
     * Deletes the File.
     */
    delete(): IBase;

    /**
     * Denies approval for a file that was submitted for content approval.
     * Only documents in lists that are enabled for content approval can be denied.
     * @param comment - The comment for the denial. It's length must be <= 1023.
     */
    deny(comment): IBase;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?:(...args) => any): IFile;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl:boolean): IFile;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback:any, waitFl:boolean): IFile;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IFile;

    /**
     * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     * @param uploadId - The unique id of the upload session.
     * @param fileOffset - The size of the offset into the file where the fragment starts.
     */        
    finishUpload(uploadId, fileOffset): IBase;

    /**
     * Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
     * An exception is thrown if the file is not an ASPX page.
     * @param scope - The webpart personalization scope: User - 0; Shared - 1
     */
    getlimitedwebpartmanager(scope): IBase;

    /**
     * Moves the file to the specified destination URL.
     * @param newUrl - The absolute url or server relative url of the destination file path to move to.
     * @param flags - The move operation: Overwrite - 1; AllowBrokenThickets (Move even if supporting files are separated from the file) - 8;
     */
    moveTo(newUrl, flags): IBase;

    /**
     * Opens the file as a stream.
     */
    openBinaryStream(): IBase;

    /**
     * Submits the file for content approval with the specified comment.
     * @param comment - The comment for the published file. It's length must be <= 1023.
     */
    publish(comment): IBase;

    /**
     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): IBase;

    /**
     * Saves the file as a stream.
     * @param stream - The binary stream of the file.
     */
    saveBinaryStream(stream): IBase;

    /**
     * Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
     * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
     * The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
     * @param uploadId - The unique id of the upload session.
     */
    startUpload(uploadId): IBase;

    /**
     * Reverts an existing checkout for the file.
     */
    undoCheckOut(): IBase;

    /**
     * Removes the file from content approval or unpublish a major version.
     * @param comment - The comment for the unpublish operation. Its length must be <= 1023.
     */
    unpublish(comment): IBase;

    /**
     * Updates it's properties.
     * @param data - The file properties to update.
     */
    update(data): IBase;
}