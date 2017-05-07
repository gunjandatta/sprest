import {
    ComplexTypes,
    IBase,
    IEventReceiver,
    ODataQuery
} from ".";
/**
 * Event Receivers
 */
export interface IEventReceivers extends IBase {
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
    add(parameters:ComplexTypes.EventReceiverDefinitionCreationInformation): IEventReceiver;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?:(value?:IEventReceivers, ...args) => any): IEventReceivers;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl:boolean): IEventReceivers;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback:(value?:IEventReceivers, ...args) => any, waitFl:boolean): IEventReceivers;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IEventReceivers;

    /**
     * Gets an event receiver in the collection.
     * @param id - The id of the event receiver.
     */
    getById(id:string): IEventReceiver;

    /**
     * Method to get the next set of results.
     */
    next(): IEventReceivers;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query:ODataQuery): IEventReceivers;
}