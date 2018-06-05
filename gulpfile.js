var clean = require("gulp-clean");
var dts = require("dts-bundle");
var gulp = require("gulp");
var rename = require("gulp-rename");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
var webpack = require("webpack-stream");

// Build the solution
gulp.task("build", ["build-ts", "build-def"], () => {
    // Get the source files
    return gulp.src(["node_modules/core-js/es6/promise.js", "build/index.js"])
        // Compile using webpack
        .pipe(webpack({
            output: {
                filename: "gd-sprest.js"
            }
        }))
        // Output to the dist directory
        .pipe(gulp.dest("dist"));
});

// Build the definition file
gulp.task("build-def", ["build-ts"], () => {
    // Get the source files
    return dts.bundle({
        main: "build/index.d.ts",
        name: "gd-sprest",
        out: "../dist/gd-sprest.d.ts"
    });
});

// Convert the TypeScript to JavaScript
gulp.task("build-ts", ["clean"], () => {
    // Get the source files
    return gulp.src("src/**/*.ts")
        // Send them to the typescript compiler
        .pipe(ts.createProject("tsconfig.json")())
        // Output to the build directory
        .pipe(gulp.dest("build"));
});

// Clean
gulp.task("clean", () => {
    // Get the build and dist folders
    return gulp.src(["./build", "./dist"])
        // Delete them
        .pipe(clean());
});

// Default
gulp.task("default", ["build"], () => {
    // Get the source files
    return gulp.src(["dist/gd-sprest.js"])
        // Minify them
        .pipe(uglify())
        // Update the file name
        .pipe(rename({ suffix: ".min" }))
        // Save to the dist directory
        .pipe(gulp.dest("dist"));
});