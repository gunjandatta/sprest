module $REST.Types {
    /**
     * Target Information Settings
     */
    export interface TargetInfoSettings {
        asyncFl?:boolean;
        bufferFl?:boolean;
        callback?:() => void;
        data?:any;
        defaultToWebFl?:boolean;
        method?:string;
        endpoint?:string;
        url?:string;
    }
}