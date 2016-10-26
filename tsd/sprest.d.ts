// Type definitions for gd-sprest
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/***************************************************************************************************
MIT License

Copyright (c) 2016 Dattabase, LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************************************/

/***********************************************************************************************
 * REST Classes
 **********************************************************************************************/
declare module $REST {
    /***********************************************************************************************
     * Global Variables
     **********************************************************************************************/

    /**
     * Flag to execute requests against the host web. This is relevent to the app web only, and defaults to the SPHostUrl querystring value.
     */
    var DefaultRequestToHostWebFl:boolean;

    /**
     * Flag to execute the request by default on creation of an object.
     */
    var ExecuteOnCreationFl:boolean;

    /** Email */
    var Email:Types.IEmail;

    /** List */
    var List:Types.IList;
    var List_Async:Types.IList;
    
    /** Site */
    var Site:Types.ISite;
    var Site_Async:Types.ISite;
    
    /** Web */
    var Web:Types.IWeb;
    var Web_Async:Types.IWeb;
}
