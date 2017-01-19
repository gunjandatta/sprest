var path = require("path");
var webpack = require("webpack");

module.exports = {
    // Entry point(s)
    entry: "./build/gd-sprest.js",

    // Output
    output: {
        // Filename
        filename: "gd-sprest.js",
        // Folder
        path: path.join(__dirname, "dist")
    },

    // Module
    module: {
        // Loaders
        loaders: [
            {
                // Target .js and .jsx files
                test: /.jsx?$/,
                // Use the "babel-loader" library
                loader: "babel-loader",
                // Exclude folders
                exclude: [/dist/, /images/, /node_modules/, /src/, /test/],
                // Presets
                query: {
                    presets: ["es2015"],
                    plugins: ["add-module-exports", "transform-class-properties"]
                }
            }
        ]
    }
}