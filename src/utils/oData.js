/*********************************************************************************************************************************/
// OData
// Class for generating the OData query string.
/*********************************************************************************************************************************/
export class OData {
    /*********************************************************************************************************************************/
    // Global Variables
    /*********************************************************************************************************************************/
    _expand;
    _filter;
    _getAllItems;
    _orderBy;
    _select;
    _skip;
    _top;

    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/

    // The class constructor
    constructor(oData) {
        // Default the Variables
        this._expand = oData && oData.Expand ? oData.Expand : [];
        this._filter = oData && oData.Filter ? oData.Filter : null;
        this._getAllItems = oData && oData.GetAllItems ? oData.GetAllItems : false;
        this._orderBy = oData && oData.OrderBy ? oData.OrderBy : [];
        this._select = oData && oData.Select ? oData.Select : [];
        this._skip = oData && oData.Skip ? oData.Skip : null;
        this._top = oData && oData.Top ? oData.Top : null;
    }

    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/

    // Expand
    get Expand() { return this._expand; }
    set Expand(value) { this._expand = value; }

    // Filter
    get Filter() { return this._filter; }
    set Filter(value) { this._filter = value; }

    // Flag to get all items
    get GetAllItems() { return this._getAllItems; }
    set GetAllItems(value) { this._getAllItems = value; }

    // Order By
    get OrderBy() { return this._orderBy; }
    set OrderBy(value) { this._orderBy = value; }

    // Query String
    get QueryString() {
        let qs = "";
        let values = [];

        // Get the query string values for the properties
        values.push(this.getQSValue("$select", this._select));
        values.push(this.getQSValue("$orderby", this._orderBy));
        this._top ? values.push("$top=" + this._top) : null;
        this._skip ? values.push("$skip=" + this._skip) : null;
        this._filter ? values.push("$filter=" + this._filter) : null;
        values.push(this.getQSValue("$expand", this._expand));

        // Parse the values
        for(let value of values) {
            // Ensure a value exists
            if(value && value != "") {
                // Append the query string value
                qs += (qs == "" ? "" : "&") + value;
            }
        }

        // Return the query string
        return qs;
    }

    // Select
    get Select() { return this._select; }
    set Select(value) { this._select = value; }

    // Skip
    get Skip() { return this._skip; }
    set Skip(value) { this._skip = value; }

    // Top
    get Top() { return this._top; }
    set Top(value) { this._top = value; }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Method to convert the array of strings to a query string value.
    getQSValue(qsKey, keys) {
        // Return the query string
        return keys.length > 0 ? qsKey + "=" + keys.join(",") : "";
    }
}