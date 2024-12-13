import { IODataQuery } from "gd-sprest-def";

/**
 * OData
 */
export class OData {
    /*********************************************************************************************************************************/
    // Global Variables
    /*********************************************************************************************************************************/
    private _custom?: string;
    private _expand?: Array<string>;
    private _filter?: string;
    private _getAllItems?: boolean;
    private _orderBy?: Array<string>;
    private _search?: string;
    private _select?: Array<string>;
    private _skip?: number;
    private _top?: number;

    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/

    // The class constructor
    constructor(oData: IODataQuery) {
        // Default the Variables
        this._custom = oData && oData.Custom ? oData.Custom : null;
        this._expand = oData && oData.Expand ? oData.Expand : [];
        this._filter = oData && oData.Filter ? oData.Filter : null;
        this._getAllItems = oData && oData.GetAllItems ? oData.GetAllItems : false;
        this._orderBy = oData && oData.OrderBy ? oData.OrderBy : [];
        this._search = oData && oData.Search ? oData.Search : null;
        this._select = oData && oData.Select ? oData.Select : [];
        this._skip = oData && oData.Skip ? oData.Skip : null;
        this._top = oData && oData.Top ? oData.Top : null;
    }

    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/

    // Custom
    get Custom(): string { return this._custom; }
    set Custom(value: string) { this._custom = value; }

    // Expand
    get Expand(): Array<string> { return this._expand; }
    set Expand(value: Array<string>) { this._expand = value; }

    // Filter
    get Filter(): string { return this._filter; }
    set Filter(value: string) { this._filter = value; }

    // Flag to get all items
    get GetAllItems(): boolean { return this._getAllItems; }
    set GetAllItems(value: boolean) { this._getAllItems = value; }

    // Order By
    get OrderBy(): Array<string> { return this._orderBy; }
    set OrderBy(value: Array<string>) { this._orderBy = value; }

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
        this._custom ? values.push(this._custom) : null;

        // Parse the values
        for (let value of values) {
            // Ensure a value exists
            if (value && value != "") {
                // Append the query string value
                qs += (qs == "" ? "" : "&") + value;
            }
        }

        // Return the query string
        return qs;
    }

    // Search
    get Search(): string { return this._search; }
    set Search(value: string) { this._search = value; }

    // Select
    get Select(): Array<string> { return this._select; }
    set Select(value: Array<string>) { this._select = value; }

    // Skip
    get Skip(): number { return this._skip; }
    set Skip(value: number) { this._skip = value; }

    // Top
    get Top(): number { return this._top; }
    set Top(value: number) { this._top = value; }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Method to convert the array of strings to a query string value.
    private getQSValue(qsKey: string, keys?: Array<string>) {
        // Return the query string
        return keys.length > 0 ? qsKey + "=" + keys.join(",") : "";
    }
}