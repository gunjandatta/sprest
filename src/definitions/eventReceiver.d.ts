import {
    IBase,
    SPTypes
} from ".";
/**
 * Event Receiver
 */
export interface IEventReceiver extends IBase {
    /**
     * Properties
     */

    /** Specifies the type of event. */
    EventType: SPTypes.EventReceiverType;

    /** The strong name of the assembly that is used for receiving events. */
    ReceiverAssembly?: string;

    /** A string that represents the class that is used for receiving events. */
    ReceiverClass?: string;

    /** The unique identifier of the event receiver. */
    ReceiverId?: string;

    /** The name of the event receiver. */
    ReceiverName: string;

    /** The URL of a web service that is used for receiving events. */
    ReceiverUrl?: string;

    /** An integer that represents the relative sequence of the event. */
    SequenceNumber?: number;

    /** The execution synchronization of the event receiver. */
    Synchronization?: SPTypes.EventReceiverSynchronizationType;

    /**
     * Methods
     */

    /**
     * Deletes the event receiver.
     */
    delete(): IBase;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?:(...args) => any): IEventReceiver;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl:boolean): IEventReceiver;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback:any, waitFl:boolean): IEventReceiver;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IEventReceiver;

    /**
     * Updates it's properties.
     * @param data - The field properties to update.
     */
    update(data): IBase;
}