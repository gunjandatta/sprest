import {
    Helper,
    List
} from "../build";

(new List(""))
    .Items()
    .query({
        Top:1
    })
    .execute(items => {
        items.next().execute(nextSet => {
        });
    });