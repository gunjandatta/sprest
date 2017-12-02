var path = require("path");
var webpack = require("webpack");

// Set the export
module.exports = {
    entry: "./build/gd-sprest.js",
    output: {
        filename: "gd-sprest.js",
        path: path.resolve(__dirname, "dist")
    }
}