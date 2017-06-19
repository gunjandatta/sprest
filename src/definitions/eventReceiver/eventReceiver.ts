import { IEventReceiverMethods } from "./eventReceiverMethods";
import {
    IBase,
    SPTypes
} from "..";

/**
 * Event Receiver
 */
export interface IEventReceiver extends IEventReceiverMethods {
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