import { IRibbon } from "../../../@types/helper/sp";

/**
 * Ribbon
 */
export const Ribbon: IRibbon = {
    get exists(): boolean { return window["Ribbon"] != null && window["Ribbon"].PageState != null; },
    PageState: {
        Handlers: {
            get isApproveEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isApproveEnabled : null; },
            get isCancelApprovalEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isCancelApprovalEnabled : null; },
            get isCheckinEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isCheckinEnabled : null; },
            get isCheckoutEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isCheckoutEnabled : null; },
            get isDeleteEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isDeleteEnabled : null; },
            get isDiscardcheckoutEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isDiscardcheckoutEnabled : null; },
            get isDontSaveAndStopEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isDontSaveAndStopEnabled : null; },
            get isEditEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isEditEnabled : null; },
            get isInEditMode(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isInEditMode : null; },
            get isOverrideCheckoutEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isOverrideCheckoutEnabled : null; },
            get isPublishEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isPublishEnabled : null; },
            get isRejectEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isRejectEnabled : null; },
            get isSaveAndStopEditEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isSaveAndStopEditEnabled : null; },
            get isSaveEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isSaveEnabled : null; },
            get isSubmitForApprovalEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isSubmitForApprovalEnabled : null; },
            get isUnpublishEnabled(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.isUnpublishEnabled : null; },
            get onCancelButton(): (...args) => void { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.onCancelButton : null; },
            get onOkButton(): (...args) => void { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.onOkButton : null; },
            get showStateChangeDialog(): boolean { return window["Ribbon"] && window["Ribbon"].PageState && window["Ribbon"].PageState.Handlers ? window["Ribbon"].PageState.Handlers.showStateChangeDialog : null; }
        }
    }
}