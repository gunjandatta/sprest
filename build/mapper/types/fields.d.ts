import { IBase, IBaseCollection } from "../../utils/types";
import { IField, IFieldCreationInformation, IFieldQueryResult, IFieldResult } from ".";
export interface IFieldsMethods {
    add(parameters: IField): IBase<IField, IFieldResult>;
    addField(parameters: IFieldCreationInformation): IBase<IField, IFieldResult>;
    addDependentLookupField(displayName: any, primaryLookupField: any, showField: any): IBase<IField, IFieldResult>;
    createFieldAsXml(schemaXml: any): IBase<IField, IFieldResult>;
    getById(id: any): IField & IBase<IField, IFieldResult, IFieldQueryResult>;
    getByInternalNameOrTitle(internalNameOrTitle: any): IField & IBase<IField, IFieldResult, IFieldQueryResult>;
    getByTitle(title: any): IField & IBase<IField, IFieldResult, IFieldQueryResult>;
    next(): IBase<IFields, IFieldResults>;
}
export interface IFields extends IFieldsMethods, IBaseCollection<IField, IFieldResult, IFieldQueryResult> {
}
export interface IFieldResults extends IFieldsMethods, IBaseCollection<IFieldResult, IFieldResult, IFieldQueryResult> {
}
