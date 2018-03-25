export * from "./spCfgTypes";
import { ISPConfig, ISPConfigProps } from "./types";
/**
 * SharePoint Configuration
 */
export declare const SPConfig: (cfg: ISPConfigProps, webUrl?: string) => ISPConfig;
