/**
 * Event Receiver
 */
interface IEventReceiver extends IBase {
    /**
     * Properties
     */

    /** Specifies the type of event. */
    EventType: $REST.Types.EventReceiverType;

    /** The strong name of the assembly that is used for receiving events. */
    ReceiverAssembly: string;

    /** A string that represents the class that is used for receiving events. */
    ReceiverClass: string;

    /** The unique identifier of the event receiver. */
    ReceiverId: string;

    /** The name of the event receiver. */
    ReceiverName: string;

    /** The URL of a web service that is used for receiving events. */
    ReceiverUrl: string;

    /** An integer that represents the relative sequence of the event. */
    SequenceNumber: number;

    /** The execution synchronization of the event receiver. */
    Synchronization: $REST.Types.EventReceiverSynchronizationType;

    /**
     * Methods
     */

    /**
     * Deletes the event receiver.
     */
    delete(): any;

    /**
     * Updates it's properties.
     * @param data - The field properties to update.
     */
    update(data): any;
}
