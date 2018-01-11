import { Types } from "../../mapper";
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
    onPostRender?: (wp: Types.Helper.WebPart.IWebPart) => void;
    /** The render event triggered when the page is in 'Display' mode */
    onRenderDisplay?: (wp: Types.Helper.WebPart.IWebPart) => any;
    /** The render event triggered when the page is in 'Edit' mode */
    onRenderEdit?: (wp: Types.Helper.WebPart.IWebPart) => any;
    /** The target element id to render the webpart to */
    elementId: string;
}
/**
 * Web Part
 */
export interface IWebPart {
    /**
     * Creates an instance of a webpart.
     * @param props - The webpart properties.
     */
    new (props: IWebPartProps): any;
}
export declare const WebPart: IWebPart;
