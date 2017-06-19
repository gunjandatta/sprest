import {
    IBase,
    IEventReceiver,
    SPTypes
} from "..";

/**
 * Event Receiver Methods
 */
export interface IEventReceiverMethods extends IBase<IEventReceiver, IEventReceiver> {
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