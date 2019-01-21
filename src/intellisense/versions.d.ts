import { SP } from "gd-sprest-def";
import { IBaseExecution, IBaseCollection } from "../utils/types/base";

/**
 * Versions
 */
export interface IVersions extends IBaseCollection<SP.FileVersion> {
    /**
     * Deletes all versions in the collection.
     */
    deleteAll(): IBaseExecution;

    /**
     * Deletes a version, by the specified id.
     * @param id - The version id to delete.
     */
    deleteById(id): IBaseExecution;

    /**
     * Deletes a version, by the specified label.
     * @param label - The version label to delete.
     */
    deleteByLabel(label): IBaseExecution;

    /**
     * Gets the version with the specified ID.
     * @param id - The version id to get.
     */
    getById(id): IBaseExecution<SP.FileVersion>;

    /**
     * Method to get the next set of results.
     */
    next(): IBaseExecution<IVersions>;

    /**
     * Restores a version, by the specified label.
     * @param label - The version label to restore.
     */
    restoreByLabel(label): IBaseExecution<SP.FileVersion>;
}