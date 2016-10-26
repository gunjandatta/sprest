/**
 * Event Receivers
 */
interface IEventReceivers extends IBase {
    /**
     * Properties
     */

    /** The event receiver collection. */
    results: Array<IEventReceiver>;

    /**
     * Methods
     */

    /**
     * Adds an event receiver to the collection.
     * @param parameters - The event receiver definition creation information.
     */
    add(parameters:$REST.Types.EventReceiverDefinitionCreationInformation): IEventReceiver;

    /**
     * Gets an event receiver in the collection.
     * @param id - The id of the event receiver.
     */
    getById(id:string): IEventReceiver;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(oData:$REST.Types.ODataSettings): IEventReceivers;
}
