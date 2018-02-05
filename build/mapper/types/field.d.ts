import { IBase } from "../../utils/types";
import { IResourcePath } from ".";
export interface IFieldCreationInformation {
    Choices?: {
        results: Array<string>;
    };
    FieldTypeKind: number;
    IsCompactName?: boolean;
    LookupFieldName?: string;
    LookupListId?: any;
    LookupWebId?: any;
    Required?: boolean;
    Title: string;
}
export interface IFieldMethods {
    delete(): IBase;
    setShowInDisplayForm(showInForm: any): IBase;
    setShowInEditForm(showInForm: any): IBase;
    setShowInNewForm(showInForm: any): IBase;
    update(data: any): IBase;
}
export interface IFieldProps {
    AutoIndexed: boolean;
    CanBeDeleted: boolean;
    DefaultValue: string;
    Description: string;
    Direction: string;
    EnforceUniqueValues: boolean;
    EntityPropertyName: string;
    FieldTypeKind: number;
    Filterable: boolean;
    FromBaseType: boolean;
    Group: string;
    Hidden: boolean;
    Id: string;
    Indexed: boolean;
    InternalName: string;
    JSLink: string;
    ReadOnlyField: boolean;
    Required: boolean;
    SchemaXml: string;
    Scope: string;
    Sealed: boolean;
    Sortable: boolean;
    StaticName: string;
    Title: string;
    TypeAsString: string;
    TypeDisplayName: string;
    TypeShortDescription: string;
    ValidationFormula: string;
    ValidationMessage: string;
}
export interface IFieldQueryProps {
    DescriptionResource(): IBase<IResourcePath>;
    TitleResource(): IBase<IResourcePath>;
}
export interface IFieldQueryResult extends IFieldMethods, IFieldProps {
    DescriptionResource: IResourcePath;
    TitleResource: IResourcePath;
}
export interface IFieldResult extends IFieldMethods, IFieldProps, IFieldQueryProps, IBase<IField, IFieldResult, IFieldQueryResult> {
}
export interface IField extends IFieldMethods, IFieldQueryProps, IBase<IField, IFieldResult, IFieldQueryResult> {
}
export interface IFieldBaseChoice extends IFieldResult {
    Choices: {
        results: Array<string>;
    };
    FillInChoice: boolean;
    Mappings: string;
}
export interface IFieldCalculated extends IFieldResult {
    DateFormat: number;
    Formula: string;
    OutputType: number;
}
export interface IFieldChoice extends IFieldBaseChoice {
    EditFormat: number;
}
export interface IFieldComputed extends IFieldResult {
    EnableLookup: boolean;
}
export interface IFieldCurrency extends IFieldNumber {
    CurrencyLocaleId: number;
}
export interface IFieldDateTime extends IFieldResult {
    DateTimeCalendarType: number;
    DisplayFormat: number;
    FriendlyDisplayFormat: number;
}
export interface IFieldLookup extends IFieldResult {
    AllowMultipleValues: boolean;
    IsDependentLookup: boolean;
    IsRelationship: boolean;
    LookupField: string;
    LookupList: string;
    LookupWebId: string;
    PrimaryFieldId: string;
    RelationshipDeleteBehavior: number;
}
export interface IFieldManagedMetadata extends IFieldLookup {
    AnchorId: string;
    IsAnchorValid: boolean;
    IsKeyword: boolean;
    IsPathRendered: boolean;
    IsTermSetValid: boolean;
    PinnedToFiltersPane: boolean;
    ShowInFiltersPane: number;
    SspId: string;
    TermSetId: string;
    UserCreated: boolean;
}
export interface IFieldMultiChoice extends IFieldBaseChoice {
}
export interface IFieldNote extends IFieldResult {
    AllowHyperlink: boolean;
    AppendOnly: boolean;
    NumberOfLines: number;
    RestrictedMode: boolean;
    RichText: boolean;
    WikiLinking: boolean;
}
export interface IFieldNumber extends IFieldResult {
    MaximumValue: number;
    MinimumValue: number;
    ShowAsPercentage?: boolean;
}
export interface IFieldRatingScale extends IFieldBaseChoice {
    GridEndNumber: number;
    GridNAOptionText: string;
    GridStartNumber: number;
    GridTextRangeAverage: string;
    GridTextRangeHigh: string;
    GridTextRangeLow: string;
    RangeCount: number;
}
export interface IFieldText extends IFieldResult {
    MaxLength: number;
}
export interface IFieldUrl extends IFieldResult {
    DisplayFormat: number;
}
export interface IFieldUser extends IFieldLookup {
    AllowDisplay: boolean;
    Presence: boolean;
    SelectionGroup: number;
    SelectionMode: number;
}
