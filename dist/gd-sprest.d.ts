declare module "gd-sprest" {
    export namespace SPTypes {
        /**
         * Check Out Types
         */
        enum CheckOutType {
            /** Online */
            Online = 0,

            /** Offline */
            Offline = 1,

            /** None */
            None = 2
        }

        /**
         * Control Modes
         */
        enum ControlMode {
            /** A placeholder value in the enumeration indicating that it has no valid display mode from one of the other enumeration values. */
            Invalid = 0,

            /** Specifies that the control is in display mode. */
            Display = 1,

            /** Specifies that the control is in edit mode. */
            Edit = 2,

            /** Specifies that the control is in New mode. */
            New = 3
        }

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
         * Event Receiver Synchronization Types
         */
        enum EventReceiverSynchronizationType {
            /** Event to be triggered asynchronously. */
            Asynchronous = 2,

            /** Event to be triggered synchronously. */
            Synchronization = 1
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
         * File Template Types
        */
        enum FileTemplateType {
            /** Enumeration whose value specifies default form template. */
            FormPage = 2,

            /** Enumeration whose value specifies default view template. */ 
            StandardPage = 0,

            /** Enumeration whose value specifies default wiki template. */ 
            WikiPage = 1
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
         * Page Types
         */
        enum PageType {
            /** Enumeration whose values specify a page that is the default view for a list. */
            DefaultView = 0,

            /** Enumeration whose values specify a page suitable for display within a dialog box on a client computer. */ 
            DialogView = 2,

            /** Enumeration whose values specify a list form for displaying a list item. */ 
            DisplayForm = 4,

            /** Enumeration whose values specify a list form for displaying a list item, suitable for display within a dialog box on a client computer. */ 
            DisplayFormDialog = 5,

            /** Enumeration whose values specify a list form for editing a list item. */ 
            EditForm = 6,

            /** Enumeration whose values specify a list form for editing a list item, suitable for display within a dialog box on a client computer. */ 
            EditFormDialog = 7,

            /** Enumeration whose values specify a page that does not correspond to a list view or a list form. */ 
            Invalid = -1,

            /** Enumeration whose values specify a list form for creating a new list item. */ 
            NewForm = 8,

            /** Enumeration whose values specify a list form for creating a new list item, suitable for display within a dialog box on a client computer. */ 
            NewFormDialog = 9,

            /** Enumeration whose values specify a page that is a list view and is not the default view for a list. */ 
            NormalView = 1,

            /** Enumeration whose values specify the total number of valid page types. */ 
            Page_MAXITEMS = 11,

            /** Enumeration whose values specify a list form for displaying or editing a list item and represented by a form template (.xsn) file. */ 
            SolutionForm = 10,

            /** Enumeration whose values specify a page that is a list view. */ 
            View = 3
        }

        /**
         * Master Page Gallery Types
         */
        /*
        enum MasterPageGalleryType {
            DisplayTemplateControl = <any>"0x0101002039C03B61C64EC4A04F5361F385106601",
            DisplayTemplateItem = <any>"0x0101002039C03B61C64EC4A04F5361F385106603",
            MasterPage = <any>"0x01010500A8B69F8A072C384090BB2F363986E5EA",
            PageLayout = <any>"0x01010007FF3E057FA8AB4AA42FCB67B453FFC100E214EEE741181F4E9F7ACC43278EE811",
        }
        */

        /**
         * Page Layout Types
         */
        /*
        enum PageLayoutType {
            Article = <any>";#Article Page;#0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF3900242457EFB8B24247815D688C526CD44D;#"
        }
        */

        /**
         * Personal Site Capabilities
         */
        enum PersonalSiteCapabilities {
            Education = 16,
            Guest = 32,
            MyTasksDashboard = 8,
            None = 0,
            Profile = 1,
            Social = 2,
            Storage = 4
        }

        /**
         * Reordering Rule Match Types
         */
        enum ReordingRuleMatchType {
            ResultContainsKeyword,
            TitleContainsKeyword,
            TitleMatchesKeyword,
            UrlStartsWith,
            UrlExactlyMatches,
            ContentTypeIs,
            FileExtensionMatches,
            ResultHasTag,
            ManualCondition
        }

        /**
         * Role Types
         */
        enum RoleType {
            /** Has all rights from other roles, plus rights to manage roles and view usage analysis data. Includes all rights in the WebDesigner role, plus the following: ManageListPermissions, ManageRoles, ManageSubwebs, ViewUsageData. The Administrator role cannot be customized or deleted, and must always contain at least one member. Members of the Administrator role always have access to, or can grant themselves access to, any item in the Web site. */
            Administrator = 5,

            /** Has Reader rights, plus rights to add items, edit items, delete items, manage list permissions, manage personal views, personalize Web Part Pages, and browse directories. Includes all rights in the Reader role, plus the following: AddDelPrivateWebParts, AddListItems, BrowseDirectories, CreatePersonalGroups, DeleteListItems, EditListItems, ManagePersonalViews, UpdatePersonalWebParts. Contributors cannot create new lists or document libraries, but they can add content to existing lists and document libraries. */
            Contributor = 3,

            /** Has Contributor rights, plus rights to manage lists. Includes all rights in the Contributor role. Editors can create new lists or document libraries. */
            Editor = 6,

            /** Has limited rights to view pages and specific page elements. This role is used to give users access to a particular page, list, or item in a list, without granting rights to view the entire site. Users cannot be added explicitly to the Guest role; users who are given access to lists or document libraries by way of per-list permissions are added automatically to the Guest role. The Guest role cannot be customized or deleted. */
            Guest = 1,

            /** Enumeration whose values specify that there are no rights on the Web site. */
            None = 0,

            /** Has rights to view items, personalize Web parts, use alerts, and create a top-level Web site using Self-Service Site Creation. A reader can only read a site; the reader cannot add content. When a reader creates a site using Self-Service Site Creation, the reader becomes the site owner and a member of the Administrator role for the new site. This does not affect the user's role membership for any other site. Rights included: CreateSSCSite, ViewListItems, ViewPages. */
            Reader = 2,

            /** Has Contributor rights, plus rights to cancel check out, delete items, manage lists, add and customize pages, define and apply themes and borders, and link style sheets. Includes all rights in the Contributor role, plus the following: AddAndCustomizePages, ApplyStyleSheets, ApplyThemeAndBorder, CancelCheckout, ManageLists.WebDesigners can modify the structure of the site and create new lists or document libraries. */
            WebDesigner = 4
        }

        /**
         * User Custom Action Registration Types
         */
        enum UserCustomActionRegistrationType {
            /** Enumeration whose values specify that the object association is not specified. */
            None = 0,

            /** Enumeration whose values specify that the custom action is associated with a list. */
            List = 1,

            /** Enumeration whose values specify that the custom action is associated with a content type. */
            ContentType = 2,

            /** Enumeration whose values specify that the custom action is associated with a ProgID. */
            ProgId = 3,

            /** Enumeration whose values specify that the custom action is associated with a file extension. */
            FileType = 4
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
    }
}
declare module "gd-sprest" {
    /**
     * Attachment
     */
    export interface IAttachment extends IBase {
        /**
         * Properties
         */

        /** The filename. */
        FileName: string;

        /** The filename as a path. */
        FileNameAsPath: ComplexTypes.ResourcePath;

        /** The server relative path. */
        ServerRelativePath: ComplexTypes.ResourcePath;

        /** The server relative url. */
        ServerRelativeUrl: string;

        /**
         * Methods
         */

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IAttachment;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IAttachment;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IAttachment;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IAttachment;
    }
}

declare module "gd-sprest" {
    /**
     * Attachment Files
     */
    export interface IAttachmentFiles extends IBase {
        /**
         * Properties
         */

        /** The attachment file collection. */
        results: Array<IAttachment>;

        /**
         * Methods
         */

        /**
         * Adds the attachment that is represented by the specified file name and byte array to the list item.
         * @param fileName - The filename of the attachment.
         * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        add(fileName, content): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IAttachmentFiles;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IAttachmentFiles;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IAttachmentFiles;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IAttachmentFiles;

        /**
         * Method to get the next set of results.
         */
        next(): IAttachmentFiles;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IAttachmentFiles;
    }
}
declare module "gd-sprest" {
    /**
     * Audit
     */
    export interface IAudit extends IBase {
        AuditFlags: number;
    }
}
declare module "gd-sprest" {
    /**
     * The base class
     */
    export interface IBase {
        /**
         * Properties
         */

        /** True, if the object exists, false otherwise. */
        existsFl: boolean;

        /** The parent object, which created this object. */
        parent: any;

        /** The response */
        response: string;

        /** The request type */
        requestType: RequestType;

        /**
         * Method to wait for the requests to complete.
         * @param callback - The method to be executed after the request completes.
         */
        done(callback?:(...args) => any);

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IBase;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IBase;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IBase;
    }
}
/// <reference path="./results.d.ts" />
/// <reference path="../types/sptypes.ts" />
declare module "gd-sprest" {
    export namespace ComplexTypes {
        /**
         * App License
         */
        interface AppLicense {
            RawXMLLicenseToken: string;
        }

        /**
         * App License Collection
         */
        interface AppLicenseCollection {
            Items: AppLicense;
        }

        /**
         * App Properties
         */
        interface AppProperties {
            AppSettingsEnabled: boolean;
            Description: string;
            EulaUrl: string;
            IsAnonymous: boolean;
            IsDisabled: boolean;
            ManagedDeploymentEnabled: boolean;
            ManagePermissionsEnabled: boolean;
            ManageSeatsEnabled: boolean;
            MonitoringEnabled: boolean;
            Publisher: string;
            RemoveEnabled: boolean;
            SideLoadEnabled: boolean;
            SupportUrl: string;
            ViewInMarketPlaceEnabled: boolean;
        }

        /**
         * App Site Context
         */
        interface AppSiteContext {
            SiteUrl: string;
        }

        /**
         * App View Creation Information
         */
        interface AppViewCreationInfo {
            AppId: string;
            Title: string;
        }

        /**
         * Attachment Creation Information
         */
        interface AttachmentCreationInformation {
            FileName: string;
        }

        /**
         * Base Permissions
         */
        interface BasePermissions {
            High: number;
            Low: number;
        }

        /**
         * Caml Query
         */
        interface CamlQuery {
            /** A value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format. */
            DatesInUtc: boolean;

            /** A value that specifies the server relative URL of a list folder from which results will be returned. */
            FolderServerRelativeUrl: string;

            /** A value that specifies the information required to get the next page of data for the list view. */
            ListItemCollectionPosition: ListItemCollectionPosition;

            /** A value that specifies the XML schema that defines the list view. */
            ViewXml: string;
        }

        /**
         * Change Log Item Query
         */
        interface ChangeLogItemQuery {
            ChangeToken: string;
            Contains: string;
            Query: string;
            QueryOptions: string;
            RowLimit: string;
            ViewFields: string;
            ViewName: string;
        }

        /**
         * Change Query
         */
        interface ChangeQuery {
            Activity: boolean;
            Add: boolean;
            Alert: boolean;
            ChangeTokenEnd: ChangeToken;
            ChangeTokenStart: ChangeToken;
            ContentType: boolean
            DeleteObject: boolean
            FetchLimit: number;
            Field: boolean;
            File: boolean;
            Folder: boolean;
            Group: boolean;
            GroupMembershipAdd: boolean;
            GroupMembershipDelete: boolean;
            Item: boolean;
            LatestFirst: boolean;
            List: boolean;
            Move: boolean;
            Navigation: boolean;
            RecursiveAll: boolean;
            Rename: boolean;
            RequireSecurityTrim: boolean;
            Restore: boolean;
            RoleAssignmentAdd: boolean;
            RoleAssignmentDelete: boolean;
            RoleDefinitionAdd: boolean;
            RoleDefinitionDelete: boolean;
            RoleDefinitionUpdate: boolean;
            SecurityPolicy: boolean;
            Site: boolean;
            SystemUpdate: boolean;
            Update: boolean;
            User: boolean;
            View: boolean;
            Web: boolean;
        }

        /**
         * Change Token
         */
        interface ChangeToken {
            StringValue: string;
        }

        /**
         * Content Type Creation Information
         */
        interface ContentTypeCreationInformation {
            /** The content type description. */
            Description?: string;

            /** The content type group. */
            Group?: string;

            /** The content type id. */
            Id?: string;

            /** The content type name. */
            Name: string;
        }

        /**
         * Content Type Id
         */
        interface ContentTypeId {
            StringValue: string;
        }

        /**
         * Context Web Information
         */
        interface ContextWebInformation {
            FormDigestTimeoutSeconds: number;
            FormDigestValue: string;
            LibraryVersion: string;
            SiteFullUrl: string;
            SupportedSchemaVersions: String;
            WebFullUrl: string;
        }

        /**
         * Copy Job Progress
         */
        interface CopyJobProgress {
            JobState: number;
            Logs: String;
        }

        /**
         * Copy Migration Information
         */
        interface CopyMigrationInfo {
            EncryptionKey: any;
            JobId: string;
            JobQueueUri: string;
        }

        /**
         * Copy Migration Options
         */
        interface CopyMigrationOptions {
            IgnoreVersionHistory: boolean;
        }

        /**
         * Creatable Item Information
         */
        interface CreatableItemInfo {
            DocumentTemplate: number;
            FileExtension: string;
            ItemType: string;
        }

        /**
         * Creatable Item Information Collection
         */
        interface CreatableItemInfoCollection {
            Items: CreatableItemInfo;
        }

        /**
         * Custom Action Element
         */
        interface CustomActionElement {
            CommandUIExtension: string;
            EnabledScript: string;
            ImageUrl: string;
            Location: string;
            RegistrationId: string;
            RegistrationType: number;
            RequireSiteAdministrator: boolean;
            Rights: BasePermissions;
            Title: string;
            UrlAction: string;
        }

        /**
         * Custom Action Element Collection
         */
        interface CustomActionElementCollection {
            Items: CustomActionElement;
        }

        /**
         * Custom Result
         */
        interface CustomResult {
            GroupTemplateId: string;
            ItemTemplateId: string;
            Properties: KeyValue;
            ResultTitle: string;
            ResultTitleUrl: string;
            Table: SimpleDataTable;
            TableType: string;
        }

        /**
         * Document Library Information
         */
        interface DocumentLibraryInformation {
            AbsoluteUrl: string;
            Modified: string;
            ModifiedFriendlyDisplay: string;
            ServerRelativeUrl: string;
            Title: string;
        }

        /**
         * Encryption Option
         */
        interface EncryptionOption {
            AES256CBCKey: any;
        }

        /**
         * Event Receiver Definition Creation Information
         */
        interface EventReceiverDefinitionCreationInformation {
            /** The event receiver type. */
            EventType: SPTypes.EventReceiverType;

            /** The strong name of the assembly that is used for receiving events. */        
            ReceiverAssembly?: string;

            /** A string that represents the class that is used for receiving events. */
            ReceiverClass?: string;

            /** The name of the event receiver. */
            ReceiverName: string;

            /** The URL of a web service that is used for receiving events. */
            ReceiverUrl?: string;

            /** An integer that represents the relative sequence of the event. */        
            SequenceNumber?: number;
            
            /** The execution synchronization of the event receiver. */
            Synchronization?: number;
        }

        /**
         * Field Calculation Error Value
         */
        interface FieldCalculationErrorValue {
            ErrorMessage: string;
        }

        /**
         * Field Creation Information 
         */
        interface FieldCreationInformation {
            /** The choices. */
            Choices?: String;

            /** The field type. */
            FieldTypeKind: SPTypes.FieldType;

            /** Indicates whether only the first eight characters are used for the field name. */
            IsCompactName?: boolean;

            /** The name of the source lookup field. */
            LookupFieldName?: string;
            
            /** The ID of the target list for the source lookup field. */
            LookupListId?: any;
            
            /** The ID of the site that contains the list that is the source for the lookup field value. */
            LookupWebId?: any;
            
            /** A value that specifies whether the field requires a value. */
            Required?: boolean;
            
            /** A value that specifies the display name of the field. */
            Title: string;
        }

        /**
         * Field Geolocation Value
         */
        interface FieldGeolocationValue {
            Altitude: number;
            Latitude: number;
            Longitude: number;
            Measure: number;
        }

        /**
         * Field Lookup Value
         */
        interface FieldLookupValue {
            LookupId: number;
            LookupValue: string;
        }

        /**
         * Field Rating Scale Question Answer
         */
        interface FieldRatingScaleQuestionAnswer {
            Answer: number;
            Question: string;
        }

        /**
         * Field Url Value
         */
        interface FieldUrlValue {
            Description: string;
            Url: string;
        }

        /**
         * Field User Value
         */
        interface FieldUserValue {
            Email: string;
        }

        /**
         * File Collection Add Parameters
         */
        interface FileCollectionAddParameters {
            Overwrite: boolean;
        }

        /**
         * File Creation Information
         */
        interface FileCreationInformation {
            Content: any;
            Overwrite: boolean;
            Url: string;
        }

        /**
         * Folder Collection Add Parameters
         */
        interface FolderCollectionAddParameters {
            Overwrite: boolean;
        }

        /**
         * Group Creation Information
         */
        interface GroupCreationInformation {
            /** The group description. */
            Description?: string;

            /** The group name. */
            Title: string;
        }

        /**
         * Hashtag
         */
        interface Hashtag {
            Actor: string;
            Application: string;
            Label: string;
            Timestamp: string;
        }

        /**
         * Ingestion Task Key
         */
        interface IngestionTaskKey {
            IngestionTableAccountKey: string;
            IngestionTableAccountName: string;
            JobId: string;
            TaskId: string;
            TenantName: string;
        }

        /**
         * Key Value
         */
        interface KeyValue {
            Key: string;
            Value: string;
            ValueType: string;
        }

        /**
         * Language
         */
        interface Language {
            DisplayName: string;
            LanguageTag: string;
            Lcid: number;
        }

        /**
         * List Creation Information
         */
        interface ListCreationInformation {
            /** The list schema xml. */
            CustomSchemaXml?: string;

            /** The list of data source properties. */
            DataSourceProperties?: KeyValue;

            /** The list description. */
            Description?: string;

            /** The list document template type. */
            DocumentTemplateType?: number;

            /** Option to display the list on the quick launch. */
            QuickLaunchOption?: number;

            /** The list template feature id. */
            TemplateFeatureId?: string;

            /** The list template type. */
            TemplateType: SPTypes.ListTemplateType;

            /** The list name. */
            Title: string;

            /** The list url. */
            Url?: string;
        }

        /**
         * List Data Source
         */
        interface ListDataSource {
            Properties: KeyValue;
        }

        /**
         * List Data Validation Exception Value
         */
        interface ListDataValidationExceptionValue {
            FieldFailures: ListDataValidationFailure;
            ItemFailures: ListDataValidationFailure;
        }

        /**
         * List Data Validation Failure
         */
        interface ListDataValidationFailure {
            DisplayName: string;
            Message: string;
            Name: string;
            Reason: number;
            ValidationType: number;
        }

        /**
         * List Item Collection Position
         */
        interface ListItemCollectionPosition {
            PagingInfo: string;
        }

        /**
         * List Item Creation Information
         */
        interface ListItemCreationInformation {
            FolderUrl: string;
            LeafName: string;
            UnderlyingObjectType: number;
        }

        /**
         * List Item Form Update Value
         */
        interface ListItemFormUpdateValue {
            ErrorMessage: string;
            FieldName: string;
            FieldValue: string;
            HasException: boolean;
        }

        /**
         * Menu Node
         */
        interface MenuNode {
            CustomProperties: KeyValue;
            FriendlyUrlSegment: string;
            IsDeleted: boolean;
            IsHidden: boolean;
            Key; string;
            Nodes: MenuNode;
            NodeType: number;
            SimpleUrl: string;
            Title: string;
        }

        /**
         * Menu State
         */
        interface MenuState {
            FriendlyUrlPrefix: string;
            Nodes: MenuNode;
            SimpleUrl: string;
            SPSitePrefix: string;
            SPWebPrefix: string;
            StartingNodeKey: string;
            StartingNodeTitle: string;
            Version: string;
        }

        /**
         * Method Information
         */
        interface MethodInformation {
            IsBeta: boolean;
            Name: string;
            Parameters: ParameterInformation;
            ReturnTypeFullName: string;
        }

        /**
         * Navigation Node Creation Information
         */
        interface NavigationNodeCreationInformation {
            AsLastNode: boolean;
            IsExternal: boolean;
            Title: string;
            Url: string;
        }

        /**
         * Parameter Information
         */
        interface ParameterInformation {
            Name: string;
            ParameterTypeFullName: string;
        }

        /**
         * Personal Result Suggestion
         */
        interface PersonalResultSuggestion {
            HighlightedTitle: string;
            IsBestBet?: boolean;
            Title: string;
            Url: string;
        }

        /**
         * Property Information
         */
        interface PropertyInformation {
            ExcludeFromDefaultRetrieval: boolean;
            IsBeta: boolean;
            Name: string;
            PropertyTypeFullName: string;
            ReadOnly: boolean;
        }

        /**
         * Provisioned Migration Containers Information
         */
        interface ProvisionedMigrationContainersInfo {
            DataContainerUri: string;
            EncryptionKey: any;
            MetadataContainerUri: string;
        }

        /**
         * Provisioned Migration Queue Info
         */
        interface ProvisionedMigrationQueueInfo {
            JobQueueUri: string;
        }

        /**
         * Query Property
         */
        interface QueryProperty {
            Name: string;
            Value: QueryPropertyValue;
        }

        /**
         * Query Property Value
         */
        interface QueryPropertyValue {
            BoolVal?: boolean;
            IntVal?: number;
            QueryPropertyValueTypeIndex?: number;
            StrArray?: String;
            StrVal?: string;
        }

        /**
         * Query Result
         */
        interface QueryResult {
            CustomResults: CustomResult;
            QueryId: string;
            QueryRuleId?: string;
            RefinementResults: RefinementResults;
            RelevantResults: RelevantResults;
            SpecialTermResults: SpecialTermResults;
        }

        /**
         * Query Suggestion Query
         */
        interface QuerySuggestionQuery {
            IsPersonal?: boolean;
            Query: string;
        }

        /**
         * Query Suggestion Range
         */
        interface QuerySuggestionRange {
            Length?: number;
            Start?: number;
        }

        /**
         * Query Suggestion Results
         */
        interface QuerySuggestionResults {
            PeopleNames: String;
            PersonalResults: PersonalResultSuggestion;
            Queries: QuerySuggestionQuery;
        }

        /**
         * Recycle Bin Queue Information
         */
        interface RecycleBinQueueInformation {
            IsAscending: boolean;
            ItemState: number;
            OrderBy: number;
            PagingInfo: string;
            RowLimit: number;
            ShowOnlyMyItems: boolean;
        }

        /**
         * Refinement Results
         */
        interface RefinementResults {
            GroupTemplateId: string;
            ItemTemplateId: string;
            Property: KeyValue;
            Refiners: Refiner;
            ResultTitle: string;
            ResultTitleUrl: string;
        }

        /**
         * Refiner
         */
        interface Refiner {
            Entries: RefinerEntry;
            Name: string;
        }

        /**
         * Refineer Entry
         */
        interface RefinerEntry {
            RefinementCount?: number;
            RefinementName: string;
            RefinementToken: string;
            RefinementValue: string;
        }

        /**
         * Relevant Results
         */
        interface RelevantResults {
            GroupTemplateId: string;
            ItemTemplateId: string;
            Properties: KeyValue;
            ResultTitle: string;
            ResultTitleUrl: string;
            RowCount: number;
            Table: SimpleDataTable;
            TotalRows: number;
            TotalRowsIncludingDuplicates: number;
        }

        /**
         * Reordering Rule
         */
        interface ReorderingRule {
            Boost?: number;
            MatchType?: SPTypes.ReordingRuleMatchType;
            MatchValue: string;
        }

        /**
         * Reordering Rules Creation Information
         */
        interface ReorderingRulesCreationInformation {
            Boost?: number;
            MatchType?: SPTypes.ReordingRuleMatchType;
            MatchValue: string;
        }

        /**
         * Related Item
         */
        interface RelatedItem {
            IconUrl: string;
            ItemId: number;
            ListId: string;
            Title: string;
            Url: string;
            WebId: string;
        }

        /**
         * Render List Context Menu Data Parameters
         */
        interface RenderListContextMenuDataParameters {
            CascDelWarnMessage: string;
            CustomAction: string;
            Field: string;
            ID: string;
            InplaceFullListSearch: string;
            InplaceSearchQuery: string;
            IsCSR: string;
            IsXslView: string;
            ItemId: string;
            ListViewPageUrl: string;
            OverrideScope: string;
            RootFolder: string;
            View: string;
            ViewCount: string;
        }

        /**
         * Render List Data Override Parameters
         */
        interface RenderListDataOverrideParameters {
            CascDelWarnMessage: string;
            CustomAction: string;
            DrillDown: string;
            Field: string;
            FieldInternalName: string;
            Filter: string;
            FilterData: string;
            FilterData1: string;
            FilterData2: string;
            FilterData3: string;
            FilterData4: string;
            FilterData5: string;
            FilterData6: string;
            FilterData7: string;
            FilterData8: string;
            FilterData9: string;
            FilterData10: string;
            FilterField: string;
            FilterField1: string;
            FilterField2: string;
            FilterField3: string;
            FilterField4: string;
            FilterField5: string;
            FilterField6: string;
            FilterField7: string;
            FilterField8: string;
            FilterField9: string;
            FilterField10: string;
            FilterFields: string;
            FilterFields1: string;
            FilterFields2: string;
            FilterFields3: string;
            FilterFields4: string;
            FilterFields5: string;
            FilterFields6: string;
            FilterFields7: string;
            FilterFields8: string;
            FilterFields9: string;
            FilterFields10: string;
            FilterLookupId: string;
            FilterLookupId1: string;
            FilterLookupId2: string;
            FilterLookupId3: string;
            FilterLookupId4: string;
            FilterLookupId5: string;
            FilterLookupId6: string;
            FilterLookupId7: string;
            FilterLookupId8: string;
            FilterLookupId9: string;
            FilterLookupId10: string;
            FilterOp: string;
            FilterOp1: string;
            FilterOp2: string;
            FilterOp3: string;
            FilterOp4: string;
            FilterOp5: string;
            FilterOp6: string;
            FilterOp7: string;
            FilterOp8: string;
            FilterOp9: string;
            FilterOp10: string;
            FilterValue: string;
            FilterValue1: string;
            FilterValue2: string;
            FilterValue3: string;
            FilterValue4: string;
            FilterValue5: string;
            FilterValue6: string;
            FilterValue7: string;
            FilterValue8: string;
            FilterValue9: string;
            FilterValue10: string;
            FilterValues: string;
            FilterValues1: string;
            FilterValues2: string;
            FilterValues3: string;
            FilterValues4: string;
            FilterValues5: string;
            FilterValues6: string;
            FilterValues7: string;
            FilterValues8: string;
            FilterValues9: string;
            FilterValues10: string;
            GroupString: string;
            HasOverrideSelectCommand: string;
            ID: string;
            InplaceFullListSearch: string;
            InplaceSearchQuery: string;
            IsCSR: string;
            IsGroupRender: string;
            IsXslView: string;
            ListViewPageUrl: string;
            OverrideScope: string;
            OverrideSelectCommand: string;
            PageFirstRow: string;
            PageLastRow: string;
            RootFolder: string;
            SortDir: string;
            SortDir1: string;
            SortDir2: string;
            SortDir3: string;
            SortDir4: string;
            SortDir5: string;
            SortDir6: string;
            SortDir7: string;
            SortDir8: string;
            SortDir9: string;
            SortDir10: string;
            SortField: string;
            SortField1: string;
            SortField2: string;
            SortField3: string;
            SortField4: string;
            SortField5: string;
            SortField6: string;
            SortField7: string;
            SortField8: string;
            SortField9: string;
            SortField10: string;
            SortFields: string;
            SortFieldValues: string;
            View: string;
            ViewCount: string;
            ViewId: string;
            WebPartId: string;
        }

        /**
         * Render List Data Parameters
         */
        interface RenderListDataParameters {
            AllowMultipleValueFilterForTaxonomyFields: boolean;
            DatesInUtc: boolean;
            ExpandGroups: boolean;
            FirstGroupOnly: boolean;
            FolderServerRelativeUrl: string;
            OverrideViewXml: string;
            Paging: string;
            RenderingOptions: number;
            ViewXml: string;
        }

        /**
         * Render List Filter Data Parameters
         */
        interface RenderListFilterDataParameters {
            ExcludeFieldFilteringHtml: boolean;
            FieldInternalName: string;
            OverrideScope: string;
            ProcessQStringToCAML: string;
            ViewId: string;
        }

        /**
         * Resource Path
         */
        interface ResourcePath {
            DecodedUrl: string;
        }

        /**
         * Role Definition Creation Information
         */
        interface RoleDefinitionCreationInformation {
            BasePermissions: BasePermissions;
            Description: string;
            Name: string;
            Order: number;
        }

        /**
         * Search Request
         */
        interface SearchRequest {
            BlockDedupeMode?: number;

            /** A Boolean value that specifies whether to perform result type processing for the query. */
            BypassResultTypes?: boolean;

            /** The type of the client that issued the query. */
            ClientType?: string;
            
            /** The managed properties that are used to determine how to collapse individual search  Results are collapsed into one or a specified number of results if they match any of the individual collapse specifications. Within a single collapse specification, results are collapsed if their properties match all individual properties in the collapse specification. */
            CollapseSpecification?: string;

            /** The locale ID (LCID) for the query (see Locale IDs Assigned by Microsoft). */
            Culture?: number;

            /** The preferred number of characters to display in the hit-highlighted summary generated for a search result. */
            DesiredSnippetLength?: number;

            /** A Boolean value that specifies whether the query uses the FAST Query Language (FQL). */
            EnableFql?: boolean;

            /** A Boolean value that specifies whether the result tables that are returned for the result block are mixed with the result tables that are returned for the original query. */
            EnableInterleaving?: boolean;

            /** A Boolean value that specifies whether the exact terms in the search query are used to find matches, or if nicknames are used also. */
            EnableNicknames?: boolean;

            /** A Boolean value that specifies whether the phonetic forms of the query terms are used to find matches. */
            EnablePhonetic?: boolean;

            /** A Boolean value that specifies whether the hit highlighted properties can be ordered. */
            EnableOrderingHitHighlightedProperty?: boolean;

            /** A Boolean value that specifies whether to enable query rules for the query. */
            EnableQueryRules?: boolean;

            /** A Boolean value that specifies whether to sort search  */
            EnableSorting?: boolean;

            /** A Boolean value that specifies whether stemming is enabled. */
            EnableStemming?: boolean;
            
            /** A Boolean value that specifies whether to return block rank log information in the BlockRankLog property of the interleaved result table. A block rank log contains the textual information on the block score and the documents that were de-duplicated. */
            GenerateBlockRankLog?: boolean;

            /** The additional query terms to append to the query. */
            HiddenConstraints?: string;

            /** The number of properties to show hit highlighting for in the search  */
            HitHighlightedMultivaluePropertyLimit?: number;

            /** The properties to highlight in the search result summary when the property value matches the search terms entered by the user. */
            HithighlightedProperties?: String;

            /** The maximum number of characters to display in the hit-highlighted summary generated for a search result. */
            MaxSnippetLength?: number;

            QLSQuerySession?: string;

            /** The GUID for the user who submitted the search query. */
            PersonalizationData?: string;

            /** A Boolean value that specifies whether to return best bet results for the query. */
            ProcessBestBets?: boolean;

            /** A Boolean value that specifies whether to return personal favorites with the search  */
            ProcessPersonalFavorites?: boolean;
            
            /** Additional properties for the query. */
            Properties?: KeyValue;

            /** Custom tags that identify the query. You can specify multiple query tags, separated by semicolons. */
            QueryTag?: string;

            /** A string that contains the text that replaces the query text, as part of a query transform. */
            QueryTemplate?: string;

            /** The location of the queryparametertemplate.xml file. This file is used to enable anonymous users to make Search REST queries. */
            QueryTemplatePropertiesUrl?: string;

            /** A string that contains the text for the search query */
            Querytext: string;

            /** The ID of the ranking model to use for the query. */
            RankingModelId?: string;

            /** The set of refinement filters used when issuing a refinement query. For GET requests, the RefinementFilters parameter is specified as an FQL filter. For POST requests, the RefinementFilters parameter is specified as an array of FQL filters. */
            RefinementFilters?: String;

            /** The set of refiners to return in a search result. */
            Refiners?: string;

            /** Special rules for reordering search  These rules can specify that documents matching certain conditions are ranked higher or lower in the  */
            ReorderingRules?: Array<ReorderingRulesCreationInformation>

            /** The URL for the search results page. */
            ResultsUrl?: string;

            /** The maximum number of rows overall that are returned in the search  Compared to RowsPerPage, RowLimit is the maximum number of rows returned overall. */
            RowLimit?: number;

            /** The maximum number of rows to return per page. Compared to RowLimit, RowsPerPage refers to the maximum number of rows to return per page, and is used primarily when you want to implement paging for search  */
            RowsPerPage?: number;

            /** The managed properties to return in the search  To return a managed property, set the property's retrievable flag to true in the search schema. */
            SelectProperties?: String;

            /** The list of properties by which the search results are ordered. */
            SortList?: Array<any>;

            /** The result source ID to use for executing the search query. */
            SourceId?: string;

            /** The first row that is included in the search results that are returned. You use this parameter when you want to implement paging for search  */
            StartRow?: number;

            /** The number of characters to display in the result summary for a search result. */
            SummaryLength?: number;

            /** The amount of time in milliseconds before the query request times out. The default value is 30000. */
            Timeout?: number;

            TimeZoneId?: number;

            TotalRowsExactMinimum?: number;

            /** A Boolean value that specifies whether duplicate items are removed from the  */
            TrimDuplicates?: boolean;

            TrimDuplicatesIncludeId?: boolean;

            /** The locale identifier (LCID) of the user interface (see Locale IDs Assigned by Microsoft). */
            UIlanguage?: number;

            UseOLSQuery?: number;
        }

        /**
         * Search Result
         */
        interface SearchResult {
            ElapsedTime?: number;
            PrimaryQueryResult: QueryResult;
            Properties: KeyValue;
            SecondaryQueryResults: QueryResult;
            SpellingSuggestion: string;
            TriggeredRules?: String;
        }

        /**
         * Search Suggestion
         */
        interface SearchSuggestion {
            ClientType?: string;

            /** The locale ID (LCID) for the query (see Locale IDs Assigned by Microsoft). */
            Culture?: number;

            /** A Boolean value that specifies whether stemming is enabled. */
            EnableStemming?: boolean;

            /** A Boolean value that specifies whether to turn on query rules for this query. */
            EnableQueryRules?: boolean;

            /** A Boolean value that specifies whether to capitalize the first letter in each term in the returned query suggestions. */
            fCapitalizeFirstLetters?: boolean;

            /** A Boolean value that specifies whether to hit-highlight or format in bold the query suggestions. */
            fHitHighlighting?: boolean;

            /** A Boolean value that specifies whether to return query suggestions for prefix matches. */
            fPrefixMatchAllTerms?: boolean;

            /** A Boolean value that specifies whether to retrieve pre-query or post-query suggestions. */
            fPreQuerySuggestions?: boolean;

            /** The number of query suggestions to retrieve. Must be greater than zero (0). The default value is 5. */
            iNumberOfQuerySuggestions?: number;

            /** The number of personal results to retrieve. Must be greater than zero (0). The default value is 5. */
            iNumberOfResultSuggestions?: number;

            OLSQuerySession?: string;

            /** A string that contains the text for the search query */
            Querytext: string;

            /** A Boolean value that specifies whether to include people names in the returned query suggestions. */
            ShowPeopleNameSuggestions?: boolean;

            SourceId?: string;

            UseOLSQuery?: boolean;
        }

        /**
         * Shared User
         */
        interface SharedWithUser {
            Email: string;
            Name: string;
        }

        /**
         * Shared User Collection
         */
        interface SharedWithUserCollection {
            Items: SharedWithUser;
        }

        /**
         * Sharing Link Information
         */
        interface SharingLinkInfo {
            Expiration: string;
            IsActive: boolean;
            LinkKind: number;
            Url: string;
        }

        /**
         * Simple Data Row
         */
        interface SimpleDataRow {
            Cells: Results.DataRow
        }

        /**
         * Simple Data Table
         */
        interface SimpleDataTable {
            Rows: KeyValue;
        }

        /**
         * Social Actor
         */
        interface SocialActor {
            AccountName: string;
            ActorType?: number;
            CanFollow?: boolean;
            ContentUri: string;
            EmailAddress: string;
            FollowedContentUri: string;
            Id: string;
            ImageUri: string;
            IsFollowed?: boolean;
            LibraryUri: string;
            Name: string;
            PersonSiteUri: string;
            Status?: number;
            StatusText: string;
            TagGuid?: string;
            Title: string;
            Uri: string;
        }

        /**
         * Social Attachment
         */
        interface SocialAttachment {
            AttachmentKind?: number;
            ClickAction: SocialAttachmentAction;
            ContentUri: string;
            Description: string;
            Height?: number;
            Length?: number;
            Name: string;
            PreviewHeight?: number;
            PreviewUri: string;
            PreviewWidth?: number;
            Uri: string;
            Width?: number;
        }

        /**
         * Social Attachment Action
         */
        interface SocialAttachmentAction {
            ActionKind?: number;
            ActionUri: string;
            Height?: number;
            Width?: number;
        }

        /**
         * Social Data Item
         */
        interface SocialDataItem {
            AccountName?: string;
            ItemType?: string;
            Text: string;
            Uri: string;
        }

        /**
         * Social Data Overlay
         */
        interface SocialDataOverlay {
            ActorIndexes?: Number;
            Index?: number;
            Length?: number;
            LinkUri: string;
            OverlayType?: number;
        }

        /**
         * Social Exception Details
         */
        interface SocialExceptionDetails {
            InternalErrorCode?: number;
            InternalMessage: string;
            InternalStackTrace: string;
            InternalTypeName: string;
            Status?: number;
        }

        /**
         * Social Feed Options
         */
        interface SocialFeedOptions {
            MaxThreadCount?: number;
            NewerThan?: string;
            OlderThan?: string;
            SortOrder?: number;
        }

        /**
         * Social Feed
         */
        interface SocialFeed {
            Attributes?: number;
            NewestProcessed?: string;
            OldestProcessed?: string;
            Threads: SocialThread;
            UnreadMentionCount?: number;
        }

        /**
         * Social Feed Manager
         */
        interface SocialFeedManager {
            Owner: SocialActor;
            PersonalSitePortalUri?: string;
        }

        /**
         * Social Following Manager
         */
        interface SocialFollowingManager {
            FollowedDocumentsUri?: string;
            FollowedSitesUri: string;
        }

        /**
         * Social Link
         */
        interface SocialLink {
            Text: string;
            Uri: string;
        }

        /**
         * Social Post
         */
        interface SocialPost {
            Attachment: SocialAttachment;
            Attributes?: number;
            AuthorIndex?: number;
            CreatedTime?: string;
            Id?: string;
            LikerInfo?: SocialPostActorInfo;
            ModifiedTime?: string;
            Overlays: SocialDataOverlay;
            PostType?: number;
            PreferredImageUri: string;
            Source: SocialLink;
            Text: string;
        }

        /**
         * Social Post Actor Info
         */
        interface SocialPostActorInfo {
            IncludesCurrentUser?: boolean;
            Indexes?: Number;
            TotalCount?: number;
        }

        /**
         * Social Post Creation Data
         */
        interface SocialPostCreationData {
            Attachment?: SocialAttachment;
            ContentItems?: SocialDataItem;
            ContentText: string;
            DefinitionData?: SocialPostDefinitionData;
            SecurityUris?: String;
            Source?: SocialLink;
            UpdateStatusText?: boolean;
        }

        /**
         * Social Post Definition Data
         */
        interface SocialPostDefinitionData {
            Items: SocialPostDefinitionDataItem;
            Name: string;
        }

        /**
         * Social Post Definition Data Item
         */
        interface SocialPostDefinitionDataItem {
            AccountName: string;
            ItemType?: number;
            PlaceholderName: string;
            TagGuid?: string;
            Text: string;
            Uri: string;
        }

        /**
         * Social Post Reference
         */
        interface SocialPostReference {
            Digest: SocialThread;
            Post: SocialPost;
            ThreadId: string;
            ThreadOwnerIndex?: number;
        }

        /**
         * Social Rest Following Manager
         */
        interface SocialRestFollowingManager {
            FollowedDocumentsUri?: string;
            FollowedSitesUri: string;
            MyFollowedDocumentsUri: string;
            MyFollowedSitesUri: string;
            SocialActor: SocialActor;
        }

        /**
         * Social Rest Post Creation Data
         */
        interface SocialRestPostCreationData {
            ID: string;
            creationData: SocialPostCreationData;
        }

        /**
         * Social Thread
         */
        interface SocialThread {
            Actors: SocialActor;
            Attributes?: number;
            Id: string;
            OwnerIndex?: number;
            PermaLink: string;
            PostReference: SocialPostReference;
            Replies: SocialPost;
            RootPost: SocialPost;
            Status?: number;
            ThreadType?: number;
            TotalReplyCount?: number;
        }

        /**
         * Sort
         */
        interface Sort {
            Direction?: number;
            Property: string;
        }

        /**
         * SP Invitation Creation Result
         */
        interface SPInvitationCreationResult {
            Email: string;
            InvitationLink: string;
            Lcid: number;
        }

        /**
         * Special Term Result
         */
        interface SpecialTermResult {
            Description: string;
            IsVisualBestBet?: boolean;
            PiSearchResultId: string;
            RenderTemplateId: string;
            Title: string;
            Url: string;
        }

        /**
         * Special Term Results
         */
        interface SpecialTermResults {
            GroupTemplateId: string;
            ItemTemplateId: string;
            Properties: KeyValue;
            ResultTitle: string;
            ResultTitleUrl: string;
        }

        /**
         * String Collection
         */
        interface StringCollection {
            Id4a81de82eeb94d6080ea5bf63e27023a?: string;
            Items: String;
        }

        /**
         * Subweb Query
         */
        interface SubwebQuery {
            ConfigurationFilter: number;
            WebTemplateFilter: number;
        }

        /**
         * Tenant App Information
         */
        interface TenantAppInformation {
            AppPrincipalId: string;
            AppWebFullUrl: string;
            CreationTime: string;
            IconAbsoluteUrl: string;
            IconFallbackAbsoluteUrl: string;
            Id: string;
            LaunchUrl: string;
            PackageFingerprint: any;
            ProductId: string;
            RemoteAppUrl: string;
            Status: number;
            Title: string;
        }

        /**
         * Time Zone Information
         */
        interface TimeZoneInformation {
            Bias: number;
            DaylightBias: number;
            StandardBias: number;
        }

        /**
         * Upgrade Info
         */
        interface UpgradeInfo {
            ErrorFile: string;
            Errors: number;
            LastUpdated: string;
            LogFile: string;
            RequestDate: string;
            RetryCount: number;
            StartTime: string;
            Status: number;
            UpgradeType: number;
            Warnings: number;
        }

        /**
         * Usage Information
         */
        interface UsageInfo {
            Bandwidth: number;
            DiscussionStorage: number;
            Hits: number;
            Storage: number;
            StoragePercentageUsed: number;
            Visits: number;
        }

        /**
         * User Creation Information
         */
        interface UserCreationInformation {
            Email?: string;
            LoginName: string;
            Title?: string;
        }

        /**
         * User Custom Action Information
         */
        interface UserCustomActionCreationInformation {
            /** A value that specifies an implementation specific XML fragment that determines user interface properties of the custom action. */
            CommandUIExtension?: string;

            /** The description of the custom action. */
            Description?: string;

            /** A value that specifies an implementation-specific value that determines the position of the custom action in the page. */
            Group?: string;

            /** The URL of the image associated with the custom action. */
            ImageUrl?: string;

            /** The location of the custom action. */
            Location?: string;

            /** The name of the custom action. */
            Name: string;

            /** The value that specifies the identifier of the object associated with the custom action. */
            RegistrationId?: string;

            /** The value that specifies the type of object associated with the custom action. Represents an SP.UserCustomActionRegistrationType value. */
            RegistrationType?: SPTypes.UserCustomActionRegistrationType;

            /** The value that specifies the permissions needed for the custom action. */
            Rights?: any;

            /** The value that specifies the ECMAScript to be executed when the custom action is performed. */
            ScriptBlock?: string;

            /** A value that specifies the URI of a file which contains the ECMAScript to execute on the page. */
            ScriptSrc?: string;

            /** The value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. */
            Sequence?: number;

            /** The display title of the custom action. */
            Title?: string;

            /** The URL, URI, or ECMAScript (JScript, JavaScript) function associated with the action. */
            Url?: string;
        }

        /**
         * User Id Information
         */
        interface UserIdInfo {
            NameId: string;
            NameIdIssuer: string;
        }

        /**
         * View Creation Information
         */
        interface ViewCreationInformation {
            /** The new list view is a paged view. */
            Paged?: boolean;

            /** The new list view is a personal view. If the value is false, the new list view is a public view. */
            PersonalView?: boolean;

            /** The query for the new list view. */
            Query: string;

            /** The maximum number of list items that the new list view displays on a visual page of the list view. */
            RowLimit?: number;

            /** Option to set as default view. */
            SetAsDefaultView?: boolean;

            /** The name of the view. */
            Title: string;

            /** The view fields. */
            ViewFields: String;

            /** The view type. */
            ViewTypeKind: SPTypes.ViewType;
        }

        /**
         * Visualization
         */
        interface Visualization {
            DefaultScreen: VisualizationStyleSet;
            DetailView: VisualizationStyleSet;
            MediumScreen: VisualizationStyleSet;
            SmallScreen: VisualizationStyleSet;
            VisualizationAppInfo: VisualizationAppInfo;
            VisualizationType: number;
        }

        /**
         * Visualization App Information
         */
        interface VisualizationAppInfo {
            DesignUri: string;
            Id: string;
            RuntimeUri: string;
        }

        /**
         * Visualization Field
         */
        interface VisualizationField {
            InternalName: string;
            Style: string;
        }

        /**
         * Visualization Style Set
         */
        interface VisualizationStyleSet {
            AspectRatio: string;
            BackgroundColor: string;
            Fields: VisualizationField;
            MinHeight: string;
        }

        /**
         * Web Creation Information
         */
        interface WebCreationInformation {
            /** The description of the new site. */
            Description?: string;

            /** The locale ID that specifies the language of the new site. */
            Language?: number;

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
            UseSamePermissionsAsParentSite?: boolean;

            /** A value that specifies the name of the site template to be used for creating the new site. Use the GetAvailableWebTemplates method to get the names of available web templates on the site. */
            WebTemplate: string;
        }

        /**
         * Web Information Creation Information
         */
        interface WebInfoCreationInformation {
            Description?: string;
            Language?: number;
            Title: string;
            Url: string;
            UseUniquePermissions?: boolean;
            WebTemplate: string;
        }

        /**
         * Web Request Information
         */
        interface WebRequestInfo {
            Body: string;
            Headers: KeyValue;
            StatusCode: number;
        }

        /**
         * Web Response Information
         */
        interface WebResponseInfo {
            Body: string;
            Headers: KeyValue;
            StatusCode: number;
        }

        /**
         * Xml Schema Field Creation Information
         */
        interface XmlSchemaFieldCreationInformation {
            Options: number;
            SchemaXml: string;
        }
    }
}
/// <reference path="./fieldLink.d.ts" />
/// <reference path="./fieldLinks.d.ts" />
declare module "gd-sprest" {
    /**
     * Content Type
     */
    export interface IContentType extends IBase {
        /**
         * Properties
         */

        /** Gets or sets a description of the content type. */
        Description: string;

        DescriptionResource(): IBase;

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

        /**
         * Gets the column (also known as field) references in the content type.
         */
        FieldLinks(): IFieldLinks;

        /**
         * Gets the column (also known as field) reference in the content type.
         * @param guid - The guid of the field link.
         */
        FieldLinks(guid:string): IFieldLink;

        /**
         * Gets the fields for the content type.
         */
        Fields(): IFields;

        /**
         * Gets the field for the content type.
         * @param internalNameOrTitle - The internal name or title of the field.
         */
        Fields(internalNameOrTitle:string): IField;

        /** Gets or sets a value that specifies the content type group for the content type. */
        Group: string;

        /** Gets or sets a value that specifies whether the content type is unavailable for creation or usage directly from a user export interface. */
        Hidden: boolean;

        /** Gets a value that specifies an identifier for the content type. */
        Id: ComplexTypes.ContentTypeId;

        /** Gets or sets the JSLink for the content type custom form template. The JSLink property is not supported on Survey or Events lists. A SharePoint calendar is an Events list. */
        Jslink: string;

        MobileDisplayFormUrl: string;

        MobileEditFormUrl: string;

        MobileNewFormUrl: string;

        /** Gets or sets a value that specifies the name of the content type. */
        Name: string;

        NameResource(): IBase;

        /** Gets or sets a value that specifies the name of the content type. */
        NewFormTemplateName: string;

        /** Gets or sets a value that specifies the name of the content type. */
        NewFormUrl: string;

        /** Gets the parent content type of the content type. */
        Parent(): IContentType;

        /** Gets or sets a value that specifies whether changes to the content type properties are denied. */
        Readonly: boolean;

        /** Gets a value that specifies the XML Schema representing the content type. */
        SchemaXml: string;

        /** Gets a non-localized version of the XML schema that defines the content type. */
        SchemaXmlWithResourceTokens: string;

        /** Gets a value that specifies a server-relative path to the content type scope of the content type. */
        Scope: string;

        /** Gets or sets whether the content type can be modified. */
        Sealed: boolean;

        /** A string representation of the value of the Id. */
        StringId: string;

        /**
         * Gets a value that specifies the collection of workflow associations for the content type.
         */
        WorkflowAssociations(): IBase;

        /**
         * Methods
         */

        /**
         * Deletes the content type.
         */
        delete(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IContentType;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IContentType;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IContentType;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IContentType;

        /**
         * Updates it's properties.
         * @param data - The content type properties to update.
         */
        update(data): IBase;
    }
}
declare module "gd-sprest" {
    /**
     * Content Types
     */
    export interface IContentTypes extends IBase {
        /**
         * Properties
         */

        /** The content type collection. */
        results: Array<IContentType>;

        /**
         * Methods
         */

        /**
         * Adds a content type to the collection.
         * @param parameters - The content type creation information.
         */
        add(parameters:ComplexTypes.ContentTypeCreationInformation): IContentType;

        /**
         * Adds an existing content type to this collection.
         * @param contentTypeId - The content type id to add.
         */
        addAvailableContentType(contentTypeId): IContentType;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IContentTypes;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IContentTypes;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IContentTypes;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IContentTypes;

        /**
         * Gets a content type by id.
         * @param id - The content type id.
         */
        getById(id): IContentType;

        /**
         * Method to get the next set of results.
         */
        next(): IContentTypes;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IContentTypes;
    }
}
declare module "gd-sprest" {
    /**
     * Context Information
     */
    export interface IContextInfo {
        /** Alerts Enabled */
        alertsEnabled:boolean;

        /** Allow Silverlight Prompt */
        allowSilverlightPrompt:boolean;

        /** Client Server Time Delta */
        clientServerTimeDelta:number;

        /** Cross Domain Photos Enabled */
        crossDomainPhotosEnabled:boolean;

        /** Current Culture Name */
        currentCultureName:string;

        /** Current Language */
        currentLanguage:string;

        /** Current UI Culture Name */
        currentUICultureName:string;

        /** Environment */
        env:string;

        /** True if the _spPageContextInfo object exists, flase otherwise. */
        existsFl:boolean;

        /** Has Manage Web Permissions */
        hasManageWebPermissions:boolean;

        /** Is Anonymous Guest User */
        isAnonymousGuestUser:boolean;

        /** Is App Web */
        isAppWeb:boolean;

        /** Is Site Administrator */
        isSiteAdmin:boolean;

        /** Layouts Url */
        layoutsUrl:string;

        /** Page Item Id */
        pageItemId:number;

        /** Page List Id */
        pageListId:string;

        /** Page Personalization Scope */
        pagePersonalizationScope:number;

        /** Profile Url */
        profileUrl:string;

        /** Server Request Path */
        serverRequestPath:string;

        /** Site Absolute Url */
        siteAbsoluteUrl:string;

        /** Site Client Tag */
        siteClientTag:string;

        /** Site Server Relative Url */
        siteServerRelativeUrl:string;

        /** System User Key */
        systemUserKey:string;

        /** Tenant App Version */
        tenantAppVersion:string;

        /** Theme Cache Token */
        themeCacheToken:string;

        /** Update From Digest Page Loaded */
        updateFromDigestPageLoaded:Date;

        /** User Id */
        userId:number;

        /** User Login Name */
        userLoginName:string;

        /** Web Absolute Url */
        webAbsoluteUrl:string;

        /** Web Language */
        webLanguage:number;

        /** Web Logo Url */
        webLogoUrl:string;

        /** Web Permissions Mask */
        webPermMask:ComplexTypes.BasePermissions;

        /** Web Server Relative Url */
        webServerRelativeUrl:string;

        /** Web Template */
        webTemplate:string;

        /** Web Title */
        webTitle:string;

        /** Web UI Version */
        webUIVersion:number;
    }
}    
declare module "gd-sprest" {
    /**
     * Email Properties
     */
    export interface EmailProperties {
        /** A collection of additional email headers. */
        AdditionalHeaders?: ComplexTypes.KeyValue;

        /** A value that specifies the email addresses to blind carbon copy the email to. */
        BCC?: String;

        /** A value that specifies the body of the email. */
        Body: string;

        /** A value that specifies the email addresses to carbon copy the email to. */
        CC?: String;

        /** A value that specifies the email address of the sender. */
        From: string;

        /** A value that specifies the email addresses to send the email to. */
        To: String;

        /** A value that specifies the email subject. */
        Subject: string;
    }

    /**
     * Email
     */
    export interface IEmail {
        /**
         * Properties
         */

        /**
         * Methods
         */

        /**
         * Method to send an email.
         * @param properties - The email information.
         */
        send(properties:EmailProperties): IBase;
    }
}
declare module "gd-sprest" {
    /**
     * Event Receiver
     */
    export interface IEventReceiver extends IBase {
        /**
         * Properties
         */

        /** Specifies the type of event. */
        EventType: SPTypes.EventReceiverType;

        /** The strong name of the assembly that is used for receiving events. */
        ReceiverAssembly?: string;

        /** A string that represents the class that is used for receiving events. */
        ReceiverClass?: string;

        /** The unique identifier of the event receiver. */
        ReceiverId?: string;

        /** The name of the event receiver. */
        ReceiverName: string;

        /** The URL of a web service that is used for receiving events. */
        ReceiverUrl?: string;

        /** An integer that represents the relative sequence of the event. */
        SequenceNumber?: number;

        /** The execution synchronization of the event receiver. */
        Synchronization?: SPTypes.EventReceiverSynchronizationType;

        /**
         * Methods
         */

        /**
         * Deletes the event receiver.
         */
        delete(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IEventReceiver;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IEventReceiver;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IEventReceiver;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IEventReceiver;

        /**
         * Updates it's properties.
         * @param data - The field properties to update.
         */
        update(data): IBase;
    }
}
declare module "gd-sprest" {
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
        execute(callback?:(...args) => any): IEventReceivers;

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
        execute(callback:any, waitFl:boolean): IEventReceivers;

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
        query(oData:ODataQuery): IEventReceivers;
    }
}
declare module "gd-sprest" {
    /**
     * Field
     */
    export interface IField extends IBase {
        /**
         * Properties
         */

        AutoIndexed: boolean;

        /** Gets a value that specifies whether the field can be deleted. */
        CanBeDeleted: boolean;

        /** Gets or sets a value that specifies the default value for the field. */
        DefaultValue: string;

        /** Gets or sets a value that specifies the description of the field. */
        Description: string;

        DescriptionResource(): ComplexTypes.ResourcePath;

        /** Gets or sets a value that specifies the reading order of the field. */
        Direction: string;

        /** Gets or sets a value that specifies whether to require unique field values in a list or library column. */
        EnforceUniqueValues: boolean;

        /** Gets the name of the entity property for the list item entity that uses this field. */
        EntityPropertyName: string;

        /** Gets or sets a value that specifies the type of the field. Represents a FieldType value. See FieldType in the .NET client object model reference for a list of field type values. */
        FieldTypeKind: SPTypes.FieldType;

        /** Gets a value that specifies whether list items in the list can be filtered by the field value. */
        Filterable: boolean;

        /** Gets a Boolean value that indicates whether the field derives from a base field type. */
        FromBaseType: boolean;

        /** Gets or sets a value that specifies the field group. */
        Group: string;

        /** Gets or sets a value that specifies whether the field is hidden in list views and list forms. */
        Hidden: boolean;

        /** Gets a value that specifies the field identifier. */
        Id: string;

        /** Gets or sets a Boolean value that specifies whether the field is indexed. */
        Indexed: boolean;

        /** Gets a value that specifies the field internal name. */
        InternalName: string;

        /** Gets or sets the name of an external JS file containing any client rendering logic for fields of this type. */
        JSLink: string;

        /** Gets or sets a value that specifies whether the value of the field is read-only. */
        ReadOnlyField: boolean;

        /** Gets or sets a value that specifies whether the field requires a value. */
        Required: boolean;

        /** Gets or sets a value that specifies the XML schema that defines the field. */
        Schemaxml: string;

        /** Gets a value that specifies the server-relative URL of the list or the site to which the field belongs. */
        Scope: string;

        /** Gets a value that specifies whether properties on the field cannot be changed and whether the field cannot be deleted. */
        Sealed: boolean;

        /** Gets a value that specifies whether list items in the list can be sorted by the field value. */
        Sortable: boolean;

        /** Gets or sets a value that specifies a customizable identifier of the field. */
        StaticName: string;

        /** Gets or sets value that specifies the display name of the field. */
        Title: string;

        TitleResource(): ComplexTypes.ResourcePath;

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
        delete(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IField;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IField;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IField;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IField;

        /**
         * Sets the value of the ShowInDisplayForm property for this field.
         * @param showInForm - Flag to show the field in the display form.
         */
        setShowInDisplayForm(showInForm): IBase;

        /**
         * Sets the value of the ShowInEditForm property for this field.
         * @param showInForm - Flag to show the field in the display form.
         */
        setShowInEditForm(showInForm): IBase;

        /**
         * Sets the value of the ShowInNewForm property for this field.
         * @param showInForm - Flag to show the field in the display form.
         */
        setShowInNewForm(showInForm): IBase;

        /**
         * Updates it's properties.
         * @param data - The field properties to update.
         */
        update(data): IBase;
    }
}
declare module "gd-sprest" {
    /**
     * Field Link
     */
    export interface IFieldLink extends IBase {
        /**
         * Properties
         */

        DisplayName: string;

        FieldInternalName: string;

        Hidden: boolean;

        Id: string;

        Name: string;

        ReadOnly: boolean;

        Required: boolean;

        ShowInDisplayForm: boolean;
    }
}
declare module "gd-sprest" {
    /**
     * Field Links
     */
    export interface IFieldLinks extends IBase {
        /**
         * Properties
         */

        /** The field link collection. */
        results: Array<IFieldLink>;

        /**
         * Methods
         */

        /**
         * Adds a content type to the collection.
         * @param data - The field link properties.
         */
        add(data): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IFieldLinks;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IFieldLinks;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IFieldLinks;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IFieldLinks;

        /**
         * Gets the field link by its id.
         * @param id - The id of the field.
         */
        getById(id);

        /**
         * Method to get the next set of results.
         */
        next(): IFieldLinks;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IFieldLinks;
    }
}
declare module "gd-sprest" {
    /**
     * Fields
     */
    export interface IFields extends IBase {
        /**
         * Properties
         */

        /** The field collection. */
        results: Array<IField>;

        /**
         * Methods
         */

        /**
         * Adds a field to the field collection.
         * @param parameters - The field properties.
         */
        add(parameters:IField): IField;

        /**
         * Adds a field to the field collection.
         * @param parameters - The field creation information.
         */
        addField(parameters:ComplexTypes.FieldCreationInformation): IField;

        /**
         * Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
         * @param displayName - The title of the new field.
         * @param primaryLookupField - The ID of the lookup field to associate this dependent lookup field with.
         * @param showField - The name of the field from the target list to include data from.
         */
        addDependentLookupField(displayName, primaryLookupField, showField): IField;

        /**
         * Creates a field based on the specified schema, Boolean value, and field options.
         * Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
         * @param schemaXml - The schema XML definition of the field.
         */
        createFieldAsXml(schemaXml): IField;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IFields;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IFields;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IFields;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IFields;

        /**
         * Gets the field with the specified ID.
         * @param id - The field id.
         */
        getById(id): IField;

        /**
         * Returns the first Field object with the specified internal name or title from the collection.
         * @param internalNameOrTitle - The internal name or title of the field.
         */
        getByInternalNameOrTitle(internalNameOrTitle): IField;

        /**
         * Returns the first field object in the collection based on the title of the specified field.
         * @param title - The title of the field.
         */
        getByTitle(title): IField;

        /**
         * Method to get the next set of results.
         */
        next(): IFields;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IFields;
    }
}
/// <reference path="./fileVersions.d.ts" />
declare module "gd-sprest" {
    /**
     * File
     */
    export interface IFile extends IBase {
        /**
         * Properties
         */

        /**
         * Gets a value that specifies the user who added the file.
         */
        Author(): IUser;

        /**
         * Gets a value that returns the user who has checked out the file.
         */
        CheckedOutByUser(): IUser;

        /** Gets a value that returns the comment used when a document is checked in to a document library. */
        CheckInComment: string;

        /** Gets a value that indicates how the file is checked out of a document library. Represents an SP.CheckOutType value: . The checkout state of a file is independent of its locked state. */
        CheckOutType: SPTypes.CheckOutType;

        /** Returns internal version of content, used to validate document equality for read purposes. */
        ContentTag: string;

        /** Gets a value that specifies the customization status of the file. Represents an SP.CustomizedPageStatus value: None = 0; Uncustomized = 1; Customized = 2. */
        CustomizedPageStatus: number;

        EffectiveInformationRightsManagementSettings(): IBase;

        /** Gets a value that specifies the ETag value. */
        ETag: string;

        /** Gets a value that specifies whether the file exists. */
        Exists: boolean;

        InformationRightsManagementSettings(): IBase;

        /** Gets the size of the file in bytes, excluding the size of any Web Parts that are used in the file. */
        Length: number;

        /** Gets a value that specifies the publishing level of the file. Represents an SP.FileLevel value: Published = 1; Draft = 2; Checkout = 255. */
        Level: number;

        LinkingUrl: string;

        /**
         * Gets a value that specifies the list item field values for the list item corresponding to the file.
         */
        ListItemAllFields(): IBase;

        /**
         * Gets a value that returns the user that owns the current lock on the file.
         */
        LockedByUser(): IUser;

        /** Gets a value that specifies the major version of the file. */
        MajorVersion: number;

        /** Gets a value that specifies the minor version of the file. */
        MinorVersion: number;

        /**
         * Gets a value that returns the user who last modified the file.
         */
        ModifiedBy(): IUser;

        /** Gets the name of the file including the extension. */
        Name: string;

        /**
         * Property Bag
         */
        Properties(): IPropertyValues;

        ServerRelativePath: ComplexTypes.ResourcePath;

        /** Gets the relative URL of the file based on the URL for the server. */
        ServerRelativeUrl: string;

        SiteId: string;

        /** Gets a value that specifies when the file was created. */
        TimeCreated: string;

        /** Gets a value that specifies when the file was last modified. */
        TimeLastModified: string;

        /** Gets a value that specifies the display name of the file. */
        Title: string;

        /** Gets a value that specifies the implementation-specific version identifier of the file. */
        UiVersion: number;

        /** Gets a value that specifies the implementation-specific version identifier of the file. */
        UiVersionLabel: string;

        UniqueId: string;

        VersionEvents(): IBase;

        /**
         * Gets a value that returns a collection of file version objects that represent the versions of the file.
         */
        Versions(): IFileVersions;

        WebId: string;

        /**
         * Methods
         */

        /**
         * Approves the file submitted for content approval with the specified comment.
         * @param comment - The comment for the approval. It's length must be <= 1023.
         */
        approve(comment): IBase;

        /**
         * Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         * @param uploadId - The unique id of the upload session.
         */
        cancelupload(uploadId): IBase;

        /**
         * Checks the file in to a document library based on the check-in type.
         * @param comment - The comment for the check-in. Its length must be <= 1023.
         * @param checkInType - The check-in type: MinorCheckIn - 0; MajorCheckIn - 1; OverwriteCheckIn - 2
         */
        checkin(comment, checkInType): IBase;

        /**
         * Checks out the file from a document library based on the check-out type.
         */
        checkout(): IBase;

        /**
         * Returns the file content.
         */
        content(): IBase;

        /**
         * Continues the chunk upload session with an additional fragment. The current file content is not changed.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         * @param uploadId - The unique id of the upload session.
         * @param fileOffset - The size of the offset into the file where the fragment starts.
         */
        continueUpload(uploadId, fileOffset): IBase;

        /**
         * Copies the file to the destination URL.
         * @param strNewUrl - The absolute URL or server relative URL of the destination file path to copy to.
         * @param bOverWrite - True to overwrite a file with the same name in the location.
         */
        copyTo(strNewUrl, bOverWrite): IBase;

        /**
         * Deletes the File.
         */
        delete(): IBase;

        /**
         * Denies approval for a file that was submitted for content approval.
         * Only documents in lists that are enabled for content approval can be denied.
         * @param comment - The comment for the denial. It's length must be <= 1023.
         */
        deny(comment): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IFile;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IFile;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IFile;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IFile;

        /**
         * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         * @param uploadId - The unique id of the upload session.
         * @param fileOffset - The size of the offset into the file where the fragment starts.
         */        
        finishUpload(uploadId, fileOffset): IBase;

        /**
         * Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
         * An exception is thrown if the file is not an ASPX page.
         * @param scope - The webpart personalization scope: User - 0; Shared - 1
         */
        getlimitedwebpartmanager(scope): IBase;

        /**
         * Moves the file to the specified destination URL.
         * @param newUrl - The absolute url or server relative url of the destination file path to move to.
         * @param flags - The move operation: Overwrite - 1; AllowBrokenThickets (Move even if supporting files are separated from the file) - 8;
         */
        moveTo(newUrl, flags): IBase;

        /**
         * Opens the file as a stream.
         */
        openBinaryStream(): IBase;

        /**
         * Submits the file for content approval with the specified comment.
         * @param comment - The comment for the published file. It's length must be <= 1023.
         */
        publish(comment): IBase;

        /**
         * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): IBase;

        /**
         * Saves the file as a stream.
         * @param stream - The binary stream of the file.
         */
        saveBinaryStream(stream): IBase;

        /**
         * Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
         * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
         * The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
         * @param uploadId - The unique id of the upload session.
         */
        startUpload(uploadId): IBase;

        /**
         * Reverts an existing checkout for the file.
         */
        undoCheckOut(): IBase;

        /**
         * Removes the file from content approval or unpublish a major version.
         * @param comment - The comment for the unpublish operation. Its length must be <= 1023.
         */
        unpublish(comment): IBase;

        /**
         * Updates it's properties.
         * @param data - The file properties to update.
         */
        update(data): IBase;
    }
}
declare module "gd-sprest" {
    /**
     * Files
     */
    export interface IFiles extends IBase {
        /**
         * Properties
         */

        /** The file collection. */
        results: Array<IFile>;

        /**
         * Methods
         */

        /**
         * Adds a file to this collection.
         * @param overwrite - true to overwrite the file if it already exists; otherwise false.
         * @param url - The folder-relative URL of the file.
         * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        add(overwrite, url, content): IFile;

        /**
         * Adds a ghosted file to an existing list or document library.
         * @param urlOfFile - The server-relative URL where you want to save the file.
         * @param templateFileType - The SP.TemplateFileType to use to create the file.
         */
        addTemplateFile(urlOfFile, templateFileType:SPTypes.FileTemplateType): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IFiles;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IFiles;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IFiles;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IFiles;

        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The name or server relative url of the file.
         */
        getByUrl(serverRelativeUrl): IFile;

        /**
         * Method to get the next set of results.
         */
        next(): IFiles;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IFiles;
    }
}
declare module "gd-sprest" {
    /**
     * File Version
     */
    export interface IFileVersion extends IBase {
        /**
         * Properties
         */

        /** Gets a value that specifies the check-in comment. */
        CheckInComment: string;

        /** Gets a value that specifies the creation date and time for the file version. */
        Created: string;

        /**
         * Gets a value that specifies the user that represents the creator of the file version.
         */
        CreatedBy(): IUser;

        /** Gets the internal identifier for the file version. */
        ID: number;

        /** Gets a value that specifies whether the file version is the current version. */
        IsCurrentVersion: string;

        /**  */
        Size: number;

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

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IFileVersion;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IFileVersion;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IFileVersion;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IFileVersion;
    }
}
/// <reference path="./fileVersion.d.ts" />
declare module "gd-sprest" {
    /**
     * File Versions
     */
    export interface IFileVersions extends IBase {
        /**
         * Properties
         */

        /** The file version collection. */
        results: Array<IFileVersion>;

        /**
         * Methods
         */

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IFileVersions;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IFileVersions;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IFileVersions;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IFileVersions;

        /**
         * Method to get the next set of results.
         */
        next(): IFileVersions;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IFileVersions;
    }
}
/// <reference path="./files.d.ts" />
declare module "gd-sprest" {
    /**
     * Folder
     */
    export interface IFolder extends IBase {
        /**
         * Properties
         */

        /** Specifies the sequence in which content types are displayed. */
        ContentTypeOrder: ComplexTypes.ContentTypeId;

        /** Gets a value that specifies whether the file exists. */
        Exists: boolean;

        /**
         * Gets the files contained in the folder.
         */
        Files(): IFiles;

        /**
         * Gets the file contained in the folder.
         * @param url - The url of the file within the current folder.
         */
        Files(url:string): IFile;

        /**
         * Gets the folders contained in the list folder.
         */
        Folders(): IFolders;

        /**
         * Gets the folder contained in the list folder.
         * @param url - The url of the sub-folder within the current folder.
         */
        Folders(url:string): IFolder;

        /** Gets a value that specifies the count of items in the list folder. */
        ItemCount: number;

        /** Indicates whether the folder is enabled for WOPI default action. */
        IsWOPIEnabled: boolean;

        /**
         * Specifies the list item field (2) values for the list item corresponding to the file.
         */
        ListItemAllFields(): IBase;

        /** Gets the name of the folder. */
        Name: string;

        /**
         * Gets the parent list folder of the folder.
         */
        ParentFolder(): IFolder;

        /**
         * Property Bag
         */
        Properties(): IPropertyValues;

        ServerRelativePath: ComplexTypes.ResourcePath;

        /** Gets the server-relative URL of the list folder. */
        ServerRelativeUrl: string;

        StorageMetrics(): IBase;

        TimeCreated: string;

        TimeLastModified: string;

        /** Gets or sets a value that specifies the content type order. */
        UniqueContentTypeOrder: ComplexTypes.ContentTypeId;

        UniqueId: string;

        /** Gets or sets a value that specifies folder-relative URL for the list folder welcome page. */
        WelcomePage: string;

        /**
         * Methods
         */

        /**
         * Deletes the folder.
         */
        delete(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IFolder;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IFolder;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IFolder;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IFolder;

        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The server-relative URL of the folder.
         */
        getByUrl(serverRelativeUrl): IFolder;

        /**
         * Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): IBase;

        /**
         * Updates it's properties.
         * @param data - The file properties to update.
         */
        update(data): IBase;
    }
}
declare module "gd-sprest" {
    /**
     * Folders
     */
    export interface IFolders extends IBase {
        /**
         * Properties
         */

        /** The folder collection. */
        results: Array<IFolder>;

        /**
         * Methods
         */

        /**
         * Adds the folder that is located at the specified URL to the collection.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        add(url): IFolder;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IFolders;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IFolders;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IFolders;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IFolders;

        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The server-relative URL of the folder.
         */
        getbyurl(serverRelativeUrl);

        /**
         * Method to get the next set of results.
         */
        next(): IFolders;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IFolders;
    }
}
declare module "gd-sprest" {
    /**
     * Group
     */
    export interface IGroup extends IBase {
        /**
         * Properties
         */

        /** Gets or sets a value that indicates whether the group members can edit membership in the group. */
        AllowMembersEditMembership: boolean;

        /** Gets or sets a value that indicates whether to allow users to request membership in the group and request to leave the group. */
        AllowRequestToJoinLeave: boolean;

        /**
         * Gets or sets a value that indicates whether the request to join or leave the group can be accepted automatically.
         */
        AutoAcceptRequestToJoinLeave(): boolean;

        /**
         * Gets a value that indicates whether the current user can edit the membership of the group.
         */
        CanCurrentUserEditMembership(): boolean;

        /**
         * Gets a value that indicates whether the current user can manage the group.
         */
        CanCurrentUserManageGroup(): boolean;

        /**
         * Gets a value that indicates whether the current user can view the membership of the group.
         */
        CanCurrentUserViewMembership(): boolean;

        /** Gets or sets the description of the group. */
        Description: string;

        /** Gets a value that specifies the member identifier for the user or group. */
        Id: string;

        /** Gets a value that indicates whether this member should be hidden in the UI. */
        IsHiddenInUI: string;

        /** Gets the name of the group. */
        LoginName: string;

        /** Gets or sets a value that indicates whether only group members are allowed to view the membership of the group. */
        OnlyAllowMembersViewMembership: boolean;

        /**
         * Gets or sets the owner of the group which can be a user or another group assigned permissions to control security.
         */
        Owner(): IUser;

        /** Gets the name for the owner of this group. */
        OwnerTitle: string;

        /** Gets or sets the email address to which the requests of the membership are sent. */
        RequestToJoinLeaveEmailSetting: string;

        /** Gets a value containing the type of the principal. Represents a bitwise SP.PrincipalType value: None = 0; User = 1; DistributionList = 2; SecurityGroup = 4; SharePointGroup = 8; All = 15. */
        PrincipalType: string;

        /** Gets or sets a value that specifies the name of the principal. */
        Title: string;

        /**
         * Gets a collection of user objects that represents all of the users in the group.
         */
        Users(): IUsers;

        /**
         * Gets a collection of user objects that represents all of the users in the group.
         * @param id - The user id.
         */
        Users(id): IUser;

        /**
         * Methods
         */

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IGroup;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IGroup;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IGroup;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IGroup;
    }
}
/// <reference path="./promise.d.ts" />
declare module "gd-sprest" {
    /**
     * Helper Methods
     */
    export interface IHelper {
        /**
         * Method to copy a file from the app web to the host web.
         * @param srcFileUrl - The source file url, relative to the app web.
         * @param dstFolder - The destination folder.
         * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
         * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
         */
        copyFileToHostWeb(srcFileUrl:string, dstFolder:IFolder, overwriteFl?:boolean, rootWebFl?:boolean): IPromise;

        /**
         * Method to copy a file from the app web to the host web.
         * @param srcFileUrl - The source file url, relative to the app web.
         * @param dstFolderUrl - The destination folder url, relative to the host web.
         * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
         * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
         */
        copyFileToHostWeb(srcFileUrl:string, dstFolderUrl:string, overwriteFl?:boolean, rootWebFl?:boolean): IPromise;

        /**
         * Method to copy a file from the app web to the host web
         * @param fileUrls - An array of source file urls, relative to the app web.
         * @param folderUrls - An array of destination folder urls, relative to the host web.
         * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
         */
        copyFilesToHostWeb(fileUrls:Array<string>, folderUrls:Array<string>, overwriteFl?:boolean, rootWebFl?:boolean): IPromise;

        /**
         * Method to create sub-folders.
         * @param folder - The app web relative url to the source file.
         * @param subFolderUrl - The host web relative url of the destination folder.
         */
        createSubFolders(folder:IFolder, subFolderUrl:string): IPromise;

        /**
         * Method to get the file content.
         * @param web - The web containing the files.
         * @param fileUrls - An array of file urls, relative to the web.
         * @param createFl - Flag to create the folder, if it doesn't exist.
         */
        getFolder(web:IWeb, folderUrl:string, createFl?:boolean): IPromise;

        /**
         * Method to remove empty folders
         * @param web - The web containing the files.
         * @param folderUrls - An array of folder urls, relative to the web.
         */
        removeEmptyFolders(web:IWeb, folderUrls:Array<string>): IPromise;

        /**
         * Method to remove files from a web.
         * @param web - The web containing the files.
         * @param fileUrl - The file url, relative to the web.
         */
        removeFile(web:IWeb, fileUrl:string): IPromise;

        /**
         * Method to remove files from a web.
         * @param web - The web containing the files.
         * @param fileUrls - An array of file urls, relative to the web.
         */
        removeFiles(web:IWeb, fileUrls:Array<string>): IPromise;
    }
}
declare module "gd-sprest" {
    /**
     * List Items
     */
    export interface IListItems extends IBase {
        /**
         * Properties
         */

        /** The list item collection. */
        results: Array<IListItem>;

        /**
         * Methods
         */

        /**
         * Adds an item to the list item collection.
         * @param data - The item properties.
         */
        add(data): IListItem;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IListItems;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IListItems;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IListItems;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IListItems;

        /**
         * Gets an item by the specified id.
         * @param id - The item id.
         */
        getById(id): IListItem;

        /**
         * Method to get the next set of results.
         */
        next(): IListItems;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IListItems;
    }
}
declare module "gd-sprest" {
    /**
     * Limited Web Part Manager
     */
    export interface ILimitedWebPartManager extends IBase {
        /**
         * Properties
         */

        HasPersonalizedParts: boolean;

        Scope: number;

        /**
         * Methods
         */

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): ILimitedWebPartManager;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): ILimitedWebPartManager;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): ILimitedWebPartManager;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): ILimitedWebPartManager;

        /**
         * Gets a webpart by its id.
         * @param id - The web part id.
         */
        WebParts(id);
    }
}
/// <reference path="./items.d.ts" />
/// <reference path="./listItem.d.ts" />
/// <reference path="./oData.d.ts" />
/// <reference path="./roleAssignment.d.ts" />
/// <reference path="./roleAssignments.d.ts" />
/// <reference path="./roleDefinition.d.ts" />
/// <reference path="./roleDefinitions.d.ts" />
/// <reference path="./view.d.ts" />
/// <reference path="./views.d.ts" />
declare module "gd-sprest" {
    /**
     * List
     */
    export interface IList extends IBase {
        /**
         * Constructor
         * @param listName - The name of the list.
         * @param targetInfo - (Optional) The target information.
         */
        new(listName:string, targetInfo?:TargetInfoSettings): IList;

        /**
         * Properties
         */

        /** Gets a value that specifies whether the list supports content types. */
        AllowContentTypes: boolean;

        AllowDeletion: boolean;

        /** Gets the list definition type on which the list is based. Represents a ListTemplateType value. See ListTemplateType in the .NET client object model reference for template type values. */
        BaseTemplate: SPTypes.ListTemplateType;

        /** Gets the base type for the list. Represents an SP.BaseType value: Generic List = 0; Document Library = 1; Discussion Board = 3; Survey = 4; Issue = 5. */
        BaseType: number;

        /**
         * Gets a value that specifies the override of the web application's BrowserFileHandling property at the list level. Represents an SP.BrowserFileHandling value: Permissive = 0; Strict = 1.
         */
        BrowserFileHandling: number;

        /**
         * Gets the content types that are associated with the list.
         */
        ContentTypes(): IContentTypes;

        /**
         * Gets the content types that are associated with the list.
         * @param id - The id of the content type.
         */
        ContentTypes(id:string): IContentType;

        /** Gets or sets a value that specifies whether content types are enabled for the list. */
        ContentTypesEnabled: boolean;

        /** Gets a value that specifies when the list was created. */
        Created: string;

        CurrentChangeToken: ComplexTypes.ChangeToken;

        /**
         * Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false.
         */
        DataSource(): ComplexTypes.ListDataSource;

        /** Gets a value that specifies the default workflow identifier for content approval on the list. Returns an empty GUID if there is no default content approval workflow. */
        DefaultContentApprovalWorkflowId: string;

        /**
         * Gets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL
         */
        DefaultDisplayFormUrl(): string;

        /**
         * Gets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
         */
        DefaultEditFormUrl(): string;

        /**
         * Gets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
         */
        DefaultNewFormUrl(): string;

        /**
         * Gets the default list view.
        */
        DefaultView(): IView;

        /**
         * Gets the URL of the default view for the list.
         */
        DefaultViewUrl(): string;

        /** Gets or sets a value that specifies the description of the list. */
        Description: string;

        DescriptionResouce(): ComplexTypes.ResourcePath;

        /** Gets or sets a value that specifies the reading order of the list. Returns ""NONE"", ""LTR"", or ""RTL"". */
        Direction: string;

        /** Gets or sets a value that specifies the server-relative URL of the document template for the list. Returns a server-relative URL if the base type is DocumentLibrary, otherwise returns null. */
        DocumentTemplateUrl: string;

        /** Gets or sets a value that specifies the minimum permission required to view minor versions and drafts within the list. Represents an SP.DraftVisibilityType value: Reader = 0; Author = 1; Approver = 2. */
        DraftVersionVisibility: number;

        /**
         * Gets a value that specifies the effective permissions on the list that are assigned to the current user.
         */
        EffectiveBasePermissions(): ComplexTypes.BasePermissions;

        /**
         * Gets a value that specifies the effective permissions on the list that are for the user export interface.
        */
        EffectiveBasePermissionsForUI(): ComplexTypes.BasePermissions;

        EnableAssignToEmail: boolean;

        /** Gets or sets a value that specifies whether list item attachments are enabled for the list. */
        EnableAttachments: boolean;

        /** Gets or sets a value that specifies whether new list folders can be added to the list. */
        EnableFolderCreation: boolean;

        /** Gets or sets a value that specifies whether minor versions are enabled for the list. */
        EnableMinorVersions: boolean;

        /** Gets or sets a value that specifies whether content approval is enabled for the list. */
        EnableModeration: boolean;

        /** Gets or sets a value that specifies whether historical versions of list items and documents can be created in the list. */
        EnableVersioning: boolean;

        /**  */
        EntityTypeName: string;

        /**
         * Gets the event receivers associated with the list.
        */
        EventReceivers(): IEventReceivers;

        /**
         * Gets the event receiver associated with the list.
         * @param id - The id of the event receiver.
        */
        EventReceivers(id:string): IEventReceiver;

        ExcludeFromOfflineClient: boolean;

        /**
         * Gets the fields in the list.
         */
        Fields(): IFields;

        /**
         * Gets the field in the list.
         * @param internalNameOrTitle - The internal name or title of the field.
         */
        Fields(internalNameOrTitle:string): IField;

        FileSavePostProcessingEnabled: boolean;

        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        FirstUniqueAncestorSecurableObject(): string;

        /** Gets or sets a value that indicates whether forced checkout is enabled for the document library. */
        ForceCheckout: boolean;

        /**
         * Gets the list forms in the list.
         */
        Forms(): IBase;

        /**
         * Gets the list form in the list.
         * @param id - The id of the form.
         */
        Forms(id:string): IBase;

        /** Gets a value that specifies whether the list is an external list. */
        HasExternalDataSource: boolean;

        /**
         * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
         */
        HasUniqueRoleAssignments(): IBase;

        /** Gets or sets a Boolean value that specifies whether the list is hidden. If true, the server sets the OnQuickLaunch property to false. */
        Hidden: boolean;

        /** Gets the GUID that identifies the list in the database. */
        Id: string;

        /** Gets a value that specifies the URI for the icon of the list. */
        ImageUrl: string;

        /**
         * Gets a value that specifies the information rights management settings.
        */
        InformationRightsManagementSettings(): IBase;

        /**  */
        IrmEnabled: boolean;

        /**  */
        IrmExpire: boolean;

        /**  */
        IrmReject: boolean;

        /** Gets or sets a value that specifies a flag that a client application can use to determine whether to display the list. */
        IsApplicationList: boolean;

        /** Gets a value that specifies whether the list is a gallery. */
        IsCatalog: boolean;

        /**  */
        IsPrivate: boolean;

        /**
         * Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages.
         */
        IsSiteAssetsLibrary(): boolean;

        /** Gets a value that specifies the number of list items in the list. */
        ItemCount: number;

        /**
         * Gets the list items in the list.
         */
        Items(): IListItems;

        /**
         * Gets the list item in the list.
         * @param id - The id of the list item.
         */
        Items(id:number): IListItem;

        /** Gets a value that specifies the last time a list item was deleted from the list. */
        LastItemDeletedDate: string;

        /** Gets a value that specifies the last time a list item, field, or property of the list was modified. */
        LastItemModifiedDate: string;

        ListExperienceOptions: number;

        /**  */
        ListItemEntityTypeFullName: string;

        MajorVersionLimit: number;

        MajorWithMinorVersionsLimit: number;

        /** Gets or sets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site. */
        MultipleDataList: boolean;

        /** Gets or sets a value that specifies that the crawler must not crawl the list. */
        NoCrawl: boolean;

        /**
         * Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false.
         */
        OnQuickLaunch(): boolean;

        /**
         * Gets a value that specifies the site that contains the list.
         */
        ParentWeb(): IBase;

        /** Gets a value that specifies the server-relative URL of the site that contains the list. */
        ParentWebUrl: string;

        ParserDisabled: boolean;

        ReadSecurity: number;

        /**
         * Gets the role assignments for the securable object.
         */
        RoleAssignments(): IRoleAssignments;

        /**
         * Gets the role assignments for the securable object.
         * @param id - The role assignment id.
         */
        RoleAssignments(id:string): IRoleAssignment;

        /**
         * Gets the root folder of the list.
         */
        RootFolder(): IFolder;

        /**
         * Gets the file in the root folder of the list.
         * @param url - The url of the file within the root folder.
         */
        RootFolder(url:string): IFile;

        /**
         * Gets a value that specifies the list schema of the list.
         */
        SchemaXml(): string;

        /** Gets a value that indicates whether folders can be created within the list. */
        ServerTemplateCanCreateFolders: boolean;

        Subscriptions(): IBase;

        /** Gets a value that specifies the feature identifier of the feature that contains the list schema for the list. Returns an empty GUID if the list schema is not contained within a feature. */
        TemplateFeatureId: string;

        /** Gets or sets the displayed title for the list. Its length must be <= 255 characters. */
        Title: string;

        TitleResource(): ComplexTypes.ResourcePath;

        /**
         * Gets the user custom actions for the list.
         */
        UserCustomActions(): IUserCustomActions;

        /**
         * Gets the user custom action(s) for the list.
         * @param id - The id of the user custom action.
         */
        UserCustomActions(id:string): IUserCustomAction;

        /**
         * Gets or sets a value that specifies the data validation criteria for a list item. Its length must be <= 1023.
         */
        ValidationFormula(): string;

        /**
         * Gets or sets a value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023.
         */
        ValidationMessage(): string;

        /**
         * Gets the views in the list.
         */
        Views(): IViews;

        /**
         * Gets the view in the list.
         * @param id - The id of the view.
         */
        Views(id:string): IView;

        /**
         * Gets a value that specifies the collection of all workflow associations for the list.
         */
        WorkflowAssociations(): string;

        WriteSecurity(): number;

        /**
         * Methods
         */

        /**
         * Creates unique role assignments for the securable object.
         * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
         * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
         */
        breakRoleInheritance(copyRoleAssignments, clearSubScopes);

        /**
         * Deletes the list.
         */
        delete(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IList;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IList;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IList;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IList;

        /**
         * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query): IBase;

        /**
         * Returns the list item with the specified list item identifier.
         * @param id - The list item id.
         */
        getItemById(id): IListItem;

        /**
         * Returns a collection of items from the list based on the view xml.
         * @param viewXml - The view xml CAML query.
         */
        getItems(viewXml): IListItems;

        /**
         * Returns a collection of items from the list based on the specified query.
         * @camlQuery - The caml query.
         */
        getItemsByQuery(camlQuery): IListItems;

        /**
         * Returns a collection of items from the list based on the specified query.
         * @query - The query that contains the change token.
         */
        getListItemChangesSinceToken(query): IBase;

        /**
         * Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
         */
        getRelatedFields(): IBase;

        /**
         * Gets the effective user permissions for the current user.
         * @param loginName - The user login name.
         */
        getUserEffectivePermissions(loginName): IBase;

        /**
         * Returns the list view with the specified view identifier.
         * @param viewId - The view id.
         */
        getViewById(viewId): IView;

        /**
         * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): IBase;

        /**
         * Renders the list data.
         * @param viewXml - A CAML query that defines the items and fields that you want returned.
         */
        renderListData(viewXml): IBase;

        // 
        // Types of modes: 1 - Display, 2 - Edit, 3 - New
        /**
         * Renders the list form data.
         * @param itemId - The item id.
         * @param formId - The identifier of the form.
         * @param mode - The SP.ControlMode of the control used to display the item.
         */
        renderListFormData(itemId, formId, mode:SPTypes.ControlMode): IBase;

        /**
         * Reserves a list item ID for idempotent list item creation.
         */
        reserveListItemId(): IBase;

        /**
         * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
         */
        resetRoleInheritance(): IBase;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): IBase;
    }
}
/// <reference path="./attachment.d.ts" />
/// <reference path="./attachmentFiles.d.ts" />
/// <reference path="./roleAssignment.d.ts" />
/// <reference path="./roleAssignments.d.ts" />
declare module "gd-sprest" {
    /**
     * List Item
     */
    export interface IListItem extends IBase {
        /**
         * Properties
         */

        /**
         * Get the attachment collection.
         */
        AttachmentFiles(): IAttachmentFiles;

        /**
         * Gets the specified attachment file.
         * @param fileName - The filename of the attachment.
         */
        AttachmentFiles(fileName:string): IAttachment;

        /**
         * Gets a value that specifies the content type of the list item.
         */
        ContentType(): IContentType;

        /**
         * Gets a value that specifies the display name of the list item.
         */
        DisplayName: string;

        /** Gets a value that specifies the effective permissions on the list item that are assigned to the current user. */
        EffectiveBasePermissions: ComplexTypes.BasePermissions;

        /** Gets the effective base permissions for the current user, as they should be displayed in UI. */
        EffectiveBasePermissionsForUI: ComplexTypes.BasePermissions;

        /**
         * Gets the values for the list item as HTML.
         */
        FieldValuesAsHtml(): IBase;

        /**
         * Gets the list item's field values as a collection of string values.
         */
        FieldValuesAsText(): IBase;

        /**
         * Gets the formatted values to be displayed in an edit form.
         */
        FieldValuesForEdit(): IBase;

        /**
         * Gets the file that is represented by the item from a document library.
         */
        File(): IFile;

        /** Gets a value that specifies whether the list item is a file or a list folder. Represents an SP.FileSystemObjectType value: Invalid = -1; File = 0; Folder = 1; Web = 2. */
        FileSystemObjectType: number;

        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        FirstUniqueAncestorSecurableObject(): string;

        /**
         * Gets a folder object that is associated with a folder item.
         */
        Folder(): IFolder;

        GetDlpPolicyTip(): IBase;

        /**
         * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
         */
        HasUniqueRoleAssignments(): string;

        IconOverlay: string;

        /** Gets a value that specifies the list item identifier. */
        Id: number;

        /**
         * Gets the parent list that contains the list item.
         */
        ParentList(): IList;

        /**
         * Property Bag
         */
        Properties(): IPropertyValues;

        /**
         * Gets the role assignments for the securable object.
         */
        RoleAssignments(): IRoleAssignments;

        /**
         * Gets the role assignment(s) for the securable object.
         * @param id - The role assignment id.
         */
        RoleAssignments(id:string): IRoleAssignment;

        ServerRedirectedEmbedUrl: string;

        /**
         * Methods
         */

        /**
         * Creates unique role assignments for the securable object.
         * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
         * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
         */
        breakRoleInheritance(copyRoleAssignments, clearSubScopes): IBase;

        /**
         * Deletes the list item.
         */
        delete(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IListItem;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IListItem;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IListItem;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IListItem;

        /**
         * Gets the effective permissions that a specified user has on the list item.
         * @param loginName - The login name.
         */
        getUserEffectivePermissions(loginName): IBase;

        /**
         * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): IBase;

        /**
         * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
         */
        resetRoleInheritance(): IBase;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): IBase;

        /**
         * Validates and sets the values of the specified collection of fields for the list item.
         * @param formValues - The fields to change and their new values. Pass this parameter in the request body, as shown in the request example.
         * @param bNewDocumentUpdate - True if the list item is a document being updated after upload; otherwise false. Pass this parameter in the request body, as shown in the request example, or in the URI path.
         */
        validateUpdateListItem(formValues, bNewDocumentUpdate);
    }
}
declare module "gd-sprest" {
    /**
     * Lists
     */
    export interface ILists extends IBase {
        /**
         * Properties
         */

        /** The list collection. */
        results: Array<IList>;

        /**
         * Methods
         */

        /**
         * Adds a list to the list collection.
         * @param parameters - The list creation information.
         */
        add(parameters:ComplexTypes.ListCreationInformation): IList;

        /**
         * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
         */
        ensureSiteAssetsLibrary(): IBase;

        /**
         * Gets a list that is the default location for wiki pages.
         */
        ensureSitePagesLibrary(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): ILists;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): ILists;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): ILists;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): ILists;

        /**
         * Returns the list with the specified list identifier.
         * @param id - The list id.
         */
        getById(id): IList;

        /**
         * Returns the list with the specified title from the collection.
         * @param title - The list title.
         */
        getByTitle(title): IList;

        /**
         * Method to get the next set of results.
         */
        next(): ILists;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): ILists;
    }
}
declare module "gd-sprest" {
    /**
     * Method Information Settings
     */
    export interface MethodInfoSettings {
        argNames?: Array<string>;
        argValues?: Array<any>;
        data?: any;
        getAllItemsFl?: boolean;
        inheritMetadataType?: boolean;        
        metadataType?: string;
        name: string;
        replaceEndpointFl?: boolean;
        requestMethod?: string;
        requestType: number;
        returnType?: string;
    }
}
declare module "gd-sprest" {
    /**
     * OData Settings
     */
    export interface ODataQuery {
        /** The fields to expand. */
        Expand?: Array<string>;

        /** The filters. */
        Filter?: string;

        /**
         * Flag to get all items.
         * Use this flag to get past the 5000 limit.
         */
        GetAllItems?: boolean;

        /** The order by fields. */
        OrderBy?: Array<string>;

        /** The fields to select. */
        Select?: Array<string>;

        /** The number of results to skip. */
        Skip?: number;

        /** The max number of results to return. */
        Top?: number;
    }
}
/// <reference path="./personProperties.d.ts" />
declare module "gd-sprest" {
    /**
     * People Manager
     */
    export interface IPeopleManager extends IBase {
            /**
         * Constructor
         * @param targetInfo - (Optional) The target information.
         */
        new(targetInfo?:TargetInfoSettings): IPeopleManager;

        /**
         * Properties
         */

        /**
         * The URL of the edit profile page for the current user.
         */
        EditProfileLink: string;

        /**
         * A Boolean value that indicates whether the current user's People I'm Following list is public.
         */
        IsMyPeopleListPublic: boolean;

        /**
         * Methods
         */

        /** Checks whether the specified user is following the current user.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
        */
        amIFollowedBy(accountName:string) : IBase;

        /**
         * Checks whether the current user is following the specified user.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        amIFollowing(accountName:string) : IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IPeopleManager;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IPeopleManager;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IPeopleManager;

        /**
         * Adds the specified user to the current user's list of followed users.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        follow(accountName:string) : IBase;

        /**
         * Adds the specified tag to the current user's list of followed tags.
         * @param id - The ID of the tag to start following.
         */
        followTag(id:string) : IBase;

        /**
         * Gets tags that the user is following.
         * @param maxCount - The maximum number of tags to get.
         */
        getFollowedTags(maxCount:number) : IBase;

        /**
         * Gets the people who are following the specified user.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        getFollowersFor(accountName:string) : IPersonProperties;

        /**
         * Gets the people who are following the current user.
         */
        getMyFollowers() : IPersonProperties;

        /**
         * Gets user properties for the current user.
         */
        getMyProperties() : IPersonProperties;

        /**
         * Gets suggestions for who the current user might want to follow.
         */
        getMySuggestions() : IPersonProperties;

        /**
         * Gets the people who the specified user is following.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        getPeopleFollowedBy(accountName:string) : IPersonProperties;

        /**
         * Gets the people who the current user is following.
         */
        getPeopleFollowedByMe() : IPersonProperties;

        /**
         * Gets user properties for the specified user.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        getPropertiesFor(accountName:string) : IPersonProperties;

        /**
         * Gets the most popular tags.
         */
        getTrendingTags() : IBase;

        /**
         * Gets the specified user profile property for the specified user.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         * @param propertyName - The case-sensitive name of the property to get.
         */
        getUserProfilePropertyFor(accountName:string, propertyName:string) : IPersonProperties;

        /**
         * Removes the specified user from the user's list of suggested people to follow.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        hideSuggestion(accountName:string) : IBase;

        /**
         * Checks whether the first user is following the second user.
         * @param possibleFollowerAccountName - The account name of the user who might be following possiblefolloweeaccountname, encoded and passed as an alias in the query string.
         * @param possibleFolloweeAccountName - The account name of the user who might be followed, encoded and passed as an alias in the query string.
         */
        isFollowing(possibleFollowerAccountName:string, possibleFolloweeAccountName:string) : IBase;

        /**
         * Uploads and sets the user profile picture. Users can upload a picture to their own profile only.
         * @param stream - The picture in BMP, JPEG, or PNG format of up to 4.76MB.
         */
        setMyProfilePicture(stream:any) : IBase;

        /**
         * Remove the specified user from the current user's list of followed users.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        stopFollowing(accountName:string) : IBase;

        /**
         * Remove the specified tag from the current user's list of followed tags.
         * @param id - The ID of the tag to stop following.
         */
        stopFollowingTag(id:string) : IBase;
    }
}
declare module "gd-sprest" {
    /**
     * Entity Data
     */
    export interface EntityData {
        /** Department. */
        Department: string;

        /** EMail */
        Email: string;

        /** */
        IsAltSecIdPresent: boolean;

        /** Mobile Phone */
        MobilePhone: string;

        /** Object ID */
        ObjectId: string;

        /** Title */
        Title: string;
    }

    /**
     * Client People Picker Query Parameters
     */
    export interface PeoplePickerQuery {
        /** True to allow the email address. */
        AllowEmailAddresses?: boolean;

        /** True to allow multiple entities.  */
        AllowMultipleEntities?: boolean;

        /** True to allow all url zones. */
        AllUrlZones?: boolean;

        /** True to enable claim providers. */
        EnabledClaimProviders?: boolean;

        /** True to force claims. */
        ForceClaims?: boolean;

        /** Maximum entity suggestions. */
        MaximumEntitySuggestions: number;

        /** The principal source. */
        PrincipalSource?: number;

        /** The principal type. */
        PrincipalType?: number;

        /** The query string. This value must be >= 3 characters. */
        QueryString?: string;

        /** Required flag. */
        Required?: boolean;

        /** The SharePoint group id. */
        SharePointGroupID?: number;

        /** The url zone. */
        UrlZone?: string;

        /** Url zone specified flag. */
        UrlZoneSpecified?: boolean;

        /** The web. */
        Web?: any;

        /** The web application id. */
        WebApplicationID?: any;
    }

    /**
     * People Picker User
     */
    export interface PeoplePickerUser {
        /** Description */
        Description: string;

        /** Display Text */
        DisplayText: string;

        /** The user entity data. */
        EntityData: EntityData;

        /** Entity Type */
        EntityType: string;

        /** Flag to determine if the search user is resolved. */
        IsResolved: boolean;

        /** The search value. */
        Key: string;

        /** An array of un-resolved user entities. */
        MultipleMatches: Array<EntityData>;

        /** Provider Display Name */
        ProviderDisplayName: string;

        /** Provider Name */
        ProviderName: string;
    }

    /**
     * Client People Picker
     */
    export interface IPeoplePicker extends IBase {
        /**
         * Constructor
         * @param settings - The search settings.
         */
        new(settings?:TargetInfoSettings): IPeoplePicker;

        /**
         * Methods
         */

        /** Method to resolve users.
         * @param query - The people picker query.
        */
        clientPeoplePickerResolveUser(query:PeoplePickerQuery): IPeoplePickerResolveUser;

        /** Method to search for users.
         * @param query - The people picker query.
        */
        clientPeoplePickerSearchUser(query:PeoplePickerQuery): IPeoplePickerSearchUser;
    }

    /**
     * People Picker Resolve User
     */
    export interface IPeoplePickerResolveUser extends IBase {
        // The client people picker resolve user results
        ClientPeoplePickerResolveUser: Array<PeoplePickerUser>;
    }

    /**
     * People Picker Search User
     */
    export interface IPeoplePickerSearchUser extends IBase {
        // The client people picker search user results
        ClientPeoplePickerSearchUser: Array<PeoplePickerUser>;
    }
}
declare module "gd-sprest" {
    /**
     * Person Properties
     */
    export interface IPersonProperties extends IBase {
        /**
         * Properties
         */

        /**
         * The user's account name.
         */
        AccountName: string;

        /**
         * The account names of the user's direct reports.
         */
        DirectReports: String

        /**
         * The user's display name.
         */
        DisplayName: string;

        /**
         * The user's email address.
         */
        Email: string;

        /**
         * The account names of the user's manager hierarchy.
         */
        ExtendedManagers: String;

        /**
         * The account names of the user's extended reports.
         */
        ExtendedReports: String;

        /**
         * A Boolean value that indicates whether the user is being followed by the current user.
         */
        IsFollowed: boolean;

        /**
         * The user's latest microblog post.
         */
        LatestPost: string;

        /**
         * The account names of the user's peers.
         */
        Peers: String;

        /**
         * The absolute URL of the user's personal site.
         */
        PersonalUrl: string;

        /**
         * The URL of the user's profile picture.
         */
        PictureUrl: string;

        /**
         * The user's title.
         */
        Title: string;

        /**
         * The user profile properties for the user.
         */
        UserProfileProperties: ComplexTypes.KeyValue;

        /**
         * The URL of the user's profile page.
         */
        UserUrl: string;

        /**
         * Methods
         */
        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IPersonProperties;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IPersonProperties;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IPersonProperties;
    }
}
declare module "gd-sprest" {
    /**
     * Profile Loader
     */
    export interface IProfileLoader extends IBase {
        /**
         * Constructor
         * @param targetInfo - (Optional) The target information.
         */
        new(targetInfo?:TargetInfoSettings): IProfileLoader;

        /**
         * Methods
         */

        /**
         * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
         * @param emailIDs - The email addresses of the users to provision sites for. Maximum 200 characters.
         */
        createPersonalSiteEnqueueBulk(emailIDs:Array<string>): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IProfileLoader;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IProfileLoader;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IProfileLoader;

        /**
         * Gets the user profile of the site owner.
         */
        getOwnerUserProfile(): IUserProfile;

        /**
         * Gets the user profile that corresponds to the current user.
         */
        getUserProfile(): IUserProfile;
    }
}
declare module "gd-sprest" {
    /**
     * The promise class
     */
    export interface IPromise {
        /**
         * Constructor
         * @param callback - The method to be executed after the promise completes.
         */
        new(callback?:(...args) => void);

        /**
         * Method to set the callback method of the promise.
         * @param callback - The method to be executed after the promise completes.
         */
        done(callback?:(...args) => void);

        /**
         * Method to set this promise as completed.
         * @param args - The arguments to pass to the callback.
         */
        resolve(...args);
    }
}
/// <reference path="./oData.d.ts" />
declare module "gd-sprest" {
    /**
     * Property Values
     */
    export interface IPropertyValues extends IBase, ComplexTypes.KeyValue {
        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IPropertyValues;
    }
}
declare module "gd-sprest" {
    /**
     * Recycle Bin Items
     */
    export interface recycleBinItem {
        /**
         * Properties
         */

        Author(): IUser;

        AuthorEmail: string;

        AuthorName: string;

        DeletedBy(): IUser;

        DeletedByEmail: string;

        DeletedByName: string;

        DeletedDate: string;

        DeletedDateLocalFormatted: string;

        DirName: string;

        DirNamePath: ComplexTypes.ResourcePath;

        Id: string;

        ItemState: number;

        ItemType: string;

        LeafName: string;

        LeafNamePath: ComplexTypes.ResourcePath;

        Size: number;

        Title: string;
    }
}
import {
    IContextInfo,
    IEmail,
    IHelper,
    IList,
    IPeopleManager,
    IPeoplePicker,
    ISearch,
    ISite,
    ISocialFeed,
    IUserProfile,
    IWeb
} from "gd-sprest";
/**
 * SharePoint REST Library
 */
export interface IREST {
    /**
     * The context information
     */
    ContextInfo:IContextInfo;

    /**
     * Flag to default the request to th host web.
     * False by default.
     */
    DefaultRequestToHostFl:boolean;

    /**
     * The email class
     */
    Email:IEmail;

    /**
     * Helper Methods
     */
    Helper:IHelper;

    /**
     * The list class
     */
    List:IList;

    /**
     * The people manager class
     */
    PeopleManager:IPeopleManager;

    /**
     * The people picker class
     */
    PeoplePicker:IPeoplePicker;

    /**
     * The search class
     */
    Search:ISearch;

    /**
     * The site class
     */
    Site:ISite;

    /**
     * The social feed class
     */
    SocialFeed:ISocialFeed;

    /**
     * The user profile class
     */
    UserProfile:IUserProfile;

    /**
     * The web class
     */
    Web:IWeb;
}
declare module "gd-sprest" {
    namespace Results {
        /**
         * App License
         */
        interface AppLicense {
            /** The collection of app licenses. */
            results: Array<AppLicense>;
        }

        /**
         * Content Type Id
         */
        interface ContentTypeId {
            /** The collection of content type ids. */
            results: Array<ComplexTypes.ContentTypeId>;
        }

        /**
         * Creatable Item Information
         */
        interface CreatableItemInfo {
            /** The collection of creatable item information. */
            results: Array<ComplexTypes.CreatableItemInfoCollection>;
        }

        /**
         * Custom Action Element
         */
        interface CustomActionElement {
            /** The collection of custom action elements. */
            results: Array<CustomActionElement>;
        }

        /**
         * Custom Result
         */
        interface CustomResult {
            /** The collection of custom results. */
            results: Array<CustomResult>;
        }

        /**
         * Data Row
         */
        interface DataRow {
            /** The collection of data rows. */
            results: Array<ComplexTypes.SimpleDataRow>;
        }

        /**
         * Key/Value
         */
        interface KeyValue {
            /** The collection of key-value pairs. */
            results: Array<KeyValue>;
        }

        /**
         * List Data Validation Failure
         */
        interface ListDataValidationFailure {
            /** The collection of list data validation failures. */
            results: Array<ListDataValidationFailure>;
        }

        /**
         * Menu Node
         */
        interface MenuNode {
            /** The collection of menu nodes. */
            results: Array<MenuNode>;
        }

        /**
         * Number
         */
        interface Number {
            /** The collection of numbers. */
            results: Array<number>;
        }

        /**
         * Parameter Information
         */
        interface ParameterInformation {
            /** The collection of parameter information. */
            results: Array<ParameterInformation>;
        }

        /**
         * Personal Result Suggestion
         */
        interface PersonalResultSuggestion {
            /** The collection of personal result suggestions. */
            results: Array<PersonalResultSuggestion>;
        }

        /**
         * Query Result
         */
        interface QueryResult {
            /** The collection of custom results. */
            results: Array<QueryResult>;
        }

        /**
         * Query Suggestion Query
         */
        interface QuerySuggestionQuery {
            /** The collection of query suggestion queries. */
            results: Array<QuerySuggestionQuery>;
        }

        /**
         * Refiner
         */
        interface Refiner {
            /** The collection of refiners. */
            results: Array<Refiner>;
        }

        /**
         * Refiner Entry
         */
        interface RefinerEntry {
            /** The collection of refiner entries. */
            results: Array<RefinerEntry>;
        }

        /**
         * Shared User
         */
        interface SharedWithUser {
            /** The collection of shared users. */
            results: Array<SharedWithUser>
        }

        /**
         * Social Actor
         */
        interface SocialActor {
            /** The collection of social actors. */
            results: Array<SocialActor>;
        }

        /**
         * Social Data Item
         */
        interface SocialDataItem {
            /** The collection of social data items. */
            results: Array<SocialDataItem>;
        }

        /**
         * Social Data Overlay
         */
        interface SocialDataOverlay {
            /** The collection of social data overlays. */
            results: Array<SocialDataOverlay>;
        }


        /**
         * Social Post
         */
        interface SocialPost {
            /** The collection of social posts. */
            results: Array<SocialPost>;
        }

        /**
         * Social Post Definition Data Item
         */
        interface SocialPostDefinitionDataItem {
            /** The collection of social post definition data items. */
            results: Array<SocialPostDefinitionDataItem>;
        }

        /**
         * Social Thread
         */
        interface SocialThread {
            /** The collection of social threads. */
            results: Array<SocialThread>;
        }

        /**
         * String Collection
         */
        interface String {
            /** The collection of strings. */
            results: Array<string>;
        }

        /**
         * Visualization Field
         */
        interface VisualizationField {
            /** The collection of visualization fields. */
            results: Array<VisualizationField>;
        }
    }
}
declare module "gd-sprest" {
    /**
     * Role Assignment
     */
    export interface IRoleAssignment extends IBase {
        /**
         * Properties
         */

        /**
         * Gets the user or group that corresponds to the Role Assignment.
         */
        Member(): IBase;

        /** The unique identifier of the role assignment. */
        PrincipalId: string;

        /**
         * Gets the collection of role definition bindings for the role assignment.
         */
        RoleDefinitionBindings(): IRoleDefinitions;

        /**
         * Methods
         */

        /**
         * Deletes the role assignment.
         */
        delete(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IRoleAssignment;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IRoleAssignment;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IRoleAssignment;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IRoleAssignment;
    }
}
declare module "gd-sprest" {
    /**
     * RoleAssignments
     */
    export interface IRoleAssignments extends IBase {
        /**
         * Properties
         */

        /** The role assignment collection. */
        results: Array<IRoleAssignment>;

        /**
         * Methods
         */

        /**
         * Adds a new role assignment with the specified principal and role definitions to the collection.
         * @param principalId - The ID of the user or group to assign permissions to.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        addRoleAssignment(principalId, roleDefId): IRoleAssignment;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IRoleAssignments;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IRoleAssignments;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IRoleAssignments;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IRoleAssignments;

        /**
         * Gets the role assignment associated with the specified principal ID from the collection.
         * @param principalId - The ID of the user or group to assign permissions to.
         */
        getByPrincipalId(principalId): IRoleAssignment;

        /**
         * Gets the role definition with the specified role type.
         * @param principalId - The ID of the user or group to assign permissions to.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        removeRoleAssignment(principalId, roleDefId): IBase;

        /**
         * Method to get the next set of results.
         */
        next(): IRoleAssignments;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IRoleAssignments;
    }
}
declare module "gd-sprest" {
    /**
     * Role Definition
     */
    export interface IRoleDefinition extends IBase {
        /**
         * Properties
         */

        /** Gets or sets a value that specifies the base permissions for the role definition. */
        BasePermissions: ComplexTypes.BasePermissions;

        /** Gets or sets a value that specifies the description of the role definition. */
        Description: string;

        /** Gets a value that specifies whether the role definition is displayed. */
        Hidden: boolean;

        /** Gets a value that specifies the Id of the role definition. */
        Id: number;

        /** Gets or sets a value that specifies the role definition name. */
        Name: string;

        /** Gets or sets a value that specifies the order position of the object in the site collection Permission Levels page. */
        Order: number;

        /** Gets a value that specifies the type of the role definition. Represents an SP.RoleType value. See RoleType in the .NET client object model reference for a list of role type values. */
        RoleTypeKind: SPTypes.RoleType;

        /**
         * Methods
         */

        /**
         * Deletes the role definition.
         */
        delete(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IRoleDefinition;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IRoleDefinition;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IRoleDefinition;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IRoleDefinition;
    }
}
/// <reference path="./oData.d.ts" />
declare module "gd-sprest" {
    /**
     * Role Definitions
     */
    export interface IRoleDefinitions extends IBase {
        /**
         * Properties
         */

        /** The role definition collection */
        results: Array<IRoleDefinition>;

        /**
         * Methods
         */

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IRoleDefinitions;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IRoleDefinitions;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IRoleDefinitions;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IRoleDefinitions;

        /**
         * Gets the role definition with the specified ID from the collection.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        getById(roleDefId): IRoleDefinition;

        /**
         * Gets the role definition with the specified name.
         * @param name -
         */
        getByName(name): IRoleDefinition;

        /**
         * Gets the role definition with the specified role type.
         * @param roleType - The RoleTypeKind of the role definition.
         */
        getByType(roleType:SPTypes.RoleType): IRoleDefinition;

        /**
         * Method to get the next set of results.
         */
        next(): IRoleDefinitions;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IRoleDefinitions;
    }
}
declare module "gd-sprest" {
    /**
     * Search
     */
    export interface ISearch extends IBase {
        /**
         * Constructor
         * @param url - The optional url to execute the search against.
         * @param settings - The search settings.
         */
        new(url?:string, settings?:TargetInfoSettings): ISearch;

        /**
         * Methods
         */

        /** Method to execute a search query.
         * @param settings - The search request settings.
        */
        postquery(settings:ComplexTypes.SearchRequest) : SearchPostQueryResult;

        /** Method to execute a search query.
         * @param settings - The search request settings.
        */
        query(settings:ComplexTypes.SearchRequest) : SearchQueryResult;

        /** Method to execute a search suggestion.
         * @param settings - The search suggest settings.
        */
        suggest(settings:ComplexTypes.SearchSuggestion) : SearchSuggestionResult;
    }

    /**
     * Search Query Result
     */
    export interface SearchQueryResult extends IBase {
        query:ComplexTypes.SearchResult;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): SearchQueryResult;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): SearchQueryResult;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): SearchQueryResult;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): SearchQueryResult;
    }

    /**
     * Search Post Query Result
     */
    export interface SearchPostQueryResult extends IBase {
        postquery:ComplexTypes.SearchResult;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): SearchPostQueryResult;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): SearchPostQueryResult;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): SearchPostQueryResult;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): SearchPostQueryResult;
    }

    /**
     * Search Suggestion Result
     */
    export interface SearchSuggestionResult extends IBase {
        suggest:ComplexTypes.QuerySuggestionResults;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): SearchSuggestionResult;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): SearchSuggestionResult;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): SearchSuggestionResult;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): SearchSuggestionResult;
    }
}
declare module "gd-sprest" {
    /**
     * Site
     */
    export interface ISite extends IBase {
        /**
         * Constructor
         * @param url - (Optional) The site url.
         * @param targetInfo - (Optional) The target information.
         */
        new(url?:string, targetInfo?:TargetInfoSettings): ISite;

        /**
         * Properties
         */

        /** A value that specifies whether creation of declarative workflows can be used on this site collection. */
        AllowCreationDeclarativeWorkflow: boolean;

        /** Gets or sets a value that specifies whether a designer can be used on this site collection. */
        AllowDesigner: boolean;

        /** Gets or sets a value that specifies whether master page editing is allowed on this site collection. */
        AllowMasterPageEditing: boolean;

        /** Gets or sets a value that specifies whether this site collection can be reverted to its base template. */
        AllowRevertFromTemplate: boolean;

        AllowSaveDeclarativeWorkflowAsTemplate: boolean;

        AllowSavePublishDeclarativeWorkflow: boolean;

        /** Whether version to version upgrade is allowed on this site. */
        AllowSelfServiceUpgrade: boolean;

        /** Whether upgrade evaluation site collection is allowed. */
        AllowSelfServiceUpgradeEvaluation: boolean;

        Audit(): IAudit;

        AuditLogTrimmingRetention: number;

        /** Property indicating whether or not this object can be upgraded. */
        CanUpgrade: boolean;

        Classification: string;

        /** Gets the major version of this site collection for purposes of major version-level compatibility checks. */
        CompatibilityLevel: string;

        CurrentChangeToken: string;

        DisableAppViews: boolean;

        DisableCompanyWideSharingLinks: boolean;

        DisableFlows: boolean;

        /**
         * Gets the event receivers associated with the site.
        */
        EventReceivers(): IEventReceivers;

        /**
         * Gets the event receiver associated with the site.
         * @param id - The id of the event receiver.
        */
        EventReceivers(id:string): IEventReceiver;

        ExternalSharingTipsEnabled: boolean;

        /**
         * Gets a value that specifies the collection of the site collection features for the site collection that contains the site.
         */
        Features(): IBase;

        GroupId: string;

        /** Gets the GUID that identifies the site collection. */
        Id: string;

        /** Gets or sets the comment that is used in locking a site collection. */
        LockIssue: string;

        /** Gets a value that specifies the maximum number of list items allowed per operation before throttling will occur. */
        MaxItemsPerThrottledOperation: number;

        NeedsB2BUpgrade: boolean;

        /**
         * Gets or sets the owner of the site collection. (Read-only in sandboxed solutions.)
         */
        Owner(): IUser;

        /** Specifies the primary URI of this site collection, including the host name, port number, and path. */
        PrimaryUri: string;

        /** Gets or sets a Boolean value that specifies whether the site collection is read-only, locked, and unavailable for write access. */
        ReadOnly: boolean;

        /** Gets a value that specifies the collection of recycle bin items for the site collection. */
        RecycleBin(): IBase;

        RequiredDesignerVersion: string;

        /**
         * Gets a value that returns the top-level site of the site collection.
         */
        RootWeb(): IWeb;

        SandboxedCodeActivationCapability: number;

        SecondaryContact(): IBase;

        ServerRelativePath: ComplexTypes.ResourcePath;

        /** Gets the server-relative URL of the root Web site in the site collection. */
        ServerRelativeUrl: string;

        ShareByEmailEnabled: boolean;

        ShowPeoplePickerSuggestionsForGuestUsers: boolean;

        /** Property that indicates whether users will be able to share links to documents that can be accessed without logging in. */
        ShareByLinkEnabled: boolean;

        /** Gets or sets a value that specifies whether the URL structure of this site collection is viewable. */
        ShowUrlStructure: boolean;

        StatusBarLink: string;

        StatusBarText: string;

        TrimAuditLog: boolean;

        /** Gets or sets a value that specifies whether the Visual Upgrade UI of this site collection is displayed. */
        UIVersionConfigurationEnabled: boolean;

        /** Specifies the upgrade information of this site collection. */
        UpgradeInfo: ComplexTypes.UpgradeInfo;

        /** Specifies a date, after which site collection administrators will be reminded to upgrade the site collection. */
        UpgradeReminderDate: string;

        UpgradeScheduled: boolean;

        UpgradeScheduledDate: string;

        /** Specifies whether the site is currently upgrading. */
        Upgrading: boolean;

        /** Gets the full URL to the root Web site of the site collection, including host name, port number, and path. */
        Url: string;

        /** Gets a value that specifies usage information about the site, including bandwidth, storage, and the number of visits to the site collection. */
        Usage: ComplexTypes.UsageInfo;

        /**
         * Gets the user custom action for the list.
         */
        UserCustomActions(): IUserCustomActions;

        /**
         * Gets the user custom action(s) for the list.
         * @param id - The id of the user custom action.
         */
        UserCustomActions(id:string): IUserCustomAction;

        /**
         * Methods
         */

        /**
         * Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
         * @param upgrade - If true, the evaluation site collection MUST be upgraded when it is created. If false, the evaluation site collection MUST NOT be upgraded when it is created.
         * @param sendEmail - If true, a notification email MUST be sent to the requestor and the site collection administrators at the completion of the creation of the evaluation site collection. If false, such notification MUST NOT be sent.
         */
        createPreviewSPSite(upgrade, sendEmail): IBase;
        
        /**
         * Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
         */
        extendUpgradeReminderDate(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): ISite;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): ISite;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): ISite;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): ISite;
        
        /**
         * Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
         * @param typeCatalog - Specifies the list template type for the gallery.
         */
        getCatalog(typeCatalog): IBase;
        
        /**
         * Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query): IBase;

        /**
         * Specifies the collection of custom list templates for a given site.
         * @param web - Specifies the site that contains the custom list templates to be returned.
         */
        getCustomListTemplates(web): IBase;
        
        /**
         * Returns the collection of site definitions that are available for creating Web sites within the site collection.
         * @param LCID - A 32-bit unsigned integer that specifies the language of the site definitions that are returned from the site collection.
         * @param overrideCompatLevel - Specifies the compatibility level of the site to return from the site collection. If this value is 0, the compatibility level of the site is used.
         */
        getWebTemplates(LCID, overrideCompatLevel): IBase;
        
        /**
         * Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
         */
        invalidate(): IBase;
        
        /**
         * Returns true if the object needs to be upgraded; otherwise, false.
         * @param versionUpgrade - If true, version-to-version site collection upgrade is requested; otherwise false for build-to-build site collection upgrade.
         * @param recursive - If true, child upgradable objects will be inspected; otherwise false.
         */
        needsUpgradeByType(versionUpgrade, recursive): IBase;
        
        /**
         * Returns the site at the specified URL.
         * @param strUrl - The server-relative URL or site-relative URL of the site to return. If strUrl is empty, the top-level site is returned.
         */
        openWeb(strUrl): IWeb;
        
        /**
         * Returns the site with the specified GUID.
         * @param gWebId - A GUID that specifies which site to return.
         */
        openWebById(gWebId): IWeb;
        
        /**
         * Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
         * @param ruleId - Specifies the rule or rules to be run. If the value is an empty GUID, all rules are run, otherwise only the specified rule is run.
         * @param bRepair - Specifies whether repairable rules are to be run in repair mode.
         * @param bRunAlays - Specifies whether the rules will be run as a result of this call or cached results from a previous run can be returned.
         */
        runHealthCheck(ruleId, bRepair, bRunAlways): IBase;
        
        /**
         * Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
         * @param versionUpgrade - If true, specifies that a version-to-version upgrade will be performed. If false, specifies that a build-to-build upgrade will be performed.
         * @param queueOnly - If true, specifies that the upgrade will not be run immediately; it will be queued for a later run.
         * @param sendEmail - If true, a notification email will be sent to the requestor and the site collection administrators at the completion of the site collection upgrade. If false, such notification will not be sent.
         */
        runUpgradeSiteSession(versionUpgrade, queueOnly, sendEmail): IBase;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): IBase;
        
        /**
         * Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
         * @param requireUseRemoteAPIs - Specifies whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
         */
        updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs): IBase;
    }
}
/// <reference path="./oData.d.ts" />
declare module "gd-sprest" {
    /**
     * Site Groups
     */
    export interface ISiteGroups extends IBase {
        /**
         * Properties
         */

        /** The site group collection. */
        results: Array<IGroup>;

        /**
         * Methods
         */

        /**
         * Adds a site to the site collection.
         * @param groupInfo - The group creation information.
         */
        add(groupInfo:ComplexTypes.GroupCreationInformation): IGroup;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): ISiteGroups;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): ISiteGroups;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): ISiteGroups;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): ISiteGroups;

        /**
         * Returns a group from the collection based on the member ID of the group.
         * @param id - The site group id.
         */
        getById(id): IGroup;

        /**
         * Returns a cross-site group from the collection based on the name of the group.
         * @param name - The name of the group. The group name is specified in its LoginName property.
         */
        getByName(name): IGroup;

        /**
         * Method to get the next set of results.
         */
        next(): ISiteGroups;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): ISiteGroups;

        /**
         * Removes the group with the specified member ID from the collection.
         * @param id - The ID of the group to remove.
         */
        removeById(id): IBase;

        /**
         * Removes the cross-site group with the specified name from the collection.
         * @param name - The name of the group to remove. The group name is specified in its LoginName property.
         */
        removeByLoginName(name): IBase;
    }
}
declare module "gd-sprest" {
    /**
     * Social Feed
     */
    export interface ISocialFeed {
        /**
         * Methods
         */

        /**
         * Gets information about the specified user and the current user.
         * @param accountName - The login name of the user.
         */
        actor(accountName:string): ISocialRestActor;

        /**
         * Gets the feed of activity by the specified user (Personal feed type) or gets the specified site feed.
         * @param accountName - The login name of the user.
         */
        actorFeed(accountName:string): ISocialRestThread;

        /**
         * Gets the feed of microblog posts that mention the current user, represented by MentionReference thread types, and sets the user's unread mention count to 0.
         */
        clearMyUnreadMentionCount(): IBase;

        /**
         * Gets information about the current user.
         */
        my(): ISocialRestActor;

        /**
         * Gets the feed of activity by the current user (Personal feed type).
         */
        myFeed(): ISocialRestFeed;

        /**
         * Gets the feed of microblog posts that the current user likes, represented by LikeReference thread types. See Reference threads and digest threads in SharePoint Server 2013 social feeds.
         */
        myLikes(): ISocialRestFeed;

        /**
         * Gets the feed of microblog posts that mention the current user, represented by MentionReference thread types.
         */
        myMentionFeed(): ISocialRestFeed;

        /**
         * Gets the feed of activity by the current user and by people and content the user is following, sorted by last modified date (News feed type).
         */
        myNews(): ISocialRestFeed;

        /**
         * Gets the feed of activity by the current user and by people and content the user is following, sorted by created date (Timeline feed type).
         */
        myTimelineFeed(): ISocialRestFeed;

        /**
         * Gets the count of unread mentions for the current user.
         */
        myUnreadMentionCount(): ISocialRestFeed;

        /**
         * Creates a root post in the specified site feed.
         * @param accountName - The login name of the user.
         */
        postToFeed(accountName:string, postInfo:ComplexTypes.SocialPostCreationData): ISocialRestThread;

        /**
         * Creates a root post in the current user's feed.
         * @param creationData - The post creation data.
         */
        postToMyFeed(creationData:ComplexTypes.SocialPostCreationData): ISocialRestThread;
    }

    /**
     * Social Rest Actor
     */
    export interface ISocialRestActor extends IBase {
        /**
         * Properties
         */

        FollowableItem?:string;

        FollwableItemActor:ComplexTypes.SocialActor;

        Me:ComplexTypes.SocialActor;

        /**
         * Methods
         */

        clearUnreadMentionCount(): ISocialRestFeed;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): ISocialRestActor;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): ISocialRestActor;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): ISocialRestActor;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): ISocialRestActor;
    }

    /**
     * Social Rest Feed
     */
    export interface ISocialRestFeed extends IBase {
        /**
         * Properties
         */

        SocialFeed:ComplexTypes.SocialFeed;

        /**
         * Methods
         */

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): ISocialRestActor;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): ISocialRestActor;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): ISocialRestActor;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): ISocialRestActor;

        /**
         * Creates a root post in the user's feed.
         */
        post(postInfo:ComplexTypes.SocialRestPostCreationData): ISocialRestThread;
    }

    /**
     * Social Rest Thread
     */
    export interface ISocialRestThread extends IBase {
        /**
         * Properties
         */

        ID?: string;

        SocialThread:ComplexTypes.SocialThread;

        /**
         * Methods
         */

        delete(): ISocialRestThread;

        reply(restCreationData:ComplexTypes.SocialPostCreationData): ISocialRestThread;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): ISocialRestThread;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): ISocialRestThread;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): ISocialRestThread;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): ISocialRestThread;
    }
}
declare module "gd-sprest" {
    /**
     * Target Information
     */
    export interface TargetInfoSettings {
        /** True if the expected request returns an array buffer. */
        bufferFl?:boolean;

        /** The method to execute after the asynchronous request executes. */
        callback?:() => void;

        /** The data to be passed in the body of the request. */
        data?:any;

        /** True to default the request to the web api, site api otherwise. */
        defaultToWebFl?:boolean;

        /** The method to execute. */
        method?:string;

        /** The endpoint of the request. */
        endpoint?:string;

        /** The url of the site/web to execute the request against. */
        url?:string;
    }
}
declare module "gd-sprest" {
    /**
     * User
     */
    export interface IUser extends IBase {
        /**
         * Properties
         */

        /** Gets or sets the email address of the user. */
        Email: string;

        /**
         * Gets the groups of which the user is a member.
         */
        Groups(): ISiteGroups;

        /**
         * Gets the group of which the user is a member.
         * @param id - The group id.
         */
        Groups(id:number): IGroup;

        /** Gets a value that specifies the member identifier for the user or group. */
        Id: string;

        /** Gets a value that indicates whether this member should be hidden in the UI. */
        IsHiddenInUI: boolean;

        IsSharedByEmailGuestUser: boolean;

        /** Gets or sets a Boolean value that specifies whether the user is a site collection administrator. */
        IsSiteAdmin: boolean;

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
        delete(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IUser;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IUser;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IUser;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IUser;
    }
}
declare module "gd-sprest" {
    /**
     * User Custom Action
     */
    export interface IUserCustomAction extends IBase {
        /**
         * Properties
         */

        /** Gets or sets a value that specifies an implementation specific XML fragment that determines user export interface properties of the custom action. */
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

        /** Gets or sets the value that specifies the type of object associated with the custom action. */
        RegistrationType: SPTypes.UserCustomActionRegistrationType;

        /** Gets or sets the value that specifies the permissions needed for the custom action. */
        Rights: ComplexTypes.BasePermissions;

        /** Gets a value that specifies the scope of the custom action. */
        Scope: number;

        /** Gets or sets the value that specifies the ECMAScript to be executed when the custom action is performed. */
        ScriptBlock: string;

        /** Gets or sets a value that specifies the URI of a file which contains the ECMAScript to execute on the page. */
        ScriptSrc: string;

        /** Gets or sets the value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. */
        Sequence: number;

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
        delete(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IUserCustomAction;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IUserCustomAction;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IUserCustomAction;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IUserCustomAction;
    }
}
/// <reference path="./oData.d.ts" />
declare module "gd-sprest" {
    /**
     * User Custom Actions
     */
    export interface IUserCustomActions extends IBase {
        /**
         * Properties
         */

        /** The user custom action collection. */
        results: Array<IUserCustomAction>;

        /**
         * Methods
         */

        /**
         * Adds a custom actino to the user custom action collection. 
         * @param parameters - The user custom action information.
         */
        add(parameters:ComplexTypes.UserCustomActionCreationInformation): IUserCustomAction;

        /**
         * Deletes all custom actions in the collection.
         */
        clear(): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IUserCustomActions;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IUserCustomActions;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IUserCustomActions;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IUserCustomActions;

        /**
         * Returns the custom action with the specified identifier.
         * @param id - The ID of the user custom action to get.
         */
        getById(id): IUserCustomAction;

        /**
         * Method to get the next set of results.
         */
        next(): IUserCustomActions;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IUserCustomActions;
    }
}
declare module "gd-sprest" {
    /**
     * User Profile
     */
    export interface IUserProfile extends IBase {
        /**
         * Constructor
         * @param targetInfo - (Optional) The target information.
         */
        new(targetInfo?:TargetInfoSettings): IUserProfile;

        /**
         * Properties
         */

        /**
         * An object containing the user's FollowedDocumentsUrl and FollowedSitesUrl.
         */
        FollowedContent(): any;

        /**
         * The account name of the user. (SharePoint Online only)
         */
        AccountName: string;

        /**
         * The display name of the user. (SharePoint Online only)
         */
        DisplayName: string;

        FollowPersonalSiteUrl: string;

        IsPeopleListPublic: boolean;

        IsPrivacySettingOn: boolean;

        IsSelf: boolean;

        JobTitle: string;

        MySiteFirstRunExperience: number;

        MySiteHostUrl: string;

        /**
         * The FirstRun flag of the user. (SharePoint Online only)
         */
        O15FirstRunExperience: number;

        /**
         * The personal site of the user.
         */
        PersonalSite(): ISite;

        /**
         * The capabilities of the user's personal site.
         */
        PersonalSiteCapabilities: SPTypes.PersonalSiteCapabilities;

        /**
         * The error thrown when the user's personal site was first created, if any. (SharePoint Online only)
         */
        PersonalSiteFirstCreationError: string;

        /**
         * The date and time when the user's personal site was first created. (SharePoint Online only)
         */
        PersonalSiteFirstCreationTime: string;

        /**
         * The status for the state of the personal site instantiation.
         * See PersonalSiteInstantiationState in the .NET client object model reference for a list of instantiation state values.
         */
        PersonalSiteInstantiationState: number;

        /**
         * The date and time when the user's personal site was last created. (SharePoint Online only)
         */
        PersonalSiteLastCreationTime: string;

        /**
         * The number of attempts made to create the user's personal site. (SharePoint Online only)
         */
        PersonalSiteNumberOfRetries: number;

        /**
         * A Boolean value that indicates whether the user's picture is imported from Exchange.
         */
        PictureImportEnabled: boolean;

        PictureUrl: string;

        /**
         * The public URL of the personal site of the current user. (SharePoint Online only)
         */
        PublicUrl: string;

        /**
         * The URL used to create the user's personal site.
         */
        UrlToCreatePersonalSite: string;

        /**
         * Methods
         */

        /**
         * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
         * For SharePoint Online development, My Site Host administrators can also use the CreatePersonalSiteEnqueueBulk method to create personal sites for one or more users.
         * @param interactiveFl - True if this is an interactively (web) initiated request, or false if this is a non-interactively (client) initiated request.
         */
        createPersonalSiteEnque(interactiveFl:boolean): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IUserProfile;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IUserProfile;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IUserProfile;

        /**
         * Sets the privacy settings for this profile.
         * @param publicFl - true to make all social data public; false to make all social data private.
         */
        shareAllSocialData(publicFl:boolean): IBase;
    }
}
/// <reference path="./oData.d.ts" />
declare module "gd-sprest" {
    /**
     * Users
     */
    export interface IUsers extends IBase {
        /**
         * Properties
         */

        /** The user collection. */
        results: Array<IUser>;

        /**
         * Methods
         */

        /**
         * Adds a site to the site collection.
         * @param userInfo - The user creation information.
         */
        add(userInfo:ComplexTypes.UserCreationInformation): IUser;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IUsers;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IUsers;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IUsers;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IUsers;

        /**
         * Gets the user with the specified email address.
         * @param email - The email of the user to get.
         */
        getByEmail(email): IUser;

        /**
         * Gets the user with the specified member identifier (ID).
         * @param id - The ID of the user to get.
         */
        getById(id): IUser;

        /**
         * Gets the user with the specified login name.
         * @param loginName - The login name of the user to get, passed as an alias in the query string.
         */
        getByLoginName(loginName): IUser;

        /**
         * Method to get the next set of results.
         */
        next(): IUsers;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IUsers;

        /**
         * Removes the user with the specified ID.
         * @param id - The ID of the user to remove.
         */
        removeById(id): IBase;

        /**
         * Removes the user with the specified login name.
         * @param loginName - The login name of the user to remove.
         */
        removeByLoginName(loginName): IBase;
    }
}
/// <reference path="./oData.d.ts" />
declare module "gd-sprest" {
    /**
     * Versions
     */
    export interface IVersions extends IBase {
        /**
         * Properties
         */

        /**
         * Methods
         */

        /**
         * Deletes all versions in the collection.
         */
        deleteAll(): IBase;

        /**
         * Deletes a version, by the specified id.
         * @param id - The version id to delete.
         */
        deleteById(id): IBase;

        /**
         * Deletes a version, by the specified label.
         * @param label - The version label to delete.
         */
        deleteByLabel(label): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IVersions;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IVersions;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IVersions;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IVersions;

        /**
         * Gets the version with the specified ID.
         * @param id - The version id to get.
         */
        getById(id): IBase;

        /**
         * Method to get the next set of results.
         */
        next(): IVersions;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IVersions;

        /**
         * Restores a version, by the specified label.
         * @param label - The version label to restore.
         */
        restoreByLabel(label): IBase;
    }
}
/// <reference path="./viewFieldCollection.d.ts" />
declare module "gd-sprest" {
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
        JsLink: string;

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
        execute(callback?:(...args) => any): IView;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IView;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IView;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IView;

        /**
         * Returns the list view as HTML.
         */
        renderAsHtml(): IBase;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): IBase;
    }
}
declare module "gd-sprest" {
    /**
     * View Fields
     */
    export interface IViewFields extends IBase {
        /**
         * Properties
         */

        /** Gets a value that specifies the XML schema that represents the collection. */
        SchemaXml: string;

        /** Specifies the XML schema of the collection of fields. The Items property is returned with the resource, but it doesn't have a URI-addressable endpoint. */
        Items: String;

        /** The view field collection. */
        results: Array<any>;

        /**
         * Methods
         */

        /**
         * Adds the field with the specified field internal name or display name to the collection.
         * @param fieldName - The case-sensitive internal name or display name of the field to add.
         */
        addViewField(fieldName): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IViewFields;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IViewFields;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IViewFields;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IViewFields;

        /**
         * Moves the field with the specified field internal name to the specified position in the collection.
         * @param field - The case-sensitive internal name of the field to move. Send this parameter and the index parameter in the request body, as shown in the example.
         * @param index - The zero-based index of the new position for the field. Send this parameter and the field parameter in the request body, as shown in the example.
         */
        moveViewFieldTo(field, index): IBase;

        /**
         * Method to get the next set of results.
         */
        next(): IViewFields;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IViewFields;

        /**
         * Removes all the fields from the collection.
         */
        removeAllViewFields(): IBase;

        /**
         * Removes the field with the specified field internal name from the collection.
         * @param fieldName - The case-sensitive internal name or display name of the field to add.
         */
        removeViewField(fieldName): IBase;
    }
}
declare module "gd-sprest" {
    /**
     * Views
     */
    export interface IViews extends IBase {
        /**
         * Properties
         */

        /** The view collection. */
        results: Array<IView>;

        /**
         * Methods
         */

        /**
         * Adds a list view to the view collection.
         */
        add(parameters:ComplexTypes.ViewCreationInformation): IView;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IViews;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IViews;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IViews;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IViews;

        /**
         * Gets the list view with the specified ID.
         * @param id - The ID of the view.
         */
        getById(id): IView;

        /**
         * Gets the list view with the specified title.
         * @param title - The case-sensitive title of the view.
         */
        getByTitle(title): IView;

        /**
         * Method to get the next set of results.
         */
        next(): IViews;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IViews;
    }
}
/// <reference path="./base.d.ts" />
/// <reference path="./complexTypes.d.ts" />
/// <reference path="./contentType.d.ts" />
/// <reference path="./contentTypes.d.ts" />
/// <reference path="./eventReceiver.d.ts" />
/// <reference path="./eventReceivers.d.ts" />
/// <reference path="./field.d.ts" />
/// <reference path="./fields.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./folder.d.ts" />
/// <reference path="./folders.d.ts" />
/// <reference path="./group.d.ts" />
/// <reference path="./list.d.ts" />
/// <reference path="./lists.d.ts" />
/// <reference path="./oData.d.ts" />
/// <reference path="./propertyValues.d.ts" />
/// <reference path="./roleDefinition.d.ts" />
/// <reference path="./roleDefinitions.d.ts" />
/// <reference path="./siteGroups.d.ts" />
/// <reference path="./targetInfo.d.ts" />
/// <reference path="./user.d.ts" />
/// <reference path="./users.d.ts" />
/// <reference path="./userCustomAction.d.ts" />
/// <reference path="./userCustomActions.d.ts" />
/// <reference path="./webs.d.ts" />
declare module "gd-sprest" {
    /**
     * Web
     */
    export interface IWeb extends IBase {
        /**
         * Constructor
         * @param url - (Optional) The web url.
         * @param targetInfo - (Optional) The target information.
         */
        new(url?:string, targetInfo?:TargetInfoSettings): IWeb;

        /**
         * Properties
         */

        /**
         * Specifies whether the current user can create declarative workflows. If not disabled on the Web application, the value is the same as the AllowCreateDeclarativeWorkflow property of the site collection. Default value: true.
         */
        AllowCreateDeclarativeWorkflowForCurrentUser(): IBase;

        /**
         * Gets a value that specifies whether the current user is allowed to use a designer application to customize this site.
         */
        AllowDesignerForCurrentUser(): IBase;

        /**
         * Gets a value that specifies whether the current user is allowed to edit the master page.
         */
        AllowMasterPageEditingForCurrentUser(): IBase;

        /**
         * Property Bag
         */
        AllProperties(): IPropertyValues;

        /**
         * Gets a value that specifies whether the current user is allowed to revert the site to a default site template.
         */
        AllowRevertFromTemplateForCurrentUser(): IBase;

        /** Gets a value that specifies whether the site allows RSS feeds. */
        AllowRssFeeds: boolean;

        /**
         * Specifies whether the current user can save declarative workflows as a template. If not disabled on the Web application, the value is the same as the AllowSaveDeclarativeWorkflowAsTemplate property of the site collection. Default value: true.
         */
        AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser(): IBase;

        /**
         * Specifies whether the current user can save or publish declarative workflows. If not disabled on the Web application, the value is the same as the AllowSavePublishDeclarativeWorkflowAsTemplate property of the site collection. When enabled, can only be set by a site collection administrator. Default value: true.
         */
        AllowSavePublishDeclarativeWorkflowForCurrentUser(): IBase;

        /**
         * Gets a collection of metadata for the Web site.
         */
        AllProperties(): IBase;

        /** The instance Id of the App Instance that this web represents. */
        AppInstanceId: string;

        AppTiles(): IBase;

        /**
         * Gets or sets the group of users who have been given contribute permissions to the Web site.
         */
        AssociatedMemberGroup(): IGroup;

        /**
         * Gets or sets the associated owner group of the Web site.
         */
        AssociatedOwnerGroup(): IGroup;

        /**
         * Gets or sets the associated visitor group of the Web site.
         */
        AssociatedVisitorGroup(): IGroup;

        Author(): IUser;

        /**
         * Gets the collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.
         */
        AvailableContentTypes(): IBase;

        /**
         * Gets a value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.
         */
        AvailableFields(): IBase;

        ClientWebParts(): IBase;

        /** Gets either the identifier (ID) of the site definition configuration that was used to create the site, or the ID of the site definition configuration from which the site template used to create the site was derived. */
        Configuration: number;

        /**
         * Gets the content types that are associated with the web.
         */
        ContentTypes(): IContentTypes;

        /**
         * Gets the content type that are associated with the web.
         * @param id - The id of the content type.
         */
        ContentTypes(id:string): IContentType;

        /** Gets a value that specifies when the site was created. */
        Created: string;

        /**
         * Gets the current user of the site.
         */
        CurrentUser(): IUser;

        /** Gets or sets the URL for a custom master page file to apply to the website. */
        CustomMasterUrl: string;

        DataLeakagePreventionStatusInfo(): IBase;

        /** Gets or sets the description for the site. */
        Description: string;

        DescriptionResource(): ComplexTypes.ResourcePath;

        /**
         * Gets the URL where the current user can download SharePoint Designer.
         */
        DesignerDownloadUrlForCurrentUser(): IBase;

        /** Determines if the Document Library Callout's WAC previewers are enabled or not. */
        DocumentLibraryCalloutOfficeWebAppPreviewersDisabled: boolean;

        /**
         * Represents the intersection of permissions of the app principal and the user principal. In the app-only case, this property returns only the permissions of the app principal. To check only user permissions (ignoring app permissions), use the GetUserEffectivePermissions method.
         */
        EffectiveBasePermissions(): string;

        /** Gets or sets a Boolean value that specifies whether the Web site should use Minimal Download Strategy. */
        EnableMinimalDownload: boolean;

        ExcludeFromOfflineClient: boolean;

        /**
         * Gets the event receivers associated with the web.
        */
        EventReceivers(): IEventReceivers;

        /**
         * Gets the event receiver associated with the web.
         * @param id - The id of the event receiver.
        */
        EventReceivers(id:string): IEventReceiver;

        /**
         * Gets a value that specifies the collection of features that are currently activated in the site.
         */
        Features(): IBase;

        /**
         * Gets the fields in the web.
         */
        Fields(): IFields;

        /**
         * Gets the field in the web.
         * @param internalNameOrTitle - The internal name or title of the field.
         */
        Fields(internalNameOrTitle:string): IField;

        /**
         * Gets the folders contained in the root folder.
         */
        Folders(): IFolders;

        /**
         * Gets the folder contained in the root folder.
         * @param url - The url of the sub-folder within the current folder.
         */
        Folders(url:string): IFolder;

        /** Gets a value that specifies the site identifier for the site. */
        Id: string;

        /** Gets a value that specifies the LCID for the language that is used on the site. */
        Language: boolean;

        /** Gets a value that specifies when an item was last modified in the site. */
        LastItemModifiedDate: string;

        /**
         * Gets the lists in the Web.
         */
        Lists(): ILists;

        /**
         * Gets the list in the Web.
         * @param name - The list name.
         */
        Lists(name:string): IList;

        /**
         * Gets the list definitions and list templates available for creating lists on the site.
         */
        ListTemplates(): IBase;

        /**
         * Gets the list definition or list template available for creating lists on the site.
         * @param name - The list template form name.
         */
        ListTemplates(name:string): IBase;

        /** Gets or sets the URL of the master page that is used for the website. */
        MasterUrl: string;

        MembersCanShare: boolean;

        /**
         * Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.
         */
        Navigation(): IBase;

        NoCrawl: boolean;

        NotificationsInOneDriveForBusinessEnabled: boolean;

        NotificationsInSharePointEnabled: boolean;

        OverwriteTranslationsOnChange: boolean;

        /**
         * Gets the parent website of the specified website.
         */
        ParentWeb(): IBase;

        PreviewFeaturesEnabled: boolean;

        /**
         * Gets the collection of push notification subscribers over the site.
         */
        PushNotificationSubscribers(): IBase;

        /** Gets or sets a value that specifies whether the Quick Launch area is enabled on the site. */
        QuickLaunchEnabled: boolean;

        /**
         * Specifies the collection of recycle bin items of the recycle bin of the site.
         */
        RecycleBin(): IBase;

        /** Gets or sets a value that determines whether the recycle bin is enabled for the website. */
        RecycleBinEnabled: boolean;

        /**
         * Gets the regional settings that are currently implemented on the website.
         */
        RegionalSettings(): IBase;

        RequestAccessEmail: string;

        /**
         * Gets the role definitions for the web.
         */
        RoleDefinitions(): IRoleDefinitions;

        /**
         * Gets the role definitions for the web.
         * @param name - The role definition name.
         */
        RoleDefinitions(name:string): IRoleDefinition;

        /**
         * Gets the root folder in the web.
         */
        RootFolder(): IFolder;

        /**
         * Gets the file in the web's root folder.
         * @param url - (Optional) The url of the file within the root folder.
         */
        RootFolder(url:string): IFile;

        /**
         * Gets or sets a Boolean value that specifies whether the Web site can be saved as a site template.
         */
        SaveSiteAsTemplateEnabled: boolean;
        
        ServerRelativePath: ComplexTypes.ResourcePath;

        /** Gets or sets the server-relative URL for the Web site. */
        ServerRelativeUrl: string;

        /**
         * Gets a value that specifies whether the current user is able to view the file system structure of this site.
         */
        ShowUrlStructureForCurrentUser(): IBase;

        /**
         * Gets the site groups for the web.
         */
        SiteGroups(): ISiteGroups;

        /**
         * Gets the site groups for the web.
         * @param name - The group name.
         */
        SiteGroups(name:string): IGroup;

        SiteLogoDescription: string;

        SiteLogoUrl: string;

        /**
         * Gets the UserInfo list of the site collection that contains the Web site.
         */
        SiteUserInfoList(): IBase;

        /**
         * Gets the collection of all users that belong to the site collection.
         */
        SiteUsers(): IUsers;

        /**
         * Gets the collection of all users that belong to the site collection.
         * @param id - The user id.
         */
        SiteUsers(id): IUser;

        /**
         * Specifies the language code identifiers (LCIDs) of the languages that are enabled for the site.
         */
        SupportedUILanguageIds(): Number;

        /** Gets or sets a value that specifies whether the RSS feeds are enabled on the site. */
        SyndicationEnabled: boolean;

        TenantTagPolicyEnabled: boolean;

        ThemeData: string;

        ThemedCssFolderUrl: string;

        /**
         * The theming information for this site. This includes information like colors, fonts, border radii sizes etc.
         */
        ThemeInfo(): IBase;

        ThirdPartyMdmEnabled: boolean;

        /** Gets or sets the title for the Web site. */
        Title: string;

        TitleResource(): ComplexTypes.ResourcePath;

        /** Gets or sets value that specifies whether the tree view is enabled on the site. */
        TreeViewEnabled: boolean;

        /** Gets or sets the user export interface (UI) version of the Web site. */
        UIVersion: number;

        /** Gets or sets a value that specifies whether the settings UI for visual upgrade is shown or hidden. */
        UIVersionConfigurationEnabled: boolean;

        /** Gets the absolute URL for the website. */
        Url: string;

        /**
         * Gets the user custom actions for the web.
         */
        UserCustomActions(): IUserCustomActions;

        /**
         * Gets the user custom action for the web.
         * @param id - The id of the user custom action.
         */
        UserCustomActions(id:string): IUserCustomAction;

        /**
         * Represents key properties of the subsites of a site.
         */
        WebInfos(): IBase;

        /**
         * Gets a Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.
         */
        Webs(): IWebs;

        /** Gets the name of the site definition or site template that was used to create the site. */
        WebTemplate: string;

        /**
         * Gets a value that specifies the collection of all workflow associations for the site.
         */
        WorkflowAssociations(): IBase;

        /**
         * Gets a value that specifies the collection of workflow templates associated with the site.
         */
        WorkflowTemplates(): IBase;

        /**
         * Methods
         */

        /**
         * Applies the theme specified by the contents of each of the files specified in the arguments to the site.
         * @param colorpaletteurl - The server-relative URL of the color palette file.
         * @param fontschemeurl - The server-relative URL of the font scheme.
         * @param backgroundimageurl - The server-relative URL of the background image.
         * @param sharegenerated - True to store the generated theme files in the root site, or false to store them in this site.
         */
        applyTheme(colorpaletteurl, fontschemeurl, backgroundimageurl, sharegenerated): IBase;

        /**
         * Applies the specified site definition or site template to the Web site that has no template applied to it.
         * @param name - The site definition or web template name to apply.
         */
        applyWebTemplate(name): IBase;

        /**
         * Creates unique role assignments for the securable object.
         * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
         * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
         */
        breakRoleInheritance(copyRoleAssignments, clearSubScopes): IBase;

        /**
         * Deletes the web.
         */
        delete(): IBase;

        /**
         * Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
         * @param id - The ID of the device app instance.
         */
        doesPushNotificationSubscriberExist(id): IBase;
        
        /**
         * Returns whether the current user has the given set of permissions.
         * @param high - The highest permission range value.
         * @param low - The lowest permission range value.
         */
        doesUserHavePermissions(high, low): IBase;

        /**
         * Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
         * @param logonName - The login name of the user. Pass the logonName parameter in the request body, as shown in the request example.
         */
        ensureUser(logonName): IBase;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IWeb;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IWeb;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IWeb;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IWeb;
        
        /**
         * Sends data to an OData service.
         * @param inputStream - The OData input object. Used for create or update operations only.
         */
        executeRemoteLOB(inputStream): IBase;
        
        /**
         * Gets the app BDC catalog.
         */
        getAppBdcCatalog(): IBase;
        
        /**
         * Gets the app BDC catalog for the specified app instance.
         * @param id - The ID of the app instance.
         */
        getAppBdcCatalogForAppInstance(id): IBase;
        
        /**
         * Retrieves an AppInstance installed on this Site.
         * @param id - The ID of the app instance.
         */
        getAppInstanceById(id): IBase;
        
        /**
         * Retrieves all AppInstances installed on this site that are instances of the specified App.
         * @param id - The product ID of the app.
         */
        getAppInstancesByProductId(id): IBase;
        
        /**
         * Returns a collection of site templates available for the site.
         * @param lcid - The LCID of the site templates to get.
         * @param doIncludeCrossLanguage - True to include language-neutral site templates; otherwise false.
         */
        getAvailableWebTemplates(lcid, doIncludeCrossLanguage): IBase;
        
        /**
         * Returns the list gallery on the site.
         * @param galleryType - The gallery type. Represents a ListTemplateType value such as WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114, MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125.
         */
        getCatalog(galleryType): IBase;

        /**
         * Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query): IBase;
        
        /**
         * Gets the context information for the site. Static method.
         */
        getContextWebInformation(): IBase;

        /**
         * Gets the custom list templates for the site.
         */
        getCustomListTemplates(): IBase;
        
        /**
         * Gets the document libraries on a site. Static method. (SharePoint Online only)
         * @param url - The full URL of the site.
         */
        getDocumentLibraries(url): IBase;

        /**
         * Gets the specified external content type in a line-of-business (LOB) system application.
         * @param namespace - The namespace of the external content type.
         * @param name - The name of the external content type.
         */
        getEntity(namespace, name): IBase;

        /**
         * Returns the file object located at the specified server-relative URL.
         * @param url - The server relative url of the file.
         */
        getFileByServerRelativeUrl(url): IFile;

        /**
         * Returns the folder object located at the specified server-relative URL.
         * @param url - The server relative url of the folder.
         */
        getFolderByServerRelativeUrl(url): IFolder;

        /**
         * Gets the list at the specified site-relative URL. (SharePoint Online only)
         * @param url - The server relative url of the list.
         */
        getList(url): IList;

        /**
         * Gets the push notification subscriber over the site for the specified device application instance ID.
         * @param id - The ID of the device app instance.
         */
        getPushNotificationSubscriber(id): IBase;

        /**
         * Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
         * @param args - Arguments to filter the results. Passed arguments are compared to the subscribers' custom arguments in the store. Pass null or empty arguments to return unfiltered results.
         */
        getPushNotificationSubscribersByArgs(args): IBase;

        /**
         * Queries for the push notification subscribers over the site for the specified user.
         * @param loginName - The login name of the user.
         */
        getPushNotificationSubscribersByUser(loginName): IBase;

        /**
         * Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
         * @param nWebTemplateFilter - The ID of the template used in the site definition of the sites.
         * @param nConfigurationFilter - The ID of the site template used to provision the sites.
         */
        getSubwebsFilteredForCurrentUser(nWebTemplateFilter, nConfigurationFilter): IBase;

        /**
         * Returns the user corresponding to the specified member identifier for the current site.
         * @param id - The user id.
         */
        getUserById(id): IUser;

        /**
         * Gets the effective permissions that the specified user has within the current application scope.
         * @param loginName - The user login name.
         */
        getUserEffectivePermissions(loginName): IBase;

        /**
         * Gets the site URL from a page URL. Static method.
         * @param url - The full URL of the SharePoint page, with URL encoded characters as needed.
         */
        getWebUrlFromPageUrl(url);

        /**
         * Uploads and installs an app package to this site.
         * @param appPackageStream - The app package stream.
         */
        loadAndInstallApp(appPackageStream): IBase;

        /**
         * Uploads and installs an App package on the site in a specified locale.
         * @param appPackageStream - The app package stream.
         * @param installationLocaleLCID - The LCID of the locale to use to create the app instance.
         */
        loadAndInstallAppInSpecifiedLocale(appPackageStream, installationLocaleLCID): IBase;

        /**
         * Uploads an App package and creates an instance from it.
         * @param appPackageStream - The app package stream.
         * @param installationLocaleLCID - The LCID of the locale to use to create the app instance.
         */
        loadApp(appPackageStream, installationLocaleLCID): IBase;

        /**
         * Returns the name of the image file for the icon that is used to represent the specified file.
         * @param filename - The file name. If this parameter is empty, the server returns an empty string.
         * @param progid - The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName (for example, Excel.Sheet or PowerPoint.Slide). This is the ID used by the Windows registry to uniquely identify an object.
         * @param size - The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1.
         */
        mapToIcon(filename, progid, size): IBase;
        
        /**
         * Processes a notification from an external system.
         * @param stream - The notification message from the external system.
         */
        processExternalNotification(stream): IBase;

        /**
         * Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
         * @param deviceAppInstanceId - The ID of the device app instance.
         * @param serviceToken - The token provided by the notification service to the device to receive notifications.
         */
        registerPushNotificationSubscriber(deviceAppInstanceId, serviceToken): IBase;

        /**
         * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
         */
        resetRoleInheritance(): IBase;

        /**
         * Unregisters the subscriber for push notifications from the site.
         * @param id - The ID of the device app instance.
         */
        unregisterPushNotificationSubscriber(id): IBase;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): IBase;
    }
}
declare module "gd-sprest" {
    /**
     * Webs
     */
    export interface IWebs extends IBase {
        /**
         * Properties
         */

        /** The web collection. */
        results: Array<IWeb>;

        /**
         * Methods
         */

        /**
         * Adds a site to the site collection.
         * @param parameters - The web creation information.
         */
        add(parameters:ComplexTypes.WebCreationInformation): IWeb;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IWebs;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IWebs;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IWebs;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IWebs;

        /**
         * Method to get the next set of results.
         */
        next(): IWebs;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ODataQuery): IWebs;
    }
}