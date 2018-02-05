import { IBase } from "../../utils/types";
export interface IViewFields extends IBase<IViewFields, IViewFields, IViewFields> {
    SchemaXml: string;
    Items: string;
    results: Array<any>;
    addViewField(fieldName: any): IBase;
    moveViewFieldTo(field: any, index: any): IBase;
    next(): IBase<IViewFields>;
    removeAllViewFields(): IBase;
    removeViewField(fieldName: any): IBase;
}
