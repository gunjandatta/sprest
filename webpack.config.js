var path = require("path");
var webpack = require("webpack");

module.exports = function(env) {
    // Is production
    var isProduction = env && env.isProd;

    // Return the configuration
    return {
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
        },

        // Plugins
        plugins: [
            // Minify the output
            new webpack.optimize.UglifyJsPlugin({
                compress: isProduction
            })
        ]
    };
}