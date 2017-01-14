var path = require("path");
var webpack = require("webpack");

module.exports = {
    // Entry point(s)
    entry: "./src",

    // Output
    output: {
        // Filename
        filename: "gd-sprest.js",
        // Folder
        path: path.join(__dirname, "dist")
    },

    // Include the typescript files as resolvable extensions
    resolve: {
        extensions: [".ts"]
    },

    // Module
    module: {
        // Loaders
        loaders: [
            {
                // Target .js and .jsx files
                test: /.tsx?$/,
                // Use the "babel-loader" library
                loader: "ts-loader",
                // Exclude the npm libraries
                exclude: [/dist/, /node_modules/, /test/]
            }
        ]
    }
}