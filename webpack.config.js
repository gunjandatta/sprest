var path = require("path");
var webpack = require("webpack");

// WebPack Configuration
module.exports = {
    entry: "./build/index.js",
    output: {
        filename: "gd-sprest.js",
        path: path.resolve(__dirname, "dist")
    }
}