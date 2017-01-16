var path = require("path");
var webpack = require("webpack");

module.exports = {
    // Entry point(s)
    entry: "./src/gd-sprest",

    // Output
    output: {
        // Filename
        filename: "gd-sprest.js",
        // Folder
        path: path.join(__dirname, "dist")
    },

    // Include the typescript files as resolvable extensions
    resolve: {
        extensions: ["", ".ts"]
    },

    // Module
    module: {
        // Loaders
        loaders: [
            {
                // Target .ts and .tsx files
                test: /.tsx?$/,
                // Use the "ts-loader" library
                loader: "ts-loader",
                // Exclude folders
                exclude: [/dist/, /node_modules/, /test/]
            }
        ]
    }
}