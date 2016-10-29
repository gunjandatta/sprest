declare module $REST.Types {
    /**
     * Event Receiver
     */
    interface IEventReceiver extends IBase {
        /**
         * Properties
         */

        /** Specifies the type of event. */
        EventType: Types.EventReceiverType;

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
        Synchronization: Types.EventReceiverSynchronizationType;

        /**
         * Methods
         */

        /**
         * Deletes the event receiver.
         */
        delete(): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(IEventReceiver) => void): IEventReceiver;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IEventReceiver;

        /**
         * Updates it's properties.
         * @param data - The field properties to update.
         */
        update(data): any;
    }
}
