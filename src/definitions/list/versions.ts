import {
    IBase, IBaseCollection,
    IVersion
} from "..";

/**
 * Versions
 */
export interface IVersions extends IBaseCollection<IVersion, IVersion, IVersion> {
    /**
     * Deletes all versions in the collection.
     */
    deleteAll(): IBase;

    /**
     * Deletes a version, by the specified id.
     * @param id - The version id to delete.
     */
    deleteById(id): IBase;

    /**
     * Deletes a version, by the specified label.
     * @param label - The version label to delete.
     */
    deleteByLabel(label): IBase;

    /**
     * Gets the version with the specified ID.
     * @param id - The version id to get.
     */
    getById(id): IBase<IVersion>;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IVersions>;

    /**
     * Restores a version, by the specified label.
     * @param label - The version label to restore.
     */
    restoreByLabel(label): IBase<IVersion>;
}