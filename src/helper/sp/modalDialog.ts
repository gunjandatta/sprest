import { IDialogOptions, IModalDialog, IModalDialogObj } from "../../../@types/helper";

/**
 * Modal Dialog
 */
export const ModalDialog: IModalDialog = (() => {
    // Adds the custom methods to the dialog
    let getDialog = (dialog: IModalDialogObj): IModalDialogObj => {
        // Shows the dialog
        dialog.show = () => {
            // Get the modal dialog element
            let el = dialog.get_dialogElement() as HTMLDivElement;
            if (el) {
                // Show the dialog
                el.style.display = "";
            }

            // Get the iframe element
            el = dialog.get_frameElement() as HTMLIFrameElement;
            if (el) {
                // Show the dialog
                el.style.display = "";
            }
        }

        // Updates the title
        dialog.setTitle = (value: string) => {
            // Get the title element
            let elDlg = dialog.get_dialogElement();
            let elTitle = elDlg ? elDlg.querySelector(".ms-dlgLoadingTextDiv .ms-core-pageTitle") : null;
            if (elTitle) {
                // Update the title
                elTitle.innerHTML = value;
            }
        }

        // Updates the sub-title
        dialog.setSubTitle = (value: string) => {
            // Get the sub-title element
            let elDlg = dialog.get_dialogElement();
            let elSubTitle = elDlg ? elDlg.querySelector(".ms-dlgLoadingTextDiv ~ div") : null;
            if (elSubTitle) {
                // Update the sub-title
                elSubTitle.innerHTML = value;
            }
        }

        // Return the dialog
        return dialog;
    }

    // Return the modal dialog
    return {
        // Close the dialog
        commonModalDialogClose: (dialogResult?: number, returnVal?: any) => {
            // Load the library and call the method
            ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.commonModalDialogClose(dialogResult, returnVal); });
        },

        // Open a dialog
        commonModalDialogOpen: (url: string, options?: IDialogOptions, callback?: (dialogResult?: number, returnVal?: any) => void, args?: any) => {
            // Load the library and call the method
            ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.commonModalDialogOpen(url, options, callback, args); });
        },

        // Method to ensure the core library is loaded
        load: (): PromiseLike<void> => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // See if the class exists
                if (window["SP"] && window["SP"].UI && window["SP"].UI.ModalDialog) { resolve(); }
                else {
                    // Wait for the core script to be loaded
                    window["SP"].SOD.executeFunc("sp.js", "SP.UI.ModalDialog", () => {
                        // Resolve the promise
                        resolve();
                    });
                }
            });
        },

        // Opens a pop-up page
        OpenPopUpPage: (url: string, callback?: (dialogResult?: number, returnVal?: any) => void, width?: number, height?: number) => {
            // Load the library and call the method
            ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.OpenPopUpPage(url, callback, width, height); });
        },

        // Refreshes the page
        RefreshPage: (dialogResult?: number) => {
            // Load the library and call the method
            ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.RefreshPage(dialogResult); });
        },

        // Shows a modal dialog
        showModalDialog: (options: IDialogOptions): PromiseLike<IModalDialogObj> => {
            // Return a promise
            return new Promise((resolve) => {
                // Load the library and call the method
                ModalDialog.load().then(() => {
                    // Resolve the promise
                    resolve(getDialog(window["SP"].UI.ModalDialog.showModalDialog(options)));
                });
            });
        },

        // Shows a pop-up dialog
        ShowPopupDialog: (url: string) => {
            // Load the library and call the method
            ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.ShowPopupDialog(url); });
        },

        // Shows a wait screen
        showWaitScreenSize: (title: string, message?: string, callback?: () => void, height?: number, width?: number): PromiseLike<IModalDialogObj> => {
            // Return a promise
            return new Promise((resolve) => {
                // Load the library and call the method
                ModalDialog.load().then(() => {
                    // Resolve the promise
                    resolve(getDialog(window["SP"].UI.ModalDialog.showWaitScreenSize(title, message, callback, height, width)));
                });
            });
        },

        // Shows a wait screen w/ no close button
        showWaitScreenWithNoClose: (title: string, message?: string, height?: number, width?: number): PromiseLike<IModalDialogObj> => {
            // Return a promise
            return new Promise((resolve) => {
                // Load the library and call the method
                ModalDialog.load().then(() => {
                    // Resolve the promise
                    resolve(getDialog(window["SP"].UI.ModalDialog.showWaitScreenWithNoClose(title, message, height, width)));
                });
            });
        }
    };
})();