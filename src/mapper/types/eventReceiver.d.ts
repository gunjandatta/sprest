import { SP } from "@dattabase/sprest-def";
import { IBase } from "../../utils/types/base";

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
export interface IEventReceiverResult extends IEventReceiverMethods, SP.EventReceiverDefinition, IEventReceiverQueryProps, IBase<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> { }

/**
 * Event Receiver
 */
export interface IEventReceiver extends IEventReceiverMethods, IEventReceiverQueryProps, IBase<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> { }