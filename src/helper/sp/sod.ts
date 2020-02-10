import { ISOD } from "../../../@types/helper";

/**
 * Script on Demand (SOD)
 */
export const SOD: ISOD = {
    // Executes the specified function in the specified file with the optional arguments.
    execute: (key: string, functionName: string, ...args) => { window["SP"] ? window["SP"].SOD.execute(key, functionName, args) : null; },

    // Ensures that the specified file that contains the specified function is loaded and then runs the specified callback function.
    executeFunc: (key: string, functionName: string, fn: Function) => { window["SP"] ? window["SP"].SOD.executeFunc(key, functionName, fn) : null; },

    // Executes the specified function if the specified event has occurred; otherwise, adds the function to the pending job queue.
    executeOrDelayUntilEventNotified: (func: Function, eventName: string) => { window["SP"] ? window["SP"].SOD.executeOrDelayUntilEventNotified(func, eventName) : null; },

    // Executes the specified function if the file containing it is loaded; otherwise, adds it to the pending job queue.
    executeOrDelayUntilScriptLoaded: (func: Function, depScriptFileName: string) => { window["SP"] ? window["SP"].SOD.executeOrDelayUntilScriptLoaded(func, depScriptFileName) : null; },

    // Records the event and executes any jobs in the pending job queue that are waiting on the event.
    notifyEventAndExecuteWaitingJobs: (eventName: string) => { window["SP"] ? window["SP"].SOD.notifyEventAndExecuteWaitingJobs(eventName) : null; },

    // Records that the script file is loaded and executes any jobs in the pending job queue that are waiting for the script file to be loaded.
    notifyScriptLoadedAndExecuteWaitingJobs: (scriptFileName: string) => { window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs(scriptFileName) : null; },

    // Registers the specified file at the specified URL.
    registerSod: (key: string, url: string) => { window["SP"] ? window["SP"].SOD.registerSod(key, url) : null; },

    // Registers the specified file as a dependency of another file.
    registerSodDep: (key: string, dep: string) => { window["SP"] ? window["SP"].SOD.registerSodDep(key, dep) : null; },
}