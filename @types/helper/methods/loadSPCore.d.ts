/**
 * Loads the core SharePoint JavaScript library for JSOM.
 * @category Helper
 */
export const loadSPCore: IloadSPCore;
export interface IloadSPCore {
    (): PromiseLike<void>;
}