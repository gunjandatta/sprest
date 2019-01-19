import { SP } from "gd-sprest-def";
import { IBaseExecution, IBaseCollection } from "../../utils/types/base";
import { IEventReceiver, IEventReceiverQueryResult, IEventReceiverResult } from "./eventReceiver";

/**
 * Methods
 */
export interface IEventReceiversMethods {
    /**
     * Adds an event receiver to the collection.
     * @param parameters - The event receiver definition creation information.
     */
    add(parameters: SP.EventReceiverDefinitionCreationInformation): IBaseExecution<IEventReceiver, IEventReceiverResult>;

    /**
     * Gets an event receiver in the collection.
     * @param id - The id of the event receiver.
     */
    getById(id: string): IEventReceiver & IBaseExecution<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult>;

    /**
     * Method to get the next set of results.
     */
    next(): IBaseExecution<IEventReceivers, IEventReceiverResults>;
}

/**
 * Event Receivers
 */
export interface IEventReceivers extends IEventReceiversMethods, IBaseCollection<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> { }

/**
 * Event Receiver Results
 */
export interface IEventReceiverResults extends IEventReceiversMethods, IBaseCollection<IEventReceiverResult, IEventReceiverResult, IEventReceiverQueryResult> { }