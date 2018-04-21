import {
    Helper,
    List
} from "../build";

Helper.SPConfig({
    ListCfg: [{
        ContentTypes: [
            { Name: "My Item" },
            { Name: "My Document", ParentName: "Document" }
        ],
        ListInformation: {
            BaseTemplate: 100,
            Title: "CT Demo"
        }
    }]
}).install();

(new List(""))
    .Items()
    .query({
        Top:1
    })
    .execute(items => {
        items.next().execute(nextSet => {
        });
    });