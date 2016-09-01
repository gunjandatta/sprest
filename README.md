# SharePoint 2013/Online REST Library
An easy way to develop against the SharePoint REST api.

## Benefits
* Constructors similar to the SSOM object model.
* Generates the REST api url and formats it for app webs automatically.
* Global flag to execute requests on creation, to reduce the number of calls to the server.
* Parent property for easier development.
* Switch between asynchronous and synchronous requests by the object's property.

## Examples
### Content Types
**List**
```
new $REST.ContentTypes("shared documents")
```

**Web**
```
new $REST.ContentTypes()
```