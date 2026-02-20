// Web Worker
export function WebWorker(callback: () => void, interval: number = 1000) {
    // Create the worker process
    const blob = new Blob([WorkerCode(interval)], { type: "application/javascript" });
    const worker: Worker = new Worker(URL.createObjectURL(blob));

    // Set the callback method
    worker.onmessage = () => {

        // Call the callback method
        callback();
    }

    // Watch the unload event to stop the loop
    window.addEventListener("beforeunload", () => {
        // Stop the loop
        this.stop();
        this._worker.terminate();
    });

    // Starts the loop
    const start = () => { this._worker.postMessage("start"); }

    // Stops the loop
    const stop = () => { this._worker.postMessage("stop"); }

    // Return the public methods
    return { start, stop }
}

// The worker code
function WorkerCode(interval: number) {
    return `
let interval = [Default Interval];
let loopId = null;
self.onmessage = (e) => {
    // See if the input is a number
    if (typeof (e.data) === "number") {
        // Set the interval value
        interval = e.data;
    }

    // See if we are stopping the loop
    if (e.data == "stop") {
        // Stop the interval and loop id
        clearInterval(loopId);
        loopId = null;
        return;
    }

    // See if we are starting the loop
    if (e.data == "start") {
        // Ensure it's not already started
        if (loopId != null) { return; }

        // Start the loop
        loopId = setInterval(() => {
            // Trigger the callback
            self.postMessage(null);
        }, interval || 1000);
    }
}`.replace('[Default Interval]', interval.toString());
}