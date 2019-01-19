import { SP } from "gd-sprest-def";
import { IBaseLib } from "../../utils/types/base";

/**
 * Event Receiver Methods
 */
export interface IEventReceiverMethods {
    /**
     * Deletes the event receiver.
     */
    delete(): IBaseLib;

    /**
     * Updates it's properties.
     * @param data - The field properties to update.
     */
    update(data): IBaseLib;
}

/**
 * Event Receiver Query Properties
 */
export interface IEventReceiverQueryProps { }

/**
 * Event Receiver Query Result
 */
export interface IEventReceiverQueryResult extends IEventReceiverMethods, SP.EventReceiverDefinition { }

/**
 * Event Receiver Result
 */
export interface IEventReceiverResult extends IEventReceiverMethods, SP.EventReceiverDefinition, IEventReceiverQueryProps, IBaseLib<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> { }

/**
 * Event Receiver
 */
export interface IEventReceiver extends IEventReceiverMethods, IEventReceiverQueryProps, IBaseLib<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> { }