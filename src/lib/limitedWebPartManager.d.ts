/**
 * Limited Web Part Manager
 */
interface ILimitedWebPartManager extends IBase {
    /**
     * Gets a webpart by its id.
     * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
     */
    WebParts(id);
}
