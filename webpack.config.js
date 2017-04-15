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
                // Exclude folders
                exclude: [/dist/, /images/, /node_modules/, /src/, /test/],
                // Define the compiler to use
                use: {
                    // Use the "babel-loader" library
                    loader: "babel-loader",

                    // Options
                    options: {
                        presets: ["es2015"],
                        plugins: ["add-module-exports", "transform-class-properties"]
                    }
                }
            }
        ]
    }
}