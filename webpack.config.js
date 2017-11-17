var path = require("path");
var webpack = require("webpack");
var dts = require("dts-bundle");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// Set the export
module.exports = function (env) {
    // Set the production flag
    var isProduction = env && env.isProd ? true : false;

    // See if we are in production
    if (isProduction) {
        // Bundle the header files
        dts.bundle({
            name: "gd-sprest",
            main: "build/gd-sprest.d.ts",
            out: "../dist/gd-sprest.d.ts"
        });
    }

    // Create the configuration
    let cfg = {
        // Target the output of the typescript compiler
        context: path.join(__dirname, "build"),

        // Entry point(s)
        entry: "./gd-sprest.js",

        // Output
        output: {
            // Filename
            filename: isProduction ? "gd-sprest.min.js" : "gd-sprest.js",
            // Folder
            path: path.join(__dirname, "dist")
        },

        // Module
        module: {
            // Rules
            rules: [
                {
                    // Target .js files
                    test: /.js$/,
                    // Exclude folders
                    exclude: [/dist/, /images/, /node_modules/, /src/, /test/],
                    // Define the compiler to use
                    use: {
                        // Use the "babel-loader" library
                        loader: "babel-loader",

                        // Options
                        options: {
                            // Compile JS to ES2015 standards
                            presets: ["es2015"]
                        }
                    }
                }
            ]
        }
    };

    // See if this is production
    if (isProduction) {
        // Plugins
        cfg.plugins = [
            // Minify the output
            new UglifyJsPlugin()
        ]
    }

    // Return the configuration
    return cfg;
}