/**
 * Creates a worker process.
 * @param callback The method to execute when the process is working.
 * @param interval The sleep time in milliseconds to wait before calling the callback method
 */
export const WebWorker: IWebWorker;

export interface IWebWorker {
    // Constructor
    (callback: () => void, interval: number): IWebWorker;

    // Stops the worker process
    stop: () => void;

    // Starts the worker process
    start: () => void;
}
