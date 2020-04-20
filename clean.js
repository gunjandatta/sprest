var fs = require('fs');

// Copy a directory
function copyDirectory(src, target) {
    // Delete the target
    deleteDirectory(target);

    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Create the directory
        fs.mkdirSync(target);

        // Get each item in the directory
        fs.readdirSync(src).forEach(function (item) {
            var srcPath = src + "/" + item;
            var targetPath = target + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(srcPath).isDirectory()) {
                // Copy the folder recursively
                copyDirectory(srcPath, targetPath);
            } else {
                // Copy the file
                fs.copyFileSync(srcPath, targetPath);
            }
        });
    }
}

// Deletes a directory
function deleteDirectory(src) {
    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(src).forEach(function (item) {
            var srcPath = src + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(srcPath).isDirectory()) {
                // Delete the folder recursively
                deleteDirectory(srcPath);
            } else {
                // Delete the file
                fs.unlinkSync(srcPath);
            }
        });

        // Delete the directory
        fs.rmdirSync(src);
    }
};

// Log
console.log("Cleaning the files...");

// Delete the folder
deleteDirectory("./build");

// Log
console.log("Copying the library definitions...");

// Copy
copyDirectory("./node_modules/gd-sprest-def/lib", "./lib")

// Log
console.log("Successfully cleaned the library");