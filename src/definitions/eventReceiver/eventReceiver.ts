import {
    IBase,
    SPTypes
} from "../index"

/**
 * Event Receiver Methods
 */
export interface IEventReceiverMethods {
    /**
     * Deletes the event receiver.
     */
    delete(): IBase;

    /**
     * Updates it's properties.
     * @param data - The field properties to update.
     */
    update(data): IBase;
}

/**
 * Event Receiver Properties
 */
export interface IEventReceiverProps {
    /** Specifies the type of event. */
    EventType: SPTypes.EventReceiverType | number;

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
    Synchronization?: SPTypes.EventReceiverSynchronizationType | number;
}

/**
 * Event Receiver Query Properties
 */
export interface IEventReceiverQueryProps { }

/**
 * Event Receiver Query Result
 */
export interface IEventReceiverQueryResult extends IEventReceiverMethods, IEventReceiverProps { }

/**
 * Event Receiver Result
 */
export interface IEventReceiverResult extends IEventReceiverMethods, IEventReceiverProps, IEventReceiverQueryProps, IBase<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> { }

/**
 * Event Receiver
 */
export interface IEventReceiver extends IEventReceiverMethods, IEventReceiverQueryProps, IBase<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> { }