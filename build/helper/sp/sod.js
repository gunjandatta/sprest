"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Script on Demand (SOD)
 */
exports.SOD = {
    // Executes the specified function in the specified file with the optional arguments.
    execute: function (key, functionName) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        window["SP"] ? window["SP"].SOD.execute(key, functionName, args) : null;
    },
    // Ensures that the specified file that contains the specified function is loaded and then runs the specified callback function.
    executeFunc: function (key, functionName, fn) { window["SP"] ? window["SP"].SOD.executeFunc(key, functionName, fn) : null; },
    // Executes the specified function if the specified event has occurred; otherwise, adds the function to the pending job queue.
    executeOrDelayUntilEventNotified: function (func, eventName) { window["SP"] ? window["SP"].SOD.executeOrDelayUntilEventNotified(func, eventName) : null; },
    // Executes the specified function if the file containing it is loaded; otherwise, adds it to the pending job queue.
    executeOrDelayUntilScriptLoaded: function (func, depScriptFileName) { window["SP"] ? window["SP"].SOD.executeOrDelayUntilScriptLoaded(func, depScriptFileName) : null; },
    // Records the event and executes any jobs in the pending job queue that are waiting on the event.
    notifyEventAndExecuteWaitingJobs: function (eventName) { window["SP"] ? window["SP"].SOD.notifyEventAndExecuteWaitingJobs(eventName) : null; },
    // Records that the script file is loaded and executes any jobs in the pending job queue that are waiting for the script file to be loaded.
    notifyScriptLoadedAndExecuteWaitingJobs: function (scriptFileName) { window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs(scriptFileName) : null; },
    // Registers the specified file at the specified URL.
    registerSod: function (key, url) { window["SP"] ? window["SP"].SOD.registerSod(key, url) : null; },
    // Registers the specified file as a dependency of another file.
    registerSodDep: function (key, dep) { window["SP"] ? window["SP"].SOD.registerSodDep(key, dep) : null; },
};
