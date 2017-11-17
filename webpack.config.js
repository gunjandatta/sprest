var dts = require("dts-bundle");
var path = require("path");
var webpack = require("webpack");
// Set the export
module.exports = env => {
    let isProd = env && env.production;

    // See if this is the production environment
    if(isProd) {
        // Bundle the header file
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
            filename: isProd ? "gd-sprest.min.js" : "gd-sprest.js",
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

    // Return the configuration
    return cfg;
}