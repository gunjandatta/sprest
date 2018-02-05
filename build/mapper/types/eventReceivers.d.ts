import { IBase, IBaseCollection } from "../../utils/types";
import { IEventReceiver, IEventReceiverDefinitionCreationInformation, IEventReceiverQueryResult, IEventReceiverResult } from ".";
export interface IEventReceiversMethods {
    add(parameters: IEventReceiverDefinitionCreationInformation): IBase<IEventReceiver, IEventReceiverResult>;
    getById(id: string): IEventReceiver & IBase<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult>;
    next(): IBase<IEventReceivers, IEventReceiverResults>;
}
export interface IEventReceivers extends IEventReceiversMethods, IBaseCollection<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> {
}
export interface IEventReceiverResults extends IEventReceiversMethods, IBaseCollection<IEventReceiverResult, IEventReceiverResult, IEventReceiverQueryResult> {
}
