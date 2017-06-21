import { IBase, IBaseCollection, IEventReceiver, IEventReceiverDefinitionCreationInformation, IEventReceiverQueryResult, IEventReceiverResult } from "..";
/**
 * Event Receivers
 */
export interface IEventReceivers extends IBaseCollection<IEventReceivers, IEventReceiverResult, IEventReceiverQueryResult> {
    /**
     * Adds an event receiver to the collection.
     * @param parameters - The event receiver definition creation information.
     */
    add(parameters: IEventReceiverDefinitionCreationInformation): IBase<IEventReceiver>;
    /**
     * Gets an event receiver in the collection.
     * @param id - The id of the event receiver.
     */
    getById(id: string): IEventReceiver;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IEventReceivers>;
}
