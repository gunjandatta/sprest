/**
 * WebPart
 */
export interface IWebPart {
    /** The configuration */
    cfg: IWebPartCfg;
    /** The element to render the webpart to */
    el: HTMLElement;
    /** The webpart id */
    wpId: string;
}
/**
 * WebPart Configuration
 */
export interface IWebPartCfg {
    /** The webpart id */
    WebPartId: string;
}
/**
 * The webpart properties
 */
export interface IWebPartProps {
    /** The optional configuration element id */
    cfgElementId?: string;
    /** The optional help link properties */
    helpProps?: {
        /** The link title */
        title?: string;
        /** The link url */
        url: string;
    };
    /** The post render event */
    onPostRender?: (wp: IWebPart) => void;
    /** The render event triggered when the page is in 'Display' mode */
    onRenderDisplay?: (wp: IWebPart) => any;
    /** The render event triggered when the page is in 'Edit' mode */
    onRenderEdit?: (wp: IWebPart) => any;
    /** The target element id to render the webpart to */
    elementId: string;
}
/**
 * Web Part
 */
export declare class WebPart {
    private _props;
    private _wp;
    /**
     * Constructor
     * @param props - The webpart properties.
     */
    constructor(props: IWebPartProps);
    /**
     * Method to add the help link to a script part editor.
     * @wpId - The webpart id.
     */
    private addHelpLink;
    /**
     * Method to get the webpart
     */
    private getWebPart(wpId);
    /**
     * Method to get the webpart id for a specified element
     * @param el - The target element.
     */
    private getWebPartId(el);
    /**
     * Method to get the webpart information
     */
    private getWebPartInfo;
    /**
     * Method to detect if a page is being edited
     */
    private isEditMode();
    /**
     * Method to render the webpart
     */
    private render;
}
