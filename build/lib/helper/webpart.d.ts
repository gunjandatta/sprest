import { Types } from "../../mapper";
/**
 * Web Part
 */
export interface IWebPart {
    /**
     * Creates an instance of a webpart.
     * @param props - The webpart properties.
     */
    new (props: Types.Helper.WebPart.IWebPartProps): any;
}
export declare const WebPart: IWebPart;
