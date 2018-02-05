export interface ILoader {
    loaded: boolean;
    waitForSPLibs(callback: any, timeout?: number, loadLibraries?: boolean): any;
}
