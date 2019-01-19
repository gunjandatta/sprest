import { IBaseLib, IBaseCollection } from "../../utils/types/base";

/**
 * Feature
 */
export interface IFeature {
    /** The feature definition id. */
    DefinitionId: string;

    /** The feature definition name. (This property is not returned by default, and must be queried for.) */
    DisplayName?: string;
}
/**
 * Features Methods
 */
export interface IFeaturesMethods {
    /**
     * Activates a feature.
     * @param id - The feature id.
     */
    add(id: string): IBaseLib<IFeature>;

    /**
     * Gets a feature by id.
     * @param id - The feature id.
     */
    getById(id: string): IBaseLib<IFeature>;

    /**
     * Gets a feature by name.
     * @param name - The feature internal name.
     */
    getByName(name: string): IBaseLib<IFeatures>;

    /**
     * Deactivates a feature.
     * @param id - The feature id.
     */
    remove(id: string): IBaseLib;
}

/**
 * Features
 */
export interface IFeatures extends IFeaturesMethods, IBaseCollection<IFeature> { }