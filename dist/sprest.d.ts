// Type definitions for gd-sprest
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/***************************************************************************************************
MIT License

Copyright (c) 2016 Dattabase, LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************************************/

declare module $REST {
    /***********************************************************************************************
     * Global Variables
     **********************************************************************************************/

    /**
     * Flag to execute requests against the host web. This is relevent to the app web only, and defaults to the SPHostUrl querystring value.
     */
    var DefaultRequestToHostWebFl:boolean;

    /**
     * Flag to execute the request by default on creation of an object.
     */
    var ExecuteOnCreationFl:boolean;

    /***********************************************************************************************
     * Enumerators
     **********************************************************************************************/

    /**
     * Draft Visibility Types
     */
    enum DraftVisibilityType {
        /** Enumeration whose values specify that the minimum permission is approver. */
        Approver = 2,

        /** Enumeration whose values specify that the minimum permission is author. */
        Author = 1,

        /** Enumeration whose values specify that the minimum permission is reader. */ 
        Reader = 0 
    }

    /**
     * Event Receiver Types
     */
    enum EventReceiverType {
        /** Event that occurs before an item has been added. */
        ItemAdding = 1,

        /** Event that occurs before an item is updated. */
        ItemUpdating = 2,

        /** Event that occurs before an item is deleted. */
        ItemDeleting = 3,

        /** Event that occurs before an item has been checked in. */
        ItemCheckingIn = 4,

        /** Event that occurs before an item is checked out. */
        ItemCheckingOut = 5,

        /** Event that occurs before an item is unchecked out. */
        ItemUncheckingOut = 6,

        /** Event that occurs before an attachment has been added to an item. */
        ItemAttachmentAdding = 7,

        /** Event that occurs before an attachment has been removed from the item. */
        ItemAttachmentDeleting = 8,

        /** Event that occurs before a file is moved. */
        ItemFileMoving = 9,

        /** Event that occurs before a document version is deleted. */
        ItemVersionDeleting = 11,

        /** Event that occurs before a field is added to a list. */
        FieldAdding = 101,

        /** Event that occurs before a field is updated. */
        FieldUpdating = 102,

        /** Event that occurs before a field is removed from a list. */
        FieldDeleting = 103,

        /** Event that occurs before a list is created. */
        ListAdding = 104,

        /** Event that occurs before a list is deleted. */
        ListDeleting = 105,

        /** Event that occurs before a site collection is deleted. */
        SiteDeleting = 201,

        /** Event that occurs before a site is deleted. */
        WebDeleting = 202,

        /** Event that occurs before a site URL has been changed. */
        WebMoving = 203,

        /** Event that occurs before a new site is created. */
        WebAdding = 204,

        /** Event that occurs before a security group is added. */
        GroupAdding = 301,

        /** Event that occurs before a security group is updated. */
        GroupUpdating = 302,

        /** Event that occurs before a security group is deleted. */
        GroupDeleting = 303,

        /** Event that occurs before a user is added to a security group. */
        GroupUserAdding = 304,

        /** Event that occurs before a user is deleted from a security group. */
        GroupUserDeleting = 305,

        /** Event that occurs before a role definition is added. */
        RoleDefinitionAdding = 306,

        /** Event that occurs before a role definition is updated. */
        RoleDefinitionUpdating = 307,

        /** Event that occurs before a role definition is deleted. */
        RoleDefinitionDeleting = 308,

        /** Event that occurs before a role assignment is added. */
        RoleAssignmentAdding = 309,

        /** Event that occurs before a role assignment is deleted. */
        RoleAssignmentDeleting = 310,

        /** Event that occurs before an inheritance is broken. */
        InheritanceBreaking = 311,

        /** Event that occurs before an inheritance is restored. */
        InheritanceResetting = 312,

        /** Event that occurs before a workflow starts running. */
        WorkflowStarting = 501,

        /** Event that occurs after an item has been added. */
        ItemAdded = 10001,

        /** Event that occurs after an item has been updated. */
        ItemUpdated = 10002,

        /** Event that occurs after an item has been deleted. */
        ItemDeleted = 10003,

        /** Event that occurs after an item has been checked in. */
        ItemCheckedIn = 10004,

        /** Event that occurs after an item has been checked out. */
        ItemCheckedOut = 10005,

        /** Event that occurs after an item has been unchecked out. */
        ItemUncheckedOut = 10006,

        /** Event that occurs after an attachment has been added to the item. */
        ItemAttachmentAdded = 10007,

        /** Event that occurs after an attachment has been removed from the item. */
        ItemAttachmentDeleted = 10008,

        /** Event that occurs after a file has been moved. */
        ItemFileMoved = 10009,

        /** Event that occurs after a file is transformed from one type to another. */
        ItemFileConverted = 10010,

        /** Event that occurs after a document version is deleted. */
        ItemVersionDeleted = 10011,

        /** Event that occurs after a field has been added. */
        FieldAdded = 10101,

        /** Event that occurs after a field has been updated. */
        FieldUpdated = 10102,

        /** Event that occurs after a field has been removed. */
        FieldDeleted = 10103,

        /** Event that occurs after a list has been created. */
        ListAdded = 10104,

        /** Event that occurs after a list has been deleted. */
        ListDeleted = 10105,

        /** Event that occurs after a site collection has been deleted. */
        SiteDeleted = 10201,

        /** Event that occurs after a site has been deleted. */
        WebDeleted = 10202,

        /** Event that occurs after a site URL has been changed. */
        WebMoved = 10203,

        /** Event that occurs after a new site has been created, but before that new site is provisioned. */
        WebProvisioned = 10204,

        /** Event that occurs happens after a security group is added. */
        GroupAdded = 10301,

        /** Event that occurs after a security group is updated. */
        GroupUpdated = 10302,

        /** Event that occurs after a security group is deleted. */
        GroupDeleted = 10303,

        /** Event that occurs after a user is added to a security group. */
        GroupUserAdded = 10304,

        /** Event that occurs after a user is deleted from a security group. */
        GroupUserDeleted = 10305,

        /** Event that occurs after a role definition is added. */
        RoleDefinitionAdded = 10306,

        /** Event that occurs after a role definition is updated. */
        RoleDefinitionUpdated = 10307,

        /** Event that occurs after a role definition is deleted. */
        RoleDefinitionDeleted = 10308,

        /** Event that occurs after a role assignment is added. */
        RoleAssignmentAdded = 10309,

        /** Event that occurs after a role definition is deleted. */
        RoleAssignmentDeleted = 10310,

        /** Event that occurs after an inheritance is broken. */
        InheritanceBroken = 10311,

        /** Event that occurs after an inheritance is restored. */
        InheritanceReset = 10312,

        /** Event that occurs after a workflow has started running. */
        WorkflowStarted = 10501,

        /** Event that occurs after a workflow has been postponed. */
        WorkflowPostponed = 10502,

        /** Event that occurs after a workflow has completed running. */
        WorkflowCompleted = 10503,

        /** Event that occurs when an instance of an external content type has been added. */
        EntityInstanceAdded = 10601,

        /** Event that occurs when an instance of an external content type has been updated. */
        EntityInstanceUpdated = 10602,

        /** Event that occurs when an instance of an external content type has been deleted. */
        EntityInstanceDeleted = 10603,

        /** Event that occurs after an app is installed. */
        AppInstalled = 10701,

        /** Event that occurs after an app is upgraded. */
        AppUpgraded = 10702,

        /** Event that occurs before an app is uninstalled. */
        AppUninstalling = 10703,

        /** Event that occurs after a list receives an e-mail message. */
        EmailReceived = 20000,

        /** Identifies workflow event receivers, and is therefore not a true event type. */
        ContextEvent = 32766,
    }

    /**
     * Field Types
     */
    enum FieldType {
        /** Specifies that the field indicates whether a meeting in a calendar list is an all-day event. */
        AllDayEvent = 29,

        /** Specifies that the field indicates whether the list item has attachments. */
        Attachments = 19,

        /** Specifies that the field contains a Boolean value. */
        Boolean = 8,

        /** Specifies that the field is a calculated field. */ 
        Calculated = 17,

        /** Specifies that the field contains a single value from a set of specified values. */ 
        Choice = 6,

        /** Specifies that the field is a computed field. */ 
        Computed = 12,

        /** Specifies that the field contains a content type identifier as a value. */ 
        ContentTypeId = 25,

        /** Specifies that the field contains a monotonically increasing integer. */ 
        Counter = 5,

        /** Specifies that the field contains a link between projects in a Meeting Workspace site. */ 
        CrossProjectLink = 22,

        /** Specifies that the field contains a currency value. */ 
        Currency = 10,

        /** Specifies that the field contains a date and time value or a date-only value. */ 
        DateTime = 4,

        /** Specifies that the type of the field was set to an invalid value. */ 
        Error = 24,

        /** Specifies that the field contains the leaf name of a document as a value. */ 
        File = 18,

        /** Specifies that the field contains geographical location values. */ 
        Geolocation = 31,

        /** Specifies that the field contains rating scale values for a survey list. */
        GridChoice = 16,

        /** Specifies that the field contains a GUID value. */ 
        Guid = 14,

        /** Specifies that the field contains an integer value. */ 
        Integer = 1,

        /** Must not be used. */ 
        Invalid = 0,

        /** Specifies that the field is a lookup field. */ 
        Lookup = 7,

        /** Must not be used. */ 
        MaxItems = 31,

        /** Specifies that the field indicates moderation status. */ 
        ModStat = 23,
        /** Specifies that the field contains one or more values from a set of specified values. */ 

        MultiChoice = 15,
        /** Specifies that the field contains multiple lines of text. */ 
        Note = 3,

        /** Specifies that the field contains a floating-point number value. */ 
        Number = 9,

        /** Specifies that the field separates questions in a survey list onto multiple pages. */
        PageSeparator = 26,

        /** Specifies that the field indicates whether a meeting in a calendar list recurs. */
        Recurrence = 21,

        /** Specifies that the field contains a single line of text. */ 
        Text = 2,

        /** Specifies that the field indicates the position of a discussion item in a threaded view of a discussion board. */ 
        ThreadIndex = 27,

        /** Specifies that the field indicates the thread for a discussion item in a threaded view of a discussion board. */
        Threading = 13,

        /** Specifies that the field contains a URI and an optional description of the URI. */ 
        URL = 11,

        /** Specifies that the field contains one or more users and groups as values. */ 
        User = 20,

        /** Specifies that the field contains the most recent event in a workflow instance. */ 
        WorkflowEventType = 30,

        /** Specifies that the field indicates the status of a workflow instance on a list item. */
        WorkflowStatus = 28
     }

     /**
      * List Template Types
      */
    enum ListTemplateType {
        /** Access Request List */
        AccessRequest = 160,

        /** Administrator Tasks */
        AdminTasks = 1200,

        /** Agenda (Meeting) */
        Agenda = 201,

        /** App Data Catalog */
        AppDataCatalog = 125,

        /** Announcements */
        Announcements = 104,

        /** Call Track */
        CallTrack = 404,

        /** Categories (Blog) */
        Categories = 303,

        /** Circulation */
        Circulation = 405,

        /** Comments (Blog) */
        Comments = 302,

        /** Contacts */
        Contacts = 105,

        /** Custom grid for a list */
        CustomGrid = 120,

        /** Data connection library for sharing information about external data connections */
        DataConnectionLibrary = 130,

        /** Data sources for a site */
        DataSources = 110,

        /** Decisions (Meeting) */
        Decision = 204,

        /** Design Catalog */
        DesignCatalog = 124,

        /** Draft Apps library in Developer Site */
        DeveloperSiteDraftApps = 1230,

        /** Discussion board */
        DiscussionBoard = 108,

        /** Document library */
        DocumentLibrary = 101,

        /** Calendar */
        Events = 106,

        /** External */
        ExternalList = 600,

        /** Facility */
        Facility = 402,

        /** Project Tasks */
        GanttTasks = 150,

        /** Custom list */
        GenericList = 100,

        /** Health Reports */
        HealthReports = 1221,

        /** Health Rules */
        HealthRules = 1220,

        /** Help Library */
        HelpLibrary = 151,

        /** Holidays */
        Holidays = 421,

        /** Workspace Pages (Meeting) */
        HomePageLibrary = 212,

        /** IME (Input Method Editor) Dictionary */
        IMEDic = 499,

        /** Issue tracking */
        IssueTracking = 1100,

        /** Links */
        Links = 103,

        /** List Template gallery */
        ListTemplateCatalog = 114,

        /** Master Page gallery */
        MasterPageCatalog = 116,

        /** Maintenance Logs Library */
        MaintenanceLogs = 175,

        /** Objectives (Meeting) */
        MeetingObjective = 207,

        /** Meeting Series (Meeting) */
        Meetings = 200,

        /** Attendees (Meeting) */
        MeetingUser = 202,

        /** My Site Document Library */
        MySiteDocumentLibrary = 700,

        /** Posts (Blog) */
        Posts = 301,

        /** No Code Public Workflow */
        NoCodePublic = 122,

        /** No Code Workflows */
        NoCodeWorkflows = 117,

        /** Picture library */
        PictureLibrary = 109,

        /** Solutions */
        SolutionCatalog = 121,

        /** Survey */
        Survey = 102,

        /** Tasks */
        Tasks = 107,

        /** Tasks with Timeline and Hierarchy */
        TasksWithTimelineAndHierarchy = 171,

        /** Text Box (Meeting) */
        TextBox = 210,

        /** Themes */
        ThemeCatalog = 123,

        /** Things To Bring (Meeting) */
        ThingsToBring = 211,

        /** Timecard */
        Timecard = 420,

        /** User Information */
        UserInformation = 112,

        /** Wiki Page Library */
        WebPageLibrary = 119,

        /** Web Part gallery */
        WebPartCatalog = 113,

        /** Site template gallery */
        WebTemplateCatalog = 111,

        /** Whereabouts */
        Whereabouts = 403,

        /** Workflow History */
        WorkflowHistory = 140,

        /** Custom Workflow Process */
        WorkflowProcess = 118,

        /** XML Form library */
        XMLForm = 115
    }

    /**
     * View Types
     */
    enum ViewType {
        /** Enumeration whose values specify a calendar list view type. */
        Calendar = 524288,

        /** Enumeration whose values specify a chart list view type. */ 
        Chart = 131072,

        /** Enumeration whose values specify a Gantt chart list view type. */ 
        Gantt = 67108864,
        
        /** Enumeration whose values specify a datasheet list view type. */
        Grid = 2048,
        
        /** Enumeration whose values specify an HTML list view type. */
        Html = 1,
        
        /** Enumeration whose values specify a list view type that displays recurring events. */
        Recurrence = 8193,
    }

    /***********************************************************************************************
     * Complex Types
     **********************************************************************************************/

    /**
     * Base Permissions
     */
    class BasePermissions {
        /** The bitwise high-order boundary (higher 32 bits) of the permission. */
        High:number;

        /** The bitwise low-order boundary (lower 32 bits) of the permission. */
        Log: number;
    }

    /**
     * CAML Query
     */
    class CamlQuery {
        /** Gets or sets a value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format. */
        DatesInUtc: boolean;

        /** Gets or sets a value that specifies the server relative URL of a list folder from which results will be returned. */
        FolderServerRelativeUrl: string;

        /** Gets or sets a value that specifies the information required to get the next page of data for the list view. */
        ListItemCollectionPosition: any;

        /** Gets or sets value that specifies the XML schema that defines the list view. */
        ViewXml: string;
    }

    /**
     * Content Type Creation Information
     */
    class ContentTypeCreationInformation {
        /** Gets or sets a value that specifies the description of the content type that will be constructed. */
        Description: string;

        /** Gets or sets a value that specifies the content type group of the content type that will be constructed. */
        Group: string;

        /** The content type id. */
        Id: string;

        /** Gets or sets a value that specifies the name of the content type that will be constructed. */
        Name: string;
    }

    /**
     * Event Receiver Definition Creation Information
     */
    class EventReceiverDefinitionCreationInformation {
        /** The type of event. See EventReceiverType in the .NET client object model reference for a list of values. */
        EventType: EventReceiverType;

        /** Specifies the strong name of the assembly that is used for receiving events. */        
        ReceiverAssembly: string;

        /** Specifies a string that represents the class that is used for receiving events. */
        ReceiverClass: string;

        /** Specifies the name of the event receiver. */
        ReceiverName: string;

        /** Specifies the URL of a web service that is used for receiving events. */
        ReceiverUrl: string;

        /** Specifies an integer that represents the relative sequence of the event. */        
        SequenceNumber: number;
        
        /** Specifies the execution synchronization of the event receiver. */
        Synchronization: number;
    }

    /**
     * Field Creation Information 
     */
    class FieldCreationInformation {
        /** The values that are available for selection in the field. */
        Choices: Array<any>;
        
        /** A value that specifies the type of the field. */
        FieldTypeKind: FieldType;

        /** Indicates whether only the first eight characters are used for the field name. */
        IsCompactName: boolean;

        /** The name of the source lookup field. */
        LookupFieldName: string;
        
        /** The ID of the target list for the source lookup field. */
        LookupListId: any;
        
        /** The ID of the site that contains the list that is the source for the lookup field value. */
        LookupWebId: any;
        
        /** A value that specifies whether the field requires a value. */
        Required: boolean;
        
        /** A value that specifies the display name of the field. */
        Title: string;
    }

    /**
     * File Creation Information
    */
    class FileCreationInformation {
        /** The binary content of the file. */
        Content: any;

        /** Indicates whether to overwrite an existing file with the same name and in the same location as the one being added. */
        Overwrite: boolean;

        /** The URL of the file. */
        Url: string;
    }

    /**
     * List Creation Information
     */
    class ListCreationInformation {
        /** A value that specifies whether the list supports content types. */
        AllowContentTypes: boolean;

        /** The list definition type on which the list is based. */
        BaseTemplate: ListTemplateType;

        /** A value that specifies whether content types are enabled for the list. */        
        ContentTypesEnabled: boolean;

        /** A value that specifies the default workflow identifier for content approval on the list. Returns an empty GUID if there is no default content approval workflow. */
        DefaultContentApprovalWorkflowId: any;

        /** A value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL */
        DefaultDisplayFormUrl: string;

        /** A value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL. */
        DefaultEditFormUrl: string;

        /** A value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL. */
        DefaultNewFormUrl: string;

        /** A value that specifies the description of the list. */
        Description: string;

        /** A value that specifies the reading order of the list. Returns "NONE", "LTR", or "RTL". */
        Direction: string;

        /** A value that specifies the server-relative URL of the document template for the list. */
        DocumentTemplateUrl: string;

        /** A value that specifies the minimum permission required to view minor versions and drafts within the list. */
        DraftVersionVisibility: DraftVisibilityType;

        /** A value that specifies whether list item attachments are enabled for the list. */
        EnableAttachments: boolean;

        /** A value that specifies whether new list folders can be added to the list. */
        EnableFolderCreation: boolean;

        /** A value that specifies whether minor versions are enabled for the list. */
        EnableMinorVersions: boolean;

        /** A value that specifies whether content approval is enabled for the list. */
        EnableModeration: boolean;

        /** A value that specifies whether historical versions of list items and documents can be created in the list. */
        EnableVersioning: boolean;

        /** A value that indicates whether forced checkout is enabled for the document library. */
        ForceCheckout: boolean;

        /** A value that specifies whether the list is hidden. If true, the server sets the OnQuickLaunch property to false. */
        Hidden: boolean;

        /** */
        IrmEnabled: boolean;

        /** */
        IrmExpire: boolean;

        /** */
        IrmReject: boolean;

        /** A value that specifies a flag that a client application can use to determine whether to display the list. */
        IsApplicationList: boolean;

        /** A value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site. */
        MultipleDataList: boolean;

        /** A value that specifies that the crawler must not crawl the list. */
        NoCrawl: boolean;

        /** A value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false. */
        OnQuickLaunch: boolean;

        /** The displayed title for the list. Its length must be <= 255 characters. */
        Title: string;

        /** A value that specifies the data validation criteria for a list item. Its length must be <= 1023. */
        ValidationFormula: string;

        /** A value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023. */
        ValidationMessage: string;
    }

    /**
     * View Creation Information
     */
    class ViewCreationInformation {
        /** A value that specifies whether the new list view is a paged view. */
        Paged: boolean;

        /** A value that specifies whether the new list view is a personal view. If the value is false, the new list view is a public view. */
        PersonalView: boolean;

        /** A value that specifies the query for the new list view. */
        Query: string;

        /** A value that specifies the maximum number of list items that the new list view displays on a visual page of the list view. */
        RowLimit: number;

        /** A value that specifies whether the new list view is the default list view. */
        SetAsDefaultView: boolean;

        /** A value that specifies the display name of the new list view. */
        Title: string;

        /** A value that specifies the type of the new list view. */
        ViewTypeKind: ViewType;
    }

    /**
     * Web Creation Information
     */
    class WebCreationInformation {
        /** The description of the new site. */
        Description: string;

        /** The locale ID that specifies the language of the new site. */
        Language: number;

        /** A value that specifies the title of the new site. */
        Title: string;

        /** The URL leaf name of the new site. The URL must not contain the following:
            The characters ~, ", #, %, &, *, :, <, >, ?, \, {, |, or }
            The string \x7f
            Consecutive . or / characters
            Starting ., /, or _ characters
            Ending . or / characters
        */
        Url: string;

        /** A value that specifies whether the new site will inherit permissions from its parent site. */
        UseSamePermissionsAsParentSite: boolean;

        /** A value that specifies the name of the site template to be used for creating the new site. Use the GetAvailableWebTemplates method to get the names of available web templates on the site. */
        WebTemplate: string;
    }
    
    /***********************************************************************************************
     * Public Interface
     **********************************************************************************************/

    /**
     * The base class
     */
    class Base {
        /**
         * Properties
         */

        /** True to execute the request asynchronously, synchronously otherwise. */
        asyncFl: boolean;

        /** True, if the object exists, false otherwise. */
        existsFl: boolean;

        /** The parent object, which created this object. */
        parent: any;

        /** Method executed after the asynchronous request completes. */
        done(callback:(...args) => void);
    }

    /**
     * Attachment Files
     */
    class AttachmentFiles extends Base {
        /**
         * Properties
         */

        /** The attachment file collection. */
        results: Array<any>;

        /**
         * Methods
         */

        /**
         * Adds the attachment that is represented by the specified file name and byte array to the list item.
         * @param name - The name of the file to add.
         * @param contents - The file contents as an array buffer.
        **/
        add(name): any;
    }

    /**
     * Content Type
     */
    class ContentType extends Base {
        /**
         * Constructor
         * @param contentTypeName - The content type name to get.
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(contentTypeName:string, listName?:string, ...args);

        /**
         * Properties
         */

        /** Gets or sets a description of the content type. */
        Description: string;

        /** Gets or sets a value that specifies the name of a custom display form template to use for list items that have been assigned the content type. */
        DisplayFormTemplateName: string;

        /** Gets or sets a value that specifies the URL of a custom display form to use for list items that have been assigned the content type. */
        DisplayFormUrl: string;

        /** Gets or sets a value that specifies the file path to the document template used for a new list item that has been assigned the content type. */
        DocumentTemplate: string;

        /** Gets a value that specifies the URL of the document template assigned to the content type. */
        DocumentTemplateUrl: string;

        /** Gets or sets a value that specifies the name of a custom edit form template to use for list items that have been assigned the content type. */
        EditFormTemplateName: string;

        /** Gets or sets a value that specifies the URL of a custom edit form to use for list items that have been assigned the content type. */
        EditFormUrl: string;

        /** Gets the column (also known as field) references in the content type. */
        get_FieldLinks(): FieldLinks;

        /** Gets a value that specifies the collection of fields for the content type. */
        get_Fields(): Fields;

        /** Gets or sets a value that specifies the content type group for the content type. */
        Group: string;

        /** Gets or sets a value that specifies whether the content type is unavailable for creation or usage directly from a user interface. */
        Hidden: string;

        /** Gets a value that specifies an identifier for the content type. */
        Id: string;

        /** Gets or sets the JSLink for the content type custom form template. The JSLink property is not supported on Survey or Events lists. A SharePoint calendar is an Events list. */
        Jslink: string;

        /** Gets or sets a value that specifies the name of the content type. */
        Name: string;

        /** Gets or sets a value that specifies the name of the content type. */
        NewFormTemplateName: string;

        /** Gets or sets a value that specifies the name of the content type. */
        NewFormUrl: string;

        /** Gets the parent content type of the content type. */
        Parent: string;

        /** Gets or sets a value that specifies whether changes to the content type properties are denied. */
        Readonly: string;

        /** Gets a value that specifies the XML Schema representing the content type. */
        SchemaXml: string;

        /** Gets a non-localized version of the XML schema that defines the content type. */
        SchemaXmlWithResourceTokens: string;

        /** Gets a value that specifies a server-relative path to the content type scope of the content type. */
        Scope: string;

        /** Gets or sets whether the content type can be modified. */
        Sealed: string;

        /** A string representation of the value of the Id. */
        StringId: string;

        /** Gets a value that specifies the collection of workflow associations for the content type. */
        get_WorkflowAssociations(): any;

        /**
         * Methods
         */

        /**
         * Adds a field link to the content type.
         * @param fieldLink - The field link.
         */
        addFieldLink(fieldLink): any;

        /**
         * Deletes the content type.
         */
        delete(): any;

        /**
         * Gets a field by it's internal name.
         * @param name - The internal name of the field.
         */
        getFieldByInternalName(name): any;

        /**
         * Gets a field by it's static name.
         * @param name - The static name of the field.
         */
        getFieldByStaticName(name): any;

        /**
         * Gets a field by it's title.
         * @param title - The title of the field.
         */
        getFieldByTitle(title): any;

        /**
         * Gets a field link by it's internal name.
         * @param name - The internal name of the field.
         */
        getFieldLinkByName(name): any;

        /**
         * Updates it's properties.
         * @param data - The content type properties to update.
         */
        update(data): any;
    }

    /**
     * Content Type (Asynchronous)
     */
    class ContentType_Async extends ContentType { }

    /**
     * Content Types
     */
    class ContentTypes extends Base {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName?:string, ...args);

        /**
         * Properties
         */

        /** The content type collection. */
        results: Array<ContentType>;

        /**
         * Methods
         */

        /**
         * Adds a content type to the collection.
         * @param data - The content type creation information.
         */
        add(ContentTypeCreationInformation): ContentType;

        /**
         * Adds an existing content type to this collection.
         * @param contentTypeId - The content type id to add.
         */
        addAvailableContentType(contentTypeId): ContentType;

        /**
         * Gets a content type by id.
         * @param id - The content type id.
         */
        getById(id): ContentType;

        /**
         * Gets a content type by name.
         * @param name - The name of the content type.
         */
        getByName(name);
    }

    /**
     * Content Types (Async)
     */
    class ContentTypes_Async extends ContentTypes { }

    /**
     * Field
     */
    class Field extends Base {
        /**
         * Constructor
         * @param internalNameOrTitle - The internal name or title of the field.
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(internalNameOrTitle:string, listName?:string, ...args);

        /**
         * Properties
         */

        /** Gets a value that specifies whether the field can be deleted. */
        CanBeDeleted: string;

        /** Gets or sets a value that specifies the default value for the field. */
        DefaultValue: string;

        /** Gets or sets a value that specifies the description of the field. */
        Description: string;

        /** Gets or sets a value that specifies the reading order of the field. */
        Direction: string;

        /** Gets or sets a value that specifies whether to require unique field values in a list or library column. */
        EnforceUniqueValues: string;

        /** Gets the name of the entity property for the list item entity that uses this field. */
        EntityPropertyName: string;

        /** Gets or sets a value that specifies the type of the field. Represents a FieldType value. See FieldType in the .NET client object model reference for a list of field type values. */
        FieldTypeKind: string;

        /** Gets a value that specifies whether list items in the list can be filtered by the field value. */
        Filterable: string;

        /** Gets a Boolean value that indicates whether the field derives from a base field type. */
        FromBaseType: string;

        /** Gets or sets a value that specifies the field group. */
        Group: string;

        /** Gets or sets a value that specifies whether the field is hidden in list views and list forms. */
        Hidden: string;

        /** Gets a value that specifies the field identifier. */
        Id: string;

        /** Gets or sets a Boolean value that specifies whether the field is indexed. */
        Indexed: string;

        /** Gets a value that specifies the field internal name. */
        InternalName: string;

        /** Gets or sets the name of an external JS file containing any client rendering logic for fields of this type. */
        JSLink: string;

        /** Gets or sets a value that specifies whether the value of the field is read-only. */
        ReadOnlyField: string;

        /** Gets or sets a value that specifies whether the field requires a value. */
        Required: string;

        /** Gets or sets a value that specifies the XML schema that defines the field. */
        Schemaxml: string;

        /** Gets a value that specifies the server-relative URL of the list or the site to which the field belongs. */
        Scope: string;

        /** Gets a value that specifies whether properties on the field cannot be changed and whether the field cannot be deleted. */
        Sealed: string;

        /** Gets a value that specifies whether list items in the list can be sorted by the field value. */
        Sortable: string;

        /** Gets or sets a value that specifies a customizable identifier of the field. */
        StaticName: string;

        /** Gets or sets value that specifies the display name of the field. */
        Title: string;

        /** Gets or sets a value that specifies the type of the field. */
        TypeAsString: string;

        /** Gets a value that specifies the display name for the type of the field. */
        TypeDisplayName: string;

        /** Gets a value that specifies the description for the type of the field. */
        TypeShortDescription: string;

        /** Gets or sets a value that specifies the data validation criteria for the value of the field. */
        ValidationFormula: string;

        /** Gets or sets a value that specifies the error message returned when data validation fails for the field. */
        ValidationMessage: string;

        /**
         * Methods
         */

        /**
         * Deletes the field.
         */
        delete(): any;

        /**
         * Sets the value of the ShowInDisplayForm property for this field.
         * @param showInForm - Flag to show the field in the display form.
         */
        setShowInDisplayForm(showInForm): any;

        /**
         * Sets the value of the ShowInEditForm property for this field.
         * @param showInForm - Flag to show the field in the display form.
         */
        setShowInEditForm(showInForm): any;

        /**
         * Sets the value of the ShowInNewForm property for this field.
         * @param showInForm - Flag to show the field in the display form.
         */
        setShowInNewForm(showInForm): any;

        /**
         * Updates it's properties.
         * @param data - The field properties to update.
         */
        update(data): any;
    }

    /**
     * Field (Async)
     */
    class Field_Async extends Field { }

    /**
     * Field Links
     */
    class FieldLinks extends Base {
        /**
         * Properties
         */

        /** The field link collection. */
        results: Array<any>;

        /**
         * Methods
         */

        /**
         * Adds a content type to the collection.
         * @param data - The field link properties.
         */
        add(data): any;

        /**
         * Gets the field link by its id.
         * @param id - The id of the field.
         */
        getById(id);

        /**
         * Gets a field by it's internal name.
         * @param name - The internal name of the field.
         */
        getFieldLinkByName(name): any;
    }

    /**
     * Fields
     */
    class Fields extends Base {
        /**
         * Constructor
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName?:string, ...args);

        /**
         * Properties
         */

        /** The field collection. */
        results: Array<Field>;

        /**
         * Methods
         */

        /**
         * Adds a field to the field collection.
         * @param parameters - The field creation information.
         */
        add(FieldCreationInformation): Field;

        /**
         * Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
         * @param displayName - The title of the new field.
         * @param primaryLookupField - The ID of the lookup field to associate this dependent lookup field with.
         * @param showField - The name of the field from the target list to include data from.
         */
        addDependentLookup(displayName, primaryLookupField, showField): Field;

        /**
         * Creates a field based on the specified schema, Boolean value, and field options.
         * Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
         * @param schemaXml - The schema XML definition of the field.
         */
        createFieldAsXml(schemaXml): Field;

        /**
         * Gets the field with the specified ID.
         * @param id - The field id.
         */
        getById(id): Field;

        /**
         * Returns the first Field object with the specified internal name or title from the collection.
         * @param internalNameOrTitle - The internal name or title of the field.
         */
        getByInternalNameOrTitle(internalNameOrTitle): Field;

        /**
         * Returns the first field object in the collection based on the title of the specified field.
         * @param title - The title of the field.
         */
        getByTitle(title): Field;
    }

    /**
     * Fields (Async)
     */
    class Fields_Async extends Fields { }

    /**
     * File
     */
    class File extends Base {
        /**
         * Constructor
         * @param serverRelativeUrl - The server relative url of the file.
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(serverRelativeUrl:string, listName?:string, ...args);

        /**
         * Properties
         */

        /** Gets a value that specifies the user who added the file. */
        get_Author(): User;

        /** Gets a value that returns the user who has checked out the file. */
        get_CheckedOutByUser(): User;

        /** Gets a value that returns the comment used when a document is checked in to a document library. */
        CheckInComment: string;

        /** Gets a value that indicates how the file is checked out of a document library. Represents an SP.CheckOutType value: Online = 0; Offline = 1; None = 2. The checkout state of a file is independent of its locked state. */
        CheckOutType: string;

        /** Returns internal version of content, used to validate document equality for read purposes. */
        ContentTag: string;

        /** Gets a value that specifies the customization status of the file. Represents an SP.CustomizedPageStatus value: None = 0; Uncustomized = 1; Customized = 2. */
        CustomizedPageStatus: string;

        /** Gets a value that specifies the ETag value. */
        ETag: string;

        /** Gets a value that specifies whether the file exists. */
        Exists: string;

        /** Gets the size of the file in bytes, excluding the size of any Web Parts that are used in the file. */
        Length: string;

        /** Gets a value that specifies the publishing level of the file. Represents an SP.FileLevel value: Published = 1; Draft = 2; Checkout = 255. */
        Level: string;

        /** Gets a value that specifies the list item field values for the list item corresponding to the file. */
        get_ListItemAllFields(): any;

        /** Gets a value that returns the user that owns the current lock on the file. */
        get_LockedByUser(): User;

        /** Gets a value that specifies the major version of the file. */
        MajorVersion: string;

        /** Gets a value that specifies the minor version of the file. */
        MinorVersion: string;

        /** Gets a value that returns the user who last modified the file. */
        get_ModifiedBy(): User;

        /** Gets the name of the file including the extension. */
        Name: string;

        /** Gets the relative URL of the file based on the URL for the server. */
        ServerRelativeUrl: string;

        /** Gets a value that specifies when the file was created. */
        TimeCreated: string;

        /** Gets a value that specifies when the file was last modified. */
        TimeLastModified: string;

        /** Gets a value that specifies the display name of the file. */
        Title: string;

        /** Gets a value that specifies the implementation-specific version identifier of the file. */
        UiVersion: string;

        /** Gets a value that specifies the implementation-specific version identifier of the file. */
        UiVersionLabel: string;

        /** Gets a value that returns a collection of file version objects that represent the versions of the file. */
        get_Versions(): FileVersions;

        /**
         * Methods
         */

        /**
         * Approves the file submitted for content approval with the specified comment.
         * @param comment - The comment for the approval. It's length must be <= 1023.
         */
        approve(comment): any;

        /**
         * Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         * @param uploadId - The unique id of the upload session.
         */
        cancelupload(uploadId): any;

        /**
         * Checks the file in to a document library based on the check-in type.
         * @param comment - The comment for the check-in. Its length must be <= 1023.
         * @param checkInType - The check-in type: MinorCheckIn - 0; MajorCheckIn - 1; OverwriteCheckIn - 2
         */
        checkin(comment, checkInType): any;

        /**
         * Checks out the file from a document library based on the check-out type.
         */
        checkout(): any;

        /**
         * Returns the file content.
         */
        content(): any;

        /**
         * Continues the chunk upload session with an additional fragment. The current file content is not changed.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         * @param uploadId - The unique id of the upload session.
         * @param fileOffset - The size of the offset into the file where the fragment starts.
         */
        continueUpload(uploadId, fileOffset): any;

        /**
         * Copies the file to the destination URL.
         * @param strNewUrl - The absolute URL or server relative URL of the destination file path to copy to.
         * @param bOverWrite - True to overwrite a file with the same name in the location.
         */
        copyTo(strNewUrl, bOverWrite): any;

        /**
         * Deletes the File.
         */
        delete(): any;

        /**
         * Denies approval for a file that was submitted for content approval.
         * Only documents in lists that are enabled for content approval can be denied.
         * @param comment - The comment for the denial. It's length must be <= 1023.
         */
        deny(comment): any;

        /**
         * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         * @param uploadId - The unique id of the upload session.
         * @param fileOffset - The size of the offset into the file where the fragment starts.
         */        
        finishUpload(uploadId, fileOffset): any;

        /**
         * Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
         * An exception is thrown if the file is not an ASPX page.
         * @param scope - The webpart personalization scope: User - 0; Shared - 1
         */
        getlimitedwebpartmanager(scope): any;

        /**
         * Moves the file to the specified destination URL.
         * @param newUrl - The absolute url or server relative url of the destination file path to move to.
         * @param flags - The move operation: Overwrite - 1; AllowBrokenThickets (Move even if supporting files are separated from the file) - 8;
         */
        moveTo(newUrl, flags): any;

        /**
         * Opens the file as a stream.
         */
        openBinaryStream(): any;

        /**
         * Submits the file for content approval with the specified comment.
         * @param comment - The comment for the published file. It's length must be <= 1023.
         */
        publish(comment): any;

        /**
         * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): any;

        /**
         * Saves the file as a stream.
         * @param stream - The binary stream of the file.
         */
        saveBinaryStream(stream): any;

        /**
         * Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
         * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
         * The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
         * @param uploadId - The unique id of the upload session.
         */
        startUpload(uploadId): any;

        /**
         * Reverts an existing checkout for the file.
         */
        undoCheckOut(): any;

        /**
         * Removes the file from content approval or unpublish a major version.
         * @param comment - The comment for the unpublish operation. Its length must be <= 1023.
         */
        unpublish(comment);

        /**
         * Updates it's properties.
         * @param data - The file properties to update.
         */
        update(data): any;
    }

    /**
     * File (Async)
     */
    class File_Async extends File { }

    /**
     * Files
     */
    class Files extends Base {
        /**
         * Constructor
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName?:string, ...args);

        /**
         * Properties
         */

        /** The file collection. */
        results: Array<File>;

        /**
         * Methods
         */

        /**
         * Adds a file to this collection.
         * @param overwrite - true to overwrite the file if it already exists; otherwise false.
         * @param url - The folder-relative URL of the file.
         * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        add(overwrite, url, content): File;

        /**
         * Adds a ghosted file to an existing list or document library.
         * @param urlOfFile - The server-relative URL where you want to save the file.
         * @param templateFileType - The SP.TemplateFileType to use to create the file: StandardPage = 0; WikiPage = 1; FormPage = 2.
         */
        addTemplateFile(urlOfFile, templateFileType): any;

        /**
         * Gets the file for the specified name
         * @param name - The file name.
         */
        getByName(name): File;

        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The name or server relative url of the file.
         */
        getByUrl(serverRelativeUrl): File;
    }

    /**
     * File Version
     */
    class FileVersion extends Base {
        /**
         * Properties
         */

        /** Gets a value that specifies the check-in comment. */
        CheckInComment: string;

        /** Gets a value that specifies the creation date and time for the file version. */
        Created: string;

        /** Gets a value that specifies the user that represents the creator of the file version. */
        get_CreatedBy(): User;

        /** Gets the internal identifier for the file version. */
        ID: string;

        /** Gets a value that specifies whether the file version is the current version. */
        IsCurrentVersion: string;

        /**  */
        Size: string;

        /** Gets a value that specifies the relative URL of the file version based on the URL for the site or subsite. */
        Url: string;

        /** Gets a value that specifies the implementation specific identifier of the file. Uses the majorVersionNumber.minorVersionNumber format, for example: 1.2. */
        VersionLabel: string;

        /**
         * Methods
         */

        /**
         * Deletes the file version.
         */
        delete():any;
    }

    /**
     * Files (Async)
     */
    class Files_Async extends Files { }

    /**
     * File Versions
     */
    class FileVersions extends Base {
        /**
         * Properties
         */

        /** The file version collection. */
        results: Array<FileVersion>;
    }

    /**
     * Folder
     */
    class Folder extends Base {
        /**
         * Constructor
         * @param serverRelativeUrl - The server relative url of the folder.
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(serverRelativeUrl:string, listName?:string, ...args);

        /**
         * Properties
         */

        /** Specifies the sequence in which content types are displayed. */
        ContentTypeOrder: string;

        /** Gets the collection of all files contained in the list folder. You can add a file to a folder by using the Add method on the folder’s FileCollection resource. */
        get_Files(): Files;

        /** Gets the collection of list folders contained in the list folder. */
        get_Folders(): Folders;

        /** Gets a value that specifies the count of items in the list folder. */
        ItemCount: string;

        /** Specifies the list item field (2) values for the list item corresponding to the file. */
        get_ListItemAllFields(): any;

        /** Gets the name of the folder. */
        Name: string;

        /** Gets the parent list folder of the folder. */
        get_ParentFolder(): Folder;

        /** Gets the collection of all files contained in the folder. */
        get_Properties(): any;

        /** Gets the server-relative URL of the list folder. */
        ServerRelativeUrl: string;

        /** Gets or sets a value that specifies the content type order. */
        UniqueContentTypeOrder: string;

        /** Gets or sets a value that specifies folder-relative URL for the list folder welcome page. */
        WelcomePage: string;

        /**
         * Methods
         */

        /**
         * Adds a file to this folder.
         * @param overwrite - true to overwrite the file if it already exists; otherwise false.
         * @param url - The folder-relative URL of the file.
         * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        addFile(url, overwrite, content): File;

        /**
         * Adds a ghosted file to this list or document library.
         * @param urlOfFile - The server-relative URL where you want to save the file.
         * @param templateFileType - The SP.TemplateFileType to use to create the file: StandardPage = 0; WikiPage = 1; FormPage = 2.
         */
        addTemplateFile(urlOfFile, templateFileType): any;

        /**
         * Adds the sub-folder that is located at the specified URL to the collection.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        addSubFolder(url): Folder;

        /**
         * Deletes the folder.
         */
        delete(): any;

        /**
         * Gets the file for the specified name.
         * @param name - The file name.
         */
        getFile(name): File;

        /**
         * Gets the folder for the specified name.
         * @param name - The folder name.
         */
        getSubFolder(name): Folder;

        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The server-relative URL of the folder.
         */
        getByUrl(serverRelativeUrl): Folder;

        /**
         * Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): any;

        /**
         * Updates it's properties.
         * @param data - The file properties to update.
         */
        update(data): any;
    }

    /**
     * Folder (Async)
     */
    class Folder_Async extends Folder { }

    /**
     * Folders
     */
    class Folders extends Base {
        /**
         * Constructor
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName?:string, ...args);

        /**
         * Properties
         */

        /** The folder collection. */
        results: Array<Folder>;

        /**
         * Methods
         */

        /**
         * Adds the folder that is located at the specified URL to the collection.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        add(url): Folder;

        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The server-relative URL of the folder.
         */
        getbyurl(serverRelativeUrl);
    }

    /**
     * Folders (Async)
     */
    class Folders_Async extends Folders { }

    /**
     * Group
     */
    class Group extends Base {
        /**
         * Properties
         */

        /** Gets or sets a value that indicates whether the group members can edit membership in the group. */
        AllowMembersEditMembership: string;

        /** Gets or sets a value that indicates whether to allow users to request membership in the group and request to leave the group. */
        AllowRequestToJoinLeave: string;

        /** Gets or sets a value that indicates whether the request to join or leave the group can be accepted automatically. */
        get_AutoAcceptRequestToJoinLeave(): string;

        /** Gets a value that indicates whether the current user can edit the membership of the group. */
        get_CanCurrentUserEditMembership(): string;

        /** Gets a value that indicates whether the current user can manage the group. */
        get_CanCurrentUserManageGroup(): string;

        /** Gets a value that indicates whether the current user can view the membership of the group. */
        get_CanCurrentUserViewMembership(): string;

        /** Gets or sets the description of the group. */
        Description: string;

        /** Gets a value that specifies the member identifier for the user or group. */
        Id: string;

        /** Gets a value that indicates whether this member should be hidden in the UI. */
        IsHiddenInUI: string;

        /** Gets the name of the group. */
        LoginName: string;

        /** Gets or sets a value that indicates whether only group members are allowed to view the membership of the group. */
        OnlyAllowMembersViewMembership: string;

        /** Gets or sets the owner of the group which can be a user or another group assigned permissions to control security. */
        get_Owner(): User;

        /** Gets the name for the owner of this group. */
        OwnerTitle: string;

        /** Gets or sets the email address to which the requests of the membership are sent. */
        RequestToJoinLeaveEmailSetting: string;

        /** Gets a value containing the type of the principal. Represents a bitwise SP.PrincipalType value: None = 0; User = 1; DistributionList = 2; SecurityGroup = 4; SharePointGroup = 8; All = 15. */
        PrincipalType: string;

        /** Gets or sets a value that specifies the name of the principal. */
        Title: string;

        /** Gets a collection of user objects that represents all of the users in the group. */
        get_Users(): Users;

        /**
         * Methods
         */

        /**
         * Gets the user by the specified user id.
         * @param userId - The user id.
         */
        getUserById(userId);
    }

    /**
     * Limited Web Part Manager
     */
    class LimitedWebPartManager extends Base {
        /**
         * Gets a webpart by its id.
         */
        get_WebParts(id);
    }

    /**
     * List
     */
    class List extends Base {
        /**
         * Constructor
         * @param listName - The list name.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName:string, ...args);

        /**
         * Properties
         */

        /** Gets a value that specifies whether the list supports content types. */
        AllowContentTypes: string;

        /** Gets the list definition type on which the list is based. Represents a ListTemplateType value. See ListTemplateType in the .NET client object model reference for template type values. */
        BaseTemplate: string;

        /** Gets the base type for the list. Represents an SP.BaseType value: Generic List = 0; Document Library = 1; Discussion Board = 3; Survey = 4; Issue = 5. */
        BaseType: string;

        /** Gets a value that specifies the override of the web application's BrowserFileHandling property at the list level. Represents an SP.BrowserFileHandling value: Permissive = 0; Strict = 1. */
        get_BrowserFileHandling(): string;

        /** Gets the content types that are associated with the list. */
        get_ContentTypes(): ContentTypes;

        /** Gets or sets a value that specifies whether content types are enabled for the list. */
        ContentTypesEnabled: string;

        /** Gets a value that specifies when the list was created. */
        Created: string;

        /** Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false. */
        get_DataSource(): string;

        /** Gets or sets a value that specifies the default workflow identifier for content approval on the list. Returns an empty GUID if there is no default content approval workflow. */
        DefaultContentApprovalWorkflowId: string;

        /** Gets or sets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL */
        get_DefaultDisplayFormUrl(): string;

        /** Gets or sets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL. */
        get_DefaultEditFormUrl(): string;

        /** Gets or sets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL. */
        get_DefaultNewFormUrl(): string;

        /**  */
        get_DefaultView(): View;

        /** Gets the URL of the default view for the list. */
        get_DefaultViewUrl(): string;

        /** Gets or sets a value that specifies the description of the list. */
        Description: string;

        /** Gets or sets a value that specifies the reading order of the list. Returns ""NONE"", ""LTR"", or ""RTL"". */
        Direction: string;

        /** Gets or sets a value that specifies the server-relative URL of the document template for the list. Returns a server-relative URL if the base type is DocumentLibrary, otherwise returns null. */
        DocumentTemplateUrl: string;

        /** Gets or sets a value that specifies the minimum permission required to view minor versions and drafts within the list. Represents an SP.DraftVisibilityType value: Reader = 0; Author = 1; Approver = 2. */
        DraftVersionVisibility: string;

        /** Gets a value that specifies the effective permissions on the list that are assigned to the current user. */
        get_EffectiveBasePermissions(): any;

        /**  */
        get_EffectiveBasePermissionsForUI(): any;

        /** Gets or sets a value that specifies whether list item attachments are enabled for the list. */
        EnableAttachments: string;

        /** Gets or sets a value that specifies whether new list folders can be added to the list. */
        EnableFolderCreation: string;

        /** Gets or sets a value that specifies whether minor versions are enabled for the list. */
        EnableMinorVersions: string;

        /** Gets or sets a value that specifies whether content approval is enabled for the list. */
        EnableModeration: string;

        /** Gets or sets a value that specifies whether historical versions of list items and documents can be created in the list. */
        EnableVersioning: string;

        /**  */
        EntityTypeName: string;

        /**  */
        get_EventReceivers(): any;

        /** Gets a value that specifies the collection of all fields in the list. */
        get_Fields(): Fields;

        /** Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned. */
        get_FirstUniqueAncestorSecurableObject(): string;

        /** Gets or sets a value that indicates whether forced checkout is enabled for the document library. */
        ForceCheckout: string;

        /** Gets a value that specifies the collection of all list forms in the list. */
        get_Forms(): any;

        /** Gets a value that specifies whether the list is an external list. */
        HasExternalDataSource: string;

        /** Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object. */
        get_HasUniqueRoleAssignments(): any;

        /** Gets or sets a Boolean value that specifies whether the list is hidden. If true, the server sets the OnQuickLaunch property to false. */
        Hidden: string;

        /** Gets the GUID that identifies the list in the database. */
        Id: string;

        /** Gets a value that specifies the URI for the icon of the list. */
        ImageUrl: string;

        /**  */
        get_InformationRightsManagementSettings(): any;

        /**  */
        IrmEnabled: string;

        /**  */
        IrmExpire: string;

        /**  */
        IrmReject: string;

        /** Gets or sets a value that specifies a flag that a client application can use to determine whether to display the list. */
        IsApplicationList: string;

        /** Gets a value that specifies whether the list is a gallery. */
        IsCatalog: string;

        /**  */
        IsPrivate: string;

        /** Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages. */
        get_IsSiteAssetsLibrary(): string;

        /** Gets a value that specifies the number of list items in the list. */
        ItemCount: string;

        /** Gets all the items in the list. */
        get_Items(): ListItems;

        /** Gets a value that specifies the last time a list item was deleted from the list. */
        LastItemDeletedDate: string;

        /** Gets a value that specifies the last time a list item, field, or property of the list was modified. */
        LastItemModifiedDate: string;

        /**  */
        ListItemEntityTypeFullName: string;

        /** Gets or sets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site. */
        MultipleDataList: string;

        /** Gets or sets a value that specifies that the crawler must not crawl the list. */
        NoCrawl: string;

        /** Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false. */
        get_OnQuickLaunch(): string;

        /** Gets a value that specifies the site that contains the list. */
        get_ParentWeb(): any;

        /** Gets a value that specifies the server-relative URL of the site that contains the list. */
        ParentWebUrl: string;

        /** Gets the role assignments for the securable object. */
        get_RoleAssignments(): RoleAssignments;

        /** Gets the root folder that contains the files in the list and any related files. */
        get_RootFolder(): Folder;

        /** Gets a value that specifies the list schema of the list. */
        get_SchemaXml(): string;

        /** Gets a value that indicates whether folders can be created within the list. */
        ServerTemplateCanCreateFolders: string;

        /** Gets a value that specifies the feature identifier of the feature that contains the list schema for the list. Returns an empty GUID if the list schema is not contained within a feature. */
        TemplateFeatureId: string;

        /** Gets or sets the displayed title for the list. Its length must be <= 255 characters. */
        Title: string;

        /** Gets a value that specifies the collection of all user custom actions for the list. */
        get_UserCustomActions(): UserCustomActions;

        /** Gets or sets a value that specifies the data validation criteria for a list item. Its length must be <= 1023. */
        get_ValidationFormula(): string;

        /** Gets or sets a value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023. */
        get_ValidationMessage(): string;

        /** Gets a value that specifies the collection of all public views on the list and personal views of the current user on the list. */
        get_Views(): Views;

        /** Gets a value that specifies the collection of all workflow associations for the list. */
        get_WorkflowAssociations(): string;

        /**
         * Methods
         */

        /**
         * Adds an existing content type to this collection.
         * @param contentTypeId - The content type id.
         */        
        addAvailableContentType(contentTypeId): ContentType;

        /**
         * Adds a content type to the collection.
         * @param data - The content type creation information.
         */
        addContentType(ContentTypeCreationInformation): ContentType;

        /**
         * Adds a field to the field collection.
         * @param parameters - The field creation information.
         */
        addField(FieldCreationInformation): Field;

        /**
         * Adds a field, using it's Schema XML, to the field collection.
         * Defaulting the 'Options' to SP.AddFieldOptions.addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
         * @param schemXml - The field schmea xml definition.
         */
        addFieldAsXml(schemaXml): Field;

        /**
         * Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
         * @param displayName - The title of the new field.
         * @param primaryLookupField - The ID of the lookup field to associate this dependent lookup field with.
         * @param showField - The name of the field from the target list to include data from.
         */
        addDependentLookup(displayName, primaryLookupField, showField): Field;

        /**
         * Adds an item to the list item collection.
         * @param data - The item properties.
         */
        addItem(data): ListItem;

        /**
         * Adds a new role assignment with the specified principal and role definitions to the collection.
         * @param principalId - The principal id.
         * @param roleDefId - The role definition id.
         */
        addSiteGroup(principalId, roleDefId): Group;

        /**
         * Adds the folder that is located at the specified URL to the collection.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        addSubFolder(url): Folder;

        /**
         * Adds an item to the list item collection.
         * @data - The view properties.
         */
        addView(data): View;

        /**
         * Creates unique role assignments for the securable object.
         * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
         * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
         */
        breakRoleInheritance(copyRoleAssignments, clearSubScopes);

        /**
         * Deletes the list.
         */
        delete(): any;

        /**
         * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query): any;

        /**
         * Gets a content type by the specified name.
         * @param name - The content type name.
         */
        getContentType(name): ContentType;

        /**
         * Gets a content type by the specified id.
         * @param contentTypeId - The content type id.
         */
        getContentTypeById(contentTypeId): ContentType;

        /**
         * Returns the list's default display form.
         */
        getDefaultDisplayForm(): File;

        /**
         * Returns the list's default edit form.
         */
        getDefaultEditForm(): File;

        /**
         * Returns the list's default new form.
         */
        getDefaultNewForm(): File;
        
        /**
         * Returns the list form based on the form type.
         * @formType - The form type.
         */
        getForm(formType): File;
        
        /**
         * Gets the field with the specified field id.
         * @param fieldId - The field id.
         */
        getFieldById(fieldId): Field;

        /**
         * Returns the first Field object with the specified internal name or title from the collection.
         * @param internalNameOrTitle - The field's internal name or title.
         */
        getFieldByInternalNameOrTitle(internalNameOrTitle): Field;

        /**
         * Returns the first field object in the collection based on the title of the specified field.
         * @param title - The field title.
         */
        getFieldByTitle(title);

        /**
         * Get the folder at the specified URL.
         * @param serverRelativeUrl - The server relative url of the folder.
         */
        getSubFolder(serverRelativeUrl): Folder;
        
        /**
         * Returns the list item with the specified list item identifier.
         * @param id - The list item id.
         */
        getItemById(id): ListItem;

        /**
         * Returns an item based on the title.
         * @title - The item title;
         */
        getItemByTitle(title): ListItem;

        /**
         * Returns a collection of items from the list based on the view xml.
         * @param viewXml - The view xml CAML query.
         */
        getItems(viewXml): ListItems;

        /**
         * Returns a collection of items based on the filter.
         * @filter - The OData REST filter query.
         */
        getItemsByFilter(filter): ListItems;

        /**
         * Returns a collection of items from the list based on the specified query.
         * @camlQuery - The caml query.
         */
        getItemsByQuery(camlQuery): ListItems;

        /**
         * Returns a collection of items from the list based on the specified query.
         * @query - The query that contains the change token.
         */
        getListItemChangesSinceToken(query): any;

        /**
         * Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
         */
        getRelatedFields(): any;

        /**
         * Gets the effective user permissions for the current user.
         * @param loginName - The user login name.
         */
        getUserEffectivePermissions(loginName): any;

        /**
         * Returns the list view with the specified view identifier.
         * @param viewId - The view id.
         */
        getViewById(viewId): View;

        /**
         * Returns the list view with the specified view identifier.
         * @param title - The view title.
         */
        getViewByTitle(title): View;

        /**
         * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): any;

        /**
         * Renders the list data.
         * @param viewXml - A CAML query that defines the items and fields that you want returned.
         */
        renderListData(viewXml): any;

        // 
        // Types of modes: 1 - Display, 2 - Edit, 3 - New
        /**
         * Renders the list form data.
         * @param itemId - The item id.
         * @param formId - The identifier of the form.
         * @param mode - The SP.ControlMode of the control used to display the item: 1 = Display; 2 = Edit; 3 = New.
         */
        renderListFormData(itemId, formId, mode): any;

        /**
         * Reserves a list item ID for idempotent list item creation.
         */
        reserveListItemId(): any;

        /**
         * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
         */
        resetRoleInheritance(): any;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): any;
    }

    /**
     * List (Async)
     */
    class List_Async extends List { }

    /**
     * List Item
     */
    class ListItem extends Base {
        /**
         * Constructor
         * @param itemId - The item id.
         * @param listName - The list name.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(itemId:number, listName:string, ...args);

        /**
         * Properties
         */

        /** Specifies the collection of attachments that are associated with the list item. */
        get_AttachmentFiles(): AttachmentFiles;

        /** Gets a value that specifies the content type of the list item. */
        get_ContentType(): ContentType;

        /** Gets a value that specifies the display name of the list item. */
        get_DisplayName(): string;

        /** Gets a value that specifies the effective permissions on the list item that are assigned to the current user. */
        EffectiveBasePermissions: string;

        /** Gets the effective base permissions for the current user, as they should be displayed in UI. */
        EffectiveBasePermissionsForUI: string;

        /** Gets the values for the list item as HTML. */
        get_FieldValuesAsHtml(): string;

        /** Gets the list item's field values as a collection of string values. */
        get_FieldValuesAsText(): string;

        /** Gets the formatted values to be displayed in an edit form. */
        get_FieldValuesForEdit(): string;

        /** Gets the file that is represented by the item from a document library. */
        get_File(): File;

        /** Gets a value that specifies whether the list item is a file or a list folder. Represents an SP.FileSystemObjectType value: Invalid = -1; File = 0; Folder = 1; Web = 2. */
        FileSystemObjectType: string;

        /** Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned. */
        get_FirstUniqueAncestorSecurableObject(): string;

        /** Gets a folder object that is associated with a folder item. */
        get_Folder(): Folder;

        /** Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object. */
        get_HasUniqueRoleAssignments(): string;

        /** Gets a value that specifies the list item identifier. */
        Id: string;

        /** Gets the parent list that contains the list item. */
        get_ParentList(): List;

        /** Gets the role assignments for the securable object. */
        get_RoleAssignments(): RoleAssignments;

        /**
         * Methods
         */

        /**
         * Adds the attachment that is represented by the specified file name and byte array to the list item.
         * @param name - The name of the attachment.
         * @param content - The contents of the file. Pass the content parameter in the request body. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        addAttachment(name, content): any;

        /**
         * Creates unique role assignments for the securable object.
         * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
         * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
         */
        breakRoleInheritance(copyRoleAssignments, clearSubScopes): any;

        /**
         * Deletes the list item.
         */
        delete(): any;

        /**
         * Gets the effective permissions that a specified user has on the list item.
         * @param loginName - The login name.
         */
        getUserEffectivePermissions(loginName): any;

        /**
         * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): any;

        /**
         * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
         */
        resetRoleInheritance(): any;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): any;

        /**
         * Validates and sets the values of the specified collection of fields for the list item.
         * @param formValues - The fields to change and their new values. Pass this parameter in the request body, as shown in the request example.
         * @param bNewDocumentUpdate - True if the list item is a document being updated after upload; otherwise false. Pass this parameter in the request body, as shown in the request example, or in the URI path.
         */
        validateUpdateListItem(formValues, bNewDocumentUpdate);
    }

    /**
     * List Item (Async)
     */
    class ListItem_Async extends ListItem { }

    /**
     * List Items
     */
    class ListItems extends Base {
        /**
         * Constructor
         * @param listName - The list name.
         * @param camlQuery - (Optional) The caml query.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName:string, camlQuery?:string, ...args);
        
        /**
         * Properties
         */

        /** The list item collection. */
        results: Array<ListItem>;

        /**
         * Methods
         */

        /**
         * Adds an item to the list item collection.
         * @param data - The item properties.
         */
        add(data): ListItem;

        /**
         * Gets an item by the specified id.
         * @param id - The item id.
         */
        getById(id): ListItem;
    }

    /**
     * List Items (Async)
     */
    class ListItems_Async extends ListItems { }

    /**
     * Lists
     */
    class Lists extends Base {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(...args);

        /**
         * Properties
         */

        /** The list collection. */
        results: Array<List>;

        /**
         * Methods
         */

        /**
         * Adds a list to the list collection.
         * @param data - The list creation information.
         */
        add(ListCreationInformation): List;

        /**
         * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
         */
        ensureSiteAssetsLibrary(): any;

        /**
         * Gets a list that is the default location for wiki pages.
         */
        ensureSitePagesLibrary(): any;

        /**
         * Returns the list with the specified list identifier.
         * @param id - The list id.
         */
        getById(id): List;

        /**
         * Returns the list with the specified title from the collection.
         * @param title - The list title.
         */
        getByTitle(title): List;
    }

    /**
     * Lists (Async)
     */
    class Lists_Async extends Lists { }

    /**
     * Role Assignment
     */
    class RoleAssignment extends Base {
        /**
         * Properties
         */

        /** Gets the user or group that corresponds to the Role Assignment. */
        get_Member(): any;

        /** The unique identifier of the role assignment. */
        PrincipalId: string;

        /** Gets the collection of role definition bindings for the role assignment. */
        get_RoleDefinitionBindings(): RoleDefinitions;

        /**
         * Methods
         */

        /**
         * Deletes the role assignment.
         */
        delete(): any;
    }

    /**
     * RoleAssignments
     */
    class RoleAssignments extends Base {
        /**
         * Constructor
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName?:string, ...args);

        /**
         * Properties
         */

        /** The role assignment collection. */
        results: Array<RoleAssignment>;

        /**
         * Methods
         */

        /**
         * Adds a new role assignment with the specified principal and role definitions to the collection.
         * @param principalId - The ID of the user or group to assign permissions to.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        addRoleAssignment(principalId, roleDefId): RoleAssignment;

        /**
         * Gets the role assignment associated with the specified principal ID from the collection.
         * @param principalId - The ID of the user or group to assign permissions to.
         */
        getByPrincipalId(principalId): RoleAssignment;

        /**
         * Gets the role definition with the specified role type.
         * @param principalId - The ID of the user or group to assign permissions to.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        removeRoleAssignment(principalId, roleDefId): any;
    }

    /**
     * Role Assignments (Async)
     */
    class RoleAssignments_Async extends RoleAssignments { }

    /**
     * Role Definition
     */
    class RoleDefinition extends Base {
        /**
         * Properties
         */

        /** Gets or sets a value that specifies the base permissions for the role definition. */
        BasePermissions: any;

        /** Gets or sets a value that specifies the description of the role definition. */
        Description: string;

        /** Gets a value that specifies whether the role definition is displayed. */
        Hidden: string;

        /** Gets a value that specifies the Id of the role definition. */
        Id: string;

        /** Gets or sets a value that specifies the role definition name. */
        Name: string;

        /** Gets or sets a value that specifies the order position of the object in the site collection Permission Levels page. */
        Order: string;

        /** Gets a value that specifies the type of the role definition. Represents an SP.RoleType value. See RoleType in the .NET client object model reference for a list of role type values. */
        RoleTypeKind: string;

        /**
         * Methods
         */

        /**
         * Deletes the role definition.
         */
        delete(): any;
    }

    /**
     * Role Definitions
     */
    class RoleDefinitions extends Base {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(...args);

        /**
         * Properties
         */

        /** The role definition collection */
        results: Array<RoleDefinition>;

        /**
         * Methods
         */

        /**
         * Gets the role definition with the specified ID from the collection.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        getById(roleDefId): RoleDefinition;

        /**
         * Gets the role definition with the specified name.
         * @param name -
         */
        getByName(name): RoleDefinition;

        /**
         * Gets the role definition with the specified role type.
         * @param type - The RoleTypeKind of the role definition.
         * Role Definition Types:
         * 0 - None
         * 1 - Gues
         * 2 - Reader
         * 3 - Contributor
         * 4 - Web Designer
         * 5 - Administrator
         * 6 - Editor
         */
        getByType(type): RoleDefinition;
    }

    /**
     * Role Definitions (Async)
     */
    class RoleDefinitions_Async extends RoleDefinitions { }

    /**
     * Site
     */
    class Site extends Base {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(...args);

        /**
         * Properties
         */

        /** Gets or sets a value that specifies whether a designer can be used on this site collection. */
        AllowDesigner: string;

        /** Gets or sets a value that specifies whether master page editing is allowed on this site collection. */
        AllowMasterPageEditing: string;

        /** Gets or sets a value that specifies whether this site collection can be reverted to its base template. */
        AllowRevertFromTemplate: string;

        /** Whether version to version upgrade is allowed on this site. */
        AllowSelfServiceUpgrade: string;

        /** Whether upgrade evaluation site collection is allowed. */
        AllowSelfServiceUpgradeEvaluation: string;

        /** Property indicating whether or not this object can be upgraded. */
        CanUpgrade: string;

        /** Gets the major version of this site collection for purposes of major version-level compatibility checks. */
        CompatibilityLevel: string;

        /** Provides event receivers for events that occur at the scope of the site collection. */
        get_EventReceivers: any;

        /** Gets a value that specifies the collection of the site collection features for the site collection that contains the site. */
        get_Features: any;

        /** Gets the GUID that identifies the site collection. */
        Id: string;

        /** Gets or sets the comment that is used in locking a site collection. */
        LockIssue: string;

        /** Gets a value that specifies the maximum number of list items allowed per operation before throttling will occur. */
        MaxItemsPerThrottledOperation: string;

        /** Gets or sets the owner of the site collection. (Read-only in sandboxed solutions.) */
        get_Owner(): User;

        /** Specifies the primary URI of this site collection, including the host name, port number, and path. */
        PrimaryUri: string;

        /** Gets or sets a Boolean value that specifies whether the site collection is read-only, locked, and unavailable for write access. */
        ReadOnly: string;

        /** Gets a value that specifies the collection of recycle bin items for the site collection. */
        RecycleBin: string;

        /** Gets a value that returns the top-level site of the site collection. */
        get_RootWeb(): Web;

        /** Gets the server-relative URL of the root Web site in the site collection. */
        ServerRelativeUrl: string;

        /** Property that indicates whether users will be able to share links to documents that can be accessed without logging in. */
        ShareByLinkEnabled: string;

        /** Gets or sets a value that specifies whether the URL structure of this site collection is viewable. */
        ShowUrlStructure: string;

        /** Gets or sets a value that specifies whether the Visual Upgrade UI of this site collection is displayed. */
        UiVersionConfigurationEnabled: string;

        /** Specifies the upgrade information of this site collection. */
        UpgradeInfo: string;

        /** Specifies a date, after which site collection administrators will be reminded to upgrade the site collection. */
        UpgradeReminderDate: string;

        /** Specifies whether the site is currently upgrading. */
        Upgrading: string;

        /** Gets the full URL to the root Web site of the site collection, including host name, port number, and path. */
        Url: string;

        /** Gets a value that specifies usage information about the site, including bandwidth, storage, and the number of visits to the site collection. */
        Usage: string;

        /** Gets a value that specifies the collection of user custom actions for the site collection. */
        get_UserCustomActions(): UserCustomActions;

        /**
         * Methods
         */

        /**
         * Adds a custom action to the user custom action collection.
         * data - The user custom action information.
         */
        addCustomAction(data): UserCustomAction;

        /**
         * Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
         * @param upgrade - If true, the evaluation site collection MUST be upgraded when it is created. If false, the evaluation site collection MUST NOT be upgraded when it is created.
         * @param sendEmail - If true, a notification email MUST be sent to the requestor and the site collection administrators at the completion of the creation of the evaluation site collection. If false, such notification MUST NOT be sent.
         */
        createPreviewSPSite(upgrade, sendEmail): any;
        
        /**
         * Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
         */
        extendUpgradeReminderDate(): any;
        
        /**
         * Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
         * @param typeCatalog - Specifies the list template type for the gallery.
         */
        getCatalog(typeCatalog): any;
        
        /**
         * Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query): any;

        /**
         * Gets a custom action by it's name or title.
         * @param title - THe user custom action title.
         */
        getCustomAction(title): UserCustomAction;
        
        /**
         * Specifies the collection of custom list templates for a given site.
         * @param web - Specifies the site that contains the custom list templates to be returned.
         */
        getCustomListTemplates(web): any;
        
        /**
         * Returns the collection of site definitions that are available for creating Web sites within the site collection.
         * @param LCID - A 32-bit unsigned integer that specifies the language of the site definitions that are returned from the site collection.
         * @param overrideCompatLevel - Specifies the compatibility level of the site to return from the site collection. If this value is 0, the compatibility level of the site is used.
         */
        getWebTemplates(LCID, overrideCompatLevel): any;
        
        /**
         * Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
         */
        invalidate(): any;
        
        /**
         * Returns true if the object needs to be upgraded; otherwise, false.
         * @param versionUpgrade - If true, version-to-version site collection upgrade is requested; otherwise false for build-to-build site collection upgrade.
         * @param recursive - If true, child upgradable objects will be inspected; otherwise false.
         */
        needsUpgradeByType(versionUpgrade, recursive): any;
        
        /**
         * Returns the site at the specified URL.
         * @param strUrl - The server-relative URL or site-relative URL of the site to return. If strUrl is empty, the top-level site is returned.
         */
        openWeb(strUrl): Web;
        
        /**
         * Returns the site with the specified GUID.
         * @param gWebId - A GUID that specifies which site to return.
         */
        openWebById(gWebId): Web;
        
        /**
         * Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
         * @param ruleId - Specifies the rule or rules to be run. If the value is an empty GUID, all rules are run, otherwise only the specified rule is run.
         * @param bRepair - Specifies whether repairable rules are to be run in repair mode.
         * @param bRunAlays - Specifies whether the rules will be run as a result of this call or cached results from a previous run can be returned.
         */
        runHealthCheck(ruleId, bRepair, bRunAlways): any;
        
        /**
         * Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
         * @param versionUpgrade - If true, specifies that a version-to-version upgrade will be performed. If false, specifies that a build-to-build upgrade will be performed.
         * @param queueOnly - If true, specifies that the upgrade will not be run immediately; it will be queued for a later run.
         * @param sendEmail - If true, a notification email will be sent to the requestor and the site collection administrators at the completion of the site collection upgrade. If false, such notification will not be sent.
         */
        runUpgradeSiteSession(versionUpgrade, queueOnly, sendEmail): any;

        /**
         * Method to send an email.
         * @param properties - The email information.
         */
        sendEmail(properties): any;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): any;
        
        /**
         * Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
         * @param requireUseRemoteAPIs - Specifies whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
         */
        updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs): any;
    }

    /**
     * Site (Async)
     */
    class Site_Async extends Site { }

    /**
     * Site Groups
     */
    class SiteGroups extends Base {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(...args);

        /**
         * Properties
         */

        /** The site group collection. */
        results: Array<Group>;

        /**
         * Methods
         */

        /**
         * Returns a group from the collection based on the member ID of the group.
         * @param id - The site group id.
         */
        getById(id): Group;

        /**
         * Returns a cross-site group from the collection based on the name of the group.
         * @param name - The name of the group. The group name is specified in its LoginName property.
         */
        getByName(name): Group;

        /**
         * Removes the group with the specified member ID from the collection.
         * @param id - The ID of the group to remove.
         */
        removeById(id): any;

        /**
         * Removes the cross-site group with the specified name from the collection.
         * @param name - The name of the group to remove. The group name is specified in its LoginName property.
         */
        removeByLoginName(name): any;
    }

    /**
     * Site Groups (Async)
     */
    class SiteGroups_Async extends SiteGroups { }

    /**
     * User
     */
    class User extends Base {
        /**
         * Constructor
         * @param userId - The user id.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(userId:number, ...args);

        /**
         * Properties
         */

        /** Gets or sets the email address of the user. */
        Email: string;

        /** Gets the collection of groups of which the user is a member. */
        get_Groups(): SiteGroups;

        /** Gets a value that specifies the member identifier for the user or group. */
        Id: string;

        /** Gets a value that indicates whether this member should be hidden in the UI. */
        IsHiddenInUI: string;

        /** Gets or sets a Boolean value that specifies whether the user is a site collection administrator. */
        IsSiteAdmin: string;

        /** Gets the login name of the user. */
        LoginName: string;

        /** Gets a value containing the type of the principal. Represents a bitwise SP.PrincipalType value: None = 0; User = 1; DistributionList = 2; SecurityGroup = 4; SharePointGroup = 8; All = 15. */
        PrincipalType: string;

        /** Gets or sets a value that specifies the name of the principal. */
        Title: string;

        /** Gets the information of the user that contains the user's name identifier and the issuer of the user's name identifier. */
        UserId: string;

        /**
         * Methods
         */

        /**
         * Deletes the user custom action.
         */
        delete(): any;
    }

    /**
     * User (Async)
     */
    class User_Async extends User { }

    /**
     * User Custom Action
     */
    class UserCustomAction extends Base {
        /**
         * Properties
         */

        /** Gets or sets a value that specifies an implementation specific XML fragment that determines user interface properties of the custom action. */
        CommandUIExtension: string;

        /** Gets or sets the description of the custom action. */
        Description: string;

        /** Gets or sets a value that specifies an implementation-specific value that determines the position of the custom action in the page. */
        Group: string;

        /** Gets a value that specifies the identifier of the custom action. */
        Id: string;

        /** Gets or sets the URL of the image associated with the custom action. */
        ImageUrl: string;

        /** Gets or sets the location of the custom action. */
        Location: string;

        /** Gets or sets the name of the custom action. */
        Name: string;

        /** Gets or sets the value that specifies the identifier of the object associated with the custom action. */
        RegistrationId: string;

        /** Gets or sets the value that specifies the type of object associated with the custom action. Represents an SP.UserCustomActionRegistrationType value: None = 0; List = 1; ContentType = 2; ProgId = 3; FileType = 4. */
        RegistrationType: string;

        /** Gets or sets the value that specifies the permissions needed for the custom action. */
        Rights: string;

        /** Gets a value that specifies the scope of the custom action. */
        Scope: string;

        /** Gets or sets the value that specifies the ECMAScript to be executed when the custom action is performed. */
        ScriptBlock: string;

        /** Gets or sets a value that specifies the URI of a file which contains the ECMAScript to execute on the page. */
        ScriptSrc: string;

        /** Gets or sets the value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. */
        Sequence: string;

        /** Gets or sets the display title of the custom action. */
        Title: string;

        /** Gets or sets the URL, URI, or ECMAScript (JScript, JavaScript) function associated with the action. */
        Url: string;

        /** Gets a value that specifies an implementation specific version identifier. */
        VersionOfUserCustomAction: string;

        /**
         * Methods
         */

        /**
         * Deletes the user custom action.
         */
        delete(): any;
    }

    /**
     * User Custom Actions
     */
    class UserCustomActions extends Base {
        /**
         * Constructor
         * @param webFl - True to search the web, false to search the site.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(webFl?:boolean, ...args);

        /**
         * Properties
         */

        /** The user custom action collection. */
        results: Array<UserCustomAction>;

        /**
         * Methods
         */

        /**
         * Adds a custom actino to the user custom action collection. 
         * @param data - The user custom action information.
         */
        add(data): UserCustomAction;

        /**
         * Deletes all custom actions in the collection.
         */
        clear(): any;

        /**
         * Returns the custom action with the specified identifier.
         * @param id - The ID of the user custom action to get.
         */
        getById(id): UserCustomAction;

        /**
         * Returns the user custom action based on the name of the specified user custom action.
         * @param name - The user custom action name.
         */
        getByName(name): UserCustomAction;

        /**
         * Returns the user custom action based on the title of the specified user custom action.
         * @param title - The user custom action title.
         */
        getByTitle(title): UserCustomAction;
    }

    /**
     * User Custom Actions (Async)
     */
    class UserCustomActions_Async extends UserCustomActions { }

    /**
     * Users
     */
    class Users extends Base {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(...args);

        /**
         * Properties
         */

        /** The user collection. */
        results: Array<User>;

        /**
         * Methods
         */

        /**
         * Gets the user with the specified email address.
         * @param email - The email of the user to get.
         */
        getByEmail(email): User;

        /**
         * Gets the user with the specified member identifier (ID).
         * @param id - The ID of the user to get.
         */
        getById(id): User;

        /**
         * Gets the user with the specified login name.
         * @param loginName - The login name of the user to get, passed as an alias in the query string.
         */
        getByLoginName(loginName): User;

        /**
         * Removes the user with the specified ID.
         * @param id - The ID of the user to remove.
         */
        removeById(id): any;

        /**
         * Removes the user with the specified login name.
         * @param loginName - The login name of the user to remove.
         */
        removeByLoginName(loginName): any;
    }

    /**
     * Users (Async)
     */
    class Users_Async extends Users { }

    /**
     * Versions
     */
    class Version extends Base {
        /**
         * Properties
         */

        /**
         * Methods
         */

        /**
         * Gets the version with the specified ID.
         * @param id - The version id to get.
         */
        getById(id): any;

        /**
         * Deletes all versions in the collection.
         */
        deleteAll(): any;

        /**
         * Deletes a version, by the specified id.
         * @param id - The version id to delete.
         */
        deleteById(id): any;

        /**
         * Deletes a version, by the specified label.
         * @param label - The version label to delete.
         */
        deleteByLabel(label): any;

        /**
         * Restores a version, by the specified label.
         * @param label - The version label to restore.
         */
        restoreByLabel(label): any;
    }

    /**
     * View
     */
    class View extends Base {
        /**
         * Constructor
         * @param viewName - The view name.
         * @param listName - The list name.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(viewName:string, listName:string, ...args);

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
        ContentTypeId: string;

        /** Gets or sets a value that specifies whether the list view is the default list view. */
        DefaultView: string;

        /** Gets or sets a value that specifies whether the list view is the default list view for the content type specified by contentTypeId. */
        DefaultViewForContentType: string;

        /** Gets or sets a value that specifies whether the list view was modified in an editor. */
        EditorModified: string;

        /** Gets or sets a value that specifies the column and row formatting for the list view. If not null, the XML must conform to ViewFormatDefinitions, as specified in [MS-WSSCAML]. */
        Formats: string;

        /** Gets or sets a value that specifies whether the list view is hidden. */
        Hidden: string;

        /** Gets a value that specifies the XML document that represents the list view. */
        HtmlSchemaXml: string;

        /** Gets a value that specifies the view identifier of the list view. */
        Id: string;

        /** Gets a value that specifies the URI (Uniform Resource Identifier) of the image for the list view. */
        ImageUrl: string;

        /** Gets or sets a value that specifies whether the current folder is displayed in the list view. */
        IncludeRootFolder: string;

        /** Gets or sets the name of the JavaScript file used for the view. */
        JsLink: string;

        /** Gets or sets a string that represents the view XML. */
        ListViewXml: string;

        /** Gets or sets a value that specifies the view method for the list view. If not null, the XML must conform to Method, as specified in [MS-WSSCAP]. */
        Method: string;

        /** Gets or sets a value that specifies whether the list view is the default mobile list view. */
        MobileDefaultView: string;

        /** Gets or sets a value that specifies whether the list view is a mobile list view. */
        MobileView: string;

        /** Gets a value that specifies the content approval type for the list view. */
        ModerationType: string;

        /** Gets a value that specifies whether list items can be reordered in the list view. */
        OrderedView: string;

        /** Gets or sets a value that specifies whether the list view is a paged view. */
        Paged: string;

        /** Gets a value that specifies whether the list view is a personal view. */
        PersonalView: string;

        /** Gets a value that specifies whether the list view is read-only. */
        ReadOnlyView: string;

        /** Gets a value that specifies whether the list view requires client integration rights. */
        RequiresClientIntegration: string;

        /** Gets or sets a value that specifies the maximum number of list items to display in a visual page of the list view. */
        RowLimit: string;

        /** Gets or sets a value that specifies the scope for the list view. Represents a ViewScope value. DefaultValue = 0, Recursive = 1, RecursiveAll = 2, FilesOnly = 3. */
        Scope: string;

        /** Gets a value that specifies the server-relative URL of the list view page. */
        ServerRelativeUrl: string;

        /** Gets a value that specifies the identifier of the view style for the list view. */
        StyleId: string;

        /** Gets a value that specifies whether the list view is a threaded view. */
        Threaded: string;

        /** Gets or sets a value that specifies the display name of the list view. */
        Title: string;

        /** Gets or sets a value that specifies the toolbar for the list view. */
        Toolbar: string;

        /** Gets a value that specifies the name of the template for the toolbar that is used in the list view. */
        ToolbarTemplateName: string;

        /** Gets or sets a value that specifies the view data for the list view. If not null, the XML must conform to FieldRefDefinitionViewData, as specified in [MS-WSSCAML]. */
        ViewData: string;

        /** Gets a value that specifies the collection of fields in the list view. */
        get_ViewFields(): ViewFields;

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
        delete(): any;

        /**
         * Returns the list view as HTML.
         */
        renderAsHtml(): any;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): any;
    }

    /**
     * View (Async)
     */
    class View_Async extends View { }

    /**
     * View Fields
     */
    class ViewFields extends Base {
        /**
         * Properties
         */

        /** Gets a value that specifies the XML schema that represents the collection. */
        SchemaXml: string;

        /** Specifies the XML schema of the collection of fields. The Items property is returned with the resource, but it doesn't have a URI-addressable endpoint. */
        Items: string;

        /** The view field collection. */
        results: Array<ViewFields>;

        /**
         * Methods
         */

        /**
         * Adds the field with the specified field internal name or display name to the collection.
         * @param fieldName - The case-sensitive internal name or display name of the field to add.
         */
        addViewField(fieldName): any;

        /**
         * Moves the field with the specified field internal name to the specified position in the collection.
         * @param field - The case-sensitive internal name of the field to move. Send this parameter and the index parameter in the request body, as shown in the example.
         * @param index - The zero-based index of the new position for the field. Send this parameter and the field parameter in the request body, as shown in the example.
         */
        moveViewFieldTo(field, index): any;

        /**
         * Removes all the fields from the collection.
         */
        removeAllViewFields(): any;

        /**
         * Removes the field with the specified field internal name from the collection.
         * @param fieldName - The case-sensitive internal name or display name of the field to add.
         */
        removeViewField(fieldName): any;
    }

    /**
     * Views
     */
    class Views extends Base {
        /**
         * Constructor
         * @param listName - The list name.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName:string, ...args);

        /**
         * Properties
         */

        /** The view collection. */
        results: Array<View>;

        /**
         * Methods
         */

        /**
         * Gets the list view with the specified ID.
         * @param id - The ID of the view.
         */
        getById(id): View;

        /**
         * Gets the list view with the specified title.
         * @param title - The case-sensitive title of the view.
         */
        getByTitle(title): View;
    }

    /**
     * Views (Async)
     */
    class Views_Async extends Views { }

    /**
     * Web
     */
    class Web extends Base {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(...args);

        /**
         * Properties
         */

        /** Specifies whether the current user can create declarative workflows. If not disabled on the Web application, the value is the same as the AllowCreateDeclarativeWorkflow property of the site collection. Default value: true. */
        get_AllowCreateDeclarativeWorkflowForCurrentUser(): any;

        /** Gets a value that specifies whether the current user is allowed to use a designer application to customize this site. */
        get_AllowDesignerForCurrentUser(): any;

        /** Gets a value that specifies whether the current user is allowed to edit the master page. */
        get_AllowMasterPageEditingForCurrentUser(): any;

        /** Gets a value that specifies whether the current user is allowed to revert the site to a default site template. */
        get_AllowRevertFromTemplateForCurrentUser(): any;

        /** Gets a value that specifies whether the site allows RSS feeds. */
        AllowRssFeeds: string;

        /** Specifies whether the current user can save declarative workflows as a template. If not disabled on the Web application, the value is the same as the AllowSaveDeclarativeWorkflowAsTemplate property of the site collection. Default value: true. */
        get_AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser(): any;

        /** Specifies whether the current user can save or publish declarative workflows. If not disabled on the Web application, the value is the same as the AllowSavePublishDeclarativeWorkflowAsTemplate property of the site collection. When enabled, can only be set by a site collection administrator. Default value: true. */
        get_AllowSavePublishDeclarativeWorkflowForCurrentUser(): any;

        /** Gets a collection of metadata for the Web site. */
        get_AllProperties(): any;

        /** The instance Id of the App Instance that this web represents. */
        AppInstanceId: string;

        /** Gets or sets the group of users who have been given contribute permissions to the Web site. */
        get_AssociatedMemberGroup(): Group;

        /** Gets or sets the associated owner group of the Web site. */
        get_AssociatedOwnerGroup(): Group;

        /** Gets or sets the associated visitor group of the Web site. */
        get_AssociatedVisitorGroup(): Group;

        /** Gets the collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites. */
        get_AvailableContentTypes(): any;

        /** Gets a value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites. */
        get_AvailableFields(): any;

        /** Gets either the identifier (ID) of the site definition configuration that was used to create the site, or the ID of the site definition configuration from which the site template used to create the site was derived. */
        Configuration: string;

        /** Gets the collection of content types for the Web site. */
        get_ContentTypes(): ContentTypes;

        /** Gets a value that specifies when the site was created. */
        Created: string;

        /** Gets the current user of the site. */
        get_CurrentUser(): User;

        /** Gets or sets the URL for a custom master page file to apply to the website. */
        CustomMasterUrl: string;

        /** Gets or sets the description for the site. */
        Description: string;

        /** Gets the URL where the current user can download SharePoint Designer. */
        get_DesignerDownloadUrlForCurrentUser(): any;

        /** Determines if the Document Library Callout's WAC previewers are enabled or not. */
        DocumentLibraryCalloutOfficeWebAppPreviewersDisabled: string;

        /** Represents the intersection of permissions of the app principal and the user principal. In the app-only case, this property returns only the permissions of the app principal. To check only user permissions (ignoring app permissions), use the GetUserEffectivePermissions method. */
        get_EffectiveBasePermissions(): string;

        /** Gets or sets a Boolean value that specifies whether the Web site should use Minimal Download Strategy. */
        EnableMinimalDownload: string;

        /** Gets the collection of event receiver definitions that are currently available on the website. */
        get_EventReceivers(): any;

        /** Gets a value that specifies the collection of features that are currently activated in the site. */
        get_Features(): any;

        /** Gets the collection of field objects that represents all the fields in the Web site. */
        get_Fields(): Fields;

        /** Gets the collection of all first-level folders in the Web site. */
        get_Folders(): Folders;

        /** Gets a value that specifies the site identifier for the site. */
        Id: string;

        /** Gets a value that specifies the LCID for the language that is used on the site. */
        Language: string;

        /** Gets a value that specifies when an item was last modified in the site. */
        LastItemModifiedDate: string;

        /** Gets the collection of all lists that are contained in the Web site available to the current user based on the permissions of the current user. */
        get_Lists(): Lists;

        /** Gets a value that specifies the collection of list definitions and list templates available for creating lists on the site. */
        get_ListTemplates(): any;

        /** Gets or sets the URL of the master page that is used for the website. */
        MasterUrl: string;

        /** Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar. */
        get_Navigation(): any;

        /** Gets the parent website of the specified website. */
        get_ParentWeb(): any;

        /** Gets the collection of push notification subscribers over the site. */
        get_PushNotificationSubscribers(): any;

        /** Gets or sets a value that specifies whether the Quick Launch area is enabled on the site. */
        QuickLaunchEnabled: string;

        /** Specifies the collection of recycle bin items of the recycle bin of the site. */
        get_RecycleBin(): any;

        /** Gets or sets a value that determines whether the recycle bin is enabled for the website. */
        RecycleBinEnabled: string;

        /** Gets the regional settings that are currently implemented on the website. */
        get_RegionalSettings(): any;

        /** Gets the collection of role definitions for the Web site. */
        get_RoleDefinitions(): RoleDefinitions;

        /** Gets the root folder for the Web site. */
        get_RootFolder(): Folder;

        /** Gets or sets a Boolean value that specifies whether the Web site can be saved as a site template. */
        get_SaveSiteAsTemplateEnabled(): any;

        /** Gets or sets the server-relative URL for the Web site. */
        ServerRelativeUrl: string;

        /** Gets a value that specifies whether the current user is able to view the file system structure of this site. */
        get_ShowUrlStructureForCurrentUser(): any;

        /** Gets the collection of groups for the site collection. */
        get_SiteGroups(): SiteGroups;

        /** Gets the UserInfo list of the site collection that contains the Web site. */
        get_SiteUserInfoList(): any;

        /** Gets the collection of all users that belong to the site collection. */
        get_SiteUsers(): Users;

        /** Specifies the language code identifiers (LCIDs) of the languages that are enabled for the site. */
        get_SupportedUILanguageIds(): any;

        /** Gets or sets a value that specifies whether the RSS feeds are enabled on the site. */
        SyndicationEnabled: string;

        /** The theming information for this site. This includes information like colors, fonts, border radii sizes etc. */
        get_ThemeInfo(): any;

        /** Gets or sets the title for the Web site. */
        Title: string;

        /** Gets or sets value that specifies whether the tree view is enabled on the site. */
        TreeViewEnabled: string;

        /** Gets or sets the user interface (UI) version of the Web site. */
        UIVersion: string;

        /** Gets or sets a value that specifies whether the settings UI for visual upgrade is shown or hidden. */
        UIVersionConfigurationEnabled: string;

        /** Gets the absolute URL for the website. */
        Url: string;

        /** Gets a value that specifies the collection of user custom actions for the site. */
        get_UserCustomActions(): UserCustomActions;

        /** Represents key properties of the subsites of a site. */
        get_WebInfos(): any;

        /** Gets a Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites. */
        get_Webs(): Webs;

        /** Gets the name of the site definition or site template that was used to create the site. */
        WebTemplate: string;

        /** Gets a value that specifies the collection of all workflow associations for the site. */
        get_WorkflowAssociations(): any;

        /** Gets a value that specifies the collection of workflow templates associated with the site. */
        get_WorkflowTemplates(): any;

        /**
         * Methods
         */

        /**
         * Adds a content type content type collection.
         * @param data - The content type creation information.
         */
        addContentType(ContentTypeCreationInformation): ContentType;

        /**
         * Adds a custom action to the user custom action collection.
         * @param data - The content type creation information.
         */
        addCustomAction(data): UserCustomAction;

        /**
         * Adds an existing content type to content type collection.
         * @param contentTypeId - The content type id to add.
         */
        addExistingContentType(contentTypeId): ContentType;

        /**
         * Adds a field to it's collection.
         * @param parameters - The field creation information.
         */
        addField(FieldCreationInformation): Field;

        /**
         * Adds a field, using it's Schema XML, to the field collection.
         * Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
         * @param schemaXml - The schema XML definition of the field.
         */
        addFieldAsXml(schemaXml): Field;

        /**
         * Adds a file to the root folder.
         * @param overwrite - true to overwrite the file if it already exists; otherwise false.
         * @param url - The folder-relative URL of the file.
         * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        addFile(overwrite, url, content): File;

        /**
         * Adds a list to the list collection.
         * @param data - The list creation information.
         */
        addList(ListCreationInformation): List;

        /**
         * Adds a permission to the role definitions.
         * @param data - The role definition information.
         */
        addPermission(data);

        /**
         * Adds a site group to the site group collection.
         * @param title - The site group title.
         */
        addSiteGroup(title): Group;

        /**
         * Adds a sub-folder to the root folder.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        addSubFolder(url): Folder;

        /**
         * Applies the theme specified by the contents of each of the files specified in the arguments to the site.
         * @param colorpaletteurl - The server-relative URL of the color palette file.
         * @param fontschemeurl - The server-relative URL of the font scheme.
         * @param backgroundimageurl - The server-relative URL of the background image.
         * @param sharegenerated - True to store the generated theme files in the root site, or false to store them in this site.
         */
        applyTheme(colorpaletteurl, fontschemeurl, backgroundimageurl, sharegenerated): any;

        /**
         * Applies the specified site definition or site template to the Web site that has no template applied to it.
         * @param name - The site definition or web template name to apply.
         */
        applyWebTemplate(name): any;

        /**
         * Creates unique role assignments for the securable object.
         * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
         * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
         */
        breakRoleInheritance(copyRoleAssignments, clearSubScopes): any;

        /**
         * Deletes the web.
         */
        delete(): any;

        /**
         * Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
         * @param id - The ID of the device app instance.
         */
        doesPushNotificationSubscriberExist(id): any;
        
        /**
         * Returns whether the current user has the given set of permissions.
         * @param high - The highest permission range value.
         * @param low - The lowest permission range value.
         */
        doesUserHavePermissions(high, low): any;

        /**
         * Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
         * @param logonName - The login name of the user. Pass the logonName parameter in the request body, as shown in the request example.
         */
        ensureUser(logonName): any;
        
        /**
         * Sends data to an OData service.
         * @param inputStream - The OData input object. Used for create or update operations only.
         */
        executeRemoteLOB(inputStream): any;
        
        /**
         * Gets the app BDC catalog.
         */
        getAppBdcCatalog(): any;
        
        /**
         * Gets the app BDC catalog for the specified app instance.
         * @param id - The ID of the app instance.
         */
        getAppBdcCatalogForAppInstance(id): any;
        
        /**
         * Retrieves an AppInstance installed on this Site.
         * @param id - The ID of the app instance.
         */
        getAppInstanceById(id): any;
        
        /**
         * Retrieves all AppInstances installed on this site that are instances of the specified App.
         * @param id - The product ID of the app.
         */
        getAppInstancesByProductId(id): any;
        
        /**
         * Returns a collection of site templates available for the site.
         * @param lcid - The LCID of the site templates to get.
         * @param doIncludeCrossLanguage - True to include language-neutral site templates; otherwise false.
         */
        getAvailableWebTemplates(lcid, doIncludeCrossLanguage): any;
        
        /**
         * Returns the list gallery on the site.
         * @param galleryType - The gallery type. Represents a ListTemplateType value such as WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114, MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125.
         */
        getCatalog(galleryType): any;

        /**
         * Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query): any;
        
        /**
         * Gets the context information for the site. Static method.
         */
        getContextWebInformation(): any;

        /**
         * Gets a custom action by it's name or title.
         * @param title - The user custom action title.
         */
        getCustomAction(title): UserCustomAction;
        
        /**
         * Gets the custom list templates for the site.
         */
        getCustomListTemplates(): any;
        
        /**
         * Gets the document libraries on a site. Static method. (SharePoint Online only)
         * @param url - The full URL of the site.
         */
        getDocumentLibraries(url): any;

        /**
         * Gets the specified external content type in a line-of-business (LOB) system application.
         * @param namespace - The namespace of the external content type.
         * @param name - The name of the external content type.
         */
        getEntity(namespace, name): any;

        /**
         * Gets a field by it's title, internal name or static name.
         * @param title - The field title.
         */
        getField(title): Field;

        /**
         * Gets a field by it's id.
         * @param id - The field id.
         */
        getFieldById(id): Field;

        /**
         * Gets a field by it's internal name.
         * @param name - The internal field name.
         */
        getFieldByInternalName(name): Field;

        /**
         * Gets a field by it's static name.
         * @param staticName - The static field name.
         */
        getFieldByStaticName(name): Field;

        /**
         * Gets a field by it's title.
         * @param title - The field title.
         */
        getFieldByTitle(title): Field;

        /**
         * Gets a file by it's name, in the root folder.
         * @param name - The file name.
         */
        getFile(name): File;
        
        /**
         * Returns the file object located at the specified server-relative URL.
         * @param url - The server relative url of the file.
         */
        getFileByServerRelativeUrl(url): File;

        /**
         * Returns the folder object located at the specified server-relative URL.
         * @param url - The server relative url of the folder.
         */
        getFolderByServerRelativeUrl(url): Folder;

        /**
         * Gets the list at the specified site-relative URL. (SharePoint Online only)
         * @param url - The server relative url of the list.
         */
        getList(url): List;

        /**
         * Gets a list by it's id.
         * @param id - The list id.
         */
        getListById(id): List;

        /**
         * Gets the list for the specified title.
         * @param title - The list title.
         */
        getListByTitle(title): List;

        /**
         * Gets the push notification subscriber over the site for the specified device application instance ID.
         * @param id - The ID of the device app instance.
         */
        getPushNotificationSubscriber(id): any;

        /**
         * Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
         * @param args - Arguments to filter the results. Passed arguments are compared to the subscribers' custom arguments in the store. Pass null or empty arguments to return unfiltered results.
         */
        getPushNotificationSubscribersByArgs(args): any;

        /**
         * Queries for the push notification subscribers over the site for the specified user.
         * @param loginName - The login name of the user.
         */
        getPushNotificationSubscribersByUser(loginName): any;

        /**
         * Gets a sub-folder by it's name, from the root folder.
         * @param name - The folder name.
         */
        getSubFolder(name): Folder;

        /**
         * Gets a site group by it's id.
         * @param id - The site group id.
         */
        getSiteGroupById(id): Group;

        /**
         * Gets a site group by it's name.
         * @param name - The site group name.
         */
        getSiteGroupByName(name): Group;

        /**
         * Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
         * @param nWebTemplateFilter - The ID of the template used in the site definition of the sites.
         * @param nConfigurationFilter - The ID of the site template used to provision the sites.
         */
        getSubwebsFilteredForCurrentUser(nWebTemplateFilter, nConfigurationFilter): any;

        /**
         * Gets a user by login name.
         * @param email - The user email.
         */
        getUserByEmail(email): User;

        /**
         * Returns the user corresponding to the specified member identifier for the current site.
         * @param id - The user id.
         */
        getUserById(id): User;

        /**
         * Gets a user by login name.
         * @param loginName - The user login name.
         */
        getUserByLogin(loginName): User;

        /**
         * Gets the effective permissions that the specified user has within the current application scope.
         * @param loginName - The user login name.
         */
        getUserEffectivePermissions(loginName): any;

        /**
         * Gets the site URL from a page URL. Static method.
         * @param url - The full URL of the SharePoint page, with URL encoded characters as needed.
         */
        getWebUrlFromPageUrl(url);

        /**
         * Uploads and installs an app package to this site.
         * @param appPackageStream - The app package stream.
         */
        loadAndInstallApp(appPackageStream): any;

        /**
         * Uploads and installs an App package on the site in a specified locale.
         * @param appPackageStream - The app package stream.
         * @param installationLocaleLCID - The LCID of the locale to use to create the app instance.
         */
        loadAndInstallAppInSpecifiedLocale(appPackageStream, installationLocaleLCID): any;

        /**
         * Uploads an App package and creates an instance from it.
         * @param appPackageStream - The app package stream.
         * @param installationLocaleLCID - The LCID of the locale to use to create the app instance.
         */
        loadApp(appPackageStream, installationLocaleLCID): any;

        /**
         * Returns the name of the image file for the icon that is used to represent the specified file.
         * @param filename - The file name. If this parameter is empty, the server returns an empty string.
         * @param progid - The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName (for example, Excel.Sheet or PowerPoint.Slide). This is the ID used by the Windows registry to uniquely identify an object.
         * @param size - The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1.
         */
        mapToIcon(filename, progid, size): any;

        /**
         * Processes a notification from an external system.
         * @param stream - The notification message from the external system.
         */
        processExternalNotification(stream): any;

        /**
         * Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
         * @param deviceAppInstanceId - The ID of the device app instance.
         * @param serviceToken - The token provided by the notification service to the device to receive notifications.
         */
        registerPushNotificationSubscriber(deviceAppInstanceId, serviceToken): any;

        /**
         * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
         */
        resetRoleInheritance(): any;

        /**
         * Method to send an email.
         * @param properties - The email information.
         */
        sendEmail(properties): any;

        /**
         * Unregisters the subscriber for push notifications from the site.
         * @param id - The ID of the device app instance.
         */
        unregisterPushNotificationSubscriber(id): any;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): any;
    }

    /**
     * Web (Async)
     */
    class Web_Async extends Web { }

    /**
     * Webs
     */
    class Webs extends Base {
        /**
         * Properties
         */

        /** The web collection. */
        results: Array<Web>;

        /**
         * Methods
         */

        /**
         * Adds a site to the site collection.
         * @param parameters - The web creation information.
         */
        add(parameters);
    }
}
