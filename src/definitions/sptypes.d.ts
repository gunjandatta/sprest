export namespace SPTypes {
    /**
     * Check Out Types
     */
    export type CheckOutType = {
        /** Online */
        Online,

        /** Offline */
        Offline,

        /** None */
        None
    };

    /**
     * Control Modes
     */
    export type ControlMode = {
        /** A placeholder value in the export typeeration indicating that it has no valid display mode from one of the other export typeeration values. */
        Invalid,

        /** Specifies that the control is in display mode. */
        Display,

        /** Specifies that the control is in edit mode. */
        Edit,

        /** Specifies that the control is in New mode. */
        New
    };

    /**
     * Draft Visibility Types
     */
    export type DraftVisibilityType = {
        /** export typeeration whose values specify that the minimum permission is approver. */
        Approver,

        /** export typeeration whose values specify that the minimum permission is author. */
        Author,

        /** export typeeration whose values specify that the minimum permission is reader. */ 
        Reader 
    };

    /**
     * Event Receiver Types
     */
    export type EventReceiverType = {
        /** Event that occurs before an item has been added. */
        ItemAdding,

        /** Event that occurs before an item is updated. */
        ItemUpdating,

        /** Event that occurs before an item is deleted. */
        ItemDeleting,

        /** Event that occurs before an item has been checked in. */
        ItemCheckingIn,

        /** Event that occurs before an item is checked out. */
        ItemCheckingOut,

        /** Event that occurs before an item is unchecked out. */
        ItemUncheckingOut,

        /** Event that occurs before an attachment has been added to an item. */
        ItemAttachmentAdding,

        /** Event that occurs before an attachment has been removed from the item. */
        ItemAttachmentDeleting,

        /** Event that occurs before a file is moved. */
        ItemFileMoving,

        /** Event that occurs before a document version is deleted. */
        ItemVersionDeleting,

        /** Event that occurs before a field is added to a list. */
        FieldAdding,

        /** Event that occurs before a field is updated. */
        FieldUpdating,

        /** Event that occurs before a field is removed from a list. */
        FieldDeleting,

        /** Event that occurs before a list is created. */
        ListAdding,

        /** Event that occurs before a list is deleted. */
        ListDeleting,

        /** Event that occurs before a site collection is deleted. */
        SiteDeleting,

        /** Event that occurs before a site is deleted. */
        WebDeleting,

        /** Event that occurs before a site URL has been changed. */
        WebMoving,

        /** Event that occurs before a new site is created. */
        WebAdding,

        /** Event that occurs before a security group is added. */
        GroupAdding,

        /** Event that occurs before a security group is updated. */
        GroupUpdating,

        /** Event that occurs before a security group is deleted. */
        GroupDeleting,

        /** Event that occurs before a user is added to a security group. */
        GroupUserAdding,

        /** Event that occurs before a user is deleted from a security group. */
        GroupUserDeleting,

        /** Event that occurs before a role definition is added. */
        RoleDefinitionAdding,

        /** Event that occurs before a role definition is updated. */
        RoleDefinitionUpdating,

        /** Event that occurs before a role definition is deleted. */
        RoleDefinitionDeleting,

        /** Event that occurs before a role assignment is added. */
        RoleAssignmentAdding,

        /** Event that occurs before a role assignment is deleted. */
        RoleAssignmentDeleting,

        /** Event that occurs before an inheritance is broken. */
        InheritanceBreaking,

        /** Event that occurs before an inheritance is restored. */
        InheritanceResetting,

        /** Event that occurs before a workflow starts running. */
        WorkflowStarting,

        /** Event that occurs after an item has been added. */
        ItemAdded,

        /** Event that occurs after an item has been updated. */
        ItemUpdated,

        /** Event that occurs after an item has been deleted. */
        ItemDeleted,

        /** Event that occurs after an item has been checked in. */
        ItemCheckedIn,

        /** Event that occurs after an item has been checked out. */
        ItemCheckedOut,

        /** Event that occurs after an item has been unchecked out. */
        ItemUncheckedOut,

        /** Event that occurs after an attachment has been added to the item. */
        ItemAttachmentAdded,

        /** Event that occurs after an attachment has been removed from the item. */
        ItemAttachmentDeleted,

        /** Event that occurs after a file has been moved. */
        ItemFileMoved,

        /** Event that occurs after a file is transformed from one type to another. */
        ItemFileConverted,

        /** Event that occurs after a document version is deleted. */
        ItemVersionDeleted,

        /** Event that occurs after a field has been added. */
        FieldAdded,

        /** Event that occurs after a field has been updated. */
        FieldUpdated,

        /** Event that occurs after a field has been removed. */
        FieldDeleted,

        /** Event that occurs after a list has been created. */
        ListAdded,

        /** Event that occurs after a list has been deleted. */
        ListDeleted,

        /** Event that occurs after a site collection has been deleted. */
        SiteDeleted,

        /** Event that occurs after a site has been deleted. */
        WebDeleted,

        /** Event that occurs after a site URL has been changed. */
        WebMoved,

        /** Event that occurs after a new site has been created, but before that new site is provisioned. */
        WebProvisioned,

        /** Event that occurs happens after a security group is added. */
        GroupAdded,

        /** Event that occurs after a security group is updated. */
        GroupUpdated,

        /** Event that occurs after a security group is deleted. */
        GroupDeleted,

        /** Event that occurs after a user is added to a security group. */
        GroupUserAdded,

        /** Event that occurs after a user is deleted from a security group. */
        GroupUserDeleted,

        /** Event that occurs after a role definition is added. */
        RoleDefinitionAdded,

        /** Event that occurs after a role definition is updated. */
        RoleDefinitionUpdated,

        /** Event that occurs after a role definition is deleted. */
        RoleDefinitionDeleted,

        /** Event that occurs after a role assignment is added. */
        RoleAssignmentAdded,

        /** Event that occurs after a role definition is deleted. */
        RoleAssignmentDeleted,

        /** Event that occurs after an inheritance is broken. */
        InheritanceBroken,

        /** Event that occurs after an inheritance is restored. */
        InheritanceReset,

        /** Event that occurs after a workflow has started running. */
        WorkflowStarted,

        /** Event that occurs after a workflow has been postponed. */
        WorkflowPostponed,

        /** Event that occurs after a workflow has completed running. */
        WorkflowCompleted,

        /** Event that occurs when an instance of an external content type has been added. */
        EntityInstanceAdded,

        /** Event that occurs when an instance of an external content type has been updated. */
        EntityInstanceUpdated,

        /** Event that occurs when an instance of an external content type has been deleted. */
        EntityInstanceDeleted,

        /** Event that occurs after an app is installed. */
        AppInstalled,

        /** Event that occurs after an app is upgraded. */
        AppUpgraded,

        /** Event that occurs before an app is uninstalled. */
        AppUninstalling,

        /** Event that occurs after a list receives an e-mail message. */
        EmailReceived,

        /** Identifies workflow event receivers, and is therefore not a true event type. */
        ContextEvent,
    };

    /**
     * Event Receiver Synchronization Types
     */
    export type EventReceiverSynchronizationType = {
        /** Event to be triggered asynchronously. */
        Asynchronous,

        /** Event to be triggered synchronously. */
        Synchronization
    };

    /**
     * Field Types
     */
    export type FieldType = {
        /** Specifies that the field indicates whether a meeting in a calendar list is an all-day event. */
        AllDayEvent,

        /** Specifies that the field indicates whether the list item has attachments. */
        Attachments,

        /** Specifies that the field contains a Boolean value. */
        Boolean,

        /** Specifies that the field is a calculated field. */ 
        Calculated,

        /** Specifies that the field contains a single value from a set of specified values. */ 
        Choice,

        /** Specifies that the field is a computed field. */ 
        Computed,

        /** Specifies that the field contains a content type identifier as a value. */ 
        ContentTypeId,

        /** Specifies that the field contains a monotonically increasing integer. */ 
        Counter,

        /** Specifies that the field contains a link between projects in a Meeting Workspace site. */ 
        CrossProjectLink,

        /** Specifies that the field contains a currency value. */ 
        Currency,

        /** Specifies that the field contains a date and time value or a date-only value. */ 
        DateTime,

        /** Specifies that the type of the field was set to an invalid value. */ 
        Error,

        /** Specifies that the field contains the leaf name of a document as a value. */ 
        File,

        /** Specifies that the field contains geographical location values. */ 
        Geolocation,

        /** Specifies that the field contains rating scale values for a survey list. */
        GridChoice,

        /** Specifies that the field contains a GUID value. */ 
        Guid,

        /** Specifies that the field contains an integer value. */ 
        Integer,

        /** Must not be used. */ 
        Invalid,

        /** Specifies that the field is a lookup field. */ 
        Lookup,

        /** Must not be used. */ 
        MaxItems,

        /** Specifies that the field indicates moderation status. */ 
        ModStat,

        /** Specifies that the field contains one or more values from a set of specified values. */ 
        MultiChoice,

        /** Specifies that the field contains multiple lines of text. */ 
        Note,

        /** Specifies that the field contains a floating-point number value. */ 
        Number,

        /** Specifies that the field separates questions in a survey list onto multiple pages. */
        PageSeparator,

        /** Specifies that the field indicates whether a meeting in a calendar list recurs. */
        Recurrence,

        /** Specifies that the field contains a single line of text. */ 
        Text,

        /** Specifies that the field indicates the position of a discussion item in a threaded view of a discussion board. */ 
        ThreadIndex,

        /** Specifies that the field indicates the thread for a discussion item in a threaded view of a discussion board. */
        Threading,

        /** Specifies that the field contains a URI and an optional description of the URI. */ 
        URL,

        /** Specifies that the field contains one or more users and groups as values. */ 
        User,

        /** Specifies that the field contains the most recent event in a workflow instance. */ 
        WorkflowEventType,

        /** Specifies that the field indicates the status of a workflow instance on a list item. */
        WorkflowStatus
        };

    /**
     * File Template Types
    */
    export type FileTemplateType = {
        /** export typeeration whose value specifies default form template. */
        FormPage,

        /** export typeeration whose value specifies default view template. */ 
        StandardPage,

        /** export typeeration whose value specifies default wiki template. */ 
        WikiPage
    };

    /**
     * List Template Types
    */
    export type ListTemplateType = {
        /** Access Request List */
        AccessRequest160,

        /** Administrator Tasks */
        AdminTasks,

        /** Agenda (Meeting) */
        Agenda,

        /** App Data Catalog */
        AppDataCatalog,

        /** Announcements */
        Announcements,

        /** Call Track */
        CallTrack,

        /** Categories (Blog) */
        Categories,

        /** Circulation */
        Circulation,

        /** Comments (Blog) */
        Comments,

        /** Contacts */
        Contacts,

        /** Custom grid for a list */
        CustomGrid,

        /** Data connection library for sharing information about external data connections */
        DataConnectionLibrary,

        /** Data sources for a site */
        DataSources,

        /** Decisions (Meeting) */
        Decision,

        /** Design Catalog */
        DesignCatalog,

        /** Draft Apps library in Developer Site */
        DeveloperSiteDraftApps,

        /** Discussion board */
        DiscussionBoard,

        /** Document library */
        DocumentLibrary,

        /** Calendar */
        Events,

        /** External */
        ExternalList,

        /** Facility */
        Facility,

        /** Project Tasks */
        GanttTasks,

        /** Custom list */
        GenericList,

        /** Health Reports */
        HealthReports,

        /** Health Rules */
        HealthRules,

        /** Help Library */
        HelpLibrary,

        /** Holidays */
        Holidays,

        /** Workspace Pages (Meeting) */
        HomePageLibrary,

        /** IME (Input Method Editor) Dictionary */
        IMEDic,

        /** Issue tracking */
        IssueTracking,

        /** Links */
        Links,

        /** List Template gallery */
        ListTemplateCatalog,

        /** Master Page gallery */
        MasterPageCatalog,

        /** Maintenance Logs Library */
        MaintenanceLogs,

        /** Objectives (Meeting) */
        MeetingObjective,

        /** Meeting Series (Meeting) */
        Meetings,

        /** Attendees (Meeting) */
        MeetingUser,

        /** My Site Document Library */
        MySiteDocumentLibrary,

        /** Posts (Blog) */
        Posts,

        /** No Code Public Workflow */
        NoCodePublic,

        /** No Code Workflows */
        NoCodeWorkflows,

        /** Picture library */
        PictureLibrary,

        /** Solutions */
        SolutionCatalog,

        /** Survey */
        Survey,

        /** Tasks */
        Tasks,

        /** Tasks with Timeline and Hierarchy */
        TasksWithTimelineAndHierarchy,

        /** Text Box (Meeting) */
        TextBox,

        /** Themes */
        ThemeCatalog,

        /** Things To Bring (Meeting) */
        ThingsToBring,

        /** Timecard */
        Timecard,

        /** User Information */
        UserInformation,

        /** Wiki Page Library */
        WebPageLibrary,

        /** Web Part gallery */
        WebPartCatalog,

        /** Site template gallery */
        WebTemplateCatalog,

        /** Whereabouts */
        Whereabouts,

        /** Workflow History */
        WorkflowHistory,

        /** Custom Workflow Process */
        WorkflowProcess,

        /** XML Form library */
        XMLForm
    };

    /**
     * Page Types
     */
    export type PageType = {
        /** export typeeration whose values specify a page that is the default view for a list. */
        DefaultView,

        /** export typeeration whose values specify a page suitable for display within a dialog box on a client computer. */ 
        DialogView,

        /** export typeeration whose values specify a list form for displaying a list item. */ 
        DisplayForm,

        /** export typeeration whose values specify a list form for displaying a list item, suitable for display within a dialog box on a client computer. */ 
        DisplayFormDialog,

        /** export typeeration whose values specify a list form for editing a list item. */ 
        EditForm,

        /** export typeeration whose values specify a list form for editing a list item, suitable for display within a dialog box on a client computer. */ 
        EditFormDialog,

        /** export typeeration whose values specify a page that does not correspond to a list view or a list form. */ 
        Invalid,

        /** export typeeration whose values specify a list form for creating a new list item. */ 
        NewForm,

        /** export typeeration whose values specify a list form for creating a new list item, suitable for display within a dialog box on a client computer. */ 
        NewFormDialog,

        /** export typeeration whose values specify a page that is a list view and is not the default view for a list. */ 
        NormalView,

        /** export typeeration whose values specify the total number of valid page types. */ 
        Page_MAXITEMS,

        /** export typeeration whose values specify a list form for displaying or editing a list item and represented by a form template (.xsn) file. */ 
        SolutionForm,

        /** export typeeration whose values specify a page that is a list view. */ 
        View
    };

    /**
     * Master Page Gallery Types
     */
    /*
    MasterPageGalleryType = {
        DisplayTemplateControl = <any>"0x0101002039C03B61C64EC4A04F5361F385106601",
        DisplayTemplateItem = <any>"0x0101002039C03B61C64EC4A04F5361F385106603",
        MasterPage = <any>"0x01010500A8B69F8A072C384090BB2F363986E5EA",
        PageLayout = <any>"0x01010007FF3E057FA8AB4AA42FCB67B453FFC100E214EEE741181F4E9F7ACC43278EE811",
    };
    */

    /**
     * Page Layout Types
     */
    /*
    PageLayoutType = {
        Article = <any>";#Article Page;#0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF3900242457EFB8B24247815D688C526CD44D;#"
    };
    */

    /**
     * Personal Site Capabilities
     */
    export type PersonalSiteCapabilities = {
        Education,
        Guest,
        MyTasksDashboard,
        None,
        Profile,
        Social,
        Storage
    };

    /**
     * Reordering Rule Match Types
     */
    export type ReordingRuleMatchType = {
        ResultContainsKeyword,
        TitleContainsKeyword,
        TitleMatchesKeyword,
        UrlStartsWith,
        UrlExactlyMatches,
        ContentTypeIs,
        FileExtensionMatches,
        ResultHasTag,
        ManualCondition
    };

    /**
     * Role Types
     */
    export type RoleType = {
        /** Has all rights from other roles, plus rights to manage roles and view usage analysis data. Includes all rights in the WebDesigner role, plus the following: ManageListPermissions, ManageRoles, ManageSubwebs, ViewUsageData. The Administrator role cannot be customized or deleted, and must always contain at least one member. Members of the Administrator role always have access to, or can grant themselves access to, any item in the Web site. */
        Administrator,

        /** Has Reader rights, plus rights to add items, edit items, delete items, manage list permissions, manage personal views, personalize Web Part Pages, and browse directories. Includes all rights in the Reader role, plus the following: AddDelPrivateWebParts, AddListItems, BrowseDirectories, CreatePersonalGroups, DeleteListItems, EditListItems, ManagePersonalViews, UpdatePersonalWebParts. Contributors cannot create new lists or document libraries, but they can add content to existing lists and document libraries. */
        Contributor,

        /** Has Contributor rights, plus rights to manage lists. Includes all rights in the Contributor role. Editors can create new lists or document libraries. */
        Editor,

        /** Has limited rights to view pages and specific page elements. This role is used to give users access to a particular page, list, or item in a list, without granting rights to view the entire site. Users cannot be added explicitly to the Guest role; users who are given access to lists or document libraries by way of per-list permissions are added automatically to the Guest role. The Guest role cannot be customized or deleted. */
        Guest,

        /** export typeeration whose values specify that there are no rights on the Web site. */
        None,

        /** Has rights to view items, personalize Web parts, use alerts, and create a top-level Web site using Self-Service Site Creation. A reader can only read a site; the reader cannot add content. When a reader creates a site using Self-Service Site Creation, the reader becomes the site owner and a member of the Administrator role for the new site. This does not affect the user's role membership for any other site. Rights included: CreateSSCSite, ViewListItems, ViewPages. */
        Reader,

        /** Has Contributor rights, plus rights to cancel check out, delete items, manage lists, add and customize pages, define and apply themes and borders, and link style sheets. Includes all rights in the Contributor role, plus the following: AddAndCustomizePages, ApplyStyleSheets, ApplyThemeAndBorder, CancelCheckout, ManageLists.WebDesigners can modify the structure of the site and create new lists or document libraries. */
        WebDesigner
    };

    /**
     * User Custom Action Registration Types
     */
    export type UserCustomActionRegistrationType = {
        /** export typeeration whose values specify that the object association is not specified. */
        None,

        /** export typeeration whose values specify that the custom action is associated with a list. */
        List,

        /** export typeeration whose values specify that the custom action is associated with a content type. */
        ContentType,

        /** export typeeration whose values specify that the custom action is associated with a ProgID. */
        ProgId,

        /** export typeeration whose values specify that the custom action is associated with a file extension. */
        FileType
    };

    /**
     * View Types
     */
    export type ViewType = {
        /** export typeeration whose values specify a calendar list view type. */
        Calendar,

        /** export typeeration whose values specify a chart list view type. */ 
        Chart,

        /** export typeeration whose values specify a Gantt chart list view type. */ 
        Gantt,
        
        /** export typeeration whose values specify a datasheet list view type. */
        Grid,
        
        /** export typeeration whose values specify an HTML list view type. */
        Html,
        
        /** export typeeration whose values specify a list view type that displays recurring events. */
        Recurrence
    }
}