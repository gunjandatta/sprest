const path = require("path");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    return {
        entry: [
            "core-js/es6/promise.js",
            "./build/index.js"
        ],
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-sprest" + (isDev ? "" : ".min") + ".js"
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"]
                            }
                        }
                    ]
                }
            ]
        }
    };
}