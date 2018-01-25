import {
    $REST, Types, Helper
} from "../src";

let i:Helper.Types.JSLink;


// Get the navigation menu
$REST.Navigation().MenuState().execute(menu => {
    // Parse the nodes
    let nodes = menu.Nodes.results;
    for (let i = 0; i < nodes.length; i++) {
    }
});