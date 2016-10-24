/// <reference path="targetInfo.ts" />
module $REST.Types {
    /**
     * Base Settings
     */
    export interface BaseSettings {
        /** True to execute the request to the server, false to construct the object only. */
        executeRequestFl?:boolean;

        /** The target information settings. */
        settings?:Types.TargetInfoSettings;
    }
}