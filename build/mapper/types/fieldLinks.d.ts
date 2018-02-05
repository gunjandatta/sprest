import { IBase, IBaseCollection } from "../../utils/types";
import { IFieldLink } from ".";
export interface IFieldLinks extends IBaseCollection<IFieldLink, IFieldLink, IFieldLink> {
    add(data: any): IBase<IFieldLink>;
    getById(id: any): IFieldLink & IBase<IFieldLink>;
    next(): IBase<IFieldLinks>;
}
