import { SP } from "gd-sprest-def";
import { IBase, IBaseCollection } from "../../utils/types";
/**
 * Versions
 */
export interface IVersions extends IBaseCollection<SP.FileVersion> {
    /**
     * Deletes all versions in the collection.
     */
    deleteAll(): IBase;
    /**
     * Deletes a version, by the specified id.
     * @param id - The version id to delete.
     */
    deleteById(id: any): IBase;
    /**
     * Deletes a version, by the specified label.
     * @param label - The version label to delete.
     */
    deleteByLabel(label: any): IBase;
    /**
     * Gets the version with the specified ID.
     * @param id - The version id to get.
     */
    getById(id: any): IBase<SP.FileVersion>;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IVersions>;
    /**
     * Restores a version, by the specified label.
     * @param label - The version label to restore.
     */
    restoreByLabel(label: any): IBase<SP.FileVersion>;
}
