import { IBase } from "../../utils/types";
export interface IEventReceiverDefinitionCreationInformation {
    EventType: number;
    ReceiverAssembly?: string;
    ReceiverClass?: string;
    ReceiverName: string;
    ReceiverUrl?: string;
    SequenceNumber?: number;
    Synchronization?: number;
}
export interface IEventReceiverMethods {
    delete(): IBase;
    update(data: any): IBase;
}
export interface IEventReceiverProps {
    EventType: number;
    ReceiverAssembly?: string;
    ReceiverClass?: string;
    ReceiverId?: string;
    ReceiverName: string;
    ReceiverUrl?: string;
    SequenceNumber?: number;
    Synchronization?: number;
}
export interface IEventReceiverQueryProps {
}
export interface IEventReceiverQueryResult extends IEventReceiverMethods, IEventReceiverProps {
}
export interface IEventReceiverResult extends IEventReceiverMethods, IEventReceiverProps, IEventReceiverQueryProps, IBase<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> {
}
export interface IEventReceiver extends IEventReceiverMethods, IEventReceiverQueryProps, IBase<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> {
}
