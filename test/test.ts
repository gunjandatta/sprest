/// <reference path="../dist/sprest.d.ts" />

(new $REST.Web())
    .Lists("Dev")
    .Fields()
    .query({
        Filter: "Title eq 'Title'"
    })
    .execute();