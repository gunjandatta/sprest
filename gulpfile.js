var gulp = require("gulp");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

// Build
gulp.task("build", function() {
    // Log
    console.log("Bundling and minifying the project.");

    // Bundle and minify the js files
    return gulp.src(["js/*.js", "js/types/*.js", "js/utils/*.js", "js/lib/*.js"])
        .pipe(concat("gd-sprest.js"))
        .pipe(gulp.dest("dist"))
        .pipe(rename("gd-sprest.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

// Create the definition file
gulp.task("createDefinitionFile", function() {
    // Log
    console.log("Creating the definition file.");

    // Copy the files
    return gulp.src(["tsd/header.d.ts", "src/definitions/*.d.ts", "tsd/footer.d.ts"])
        .pipe(concat("gd-sprest.d.ts"))
        .pipe(gulp.dest("dist"));
});

// Copy the files to the test directory
gulp.task("updateTestDir", function() {
    // Log
    console.log("Updating the test directory.");

    // Copy the files to the test directory
    return gulp.src(["dist/*.js"])
        .pipe(gulp.dest("test"));
});

// Main
gulp.task("default", ["build", "createDefinitionFile", "updateTestDir"]);
