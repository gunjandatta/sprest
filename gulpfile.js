var gulp = require("gulp");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

// Build
gulp.task("build", function() {
    // Log
    console.log("Minifying the output.");

    // Bundle and minify the js files
    return gulp.src("./dist/gd-sprest.js")
        .pipe(gulp.dest("dist"))
        .pipe(rename("gd-sprest.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

// Create the definition file
gulp.task("createDefinitionFile", function() {
    // Log
    console.log("Creating the definition file.");

    // Create the definition file
    return gulp.src(["./src/types/sptypes.ts", "./src/definitions/*.d.ts"])
        .pipe(concat("gd-sprest.d.ts"))
        .pipe(gulp.dest("dist"));
});

// Main
gulp.task("default", ["build", "createDefinitionFile"]);
