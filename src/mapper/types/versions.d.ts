import { SP } from "gd-sprest-def";
import { IBaseLib, IBaseCollection } from "../../utils/types/base";

/**
 * Versions
 */
export interface IVersions extends IBaseCollection<SP.FileVersion> {
    /**
     * Deletes all versions in the collection.
     */
    deleteAll(): IBaseLib;

    /**
     * Deletes a version, by the specified id.
     * @param id - The version id to delete.
     */
    deleteById(id): IBaseLib;

    /**
     * Deletes a version, by the specified label.
     * @param label - The version label to delete.
     */
    deleteByLabel(label): IBaseLib;

    /**
     * Gets the version with the specified ID.
     * @param id - The version id to get.
     */
    getById(id): IBaseLib<SP.FileVersion>;

    /**
     * Method to get the next set of results.
     */
    next(): IBaseLib<IVersions>;

    /**
     * Restores a version, by the specified label.
     * @param label - The version label to restore.
     */
    restoreByLabel(label): IBaseLib<SP.FileVersion>;
}