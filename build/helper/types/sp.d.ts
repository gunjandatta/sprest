/******************************************
 * SharePoint Core Scripts
 ******************************************/
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
    dialogReturnValueCallback?: (dialogResult: number, returnVal: any) => void;
    /** An integer value that specifies the height of the dialog. If height is not specified, the height of the dialog is autosized by default. If autosize is false, the dialog height is set to 576 pixels. */
    height?: number;
    /** An html element to display in the dialog. If both html and url are specified, url takes precedence. Either url or html must be specified. */
    html?: HTMLElement;
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
     * Closes the most recently opened modal dialog with the specified dialog result.
     * @param dialogResult - One of the enumeration values that specifies the result of the modal dialog.
     */
    close(dialogResult?: number): any;
    /**
     * Closes the most recently opened modal dialog with the specified dialog result and return value.
     * @param dialogResult - One of the enumeration values that specifies the result of the modal dialog.
     * @param returnVal - The return value of the modal dialog.
     */
    commonModalDialogClose(dialogResult?: number, returnVal?: any): any;
    /**
     * Displays a modal dialog with the specified URL, options, callback function, and arguments.
     * @param url - The URL of the page to be shown in the modal dialog.
     * @param options - The options to create the modal dialog.
     * @param callback - The callback function that runs when the modal dialog is closed.
     * @param args - The arguments to the modal dialog.
     */
    commonModalDialogOpen(url: string, options?: IDialogOptions, callback?: (dialogResult?: number, returnVal?: any) => void, args?: any): any;
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
    OpenPopUpPage(url: string, callback?: (dialogResult?: number, returnVal?: any) => void, width?: number, height?: number): any;
    /**
     * Refreshes the parent page of the modal dialog when the dialog is closed by clicking OK.
     * @param dialogResult - The result of the modal dialog.
     */
    RefreshPage(dialogResult?: number): any;
    /**
     * Displays a modal dialog with specified dialog options.
     * @param options - The options to create the modal dialog.
     */
    showModalDialog(options: IDialogOptions): any;
    /**
     * Displays a modal dialog using the page at the specified URL.
     * @param url - The URL of the page to be shown in the modal dialog.
     */
    ShowPopupDialog(url: string): any;
    /**
     * Displays a wait screen dialog that has a Cancel button using the specified parameters.
     * @param title - The title of the wait screen dialog.
     * @param message - The message that is shown in the wait screen dialog.
     * @param callback - The callback function that runs when the wait screen dialog is closed.
     * @param height - The height of the wait screen dialog.
     * @param width - The width of the wait screen dialog.
     */
    showWaitScreenSize(title: string, message: string, callback: () => void, height: number, width: number): any;
    /**
     * Displays a wait screen dialog that does not have a Cancel button using the specified parameters.
     * @param title - The title of the wait screen dialog.
     * @param message - The message that is shown in the wait screen dialog.
     * @param height - The height of the wait screen dialog.
     * @param width - The width of the wait screen dialog.
     */
    showWaitScreenWithNoClose(title: string, message: string, height: number, width: number): any;
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
    removeNotification(id: string): any;
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
    removeAllStatus(hide?: boolean): any;
    /**
     * Removes the specified status message.
     * @param id - The ID of the status message to remove.
     */
    removeStatus(id: string): any;
    /**
     * Sets the priority color of the specified status message.
     * @param id - The ID of the status message to remove.
     * @param color - The color to set for the status message. The following table lists the values and their priority.
     */
    setStatusPriColor(id: string, color: string): any;
    /**
     * Updates the specified status message.
     * @param id - The ID of the status message to remove.
     * @param html - The contents of the status message.
     */
    updateStatus(id: string, html: string): any;
}
