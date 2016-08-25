var gulp = require("gulp");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

// Task
gulp.task("default", function() {
    // Log
    console.log("Bundling and minifying the js files.")

    // Bundle and minify the js files
    return gulp.src("js/*.js")
        .pipe(concat("sprest.js"))
        .pipe(gulp.dest("lib"))
        .pipe(rename("sprest.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("lib"));
});