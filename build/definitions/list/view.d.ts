import { ComplexTypes, IBase, IViewFields, ODataQuery } from "..";
/**
 * View
 */
export interface IView extends IBase {
    /**
     * Properties
     */
    /** Gets or sets a value that specifies fields and functions that define totals shown in a list view. If not null, the XML must conform to FieldRefDefinitionAggregation, as specified in [MS-WSSCAML]. */
    Aggregations: string;
    /** Gets or sets a value that specifies whether totals are shown in the list view. */
    AggregationsStatus: string;
    /** Gets a value that specifies the base view identifier of the list view. */
    BaseViewId: string;
    /** Gets or sets the identifier of the content type with which the view is associated so that the view is available only on folders of this content type. */
    ContentTypeId: ComplexTypes.ContentTypeId;
    /** Gets or sets a value that specifies whether the list view is the default list view. */
    DefaultView: boolean;
    /** Gets or sets a value that specifies whether the list view is the default list view for the content type specified by contentTypeId. */
    DefaultViewForContentType: boolean;
    /** Gets or sets a value that specifies whether the list view was modified in an editor. */
    EditorModified: boolean;
    /** Gets or sets a value that specifies the column and row formatting for the list view. If not null, the XML must conform to ViewFormatDefinitions, as specified in [MS-WSSCAML]. */
    Formats: string;
    /** Gets or sets a value that specifies whether the list view is hidden. */
    Hidden: boolean;
    /** Gets a value that specifies the XML document that represents the list view. */
    HtmlSchemaXml: string;
    /** Gets a value that specifies the view identifier of the list view. */
    Id: string;
    /** Gets a value that specifies the URI (Uniform Resource Identifier) of the image for the list view. */
    ImageUrl: string;
    /** Gets or sets a value that specifies whether the current folder is displayed in the list view. */
    IncludeRootFolder: boolean;
    /** Gets or sets the name of the JavaScript file used for the view. */
    JSLink: string;
    /** Gets or sets a string that represents the view XML. */
    ListViewXml: string;
    /** Gets or sets a value that specifies the view method for the list view. If not null, the XML must conform to Method, as specified in [MS-WSSCAP]. */
    Method: string;
    /** Gets or sets a value that specifies whether the list view is the default mobile list view. */
    MobileDefaultView: boolean;
    /** Gets or sets a value that specifies whether the list view is a mobile list view. */
    MobileView: boolean;
    /** Gets a value that specifies the content approval type for the list view. */
    ModerationType: string;
    /** Gets a value that specifies whether list items can be reordered in the list view. */
    OrderedView: boolean;
    /** Gets or sets a value that specifies whether the list view is a paged view. */
    Paged: boolean;
    /** Gets a value that specifies whether the list view is a personal view. */
    PersonalView: boolean;
    /** Gets a value that specifies whether the list view is read-only. */
    ReadOnlyView: boolean;
    /** Gets a value that specifies whether the list view requires client integration rights. */
    RequiresClientIntegration: boolean;
    /** Gets or sets a value that specifies the maximum number of list items to display in a visual page of the list view. */
    RowLimit: number;
    /** Gets or sets a value that specifies the scope for the list view. Represents a ViewScope value. DefaultValue = 0, Recursive = 1, RecursiveAll = 2, FilesOnly = 3. */
    Scope: number;
    /** Gets a value that specifies the server-relative URL of the list view page. */
    ServerRelativeUrl: string;
    /** Gets a value that specifies the identifier of the view style for the list view. */
    StyleId: string;
    TabularView: boolean;
    /** Gets a value that specifies whether the list view is a threaded view. */
    Threaded: boolean;
    /** Gets or sets a value that specifies the display name of the list view. */
    Title: string;
    /** Gets or sets a value that specifies the toolbar for the list view. */
    Toolbar: string;
    /** Gets a value that specifies the name of the template for the toolbar that is used in the list view. */
    ToolbarTemplateName: string;
    /** Gets or sets a value that specifies the view data for the list view. If not null, the XML must conform to FieldRefDefinitionViewData, as specified in [MS-WSSCAML]. */
    ViewData: string;
    VisualizationInfo: ComplexTypes.Visualization;
    /**
     * Gets a value that specifies the collection of fields in the list view.
     */
    ViewFields(): IViewFields;
    /** Gets or sets a value that specifies the joins that are used in the list view. If not null, the XML must conform to ListJoinsDefinition, as specified in [MS-WSSCAML]. */
    ViewJoins: string;
    /** Gets or sets a value that specifies the projected fields that will be used by the list view. If not null, the XML must conform to ProjectedFieldsDefinitionType, as specified in [MS-WSSCAML]. */
    ViewProjectedFields: string;
    /** Gets or sets a value that specifies the query that is used by the list view. If not null, the XML must conform to CamlQueryRoot, as specified in [MS-WSSCAML]. */
    ViewQuery: string;
    /** Gets a value that specifies the type of the list view. Can be HTML, GRID, CALENDAR, RECURRENCE, CHART, or GANTT. */
    ViewType: string;
    /**
     * Methods
     */
    /**
     * Deletes the view.
     */
    delete(): IBase;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: IView, ...args) => any): IView;
    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): IView;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: IView, ...args) => any, waitFl: boolean): IView;
    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IView;
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): IView;
    /**
     * Returns the list view as HTML.
     */
    renderAsHtml(): IBase;
    /**
     * Updates it's properties.
     * @param data - The list properties to update.
     */
    update(data: any): IBase;
}
