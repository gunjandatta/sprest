/**
 * Creates a worker process.
 * @param callback The method to execute when the process is working.
 * @param interval The sleep time in milliseconds to wait before calling the callback method
 */
export const WebWorker: (callback: () => void, interval: number) => IWebWorker;

export interface IWebWorker {
    // Stops the worker process
    stop: () => void;

    // Starts the worker process
    start: () => void;
}
