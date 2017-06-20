import { IBase, IResults, IVersion } from "..";
/**
 * Versions
 */
export interface IVersions extends IResults<IVersion>, IBase<IResults<IVersion>, IResults<IVersion>> {
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
    getById(id: any): IBase;
    /**
     * Method to get the next set of results.
     */
    next(): IVersions;
    /**
     * Restores a version, by the specified label.
     * @param label - The version label to restore.
     */
    restoreByLabel(label: any): IBase;
}
