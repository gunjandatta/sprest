/**
 * Web Part
 */
export const WebPart: IWebPart;

/**
 * Web Part
 */
export interface IWebPart {
    /**
     * Creates an instance of a webpart.
     * @param props - The webpart properties.
     */
    new(props: IWebPartProps);

    /**
     * Adds a script editor webpart to a page.
     * @param url - The relative url of the page.
     * @param wpProps - The webpart properties.
     */
    addWebPartToPage(url: string, wpProps: IWebPartScriptEditor): PromiseLike<void>;

    /**
     * Creates an instance of a webpart.
     * @param props - The webpart properties.
     */
    create(props: IWebPartProps);

    /**
     * Determines if the page is being edited.
     */
    isEditMode(): boolean;
}

/**
 * The webpart configuration
 */
export interface IWebPartCfg {
    /** The webpart id */
    WebPartId?: string;
}

/**
 * The webpart information
 */
export interface IWebPartInfo {
    /** The configuration */
    cfg: IWebPartCfg;

    /** The element to render the webpart to */
    el: HTMLElement;

    /** The webpart id */
    wpId: string;
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
    onPostRender?: (wp: IWebPartInfo) => void;

    /** The render event triggered when the page is in 'Display' mode */
    onRenderDisplay?: (wp: IWebPartInfo) => any;

    /** The render event triggered when the page is in 'Edit' mode */
    onRenderEdit?: (wp: IWebPartInfo) => any;

    /** The target element id to render the webpart to */
    elementId: string;
}

/**
 * The script editor webpart properties
 */
export interface IWebPartScriptEditor {
    /** The webpart description. */
    description?: string;

    /** The webpart content. */
    content: string;

    /** The webpart index. */
    index?: number;

    /** The webpart title. */
    title?: string;

    /** The webpart zone. */
    zone?: string;
}