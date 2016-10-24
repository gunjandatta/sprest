module $REST.Utils {
    /*********************************************************************************************************************************/
    // OData
    // Class for generating the OData query string.
    /*********************************************************************************************************************************/
    export class OData {
        /*********************************************************************************************************************************/
        // Global Variables
        /*********************************************************************************************************************************/
        private _expand?:Array<string>;
        private _filter?:Array<string>;
        private _orderBy?:Array<string>;
        private _select?:Array<string>;
        private _skip?:number;
        private _top?:number;

        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/

        // The class constructor
        constructor(oData:Types.ODataSettings) {
            // Default the Variables
            this._expand = oData && oData.Expand ? oData.Expand : [];
            this._filter = oData && oData.Filter ? oData.Filter : [];
            this._orderBy = oData && oData.OrderBy ? oData.OrderBy : [];
            this._select = oData && oData.Select ? oData.Select : [];
            this._skip = oData && oData.Skip ? oData.Skip : null;
            this._top = oData && oData.Top ? oData.Top : null;
        }

        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/

        // Expand
        get Expand():Array<string> { return this._expand; }
        set Expand(value: Array<string>) { this._expand = value; }

        // Filter
        get Filter():Array<string> { return this._filter; }
        set Filter(value: Array<string>) { this._filter = value; }

        // Order By
        get OrderBy():Array<string> { return this._orderBy; }
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
            values.push(this.getQSValue("$filter", this._filter));
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
        get Select():Array<string> { return this._select; }
        set Select(value: Array<string>) { this._select = value; }

        // Skip
        get Skip():number { return this._skip; }
        set Skip(value:number) { this._skip = value; }

        // Top
        get Top():number { return this._top; }
        set Top(value:number) { this._top = value; }

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Method to convert the array of strings to a query string value.
        private getQSValue(qsKey:string, keys?:Array<string>):string {
            // Return the query string
            return keys.length > 0 ? qsKey + "=" + keys.join(",") : "";
        }
    }
}