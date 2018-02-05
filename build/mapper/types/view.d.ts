import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IViewFields } from ".";
export interface IViewCreationInformation {
    JSLink?: string;
    Paged?: boolean;
    PersonalView?: boolean;
    RowLimit?: number;
    SetAsDefaultView?: boolean;
    Title: string;
    ViewQuery?: string;
    ViewTypeKind?: number;
}
export interface IViewMethods {
    delete(): IBase;
    renderAsHtml(): IBase;
    update(data: any): IBase;
}
export interface IViewProps {
    Aggregations: string;
    AggregationsStatus: string;
    BaseViewId: string;
    ContentTypeId: Types.SP.IStringValue;
    DefaultView: boolean;
    DefaultViewForContentType: boolean;
    EditorModified: boolean;
    Formats: string;
    Hidden: boolean;
    HtmlSchemaXml: string;
    Id: string;
    ImageUrl: string;
    IncludeRootFolder: boolean;
    JSLink: string;
    ListViewXml: string;
    Method: string;
    MobileDefaultView: boolean;
    MobileView: boolean;
    ModerationType: string;
    OrderedView: boolean;
    Paged: boolean;
    PersonalView: boolean;
    ReadOnlyView: boolean;
    RequiresClientIntegration: boolean;
    RowLimit: number;
    Scope: number;
    ServerRelativeUrl: string;
    StyleId: string;
    TabularView: boolean;
    Threaded: boolean;
    Title: string;
    Toolbar: string;
    ToolbarTemplateName: string;
    ViewData: string;
    VisualizationInfo: Types.SP.IVisualization;
    ViewJoins: string;
    ViewProjectedFields: string;
    ViewQuery: string;
    ViewType: string;
}
export interface IViewQueryProps {
    ViewFields(): IViewFields;
}
export interface IViewQueryResult extends IViewMethods, IViewProps {
    ViewFields: Types.SP.IResults<string>;
}
export interface IViewResult extends IViewMethods, IViewProps, IViewQueryProps, IBase<IView, IViewResult, IViewQueryResult> {
}
export interface IView extends IViewMethods, IViewQueryProps, IBase<IView, IViewResult, IViewQueryResult> {
}
