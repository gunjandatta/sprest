/**
 * SharePoint Components
 */
export const SP: ISPComponents;

/**
 * SharePoint Components
 */
export interface ISPComponents {
    /**
     * Callout Manager
     */
    CalloutManager: ICalloutManager,

    /**
     * Modal Dialog
     */
    ModalDialog: IModalDialog,

    /**
     * Notification
     */
    Notify: INotify,

    /**
     * Script on Demand (SOD)
     */
    SOD: ISOD,

    /**
     * Status
     */
    Status: IStatus
}

/**
 * Callout
 */
export interface ICallout {
    /** Adds a link to the actions panel of the callout window. */
    addAction(action: ICalloutAction): any;

    /**
     * Adds an event handler to the callout.
     * Examples - opened, opening, closed and closing
     */
    addEventCallback(eventName: string, callback: (callout: ICallout) => void): any;

    /** Closes the callout. */
    close(useAnimation: boolean): any;

    /** Do not call this method, use the CalloutManager to remove the callout. */
    destroy();

    /** Returns the action menu of the callout. */
    getActionMenu(): ICalloutActionMenu;

    /** Returns the beak orientation of the callout. */
    getBeakOrientation(): string;

    /** Returns the bounding box element of the callout. */
    getBoundingBox(): HTMLElement;

    /** Returns the html of the content. */
    getContent(): string;

    /** Returns the content element. */
    getContentElement(): HTMLElement;

    /** Returns the content width of the callout. */
    getContentWidth(): number;

    /** Returns the unique id of the callout. */
    getID(): string;

    /** Returns the launch point element of the callout. */
    getLaunchPoint(): HTMLElement;

    /** Returns the open options of the callout. */
    getOpenOptions(): ICalloutOpenOptions;

    /** Gets the position of the callout. */
    getPositionAlgorithm(): any;

    /** Returns the title of the callout. */
    getTitle(): string;

    /** Returns true if the callout is closed. */
    isClosed(): boolean

    /** Returns true if the callout is closing. */
    isClosing(): boolean;

    /** Returns true if the callout is opened. */
    isOpen(): boolean;

    /** Returns true if the callout is opening or opened. */
    isOpenOrOpening(): boolean;

    /** Returns true if the callout is in the "Opening" state. */
    isOpening(): boolean;

    /** Displays the callout. */
    open(useAnimation: boolean): any;

    /** Re-renders the actions menu. Call after the actions menu is changed. */
    refreshActions();

    /** 
     * Sets options for the callout.
     * Note - Not all options can be changed for the callout after its creation. */
    set(options: ICalloutOptions): any;

    /** Displays the callout if it's hidden, hides it otherwise. */
    toggle();
}

/**
 * Callout Action
 */
export interface ICalloutAction {
    getDisabledToolTip(): string;
    getIsDisabledCallback(): (action: ICalloutAction) => boolean;
    getIsMenu(): boolean;
    getIsVisibleCallback(): (action: ICalloutAction) => boolean;
    getMenuEntries(): Array<ICalloutActionMenuEntry>;
    getText(): string;
    getToolTop(): string;
    isEnabled(): boolean;
    isVisible(): boolean;
    render();
    set(options: ICalloutActionOptions);
}

/**
 * Callout Action Menu
 */
export interface ICalloutActionMenu {
    constructor(actionId: any): ICalloutActionMenu;
    addAction(action: ICalloutAction): any;
    calculateActionWidth();
    getActions(): Array<ICalloutAction>;
    refreshActions();
    render();
}

/**
 * Callout Action Options
 */
export interface ICalloutActionOptions {
    disabledTooltip?: string;
    isEnabledCallback?: (action: ICalloutAction) => boolean;
    isVisibleCallback?: (action: ICalloutAction) => boolean;
    menuEntries?: Array<ICalloutActionMenu>;
    onClickCallback?: (event: Event, action: ICalloutAction) => any;
    text?: string;
    tooltip?: string;
}

/**
 * Callout Action Menu Entry
 */
export interface ICalloutActionMenuEntry {
    onClickCallback: (actionMenuEntry: ICalloutActionMenuEntry, actionMenuEntryIndex: number) => void;
    iconUrl?: string;
    text: string;
}

/**
 * Callout Manager
 */
export interface ICalloutManager {
    /** Closes all callouts on the page. */
    closeAll();

    /** Returns true if the associated callout is open. */
    containsOneCalloutOpen(el: HTMLElement);

    /** Creates an action menu entry. */
    createAction(options: ICalloutActionOptions): ICalloutAction;

    /** Creates an action menu entries. */
    createMenuEntries(options: Array<ICalloutActionMenuEntry>): Array<ICalloutActionMenu>;

    /** Creates a new callout. */
    createNew(options: ICalloutOptions);

    /** Checks if the callout id exists, before creating it. */
    createNewIfNecessary(options: ICalloutOptions): ICallout;

    /** Performs an action on each callout on the page. */
    forEach(callback: (callout: ICallout) => void);

    /** Finds the closest launch point and returns the callout associated with it. */
    getFromCalloutDescendant(descendant: HTMLElement): ICallout;

    /** Returns the callout from the specified launch point. */
    getFromLaunchPoint(launchPoint: HTMLElement): ICallout;

    /** Returns the callout for the specified launch point, null if it doesn't exist. */
    getFromLaunchPointIfExists(launchPoint: HTMLElement): ICallout;

    /** Returns true if at least one callout is defined on the page is opened or opening. */
    isAtLeastOneCalloutOn(): boolean;

    /** Returns true if at least one callout is opened on the page. */
    isAtLeastOneCalloutOpen(): boolean;

    /**
     * Method to ensure the core script is loaded.
     */
    init(): PromiseLike<void>;

    /** Removes the callout and destroys it. */
    remove(callout: ICallout): any;
}

/**
 * Callout Options
 */
export interface ICalloutOptions {
    /** The unique id of the callout. */
    ID: string;

    /** The orientation of the callout. The valid options are: topBottom (default) or leftRight */
    beakOrientation?: string;

    /** */
    boundingBox?: Element;

    /** The html to be displayed in the callout. */
    content?: string;

    /** Element to be displayed in the callout. */
    contentElement?: Element;

    /** The width in pixels. Default - 350px */
    contentWidth?: number;

    /** The element to apply the callout to. */
    launchPoint: Element;

    /** Event triggered after the callout is closed. */
    onClosedCallback?(callout: ICallout);

    /** Event triggered before the callout is closed. */
    onClosingCallback?(callout: ICallout);

    /** Event triggered after the callout is shown. */
    onOpenedCallback?(callout: ICallout);

    /** Event triggered after the callout is rendered, but before it is positioned and shown. */
    onOpeningCallback?(callout: ICallout);

    /** Defines the callout opening behavior. */
    openOptions?: ICalloutOpenOptions;

    /** Sets the position of the callout during the opening event. */
    positionAlgorithm?(callout: ICallout);

    /** The title of the callout. */
    title?: string;
}

/**
 * Callout Open Options
 */
export interface ICalloutOpenOptions {
    /** Closes the callout on blur. */
    closeCalloutOnBlur: boolean;

    /** The event name. Example: 'click' */
    event: string;

    /** Close button will be shown within the callout window. */
    showCloseButton: boolean;
}

/**
 * Dialog Options
 */
export interface IDialogOptions {
    /** A Boolean value that specifies whether the dialog can be maximized. true if the Maximize button is shown; otherwise, false. */
    allowMaximize?: boolean;

    /** An object that contains data that are passed to the dialog. */
    args?: any;

    /** A Boolean value that specifies whether the dialog platform handles dialog sizing. */
    autoSize?: boolean;

    /** A function pointer that specifies the return callback function. The function takes two parameters, a dialogResult of type SP.UI.DialogResult Enumeration and a returnValue of type object that contains any data returned by the dialog. */
    dialogReturnValueCallback?: (dialogResult?: number, returnVal?: any) => void;

    /** An integer value that specifies the height of the dialog. If height is not specified, the height of the dialog is autosized by default. If autosize is false, the dialog height is set to 576 pixels. */
    height?: number;

    /** An html element to display in the dialog. If both html and url are specified, url takes precedence. Either url or html must be specified. */
    html?: Element;

    /** A Boolean value that specifies whether the Close button appears on the dialog. */
    showClose?: boolean;

    /** A Boolean value that specifies whether the dialog opens in a maximized state. true the dialog opens maximized. Otherwise, the dialog is opened at the requested sized if specified; otherwise, the default size, if specified; otherwise, the autosized size. */
    showMaximized?: boolean;

    /** A string that contains the title of the dialog. */
    title?: string;

    /** A string that contains the URL of the page that appears in the dialog. If both url and html are specified, url takes precedence. Either url or html must be specified. */
    url?: string;

    /** An integer value that specifies the width of the dialog. If width is not specified, the width of the dialog is autosized by default. If autosize is false, the width of the dialog is set to 768 pixels. */
    width?: number;

    /** An integer value that specifies the x-offset of the dialog. This value works like the CSS left value. */
    x?: number;

    /** An integer value that specifies the y-offset of the dialog. This value works like the CSS top value. */
    y?: number;
}

/**
 * Modal Dialog
 */
export interface IModalDialog {
    /**
     * Closes the most recently opened modal dialog with the specified dialog result and return value.
     * @param dialogResult - One of the enumeration values that specifies the result of the modal dialog.
     * @param returnVal - The return value of the modal dialog.
     */
    commonModalDialogClose(dialogResult?: number, returnVal?: any);

    /**
     * Displays a modal dialog with the specified URL, options, callback function, and arguments.
     * @param url - The URL of the page to be shown in the modal dialog.
     * @param options - The options to create the modal dialog.
     * @param callback - The callback function that runs when the modal dialog is closed.
     * @param args - The arguments to the modal dialog.
     */
    commonModalDialogOpen(url: string, options?: IDialogOptions, callback?: (dialogResult?: number, returnVal?: any) => void, args?: any);

    /**
     * Method to ensure the core script is loaded
     */
    load(): PromiseLike<void>;

    /**
     * Displays a modal dialog with the specified URL, callback function, width, and height.
     * @param url - The URL of the page to be shown in the modal dialog.
     * @param callback - The callback function that runs when the modal dialog is closed.
     * @param width - The width of the modal dialog.
     * @param height - The height of the modal dialog.
     */
    OpenPopUpPage(url: string, callback?: (dialogResult?: number, returnVal?: any) => void, width?: number, height?: number);

    /**
     * Refreshes the parent page of the modal dialog when the dialog is closed by clicking OK.
     * @param dialogResult - The result of the modal dialog.
     */
    RefreshPage(dialogResult?: number);

    /**
     * Displays a modal dialog with specified dialog options.
     * @param options - The options to create the modal dialog.
     */
    showModalDialog(options: IDialogOptions): PromiseLike<IModalDialogObj>;

    /**
     * Displays a modal dialog using the page at the specified URL.
     * @param url - The URL of the page to be shown in the modal dialog.
     */
    ShowPopupDialog(url: string);

    /**
     * Displays a wait screen dialog that has a Cancel button using the specified parameters.
     * @param title - The title of the wait screen dialog.
     * @param message - The message that is shown in the wait screen dialog.
     * @param callback - The callback function that runs when the wait screen dialog is closed.
     * @param height - The height of the wait screen dialog.
     * @param width - The width of the wait screen dialog.
     */
    showWaitScreenSize(title: string, message?: string, callback?: () => void, height?: number, width?: number): PromiseLike<IModalDialogObj>;

    /**
     * Displays a wait screen dialog that does not have a Cancel button using the specified parameters.
     * @param title - The title of the wait screen dialog.
     * @param message - The message that is shown in the wait screen dialog.
     * @param height - The height of the wait screen dialog.
     * @param width - The width of the wait screen dialog.
     */
    showWaitScreenWithNoClose(title: string, message?: string, height?: number, width?: number): PromiseLike<IModalDialogObj>;
}

/**
 * Modal Dialog Object
 */
export interface IModalDialogObj {
    /**
     * Auto-sizes the modal dialog.
     */
    autoSize();

    /**
     * Auto-sizes the modal dialog.
     * Can't find documentation on this.
     */
    autoSizeSupressScrollbar(d: any);

    /**
     * Closes the most recently opened modal dialog with the specified dialog result.
     * @param dialogResult - One of the enumeration values that specifies the result of the modal dialog.
     */
    close(dialogResult?: number);

    /** Gets the allow maximized property. */
    get_allowMaximize(): boolean;

    /** Gets the modal dialog arguments. */
    get_args(): any;

    /** Gets the closed property. */
    get_closed(): boolean;

    /** Gets the modal dialog element. */
    get_dialogElement(): HTMLDivElement;

    /** Need to find documentation. */
    get_firstTabStop(): any;

    /** Gets the iframe element. */
    get_frameElement(): HTMLIFrameElement;

    /** Gets the html property. */
    get_html(): HTMLElement;

    /** True if the maximized/restore button is visible. */
    get_isMaximized(): boolean;

    /** Need to find documentation. */
    get_lastTabStop(): any;

    /** Gets the return value. */
    get_returnValue(): any;

    /** True if the close button is visible. */
    get_showClose(): boolean;

    /** Gets the title property. */
    get_title(): string;

    /** Gets the url property. */
    get_url(): string;

    /**
     * Hides the dialog
     */
    hide();

    /**
     * Sets the return value
     */
    set_returnValue(value: any);

    /**
     * Sets the title
     */
    set_title(title: string);

    /**
     * Sets the sub title of the close dialog
     */
    setSubTitle(value: string);

    /**
     * Sets the title of the close dialog
     */
    setTitle(value: string);

    /**
     * Shows the dialog
     */
    show();
}

/**
 * Notify
 */
export interface INotify {
    /**
     * Adds a notification to the page. By default, notifications appear for five seconds.
     * @param html - The message inside the notification.
     * @param sticky - Specifies whether the notification stays on the page until removed.
     * @returns A promise containing the ID of the notification that was added to the page.
     */
    addNotification(html: string, sticky?: boolean): PromiseLike<string>;

    /**
     * Method to ensure the core script is loaded
     */
    load(): PromiseLike<void>;

    /**
     * Removes the specified notification from the page.
     * @param id - The notification to remove from the page.
     */
    removeNotification(id: string);
}

/**
 * Script on Demand (SOD)
 */
export interface ISOD {
    /**
     * Executes the specified function in the specified file with the optional arguments.
     * @param key - The name of the file containing the JavaScript function.
     * @param functionName - The function to execute.
     * @param args - The optional arguments to the function.
     */
    execute(key: string, functionName: string, ...args);

    /**
     * Ensures that the specified file that contains the specified function is loaded and then runs the specified callback function.
     * @param key - The name of the file containing the function that is executed.
     * @param functionName - The name of the function that is executed.
     * @param fn - The function that is called once functionName has finished executing.
     */
    executeFunc(key: string, functionName: string, fn: Function);

    /**
     * Executes the specified function if the specified event has occurred; otherwise, adds the function to the pending job queue.
     * @param func - The function to execute.
     * @param eventName - The name of the event.
     */
    executeOrDelayUntilEventNotified(func: Function, eventName: string);

    /**
     * Executes the specified function if the file containing it is loaded; otherwise, adds it to the pending job queue.
     * @param func - The function to execute.
     * @param depScriptFileName - The name of the file containing the function.
     */
    executeOrDelayUntilScriptLoaded(func: Function, depScriptFileName: string);

    /**
     * Records the event and executes any jobs in the pending job queue that are waiting on the event.
     * @param eventName - The name of the event.
     */
    notifyEventAndExecuteWaitingJobs(eventName: string);

    /**
     * Records that the script file is loaded and executes any jobs in the pending job queue that are waiting for the script file to be loaded.
     * @param scriptFileName - The name of the script file.
     */
    notifyScriptLoadedAndExecuteWaitingJobs(scriptFileName: string);

    /**
     * Registers the specified file at the specified URL.
     * @param key - The name of the file to register.
     * @param url - The relative (to the server root) URL of the file.
     */
    registerSod(key: string, url: string);

    /**
     * Registers the specified file as a dependency of another file.
     * @param key - The name of the file to which the other file is dependent.
     * @param dep - The name of the dependent file.
     */
    registerSodDep(key: string, dep: string);
}

/**
 * Status
 */
export interface IStatus {
    /**
     * Adds a status message to the page.
     * @param title - The title of the status message.
     * @param html - The contents of the status message.
     * @param prepend - Specifies whether the status message will appear at the beginning of the list.
     */
    addStatus(title: string, html?: string, prepend?: boolean): PromiseLike<string>;

    /**
     * Appends text to an existing status message.
     * @param id - The ID of the status message to remove.
     * @param title - The title of the status message.
     * @param html - The contents of the status message.
     */
    appendStatus(id: string, title: string, html: string): PromiseLike<string>;

    /**
     * Method to ensure the core script is loaded
     */
    load(): PromiseLike<void>;

    /**
     * Removes all status messages from the page.
     * @param hide - Specifies that the status messages should be hidden.
     */
    removeAllStatus(hide?: boolean);

    /**
     * Removes the specified status message.
     * @param id - The ID of the status message to remove.
     */
    removeStatus(id: string);

    /**
     * Sets the priority color of the specified status message.
     * @param id - The ID of the status message to remove.
     * @param color - The color to set for the status message. The following table lists the values and their priority.
     */
    setStatusPriColor(id: string, color: string);

    /**
     * Updates the specified status message.
     * @param id - The ID of the status message to remove.
     * @param html - The contents of the status message.
     */
    updateStatus(id: string, html: string);
}