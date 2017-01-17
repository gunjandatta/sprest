var path = require("path");
var webpack = require("webpack");

module.exports = {
    // Entry point(s)
    entry: "./src/gd-sprest.js",

    // Output
    output: {
        // Filename
        filename: "gd-sprest.js",
        // Folder
        path: path.join(__dirname, "dist")
    },

    // Include the typescript files as resolvable extensions
    resolve: {
        extensions: ["", ".js"]
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
                exclude: [/dist/, /node_modules/, /test/],
                // Presets
                query: {
                    presets: ["es2015"],
                    plugins: ["add-module-exports", "transform-class-properties"]
                }
            }
        ]
    }
}